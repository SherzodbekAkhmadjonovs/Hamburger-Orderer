let count = document.querySelector(".number")
let decrBtn = document.querySelector(".btn-discount")
let incrBtn = document.querySelector(".btn-increase")
let buy_container = document.querySelector(".ordering")

count.innerHTML = "0"
let counter = 0; 
incrBtn.addEventListener('click', () =>{
    counter++
    count.innerHTML = counter;
    showBuyContainer();
})
decrBtn.addEventListener('click', () => {
    counter--
    count.innerHTML = counter
    showBuyContainer();
})

let showBuyContainer = () =>{
    if(counter !==0){
        buy_container.style.transform = "translateY(-5px)"; 
    }
    else buy_container.style.transform = "translateY(-40px)"
}