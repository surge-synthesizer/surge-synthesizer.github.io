function toggleToc() {
    if (document.getElementById("toc").style.display !== "initial") {
        document.getElementById("toc").style.display = "initial";
        document.getElementById("toggle").innerHTML = "🗙";
        document.getElementById("toggle").setAttribute('aria-expanded', 'true');
    } else if (document.getElementById("toc").style.display === "initial") {
        document.getElementById("toc").style.display = "none";
        document.getElementById("toggle").innerHTML = "☰";
        document.getElementById("toggle").setAttribute('aria-expanded', 'false');
    }
}

var size = window.matchMedia("(max-width: 800px)");

if (size.matches) {
    document.getElementById("toc").addEventListener("click", toggleToc);
}

size.onchange = (e) => {
    if (e.matches) {
        document.getElementById("toc").style.display = "none";
        document.getElementById("toggle").style.display = "initial";
        document.getElementById("toggle").innerHTML = "☰";
        document.getElementById("toc").addEventListener("click", toggleToc);
    }
    if (!e.matches) {
        document.getElementById("toc").removeEventListener("click", toggleToc);
        document.getElementById("toc").style.display = "initial";
        document.getElementById("toggle").innerHTML = "☰";
        document.getElementById("toggle").style.display = "none";
    }
};
