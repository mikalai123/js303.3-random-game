const area = document.getElementById('area');
let move = 0;
let result = '';
const contentWrapper = document.getElementById('content');
const modalResult = document.getElementById('modal-result-wrapper');
const overlay = document.getElementById('overlay');
const btnClose = document.getElementById('btn-close');
let step = 0;

area.addEventListener('click', e => {
    if (e.target.className = 'box') {
        move % 2 === 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = '0';
        move++;
        check();
        step++;
    }
    if (step == 9) {
        result = 'Ничья';
        prepareResult(result);
    }
})

const check = () => {
    const boxes = document.getElementsByClassName('box');
    const arr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (i = 0; i < arr.length; i++) {
        if (
            boxes[arr[i][0]].innerHTML == 'X' && boxes[arr[i][1]].innerHTML == 'X' && boxes[arr[i][2]].innerHTML == 'X'
        ) {
            result = 'Крестик';
            audioX.play();

            let x = Number(document.querySelector(".x").innerHTML);
            x = x + 1;
            document.querySelector(".x").innerHTML = x;

            let localX = Number(localStorage.getItem("x"));
            localX = localX + 1;
            localStorage.setItem("x", `${localX}`);
            prepareResult(result);
            if (x == 3) {
                console.log("winner Крестик!!!");
                contentWrapper.innerHTML = `Победитель 3 игр становится -----> ${result} !`;
                modalResult.style.display = 'block';
                const btn = document.getElementById("btn-close");
                console.log(btn);
                btn.style.display = 'none';
                setTimeout(() => {
                    location.reload();
                }, 2000);
            }

        } else if (
            boxes[arr[i][0]].innerHTML == '0' && boxes[arr[i][1]].innerHTML == '0' && boxes[arr[i][2]].innerHTML == '0'
        ) {
            result = 'Нолик';
            audio0.play();

            let ziro = Number(document.querySelector(".ziro").innerHTML);
            ziro = ziro + 1;
            document.querySelector(".ziro").innerHTML = ziro;

            let localZiro = Number(localStorage.getItem("o"));
            localZiro = localZiro + 1;
            localStorage.setItem("o", `${localZiro}`);
            prepareResult(result);
            prepareResult(result);
            if (ziro == 3) {
                console.log("winner Нолик!!!");
                contentWrapper.innerHTML = `Победитель 3 игр становится -----> ${result} !`;
                modalResult.style.display = 'block';
                const btn = document.getElementById("btn-close");
                console.log(btn);
                btn.style.display = 'none';
                setTimeout(() => {
                    location.reload();
                }, 2000);
            }
        }
    }
}

const prepareResult = winner => {
    contentWrapper.innerHTML = `Победитель ${winner} !`;
    modalResult.style.display = 'block';
}

const closeModal = () => {
    modalResult.style.display = 'none';
    step = 0;
    const boxes = document.getElementsByClassName('box');
    for (let index = 0; index < boxes.length; index++) {
        const element = boxes[index];
        element.innerHTML = "";
    }
}

overlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);

const contentWrapper1 = document.getElementById('content1');
const modalResult1 = document.getElementById('modal-result-wrapper1');
const overlay1 = document.getElementById('overlay1');
const btnClose1 = document.getElementById('btn-close1');

const closeModal1 = () => {
    modalResult1.style.display = 'none';
    audioStart.play();
}

overlay1.addEventListener('click', closeModal1);
btnClose1.addEventListener('click', closeModal1);

localStorage.setItem("x", "0");
localStorage.setItem("o", "0");

let audioX = new Audio();
audioX.src = 'audio/2a647125a6528aa.mp3';
let audio0 = new Audio();
audio0.src = 'audio/3283ff775b4b474.mp3';
let audioStart = new Audio();
audioStart.src = 'audio/81a27144ae3adba.mp3';