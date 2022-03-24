const btns = document.querySelectorAll('.btns button')
const num = document.getElementById('num');

let count = 0;

btns.forEach((btn) => {
    btn.addEventListener("click", function(e){
        let style = e.currentTarget.classList
        console.log(style);
        if (style.contains('decre')) {
            count--
        } else if (style.contains('incre')) {
            count++
        } else {
            count = 0
        }
        if (count > 0) {
            num.style.color = "blue"
        } else if (count < 0) {
            num.style.color = "red"
        } else {
            num.style.color = "black"
        }
        num.textContent = count
    })
})



