let main = document.querySelector('.main');
let crsr = document.querySelector('.cursor');
main.addEventListener("mousemove",(det)=>{
    crsr.style.left = det.x+"px";
    crsr.style.top = det.y+"px";
});