import gsap from "gsap";

gsap.to(".box", {
    scale: 1.25,
    rotation: -360,
    duration: 5,
    borderRadius: "50%",
    ease: "elastic",
    repeat: -1,
    repeatDelay: 1,
    yoyo: true,
});