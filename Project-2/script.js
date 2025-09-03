let image = document.querySelector('img');
let icon = document.querySelector('.love');
let flag = 0;
image.addEventListener("dblclick", () => {
    icon.style.transform = 'translate(-50%,-50%) scale(1)';
    setTimeout(()=>{
       icon.style.transform = 'translate(-50%,-50%) scale(0)'; 
    },1000);
})
