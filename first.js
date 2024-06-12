window.transitionToPage = function (href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function () {
        window.location.href = href
    }, 500)
}

document.addEventListener('DOMContentLoaded', function (event) {
    document.querySelector('body').style.opacity = 1
});

function sing(song) {
    console.log(song);
    console.log("TEEEEEE");
}
sing("LAAAAA");
sing("twice!");