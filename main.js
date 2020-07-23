AOS.init({
    duration: 1200,    
    debounceDelay: 50,
    once: false,
    mirror: true,
});

window.onload = function() {
    window.scrollTo(0, 0);
}

var softProjData = [
     {
        "title": "The OMo-X",
        "desc": "You like night vision? computer vision? 3D-printed wearable monocles? You got it here. Check out my 10th grade school project.",
        "url": "https://github.com/travisjayday/omo-x",
        "tags": {
            "items": ["C++", "QT", "RPi", "OpenCV", "Sockets"]
        }       
    },
    {
        "title": "FlappyOS",
        "desc": "A portable Intel x86 bootloader that plays a version of Flappy Bird",
        "url": "https://github.com/travisjayday/FlappyOS",
        "tags": {
            "items": ["x86 asm", "VGA BIOS"]
        }       
    },
    {
        "title": "MIT CATSOOP XSS Exploit",
        "desc": "Container orchestration? Websockets? Python servers? Spoofing MIT's online learning platform for fun and profit",
        "url": "https://github.com/travisjayday/catsoop-spoofer",
        "tags": {
            "items": ["Python", "Websockets", "HTML/CSS/JS", "Docker", "Firefox extension", "Bash"]
        }       
    },
    {
    "title": "MiMix 3 Logo Patcher",
    "desc": "Patching OEM boot logos with Python for Xiaomi MiMix3's",
    "url": "https://github.com/travisjayday/logo-patcher-mix3",
    "tags": {
        "items": ["Python", "ADB"]
        }       
    }
]

var appProjData = [
{
    "title": "MIT Print",
    "desc": "A mobile printing solution for MIT Students. No longer must you take out your laptop to print to campus printers.",
    "icon-url": "https://lh3.googleusercontent.com/FOVNI1yRFvWt6KaAqZj3_TZE66IelKS7POPxCpPuzhv4hnvCHPTLgjF3d0fDjOHdajJA=s180",
    "url": "https://play.google.com/store/apps/details?id=com.tzgames.mitprint",
    "tags": {
        "items": ["Google Flutter", "Java"],
        "buttons": [
            {
                "icon": "assets/github.svg",
                "onclick": "openTab('https://github.com/travisjayday/mitprint')",
                "label": "GitHub"
            },
            {
                "icon": "assets/playicon.svg",
                "label": "Google Play"
            }
        ]

    }       
},
{
    "title": "NotifyWho",
    "desc": "A WhatsApp extension to create and assign custom ringtones and vibration patterns to specific contacts.",
    "icon-url": "https://lh3.googleusercontent.com/E4arxAeEN2kzShVBJqWuQLKPTXXeB9P1mBfKQ6L9px_srcKc1b2pgxVYN62kHk1QRc8=s180",
    "url": "https://play.google.com/store/apps/details?id=com.tzgames.ringer",
    "tags": {
        "items": ["Java", "Android", "Gradle"],
        "buttons": [
            {
                "icon": "assets/github.svg",
                "onclick": "openTab('https://github.com/travisjayday/NotifyWho')",
                "label": "GitHub"
            },
            {
                "icon": "assets/playicon.svg",
                "label": "Google Play"
            }
        ]
    }       
},
{
    "title": "MouseDroid",
    "desc": "Gyroscopic remote mouse input for your PC. Rotate your phone to move your mouse like a Wii Remote.",
    "icon-url": "https://lh3.googleusercontent.com/fGgvATTt0NwWea9FqZ-_ayr5HyauaIcMBsAUR1V6wM34jb7H3naznbAT6mgUaBD2og=s180",
    "url": "https://play.google.com/store/apps/details?id=com.tzgames.mousedroid",
    "tags": {
        "items": ["Unity 5", "C#"],
        "buttons": [
            {
                "icon": "assets/youtube.svg",
                "onclick": "openTab('https://youtu.be/Jtwun8-WGBE')",
                "label": "YouTube"
            },
            {
                "icon": "assets/playicon.svg",
                "label": "Google Play"
            }
        ]
    }       
}]

var gamesProjData = [
{
    "title": "PinballXP",
    "desc": "A port of the Windows SpaceCadet Pinball to Android using DosBox. It's time for a blast into the past!",
    "url": "https://github.com/travisjayday/FlappyOS",
    "icon-url": "https://cdn.apkmonk.com/logos/com.tzgames.pinball_150x150.png",
    "tags": {
        "items": ["Java", "Android", "C++"],
        "buttons": [
            {
                "icon": "assets/youtube.svg",
                "onclick": "openTab('https://youtu.be/hsZ5X3-UC3A')",
                "label": "YouTube"
            },
            {
                "icon": "assets/download.svg",
                "onclick": "openTab('https://www.apkmonk.com/app/com.tzgames.pinball')",
                "label": "Download"
            },
            {
                "icon": "assets/github.svg",
                "onclick": "openTab('https://github.com/travisjayday/PinballXP')",
                "label": "GitHub"
            },
        ]

    }       
},
{
    "title": "FlappyOS",
    "desc": "A portable Intel x86 bootloader that plays a version of Flappy Bird. Make your FlappyOS USB drive now!",
    "url": "https://github.com/travisjayday/FlappyOS",
    "icon-url": "assets/flappy-icon.png",
    "tags": {
        "items": ["x86 assembly", "VGA BIOS"],
        "buttons": [
            {
                "icon": "assets/github.svg",
                "onclick": "openTab('https://github.com/travisjayday/FlappyOS')",
                "label": "GitHub"
            },
        ]

    }       
},
{
    "title": "ColorFade",
    "desc": "A 3D mobile game with collectables, in-game currency, and four different gamemodes. How long can you keep the colors going?",
    "url": "https://apkpure.com/color-fade/com.tzgames.colorfade",
    "icon-url": "https://image.winudf.com/v2/image/Y29tLnR6Z2FtZXMuY29sb3JmYWRlX2ljb25fMTUzMDQxNjM2NF8wNDE/icon.png?w=180&fakeurl=1",
    "tags": {
        "items": ["Unity 5", "C#"],
        "buttons": [
            {
                "icon": "assets/youtube.svg",
                "onclick": "openTab('https://youtu.be/Geig_kZFfzE')",
                "label": "YouTube"
            },
            {
                "icon": "assets/download.svg",
                "label": "Download"
            }

        ]

    }       
}
]
 

function openTab(url) {
    window.open(url, "_blank");
}

Mustache.escape = function (value)
{
    return value;
};

var softProjTemplate = `
    <div data-aos="fade-left" class="git-project justify-left" onclick="openTab('{{url}}')">
        <object data="assets/git_repo.svg" type="image/svg+xml"></object>
        <div class="jusityf-left">
            <h4>{{title}}</h4>
            <h5>{{desc}}</h5>
            {{#tags}}
                <div class="tag-container justify-left">
                    {{#items}}
                        <div>
                            {{.}}
                        </div>
                    {{/items}} 
                    {{#links}}
                        <div class='dark'>
                            {{.}}
                        </div>
                    {{/links}} 
                </div> 
            {{/tags}}
        </div>
        <!--<i class="material-icons">open_in_new</i>-->
    </div>
`

var appProjTemplate = `
    <div data-aos="fade-right" class="git-project wrap-reverse justify-right" onclick="openTab('{{url}}')">
        <div class="justify-right">
            <h4>{{title}}</h4>
            <h5>{{desc}}</h5>
            {{#tags}}
                <div class="tag-container justify-right">
                    {{#items}}
                        <div>
                            {{.}}
                        </div>
                    {{/items}} 
                    {{#buttons}}
                        <div onclick="{{onclick}}" class="dark">
                            <object data="{{icon}}"></object>
                            <li>{{label}}</li>
                        </div>
                    {{/buttons}} 
                </div> 
            {{/tags}}
        </div>
        <img class="right-icon" src="{{icon-url}}"/>
    </div>
`

var gamesProjTemplate = `
    <div data-aos="fade-left" class="git-project justify-left" onclick="openTab('{{url}}')">
        <img class="left-icon" src="{{icon-url}}"/>
        <div>
            <h4>{{title}}</h4>
            <h5>{{desc}}</h5>
            {{#tags}}
                <div class="tag-container">
                    {{#buttons}}
                        <div onclick="{{onclick}}" class="dark">
                            <object data="{{icon}}"></object>
                            <li>{{label}}</li>
                        </div>
                    {{/buttons}} 
                    {{#items}}
                        <div>
                            {{.}}
                        </div>
                    {{/items}} 
                </div> 
            {{/tags}}
        </div>
    </div>
`

var socialLinksTemplate = `
    <div class="social-link z0" onclick="openTab('https://github.com/travisjayday')">
        <object data="assets/color/github.svg"></object>
        GitHub
    </div>
    <div class="social-link z0" onclick="openTab('https://www.linkedin.com/in/travisjayday')">
        <object data="assets/color/linkedin.svg"></object>
        LinkedIn 
    </div>
    <div class="social-link z0" onclick="openTab('https://play.google.com/store/apps/developer?id=travisjayday')">
        <object data="assets/color/gplay.svg"></object>
        GooglePlay 
    </div>
    <div class="social-link z0" onclick="openTab('https://www.youtube.com/channel/UCGBre6muq8i4-iUY5I3B0ag')">
        <object data="assets/color/youtube.svg"></object>
       YouTube 
    </div>
`


function moveTo(id) {
    window.scroll({
        top: $("#" + id).offset().top - 70,
        behavior: 'smooth'  
    });
}

$(document).ready(function() {

    $(".link-container").append(socialLinksTemplate);

    softProjData.forEach((item)=>{
        var html = Mustache.render(softProjTemplate, item);
        $("#software-projects-container").append(html);
    });

    appProjData.forEach((item)=>{
        var html = Mustache.render(appProjTemplate, item);
        $("#app-projects-container").append(html);
    });

    gamesProjData.forEach((item)=>{
        var html = Mustache.render(gamesProjTemplate, item);
        $("#games-projects-container").append(html);
    });

    const NUM_ART = 30; 
    cachedArt = new Array(NUM_ART)
    function addImg(url, ext, index) {
        cachedArt[index] = `
            <img 
                onclick='
                    var duration = 300;
                    var main = $("#art-current-main").children();
                    main.css("transition-duration", (duration / 1000) + "s"); 
                    main.css("opacity", "0"); 
                    setTimeout(()=>{
                        main[0].src = this.src;
                        main.css("opacity", "1"); 
                    }, duration);
                '
                src='${url}.${ext}'/>
        `;
    }
    for (var i = 1; i < NUM_ART + 1; i++) {
        (function (j) {
            let tester=new Image();
            var url = `assets/art/${i}-img`;
            console.log("Trying toa add img:" + url);
            tester.onload=() => addImg(url, "png", j);
            tester.onerror=() => addImg(url, "jpg", j);
            tester.src=url + '.png'; 
        })(i);
    }
    var pollFinishLoad = setInterval(()=>{
        for (var i = 1; i < NUM_ART + 1; i++)
            if (cachedArt[i] === undefined) return;
        $("#art-container").append(cachedArt.join(''));
        $("#art-current-main").append("<img src='assets/art/1-img.png'/>");
        clearInterval(pollFinishLoad);
    }, 300);

    var h;
    if (window.visualViewport === undefined) h = window.innerHeight;
    else h = window.visualViewport.height;

    var scrollCount = 0;
    $("#header").css("height", h + "px");
    setTimeout(()=>$("#header").css("transition", "height 0.5s"), 10);
    $(document).on("onwheel wheel mousewheel scroll scrollstart", () => {
        console.log("START");
        scrollCount++;
        if (scrollCount == 1) {
            $("#header").css("height", Math.round(window.innerHeight * 0.6) + "px");
            $("#welcome-card").css("transform", "translate(0, -120px)");
            setTimeout(AOS.refreshHard, 500);
            setTimeout(()=>{
                $(document.body).removeClass("stop-scrolling");
            }, 750);
        }
    });

    var imgWidth = 320 + 10;
    var currentIdx = 0;

    window.addEventListener("touchstart", interactionListener);
    window.addEventListener("mousedown", interactionListener);
    function interactionListener(e) {
        if (e.target == $("#art-container")[0])
            $("#art-container").stop();
    }
    $("#art-container").on("scroll touchstart", () => {
        var amount = $("#art-container")[0].scrollLeft;
        var idx = Math.floor(amount / imgWidth);
        if (idx == currentIdx) return;
        currentIdx = idx;
        var duration = 300;
        var main = $("#art-current-main").children();
        main.css("transition-duration", (duration / 1000) + "s"); 
        main.css("opacity", "0"); 
        setTimeout(()=>{
            main[0].src = $("#art-container").children()[idx].src;
            main.css("opacity", "1"); 
        }, duration);
    });
    function scrollRight() {
        $("#art-container").animate({scrollLeft: imgWidth * 30}, 30 * 3000, "linear", scrollLeft)
    }
    function scrollLeft() {
        $("#art-container").animate({scrollLeft: 0}, 30 * 3000, "linear", scrollRight)
    }
    scrollRight();
    window.scrollTo(0, 0);
});
