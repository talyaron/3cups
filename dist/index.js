var cups = document.querySelectorAll('.cup');
var smile = document.querySelector("#smile");
var target = false;
cups.forEach(function (cup) {
    cup.addEventListener('drop', function (ev) {
        ev.preventDefault();
        console.log('drop');
        console.log(ev.target.id);
        target = ev.target.id;
        smile.style.display = 'none';
    });
    cup.addEventListener('dragover', function (ev) {
        ev.preventDefault();
        console.log(ev.target.id);
        ev.dataTransfer.dropEffect = "move";
    });
    cup.addEventListener('click', function (ev) {
        if (ev.target.id === target) {
            console.log('correct');
        }
        else {
            console.log('worng');
        }
    });
});
smile.addEventListener('drop', function (ev) {
    // ev.preventDefault();
    console.log(ev.target.id);
});
smile.addEventListener('dragstart', function (ev) {
    ev.dataTransfer.dropEffect = "copy";
    // console.log(ev.target.id)
});
smile.addEventListener('drag', function (ev) {
    // console.log(ev.target.id)
});
