const button = document.querySelector('button');
const body = document.querySelector('body');

const changeColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    console.log(r, g, b);
    body.style.background = `rgb(${r},${g},${b})`;
}

button.addEventListener('click', changeColor);