let eles = document.querySelectorAll('.ele');


eles.forEach((ele) => {
    
    ele.addEventListener("mouseenter", () => {
        ele.childNodes[3].style.opacity = 1;
    });
    ele.addEventListener("mouseleave", () => {
        ele.childNodes[3].style.opacity = 0;
    });
    ele.addEventListener("mouseover", (det) => {
        ele.childNodes[3].style.left = det.x+"px";
        ele.childNodes[3].style.top = det.y+"px";
    });
});
