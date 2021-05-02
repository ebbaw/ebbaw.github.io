// Progress bar
window.onscroll = function () { calculateScroll() };

function calculateScroll() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

// Make progress bar visible
var observer = new IntersectionObserver(function (entries) {
    // isIntersecting is true when element and viewport are overlapping
    // isIntersecting is false when element and viewport don't overlap
    if (entries[0].isIntersecting === true) {
        document.querySelector(".bottom").style.opacity = "1";
        document.querySelector(".scroll-me-up").style.opacity = "1";
    } else {
        document.querySelector(".bottom").style.opacity = "0";
        document.querySelector(".scroll-me-up").style.opacity = "0";
    }
}, { threshold: [0] });

observer.observe(document.querySelector(".inner-case-study"));