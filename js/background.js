const images = [
    "0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"
];

const imgIdx = Math.floor(Math.random() * images.length);
const chosenImage = images[imgIdx];

const bgImage=document.createElement("img");

bgImage.src=`img/${chosenImage}`;

//const body=document.getElementsByTagName("body");
//body.style = `background: url(${bgImage.src}); background-size: cover;`;

console.log(bgImage);

document.body.appendChild(bgImage);