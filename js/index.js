// Your code goes here


// 1. EVENT LISTENER - MOUSEOVER
const navColor = document.querySelectorAll('.nav a');
navColor.forEach(item => {
    item.addEventListener('mouseover', event => {
        event.target.style.color = '#17A2B8';
        setTimeout(() => {
            event.target.style.color = '';
        },500);
    },false);
})

// 2. EVENT LISTENER - WHEEL
const zoom = event => {
    event.preventDefault();

    scale =+ event.deltaY * -0.01;

    scale = Math.min(Math.max(.125, scale), 4);

    el.style.transform = 'scale(${scale})';
}

let scale = 1;
const el = document.querySelector('.intro img');
el.onwheel = zoom;

// 3. EVENT LISTENER - DBCLICK
const dbClickTest = document.querySelector('.img-content');

dbClickTest.addEventListener('dbclick', function(e) {
    dbClickTest.classList.toggle('large');
});

// 4. EVENT LISTENER - RESIZE 
const heightOutput = document.querySelector('#height')
const widthOutput = document.querySelector('#width');


const reportWindowSize = () => {
    heightOutput.textContent = window.innerHeight;
    widthOutput.textContent = window.innerWidth;
}

window.onresize = reportWindowSize

//5. EVENT LISTENER - MOUSEOVER
const imgScale = document.querySelector('.content-destination img')

imgScale.addEventListener('mouseenter', event =>{
imgScale.style.transform = 'scale(1.3)';
imgScale.style.transition = 'transform 0.5s';
});

imgScale.addEventListener('mouseleave', event =>{
    imgScale.style.transform = 'scale(1)';
    imgScale.style.transition = 'transform 0.5s';
    });

// 6. EVENT LISTENER - CLICK    
const newFooterColor = document.querySelector('.footer')

newFooterColor.addEventListener('click', event =>{
    newFooterColor.style.backgroundColor = '#17A2B8';
})

7. //EVENT LISTENER - 