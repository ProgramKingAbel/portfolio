const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    
});

document.querySelectorAll(".nav-link").forEach(i => i.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// Local Storage

 // retrieve the form and details
 
const formReg = document.getElementById('register');
const submitForm = document.getElementById('submit-btn');
const userName = document.getElementById('name');
const userEmail = document.getElementById('email');
const userMessage = document.getElementById('message');
   

formReg.addEventListener('input', () => {
    //get the values submitted as they are keyd in 
    //store them in js object
    const data = {
        name: userName.value,
        email: userEmail.value,
        message: userMessage.value,
    };
    //stringify the data to store 
    var storeData = JSON.stringify(data);
    storeData = localStorage.setItem('data', storeData);
        
});

 //add event listener function when page is reloaded   
        window.addEventListener("load", (event) => {
//retrieve inforamtion
        const userData = JSON.parse(localStorage.getItem('data'));
    if (userData) {
        const userName = document.getElementById('name');
        const userEmail = document.getElementById('email');
        const userMessage = document.getElementById('message');
            userName.value = userData.name;
            userEmail.value = userData.email;
            userMessage.value = userData.email;
        }
        
    });

    



    
    



    
 
