// Jerrod Bolton 
// 4/20/2021
let img = document.getElementById('memeImage') 
let x = Math.floor(Math.random() * 2000);
let y = Math.floor(Math.random() * 2000);
console.log(x);
console.log(y);
// this is a simple function that is going to move a image around the screen


// let moveImage = document.getElementById('moveImage'); 

// I think that I need to make a funcation that will change the position of the image
 move = () => {
    // I think that is random number make needs to be here so that I get new numbers for my top and left
    // let x = Math.floor(Math.random() * 1000);
    // let y = Math.floor(Math.random() * 1000);       

    // img.style.top = x + 'px';
    // img.style.left = y + 'px';

    console.log('move function is working');
 }

moveImage = () => {
   setInterval(move, 3000);


   console.log('moveImage function is working');
}

