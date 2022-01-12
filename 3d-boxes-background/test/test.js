const boxesContainer = document.getElementById('boxes');
const btn = document.getElementById('btn');

btn.addEventListener('click',() => boxesContainer.classList.toggle('big'),false);

function createBox(){
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const div = document.createElement('div');
            div.classList.add('box');
            div.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
            boxesContainer.appendChild(div);
        }
    }
}
createBox();