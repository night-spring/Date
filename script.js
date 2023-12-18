function showMeet() {
    document.getElementById("yes").style.display = "none";
    document.getElementById("no").style.display = "none";
    document.getElementById("question").style.display = "none";
    document.getElementById("meet").style.display = "block";
    document.getElementById("hrt").style.display = "block";
}

function relocateNo() {
    const min = 0;
    const max = window.innerHeight - 50;
    const x = Math.floor(Math.random() * (max - min + 1)) + min;
    const y = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("no").style.position = "absolute";
    document.getElementById("no").style.top = x + "px";
    document.getElementById("no").style.left = y + "px";
}
