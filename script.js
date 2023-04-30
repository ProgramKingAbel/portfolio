const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((i) => i.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

// Local Storage

// retrieve the form and details

const formReg = document.getElementById('register');
const userName = document.getElementById('name');
const userEmail = document.getElementById('email');
const userMessage = document.getElementById('message');

formReg.addEventListener('input', () => {
  // get the values submitted as they are keyd in
  // store them in js object
  const data = {
    name: userName.value,
    email: userEmail.value,
    message: userMessage.value,
  };
    // stringify the data to store

  const storeData = JSON.stringify(data);
  localStorage.setItem('data', storeData);
});

// add event listener function when page is reloaded
window.addEventListener('load', () => {
// retrieve inforamtion
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

// Dynamically generate the works section

// store data in js object

const worksData = [
  {
    id: 1,
    Company: 'Tonic',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
    img: '/images/Tonic.svg',
    technologies: ['HTML', 'CSS', 'Javascript'],
    devName: 'Canopy',
    devRole: 'Back End Dev',
    year: 2015,
    liveVersion: 'https://programkingabel.github.io/',
    sourceLink: 'https://github.com/ProgramKingAbel/Abel-Morara-Portfolio',
  },

  {
    id: 2,
    Company: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads no accounts or sign-ups required.',
    img: '/images/Nature.svg',
    technologies: ['HTML', 'CSS', 'Javascript'],
    devName: 'Canopy',
    devRole: 'Back End Dev',
    year: 2015,
    liveVersion: 'https://programkingabel.github.io/',
    sourceLink: 'https://github.com/ProgramKingAbel/Abel-Morara-Portfolio',
  },

  {
    id: 3,
    Company: 'Facebook 360',
    description: 'A daily selection of privately personalized reads no accounts or sign-ups required.',
    img: '/images/Nature.svg',
    technologies: ['HTML', 'CSS', 'Javascript'],
    devName: 'Canopy',
    devRole: 'Back End Dev',
    year: 2015,
    liveVersion: 'https://programkingabel.github.io/',
    sourceLink: 'https://github.com/ProgramKingAbel/Abel-Morara-Portfolio',
  },

  {
    id: 4,
    Company: 'Uber Navigation',
    description: 'A daily selection of privately personalized reads no accounts or sign-ups required.',
    img: '/images/grd2.svg',
    technologies: ['HTML', 'CSS', 'Javascript', 'Ruby on Rails'],
    devName: 'Uber',
    devRole: 'Back End Dev',
    year: 2018,
    liveVersion: 'https://programkingabel.github.io/',
    sourceLink: 'https://github.com/ProgramKingAbel/Abel-Morara-Portfolio',
  },

  {
    id: 5,
    Company: 'Tonic',
    description: 'A daily selection of privately personalized reads no accounts or sign-ups required.',
    img: '/images/Tonic.svg',
    technologies: ['HTML', 'CSS', 'Javascript', 'Ruby'],
    devName: 'Canopy',
    devRole: 'Back End Dev',
    year: 2015,
    liveVersion: 'https://programkingabel.github.io/',
    sourceLink: 'https://github.com/ProgramKingAbel/Abel-Morara-Portfolio',
  },
];

worksData.forEach((element, i) => {
  const projectsContainer = document.querySelector('.all-projects');

  // create card
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

const projectsContainer = document.querySelector('.all-projects');

projectsContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('open-modal')) {
    const displayed = document.querySelector('.modal-wrapper');
    const overlay = document.getElementById('overlay');
    displayed.classList.add('active');
    overlay.classList.add('active');
    let { id } = e.target;
    id = parseInt(id, 10);

    const getItem = worksData.find((i) => i.id === id);
    const modalContainer = document.querySelector('.modal-wrapper');
    const modalCard = document.createElement('div');
    modalCard.classList = 'modal-card';

    modalCard.innerHTML = ` 
        <div class="modal-header">
        <h2 class="title">${getItem.Company}</h2>
        <i data-modal-close class="uil uil-multiply" id="close-btn"></i>
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

    modalCard.addEventListener('click', (e) => {
      if (e.target.id === 'close-btn') {
        modalCard.remove();
        displayed.classList.remove('active');
        overlay.classList.remove('active');
      }
    });
  }
});
