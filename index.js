function update() {
    var bodycontent=document.getElementById("home");
    var aboutSection = document.getElementById("about"); 
    const logo = document.getElementById("logo");
    const lion = document.getElementById("lionphoto");
    var intro = document.getElementById("intro");
    if (aboutSection.style.display === "block") {
        aboutSection.style.display = "none";
        bodycontent.style.opacity=1;
        logo.style.display="block";
        lion.style.display="block";
        intro.style.display="block";

    } else {
        aboutSection.style.display = "block";
        aboutSection.style.transitionDuration="1s";
        bodycontent.style.opacity=0.7;
        logo.style.display="none";
        lion.style.display="none";
        intro.style.display="none";
    }
}