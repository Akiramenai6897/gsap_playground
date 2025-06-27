import gsap from "gsap";

const playBtn = document.querySelector(".play");
const pauseBtn = document.querySelector(".pause");
const resumeBtn = document.querySelector(".resume");
const restartBtn = document.querySelector(".restart");
const reverseBtn = document.querySelector(".reverse");
const killBtn = document.querySelector(".kill");
const yoyoBtn = document.querySelector(".yoyo");
const repeatBtn = document.querySelector(".repeat");

const animation = gsap.to('.box', {
    opacity: 1,
    scale: 1.25,
    rotation: -360,
    duration: 5,
    borderRadius: "50%",
})

playBtn.addEventListener("click", () => {
    animation.play();
})

pauseBtn.addEventListener("click", () => {
    animation.pause();
})

resumeBtn.addEventListener("click", () => {
    animation.resume();
})

restartBtn.addEventListener("click", () => {
    animation.restart();
})

reverseBtn.addEventListener("click", () => {
    animation.reverse();
})

killBtn.addEventListener("click", () => {
    animation.kill();
})

yoyoBtn.addEventListener("click", () => {
    animation.yoyo(true);
})

repeatBtn.addEventListener("click", () => {
    animation.repeat(3);
})