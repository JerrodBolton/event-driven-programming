// Jerrod Bolton 
// 4/20/2021
let img = document.getElementById('memeImage') 
let x = Math.floor(Math.random() * 300);
let y = Math.floor(Math.random() * 300);
console.log(x);
console.log(y);
// this is a simple function that is going to move a image around the screen


// let moveImage = document.getElementById('moveImage'); 

// I think that I need to make a funcation that will change the position of the image
 move = () => {
  
    img.style.left = x + 'px';
    img.style.top = y + 'px';
    console.log('move function is working');
 }

moveImage = () => {
   setInterval(move, 6000);


   console.log('moveImage function is working');
}

