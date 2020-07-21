//a safe way to get a browser-specific animation frame
//if it does not exist a fake is made using setTimeout
window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     || 
              function(/* function */ callback, /* DOMElement */ element){
                window.setTimeout(callback, 1000 / 60);
              };
})();

//identify that we will be using a 2D context in our canvas
var canvas = document.getElementById("fallingTagsCanvas");
var debugCanvas = document.getElementById("debugCanvas");
var ctx = canvas.getContext("2d");
var stage = new createjs.Stage(canvas);
stage.snapPixelsEnabled = true;

//set up the easel js ticker
createjs.Ticker.setFPS(30);
createjs.Ticker.useRAF = true;
createjs.Ticker.addEventListener("tick", onTick);

var queue = new createjs.LoadQueue();

//ingredients array
var ingredients = [];

//a scale multiplier to change meters to pixels for physics
var SCALE = 30;
  
var world;
function onTick(){};

function addTag(x, y, label) {
    var text = new createjs.Text(label, "16px Ubuntu", "#000");

    var width = text.getBounds().width;
    
    text.x = -width/2;
    text.y = -7;

    width += 40;

    var g = new createjs.Graphics();
    g.setStrokeStyle(1);
    g.beginStroke(createjs.Graphics.getRGB(0,0,0));
    g.beginFill(createjs.Graphics.getRGB(239,239,239));
    g.drawRect(-width/2, -16, width, 32);

    var tagbox = new createjs.Shape(g);
    var container = new createjs.Container();
    container.x = x;
    container.y = y;

    container.addChild(tagbox, text);
    tagbox.mouseEnabled = false;
    tagbox.snapToPixel = true;
    stage.addChild(container);
    //stage.update();//make bacon appear on screen

    //make a corresponding object in box2d for physics info
    return [container, width]
};

//accepts a Box2D rigid body, and a display object from Easel js
var actorObject = function(body, skin){
  this.body = body;
  this.skin = skin;
  this.update = function(){
    this.skin.rotation = this.body.GetAngle() * (180 / Math.PI);
	  this.skin.x = this.body.GetWorldCenter().x * SCALE;
	  this.skin.y = this.body.GetWorldCenter().y * SCALE;
  }
  //add to the collection of display objects to update with easel
  ingredients.push(this);
}

var box2d = (function() {
    stage.removeAllChildren();
    ingredients = [];
    var b2Vec2 = Box2D.Common.Math.b2Vec2
    , b2BodyDef = Box2D.Dynamics.b2BodyDef
    , b2Body = Box2D.Dynamics.b2Body
    , b2FixtureDef = Box2D.Dynamics.b2FixtureDef
    , b2Fixture = Box2D.Dynamics.b2Fixture
    , b2World = Box2D.Dynamics.b2World
    , b2MassData = Box2D.Collision.Shapes.b2MassData
    , b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape
    , b2CircleShape = Box2D.Collision.Shapes.b2CircleShape
    , b2DebugDraw = Box2D.Dynamics.b2DebugDraw
    ;

    window.b2Body = b2Body
    window.b2Vec2 = b2Vec2

    world = new b2World(
        new b2Vec2(0, 10),    //gravity
        true                 //allow sleep
    );

    var fixDef = new b2FixtureDef;
    fixDef.density = 1.0;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.2;

    var bodyDef = new b2BodyDef;
    function createBoundary(bodyDef, x, y, w, h, type, stroke) {

        //create ground
        bodyDef.type = b2Body.b2_kinematicBody;

        // positions the center of the object (not upper left!)
        bodyDef.position.x = x / SCALE;
        bodyDef.position.y = y / SCALE;

        fixDef.shape = new b2PolygonShape;

        // half width, half height. eg actual height here is 1 unit
        fixDef.shape.SetAsBox((w / SCALE), (h/SCALE));
        var bod = world.CreateBody(bodyDef);
        bod.CreateFixture(fixDef);
        
        if (stroke) {
            var g = new createjs.Graphics();
            g.setStrokeStyle(1);
            g.beginFill(createjs.Graphics.getRGB(0, 0, 0));
            g.drawRect(-canvas.width/2, -200, canvas.width *2, 0.8);

            var tagbox = new createjs.Shape(g);
            stage.addChild(tagbox)
         
            var actor = new actorObject(bod, tagbox);
        }

        return bod;
    }
    window.floor = createBoundary(bodyDef, 0, 140, canvas.width, 200, b2Body.b2_kinematicBody, true);
    // left wall
    createBoundary(bodyDef, -9, 0, 10, canvas.height, b2Body.b2_staticBody, false);

    // static floor
    createBoundary(bodyDef, 0, canvas.height + 40, canvas.width, 40, b2Body.b2_staticBody, false);
    
    // right wall
    createBoundary(bodyDef, canvas.width + 7, 0, 10, canvas.height, b2Body.b2_staticBody, false);

    //create some objects
    bodyDef.type = b2Body.b2_dynamicBody;
    tagLabels = ["x86 asm", "html/css/js", "C", "C++", "Java", "C#", "Unity", "Google Flutter", "Python", "Docker", "Browser ext.", "Qt", "OpenCV", "iOS", "Android", "Bootloader", "Dash", "Plotly", "NumPy", "Pandas", "RPi", "Photoshop", "Illustrator", "Maya", "UE4", "WinForms", "Bash", "Sockets", "UI/UX", "ZBrush", "Firebase", "Google Cloud", "PHP", "JQuery", "Jupyter", "Solidworks"]
    for(var i = 0; i < tagLabels.length; ++i) {
        var baconTag = addTag(tempX,tempY, tagLabels[i]);
        var width = baconTag[1]

        fixDef.shape = new b2PolygonShape;
        fixDef.shape.SetAsBox((width / 2) / SCALE, 0.55);
        var tempX = Math.random() * (canvas.width / SCALE);
        var tempY = Math.random() * 10 - canvas.height / 2 / SCALE;
        bodyDef.position.x = tempX;
        bodyDef.position.y = tempY;
        var bod = world.CreateBody(bodyDef);
        bod.CreateFixture(fixDef);

        var actor = new actorObject(bod, baconTag[0]);
    }

    //setup debug draw
    var debugDraw = new b2DebugDraw();
    debugDraw.SetSprite(document.getElementById("debugCanvas").getContext("2d"));
    debugDraw.SetDrawScale(SCALE);
    debugDraw.SetFillAlpha(0.3);
    debugDraw.SetLineThickness(1.0);
    debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
    world.SetDebugDraw(debugDraw);

    setTimeout(()=>{
        $("#fallingTagsCanvas").css("opacity", "0");
        $("#fallingTagsCanvas").css("transition-duration", "1s");
        setTimeout(()=>{
            $("#fallingTagsCanvas").css("opacity", "1");
            box2d();
        }, 1000);
    }, 13000);
});

var floorHeight = 0;
function setFloorHeight(p) {
    floorHeight = (canvas.height * p + 500) / SCALE;
}

function update() {
    world.Step(
        1 / 60, // frame-rate
        10,     // velocity iterations
        10      // position iterations
    );
    world.DrawDebugData();
    world.ClearForces();

    window.floor.SetPositionAndAngle(window.b2Vec2.Make(0, floorHeight), 0);

    for(var i=0, l=ingredients.length; i<l; i++) {
        ingredients[i].update();
    }
    stage.update();

    requestAnimFrame(update);
};

$(document).on("scroll", () => {
    var s = window.scrollY;
    var p = -($("#fallingTagsCanvas").offset().top - $(window).scrollTop() - window.innerHeight / 2);
    if (p < 0) p = 0;
    if (p > canvas.height) p = canvas.height; 
    p /= canvas.height
    setFloorHeight(p)
    
    console.log(p);
});

box2d();
requestAnimFrame(update);
