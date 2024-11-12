
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




