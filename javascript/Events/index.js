const btn = document.querySelector('button');
const body = document.querySelector('body');
function randomColor(number) {
    return Math.floor(Math.random()* (number+1));
}    
btn.addEventListener('click' , ()=>{
    const rndColor = `rgb(${randomColor(255)} ${randomColor(255)} ${randomColor(255)})`
    body.style.backgroundColor = rndColor;
})