const btn = document.querySelector('button');
const result = document.querySelector('.result');
function bmiresult(h , w) {
    const result = (w/(h*h)) * 10000;
    return result.toFixed(1);
}

btn.addEventListener('click' , ()=>{
    const h = document.getElementById('height');
    const w = document.getElementById('weight');
    const ans = bmiresult(h.value , w.value)

    result.innerHTML = `Your BMI is ${ans}`;
})