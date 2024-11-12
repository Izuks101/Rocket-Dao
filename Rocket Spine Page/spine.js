let spineBtn = document.getElementById('spine_btn');
let spiner = document.getElementById('spin_board');
let container = document.querySelector('.container');
let pointer = document.getElementById('spin_hook_1');
let number = Math.ceil(Math.random() * 10000);


// spineBtn.addEventListener('click', function (){


    

//     spiner.style.animation = 'spine 2s infinite linear';
// })

// spiner.style.animation = 'none';

let clicks = 0;
function spineProperty(){
    clicks += 1;
    if(clicks == 1){
        container.style.transform = "rotate(" + number + "deg)";
        container.style.transition = 'all 19s ease-out';
        number += Math.ceil(Math.random() * 1000);
    }
}

container.addEventListener('transitioned', () => {
    spineProperty() = 'auto';
    container.style.transition = 'none';
})





// spineBtn pointer.onclick = function () {
//   clicks += 1;
//   if(clicks == 1){
// 	container.style.transform = "rotate(" + number + "deg)";
// 	number += Math.ceil(Math.random() * 1000);
//   }
// }