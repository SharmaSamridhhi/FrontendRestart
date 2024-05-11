const left = document.querySelector('.left');
const right = document.querySelector('.right');
const output = document.querySelector('.outputBtn');

let counter = 4;
left.addEventListener('click' , ()=>{
        counter--
        output.innerText = `${counter}`
})
right.addEventListener('click' , ()=>{
    counter++
    output.innerText = `${counter}`
})