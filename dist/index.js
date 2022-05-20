var cups = document.querySelectorAll(".cup");
var smile = document.querySelector("#smile");
var target = false;
var offsetX = 0, offsetY = 0;
var win = new Audio('./img/win.wav');
var loose = new Audio('./img/loose.wav');
var body = document.body;
body.ondrop = function () {
};
body.ondragover = function () {
};
cups.forEach(function (cup) {
    cup.addEventListener("dragstart", function (ev) {
        var img = new Image();
        img.src = "./img/small-ball.png";
        offsetX = ev.x;
        offsetY = ev.y;
        ev.dataTransfer.setDragImage(img, 0, 0);
    });
    cup.addEventListener("drop", function (ev) {
        ev.preventDefault();
        if (target === false) {
            target = ev.target.id;
            smile.style.display = "none";
            cups.forEach(function (cup) {
                cup.style.opacity = "1";
                cup.draggable = "true";
            });
        }
    });
    cup.addEventListener("dragover", function (ev) {
        ev.preventDefault();
    });
    cup.addEventListener("dblclick", function (ev) {
        if (target) {
            if (ev.target.id === target) {
                win.play();
                body.style.backgroundColor = "green";
            }
            else {
                loose.play();
                body.style.backgroundColor = "red";
            }
        }
    });
    cup.addEventListener("drag", function (ev) {
        ev.target.style.top = ev.y - 200 + "px";
        ev.target.style.left = ev.x - 200 + "px";
    });
});
smile.addEventListener("drop", function (ev) {
    // ev.preventDefault();
    console.log(ev.target.id);
});
smile.addEventListener("dragstart", function (ev) {
    //   ev.dataTransfer.dropEffect = "move";
    // console.log(ev.target.id)
});
smile.addEventListener("drag", function (ev) {
    // console.log(ev.target.id)
});
