function global_nav_click(e) {
    gnav_clearall();
    e.parentNode.setAttribute("class", "Gnav-menu-item has-submenu is-open");
    e.setAttribute("aria-expanded", "True");
    var doc = e.parentNode.children[1];
    var rect = doc.getBoundingClientRect();
    var display = window.innerWidth - rect.left;
    var delta = rect.width - display;
    if (delta + 18 > 0)
        doc.style.left = -delta - 18;
}

function gnav_clearall() {
    var start = document.getElementById("gnav.start");
    start.parentNode.setAttribute("class", "Gnav-menu-item has-submenu");
    start.setAttribute("aria-expanded", "False");

    var olink = document.getElementById("gnav.doc");
    olink.parentNode.setAttribute("class", "Gnav-menu-item has-submenu");
    olink.setAttribute("aria-expanded", "False");

    var page = document.getElementById("gnav.page");
    page.parentNode.setAttribute("class", "Gnav-menu-item has-submenu");
    page.setAttribute("aria-expanded", "False");

    var tool = document.getElementById("gnav.tool");
    tool.parentNode.setAttribute("class", "Gnav-menu-item has-submenu");
    tool.setAttribute("aria-expanded", "False");

    var doc = document.getElementById("ul.blog");
    doc.style.left = 0;
    doc = document.getElementById("ul.proj");
    doc.style.left = 0;
    doc = document.getElementById("ul.doc");
    doc.style.left = 0;
    doc = document.getElementById("ul.help");
    doc.style.left = 0;
}