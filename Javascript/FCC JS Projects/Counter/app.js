// set initial count
let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn'); 
//selected all buttons using button class

// console.log(btns);
btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        // alert('ok');
        // console.log(e.currentTarget.classList);
        const c_styles = e.currentTarget.classList;
        if (c_styles.contains("decrease")) {
            count--;
        } else if(c_styles.contains("increase")){
            count++;
        } else if(c_styles.contains("reset")){
            count = 0;
        } if (count > 0) {
            value.style.color = 'green';
        } if (count < 0){
            value.style.color = 'red';
        } if (count === 0){
            value.style.color = "purple";
        }
        value.textContent = count;
    });
});