const images=["js00.jpeg","js1.jpeg","js2.jpeg"];

const chosenImage=images[Math.floor(Math.random()*images.length)];

const bgImage=document.createElement("img");

bgImage.src=`img/${chosenImage}`;

document.body.appendChild(bgImage);

console.log(bgImage);

