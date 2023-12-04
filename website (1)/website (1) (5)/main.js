function openMembers() {
    document.getElementById("the_members_panel").style.width = "100%";
}

function closeMembers() {
    document.getElementById("the_members_panel").style.width = "0";
}

function openAbout() {
    document.getElementById("the_about_panel").style.width = "100%";
}

function closeAbout() {
    document.getElementById("the_about_panel").style.width = "0";
}


var typingEffect = new Typed("#multiText", {
    strings : ["Wo ai ni","Ti amo","Je t'aine","Aishiteru","Kocham cie","Te iubese","Ich liebe dich","Sarang hae"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 1500,
})
