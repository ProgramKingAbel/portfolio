
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
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
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
        id: 5,
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

        card.innerHTML = `
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
                <a data-modal-target=".modal-wrapper" id="${worksData[i].id}" class="open-modal" href="JavaScript:void(0)">See Project</a>
                         </div>

`;
        
        projectsContainer.append(card);

    });






   //open modal 
const openModalBtn = document.querySelectorAll('[data-modal-target]');
const closeModalBtn = document.querySelectorAll('[data-modal-close]');
const overlay = document.getElementById('overlay');



openModalBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {

        const modal = document.querySelector(btn.dataset.modalTarget);
        let { id } = e.target;    
        id = parseInt(id);

        // console.log(id);
       //search for data in array
       const getItem = worksData.find((i) => i.id === id);
        // console.log(getItem);

        //generate popup

        const modalContainer = document.querySelector('.modal-wrapper');
// console.log(modalContainer);

const modalCard = document.createElement('div');
modalCard.classList = 'modal-card';

modalCard.innerHTML = ` 

        <div class="modal-header">
        <h2 class="title">${getItem.Company}</h2>
        <i data-modal-close class="uil uil-multiply" id="close-btn-modal"></i>
        </div>
        <ul class="developer-details">
            <li>${getItem.devName}</li>
            <span></span>
            <li>${getItem.devRole}</li>
            <span></span>
            <li>${getItem.year}</li>
        </ul>
        <img class = "modal-img" src="./images/Tonic.svg">

        <div class="modal-content-d">
        <p>${getItem.description}</p>

        <div class="content2">
        <ul class="stack">

        ${getItem.technologies.map((j) => `<li>${j}</li>`).join('')}

        </ul>

        <div class="modal-buttons">   
        <a href="${getItem.sourceLink}"><img src="./images/Enabled1.png"></a>
        <a href="${getItem.liveVersion}"><img src="./images/Enabled.png"></a>

        </div>

        </div> 

        </div>
        

`;
        
        modalContainer.append(modalCard);

        openModal(modal);
    })
})
closeModalBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        
        const modal = btn.closest('.modal');
        // console.log(modal);
        closeModal(modal);
    });
});

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal-wrapper.active');
    modals.forEach(modal => {

        closeModal(modal);
    });
    
});

//open pop up
function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active');
    overlay.classList.add('active');
    
}

//close pop up
function closeModal(modal) {
    if (modal == null) return
    modal.innerHTML = '';
    modal.classList.remove('active');
    overlay.classList.remove('active');
    
}
    
   


    
 
