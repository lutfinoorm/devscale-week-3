// const element = document.createElement("p");
// element.textContent ="I'm learning Vite!";

// document.getElementById("my-text").append(element);

import Typed from 'typed.js';
import confetti from 'canvas-confetti';

new Typed('#heading', {
  strings: ['assalamualaikum! ', 'a data scientist, ', 'a frontend learner, ', 'a graph lover, ', 'a number enthusiast. '],
  typeSpeed: 70,
  backSpeed: 100,
  cursorChar: "_",
  loop: true,

});

const form = document.getElementById("form");
form.addEventListener("keydown", (e)=>{
    const myCanvas = document.createElement('canvas');
    document.body.appendChild(myCanvas);
    
    if (e.key === "Enter") {
        confetti.create(myCanvas, {
            resize: true,
            useWorker: true
          });
          confetti({
            particleCount: 100,
            spread: 160
          });
    };
    myCanvas.remove();
});

