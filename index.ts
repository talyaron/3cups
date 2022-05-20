const cups = document.querySelectorAll(".cup");
const smile: HTMLElement = document.querySelector("#smile");
let target: string | false = false;
let offsetX = 0,
  offsetY = 0;

  const win = new Audio('./img/win.wav');
  const loose = new Audio('./img/loose.wav');

const body = document.body;
body.ondrop = () => {

};
body.ondragover = () => {

};

cups.forEach((cup) => {
  cup.addEventListener("dragstart", (ev: any) => {
    const img = new Image();
    img.src = "./img/small-ball.png";
    offsetX = ev.x;
    offsetY = ev.y;



    ev.dataTransfer.setDragImage(img, 0, 0);
  });
  cup.addEventListener("drop", (ev: any) => {
    ev.preventDefault();
    if (target === false) {
      target = ev.target.id;
    
      smile.style.display = "none";
      cups.forEach((cup: any) => {
        cup.style.opacity = "1";
        cup.draggable = "true";
      });
    }
  });
  cup.addEventListener("dragover", (ev: any) => {
    ev.preventDefault();
  });
  cup.addEventListener("dblclick", (ev: any) => {
    if (target) {
      if (ev.target.id === target) {
        win.play()
        body.style.backgroundColor = "green";
      } else {
          loose.play()
        body.style.backgroundColor = "red";
      }
    }
  });

  cup.addEventListener("drag", (ev: any) => {
 
    ev.target.style.top = `${ev.y - 200}px`;
    ev.target.style.left = `${ev.x - 200}px`;
  });
});

smile.addEventListener("drop", (ev: any) => {
  // ev.preventDefault();
  console.log(ev.target.id);
});

smile.addEventListener("dragstart", (ev: any) => {
  //   ev.dataTransfer.dropEffect = "move";
  // console.log(ev.target.id)
});

smile.addEventListener("drag", (ev: any) => {
  // console.log(ev.target.id)
});
