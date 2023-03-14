function toggleToc() {
    console.log("🗙, ☰");
    console.log(document.getElementById("toc").style.display);
    if (document.getElementById("toc").style.display !== "initial") {
        console.log("Opening!");
        document.getElementById("toc").style.display = "initial";
        document.getElementById("toggle").innerHTML = "🗙";
        document.getElementById("toggle").setAttribute('aria-expanded', 'true');
    } else if (document.getElementById("toc").style.display === "initial") {
        console.log("Closing!");
        document.getElementById("toc").style.display = "none";
        document.getElementById("toggle").innerHTML = "☰";
        document.getElementById("toggle").setAttribute('aria-expanded', 'false');
    }
}

var size = window.matchMedia("(max-width: 800px)");
size.onchange = (e) => {
    if (e.matches) {
        document.getElementById("toc").style.display = "none";
        document.getElementById("toggle").style.display = "initial";
    }
    if (!e.matches) {
        document.getElementById("toc").style.display = "initial";
        document.getElementById("toggle").style.display = "none";
    }
};
