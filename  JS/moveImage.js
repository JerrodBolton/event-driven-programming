// Jerrod Bolton 
// 4/20/2021
let img = document.getElementById('memeImage');
let startButton = document.getElementById('moveImg');
let stopButton = document.getElementById('stopImg');


// I think that I need to make a function that will change the position of the image
let leftPos = 0;
let myReq;

 moveLeft = (timeStamp) => {

   leftPos += 0.4;
   img.style.left = leftPos + "px";
   myReq = requestAnimationFrame(moveLeft);
   startButton.setAttribute('disabled', 'true');
   stopButton.removeAttribute('disabled', 'false');
   
 }
stopImage = () => {
    cancelAnimationFrame(myReq);
    img.style.left = leftPos + "px";
    console.log('stopImage function is working');
    stopButton.setAttribute('disabled', 'true');
    startButton.removeAttribute('disabled', 'false');
}







