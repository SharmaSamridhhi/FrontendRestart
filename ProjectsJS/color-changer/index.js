const btns = document.querySelectorAll('.button');
const body = document.querySelector('body');

btns.forEach(function (button) {
    button.addEventListener('click' , function(e){
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }else if(e.target.id === 'orange'){
            body.style.backgroundColor = e.target.id;
        }else if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }else if(e.target.id === 'purple'){
            body.style.backgroundColor = e.target.id;
        }
    })
})