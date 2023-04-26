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

    
 //Dynamically generate the works section
 
 //store data in js object

const worksData = [
    {
        Company: "Tonic",
        description: "A daily selection of privately personalized reads no accounts or sign-ups required.",
        img: "/images/Tonic.svg",
        technologies: ['HTML', 'CSS', 'Javascript'],
        devName: "Canopy",
        devRole: "Back End Dev",
        year: 2015,
        liveVersion:"https://programkingabel.github.io/",
        sourceLink:"https://github.com/ProgramKingAbel/Abel-Morara-Portfolio",
    },

    {
        Company: "Tonic",
        description: "A daily selection of privately personalized reads no accounts or sign-ups required.",
        img: "/images/Tonic.svg",
        technologies: ['HTML', 'CSS', 'Javascript'],
        devName: "Canopy",
        devRole: "Back End Dev",
        year: 2015,
        liveVersion:"https://programkingabel.github.io/",
        sourceLink:"https://github.com/ProgramKingAbel/Abel-Morara-Portfolio",
    },

    {
        Company: "Tonic",
        description: "A daily selection of privately personalized reads no accounts or sign-ups required.",
        img: "/images/Tonic.svg",
        technologies: ['HTML', 'CSS', 'Javascript'],
        devName: "Canopy",
        devRole: "Back End Dev",
        year: 2015,
        liveVersion:"https://programkingabel.github.io/",
        sourceLink:"https://github.com/ProgramKingAbel/Abel-Morara-Portfolio",
    },

    {
        Company: "Tonic",
        description: "A daily selection of privately personalized reads no accounts or sign-ups required.",
        img: "/images/Tonic.svg",
        technologies: ['HTML', 'CSS', 'Javascript'],
        devName: "Canopy",
        devRole: "Back End Dev",
        year: 2015,
        liveVersion:"https://programkingabel.github.io/",
        sourceLink:"https://github.com/ProgramKingAbel/Abel-Morara-Portfolio",
    },

    {
        Company: "Tonic",
        description: "A daily selection of privately personalized reads no accounts or sign-ups required.",
        img: "/images/Tonic.svg",
        technologies: ['HTML', 'CSS', 'Javascript', 'Ruby'],
        devName: "Canopy",
        devRole: "Back End Dev",
        year: 2015,
        liveVersion:"https://programkingabel.github.io/",
        sourceLink:"https://github.com/ProgramKingAbel/Abel-Morara-Portfolio",
    },
];


worksData.forEach((element, i) => {
    
const projectsContainer = document.querySelector('.all-projects');
// console.log(projectsContainer);

//create card
const card = document.createElement('div');
card.classList = 'card';

const projectCard = `
            <div class="card-image">
            <img src=${worksData[i].img}>
            </div>
            <div class="card-details">
            <h2 class="title">${worksData[i].Company}</h2>
            <ul class="developer-details">
                <li>${worksData[i].devName}</li>
                <span></span>
                <li>${worksData[i].devRole}</li>
                <span></span>
                <li>${worksData[i].year}</li>
            </ul>
            <p>${worksData[i].description}</p>
                <ul class="stack">
                ${worksData[i].technologies.map((j) => `<li>${j}</li>`).join('')}
                </ul>
                <a href="#">See Project</a>
            </div>

`;
card.innerHTML += projectCard;
projectsContainer.appendChild(card);

});
    



    
 
