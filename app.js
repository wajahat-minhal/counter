var heading = document.querySelector("#heading");
var btn1 = document.querySelector("#btn-1");
var btn2 = document.querySelector("#btn-2");

function increment(){
    btn1 = heading.innerHTML++
}


function decrement(){
    btn2 = heading.innerHTML--

    if(btn2<=0){
        heading.innerHTML = 0;
    }

}