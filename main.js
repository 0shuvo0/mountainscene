var rand = function (min, max) {
    return Math.round((Math.random() * (max - min)) + min);
};
var container = document.querySelector('.container');
for (var i = 0; i < innerWidth / 15; i++) {
    var star = document.createElement('div');
    star.classList.add("star");
    star.style.top = rand(0, 100) + "%";
    star.style.left = rand(0, 100) + "%";
    star.style.animationDelay = (Math.random() * 2) + "s";
    container.appendChild(star);
}
for (var i = 0; i < 10; i++) {
    var m = document.createElement('div');
    m.classList.add("mountain");
    m.style.left = rand(0, 100) + "%";
    var a = rand(50, innerWidth / 1.5);
    m.style.height = a + "px";
    m.style.width = a + "px";
    m.style.background = (Math.random() > 0.5) ? "#41B883" : "#35495E";
    container.appendChild(m);
}
