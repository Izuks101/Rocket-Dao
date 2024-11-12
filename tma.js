// let walletConnected = false;
let miningStarted = false;
let timeRemaining =  0.005 * 60 * 60; // 24 hours in seconds
let totalEarned = 0;
const miningRate = 0.005; // RKT per second
let timer = document.getElementById('timer');
let rktMine = document.getElementById('rktMine');
let mineBtn = document.getElementById('mining_count');
let IntializePage = document.querySelector('#initializing-page');
let offerPage = document.querySelector('.offerPage');
let homePage = document.querySelector('[data-tab="homePage"]');
let launchBtn = document.querySelector('.launchBtn');
let claimBtnR = document.querySelector('.claimBtn')
let progressBar = document.querySelector('.progressBar-inner');
let TgProgressBar= document.querySelector('.progressTg');
let LaunchProgressBar= document.querySelector('.progressLaunch')

// INITIALIZE PAGE
launchBtn.style.display = 'none'; //hide launch Now button

// this makes the page button(lauchBtn) appear after the load animations completes
progressBar.addEventListener('animationend', function(){ 
    launchBtn.style.display = 'flex';
})

// Initialize launch now button to next page
function LaunchNow(){
    if(IntializePage.style.display = 'none'){
        offerPage.classList.add('active');
    }else{
        offerPage.classList.remove('active');
    }
}


// JavaScript for Carousel Animation
const shapes = document.querySelectorAll('.shape');
let currentIndex = 0;

function moveCarousel() {
  // Reset all shapes to non-colored state
  shapes.forEach(shape => {
    shape.classList.remove('shape-colored');
    shape.classList.add('shape-non-colored');
    shape.style.transform = 'scale(1)';  // Reset scale
  });

  // Get the current shape in focus
  const currentShape = shapes[currentIndex];
  currentShape.classList.add('shape-non-colored');
  currentShape.classList.remove('shape-colored');
  currentShape.style.transform = 'scale(1.2)';  // Increase size in focus

  // Wait for 2 seconds, then replace with the colored shape
  setTimeout(() => {
    currentShape.classList.add('shape-colored');
  }, 5000);

  // Update index to the next shape
  currentIndex = (currentIndex + 1) % shapes.length;
}

// Set the carousel to move every 3 seconds
setInterval(moveCarousel, 7000);


// Start Telegram progress bar when the offerPage opens 
TgProgressBar.style.animation = 'none';
LaunchProgressBar.style.animation = 'none';
claimBtnR.style.visibility = 'hidden';


launchBtn.addEventListener('click', function(){
    TgProgressBar.style.animation = 'progressBar-Tg 5s forwards'; 
    LaunchProgressBar.style.visibility = 'hidden';
    

    if(TgProgressBar.addEventListener('animationend', function(){
        LaunchProgressBar.style = ('animation: progressBar-Launch 5s forwards', 'visibility: visile');
        document.querySelector('.tgRewardMe').style.visibility ='visible';
        document.getElementById('rewardRkTme').style.visibility ='visible';
    }));

    if(LaunchProgressBar.addEventListener('animationend', function(){
        document.getElementById('rewardRkTme2').style.visibility ='visible';
        claimBtnR.style.visibility = 'visible';
        // document.querySelectorAll('.rewardRkTme').style.visibility ='visible';
    }));    
}); 


// CLAIM PAGE


// Claim button to next page
function claimBtn(){
    if(offerPage.style.display = 'none'){
        homePage.classList.add('active');
    }else{
        homePage.classList.remove('active')
    }
}

// ------------------------------------------------------------ //
mineBtn.addEventListener('click', function () {
    mineBtn.style.backgroundColor = '#0E0E10';
    
    if (!miningStarted) {
        miningStarted = true;
        // alert('Mining started!');

        const miningInterval = setInterval(function () {
            if (timeRemaining > 0) {
                timeRemaining--;
                totalEarned += miningRate;
                timer.textContent = formatTime(timeRemaining);
                timer.style = ('color:#FFFFFF');
                rktMine.textContent = 'Farming... ' + totalEarned.toFixed(3);
            } else {
                clearInterval(miningInterval);
                mineBtn.style = ('color:#414141', 'font-size: 18px', 'cursor:pointer');
                mineBtn.style.backgroundColor = '#F6C001';
                mineBtn.textContent = 'Collect Vase Reward';
                rocket.style.animation = 'none';
                rocket.style.opacity =0;
                document.querySelector('.rocket_gift_Box_img').style.opacity =1;
                

                // alert('Mining session has ended.');
                
            }
        }, 1000);
    }else {
        clearInterval(miningInterval)
            return(mineBtn);
    }

    spine.style.animation = 'load 18s ease forwards';
    rocket.style.animation = 'moveUp 8s forwards, shake 0.5s 5s infinite';

    
    rocket.style.display = 'block'; // Make the image block so it can be seen  
    rocket.style.opacity =1;
});


const spine = document.querySelector('.circle1');
 
spine.style.animation = 'none';  

const rocket = document.querySelector('.rocket_img');
rocket.style.animation = 'none';



function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return ` ${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}


// --------- SPINE PAGE JAVASCRIPT -------------- //
let spineBody = document.querySelector('.spinePopUp');
let spinePageCloseBtn = document.querySelector('.spine_close');
let spineBtn = document.getElementById('spine_btn');
let spiner = document.getElementById('spin_board');
let container = document.querySelector('.container');
let pointer = document.getElementById('spin_hook_1');
let spinBtnPopUp = document.querySelector('.spine_img');
let number = Math.ceil(Math.random() * 10000);

       //spine page cick to pop up
spineBody.style.display = 'none';
spinBtnPopUp.addEventListener('click', PopSpine);

function PopSpine(){
    spineBody.style.display = 'flex';
}

// spinBtnPopUp.addEventListener('click', function(event){
//     spineBody.style.visibility = 'visible';
// }) 



    //spine page close button
spinePageCloseBtn.addEventListener('click', function(){
    spineBody.style.display = 'none';
    spinBtnPopUp.addEventListener('click', PopSpine);
})
  //close popup by clicking the body of the popup
// spineBody.addEventListener('click', function(){
//     spineBody.style.display = 'none';
// })




let clicks = 0;
function spineProperty(){
    clicks += 1;
    if(clicks == 1){
        container.style.transform = "rotate(" + number + "deg)";
        container.style.transition = 'all 10s ease-out';
        number += Math.ceil(Math.random() * 1000);
    }
}

container.addEventListener('transitionened', () => {
    spineProperty = 'auto';
    container.style.transition = 'none';
})



// ---------- TASK PAGE ------------- //
    // tab navigatoin function
function showTab(tabName) {  
    const tabs = document.querySelectorAll('.aktiv-tab');  
    const buttons = document.querySelectorAll('#tab_btn');  
  
    tabs.forEach(tab => {  
        if (tab.id === tabName) {  
            tab.classList.add('active');  
        } else {  
            tab.classList.remove('active');
        }  
    });  
  
    buttons.forEach(button => {  
        if (button.textContent.toLowerCase() === tabName) {  
            button.classList.add('active');  
        } else {  
            button.classList.remove('active');  
        }    
    });  
}


// REFERRAL PAGE
    // tab navigatoin function
function showTabonRef(reftabName) {  
    const refTabs = document.querySelectorAll('.ref_section');  
    const refBtns = document.querySelectorAll('#refBtn1');  
    
    refTabs.forEach(refTab => {  
        if (refTab.id === reftabName) {  
            refTab.classList.add('active');  
        } else {  
            refTab.classList.remove('active');
        }  
    });  
      
    refBtns.forEach(refBtn => {  
        
        if (refBtn.getAttribute('data-tab') === reftabName) {  
            refBtn.classList.add('active'); 
        } else {  
            refBtn.classList.remove('active');  
        }    
        
        
    });  
}

// BOOST PAGE
    // tab navigatoin function
function showTabonBoost(boostTabName) {  
    const boostTabs = document.querySelectorAll('.boostWith-Rkt');  
    const boostBtns = document.querySelectorAll('#boosttab_btn'); 
    

    boostTabs.forEach(boostTab => {  
        if (boostTab.id === boostTabName) {  
            boostTab.classList.add('active');  
        } else {  
            boostTab.classList.remove('active');
        }  
    });  
        
    boostBtns.forEach(boostBtn => {  
        if (boostBtn.textContent.toLowerCase() === boostTabName) {  
            boostBtn.classList.add('active');  
        } else {  
            boostBtn.classList.remove('active');  
        }  
    }); 
    
} 


// BOTTOM NAVIGATION MENU

function showBtn(bottomMenu){  
    const pages = document.querySelectorAll('.pageFrame');  
    const mainButtons = document.querySelectorAll('.bottomBtn');
    const iconButtons = document.querySelectorAll('#iconImg');
    const replaceBtns = document.querySelectorAll('#iconImgReplace');  
  
    // iconButtons.style.display = 'none';
    
    // replaceBtns.style.display = 'block';

    pages.forEach(page => {  
        if (page.id === bottomMenu) {  
            page.classList.add('active');  
        } else {  
            page.classList.remove('active');
        }  
    });  

    iconButtons.forEach(iconButton => {  
        if (iconButton.textContent.toLowerCase() === bottomMenu) { 
            iconButton.classList.add('active'); 
        } else {  
            iconButton.classList.remove('active');
        } 

    });  


    const iconElement = document.getElementById(bottomMenu + "iconImg");
    switch(buttonId) {
        case 'home':
        iconElement.textContent = '🏡';  // Changed icon
        break;
        case 'search':
        iconElement.textContent = '🔎';  // Changed icon
        break;
        case 'notifications':
        iconElement.textContent = '📬';  // Changed icon
        break;
        case 'profile':
        iconElement.textContent = '😊';  // Changed icon
        break;
    }
}





// function replaceIcon(iconId, activeSrc) {
    // Reset all icons to default
    // document.querySelectorAll('.bottom img').forEach(icon => {
    //     const defaultSrc = icon.getAttribute('data-default-src');
    //     icon.src = defaultSrc;
    // });

    // Set the clicked icon to the active version
//     const icon = document.getElementById(iconId);
//     icon.src = activeSrc;
// }



