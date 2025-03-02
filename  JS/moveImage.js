// Jerrod Bolton 
// 4/20/2021
let img = document.getElementById('memeImage');
// let img  = document.createAttribute('img');
// let x = Math.floor(Math.random() * 2000);
// let y = Math.floor(Math.random() * 2000);
// console.log(x);
// console.log(y);
// this is a simple function that is going to move a image around the screen


// let moveImage = document.getElementById('moveImage'); 

// I think that I need to make a function that will change the position of the image
let leftPos = 0;
let myReq;

 move = (timeStamp) => {
   // I think that is random number make needs to be here so that I get new numbers for my top and left. 
   leftPos += 0.4;
   img.style.left = leftPos + "px";
   myReq = requestAnimationFrame(move);

 }

stopImage = () => {
    cancelAnimationFrame(myReq);
    img.style.left = leftPos + "px";
    console.log('stopImage function is working');
    
}
// cancelAnimationFrame(move);
// moveImage = () => {
// //    setInterval(move, 400);
// //    console.log('moveImage function is working');




// }
// moveImage();
