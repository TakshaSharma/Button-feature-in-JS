var istatus = document.querySelector("h5");
var button = document.querySelector("#add")
var flag = 0;


add.addEventListener("click", function(){
    if(flag == 0){
        istatus.innerHTML = "Friends"
        istatus.style.color = "green"
        flag = 1;
        button.innerHTML = "Remove";
    }
    else{
        istatus.innerHTML = "Strangers"
        istatus.style.color = "red"
        flag = 0;
        button.innerHTML = "Add Friend";
    }
})
