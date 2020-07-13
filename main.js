AOS.init({
    duration: 1200,    
});

window.onload = function() {
    window.scrollTo(0, 0);
}

var softProjData = [
     {
        "title": "The OMo-X",
        "desc": "You like night Vision? OpenCV hand tracking? 3D-printed, Raspberry Pi wearable monocles? You got it here. Check out my 10th grade school project.",
        "url": "https://github.com/travisjayday/omo-x"
    },
    {
        "title": "FlappyOS",
        "desc": "A portable Intel x86 bootloader that plays a version of Flappy Bird",
        "url": "https://github.com/travisjayday/FlappyOS"
    },
    {
        "title": "MIT CATSOOP XSS Exploit",
        "desc": "Container orchestration? Websockets? Python servers? Spoofing MIT's online learning platform for fun and profit",
        "url": "https://github.com/travisjayday/catsoop-spoofer"
    },
    {
        "title": "MiMix 3 Logo Patcher",
        "desc": "Patching OEM boot logos with Python for Xiaomi MiMix3's",
        "url": "https://github.com/travisjayday/logo-patcher-mix3"
    }
]

function openTab(url) {
    window.open(url, "_blank");
}

var softProjTemplate = `
    <div data-aos="fade-left" class="git-project" onclick="openTab('{{url}}')">
        <object data="assets/git_repo.svg" type="image/svg+xml"></object>
        <div>
            <h4>{{title}}</h4>
            <h5>{{desc}}</h5>
        </div>
        <i class="material-icons">open_in_new</i>
    </div>
`


$(document).ready(function() {

    softProjData.forEach((item)=>{
        var html = Mustache.render(softProjTemplate, item);
        $("#software-projects-container").append(html);
    });
    

    var scrollCount = 0;
    $("#header").css("height", window.innerHeight + "px");
    $(document).on("scroll", () => {
        scrollCount++;
        if (scrollCount == 1) {
            $("#header").css("height", Math.round(window.innerHeight * 0.6) + "px");
            $("#welcome-card").css("transform", "translate(0, -120px)");
            setTimeout(AOS.refreshHard, 500);
        }
    });
});
