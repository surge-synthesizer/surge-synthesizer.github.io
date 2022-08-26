function getOS() {
  var userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
    macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
    windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
    iosPlatforms = ["iPhone", "iPad", "iPod"],
    bsdPlatforms = ["FreeBSD", "FreeBSD amd64"],
    os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = "Download for macOS";
    document.getElementById("downloadButton").href = `{% include stable_xt_macos_url %}`;
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = "iOS";
    document.getElementById("downloadButton").href = "#";
    document.getElementById("downloadButton").style.display = "none";
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = "Download for Windows";
    document.getElementById("downloadButton").href = `{% include stable_xt_win_x64_url %}`;
  } else if (bsdPlatforms.indexOf(platform) !== -1) {
    os = "FreeBSD";
    document.getElementById("downloadButton").href = "https://github.com/surge-synthesizer/surge/blob/main/doc/Linux-and-other-Unix-like-distributions.md#surge-on-freebsd";  
  } else if (/Android/.test(userAgent)) {
    os = "Android";
    document.getElementById("downloadButton").href = "#";
    document.getElementById("downloadButton").style.display = "none";
  } else if (!os && /Linux/.test(platform)) {
    os = "Download for Linux";
    document.getElementById("downloadButton").href = "https://github.com/surge-synthesizer/releases-xt/releases";
  } else {
    os = "No Installer, Click for Details";
    document.getElementById("downloadButton").href = `#systemrequirements`;
  }

  return os;
}

function labelUpdate() {
  document.getElementById("downloadButton").innerHTML = getOS();
}

labelUpdate()
