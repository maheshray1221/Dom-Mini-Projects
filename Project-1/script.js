let add = document.querySelector('#add');
let flag = 0;
add.addEventListener("click", () => {
    let isStatus = document.querySelector('h4');
    if (flag == 0) {
        isStatus.innerText = "Friends";
        isStatus.style.color = "green";
        add.innerText = "Remove";
        add.style.backgroundColor = "red"
        
        flag = 1;
    }else{
        isStatus.innerText = "Stranger";
        isStatus.style.color = "red";
        add.innerText = "Add Friend";
        add.style.backgroundColor = "green"
        flag = 0
    }

});
