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
    Company: 'JA CONFERENCE WEBSITE',
    description: 'Junior Achievement Kenya is an organization that'
      + 'seeks to narture local young talents with enterprenurial mind.'
              + 'This website gives information about their current state of events, '
      + 'conferences and a general view of their organization.',

    img: [
      './images/portfolio-1.png',
      './images/cs-home-mobile.png',
      './images/cs-about.png',
      './images/cs-about-mobile.png',
      './images/cs-navigation.png',
    ],
    technologies: ['HTML5', 'CSS3', 'Javascript'],
    devName: 'Abel Morara',
    devRole: 'Full-Stack Dev',
    year: 2023,
    liveVersion: 'https://programkingabel.github.io/Conference-site-/',
    sourceLink: 'https://github.com/ProgramKingAbel/Conference-site-',
  },

  {
    id: 2,
    Company: 'Space Travelers Hub',
    description: 'Space Travelers'
      + 'Hub is a web application for a company that provides '
      + 'commercial and scientific space travel services. '
      + 'The application will allow users to book rockets and join selected space missions.',
    img: [
      './images/rockets-ideal.png',
      './images/st-missions.png',
      './images/dragons-ideal.png',
      './images/st-user-noreserve.png',
      './images/st-user-selected.png',
    ],
    technologies: ['HTML5', 'CSS3', 'Javascript', 'React', 'Redux'],
    devName: 'Abel Morara',
    devRole: 'Full-Stack Dev',
    year: 2023,
    liveVersion: 'https://space-travellers-hub-app.onrender.com/',
    sourceLink: 'https://github.com/ProgramKingAbel/space_travelers_hub',
  },

  {
    id: 3,
    Company: 'Stox App',
    description: 'StoX is a web application for financial institutions'
      + ' that pulls data of available stocks in the market'
      + 'and provides analysis in trends of a particular stock'
      + 'selected by user over a certain period of time e.g '
      + '14days in a candlestick graph.',
    img: [
      './images/stox-1.png',
      './images/stox-2.png',
      './images/stox-3.png',
    ],
    technologies: ['HTML3', 'CSS5', 'Javascript', 'React', 'Redux', 'ApexChat.js'],
    devName: 'Abel Morara',
    devRole: 'Full-Stack Dev',
    year: 2023,
    liveVersion: 'https://programkingabel.github.io/',
    sourceLink: 'https://github.com/ProgramKingAbel/Abel-Morara-Portfolio',
  },

  {
    id: 4,
    Company: 'Bookstore CMS',
    description: 'BookStore is a web App that allows you'
      + 'to Display a list of books, Add a book, Remove'
      + 'a selected book. This application, imitates the'
      + 'use React and Redux in the context of a real application; '
      + 'Data is received from, mutated and sent/ Preserved in the server through API call actions.',
    img: [
      './images/bookstoresnip.PNG',
      './images/bookstore-2.png',
      './images/book',
    ],
    technologies: ['HTML5', 'CSS3', 'Javascript', 'Ruby on Rails'],
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
    img: [
      './images/Tonic.svg',
  
    ],
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
          <div class="carousel">
            <div class="carousel-content">
                <div class="carousel-item card-image">
                  ${worksData[i].img.map((item) => `<img src=${item}>`)}
                </div>
            </div>
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
        <div><img class = "modal-img" src=${getItem.img[0]}></div>
        <div class="modal-content-d">
        <p>${getItem.description}</p>
        <div class="content2">
        <ul class="stack">
        ${getItem.technologies.map((j) => `<li>${j}</li>`).join('')}
        </ul>
        <div class="modal-buttons">   
        <a href="${getItem.sourceLink}" target="_blank"><img src="./images/Enabled.png"></a>
        <a href="${getItem.liveVersion}" target="_blank"><img src="./images/Enabled1.png"></a>
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

// Auto-scroll variables
var carousels = document.querySelectorAll('.carousel');
var scrollIntervals = [];
var scrollAmount = 150; // Adjust scroll amount as needed

// Clone and append carousel items for each carousel
carousels.forEach(function(carousel) {
  var carouselItems = carousel.querySelectorAll('.carousel-item');
  var carouselInner = carousel.querySelector('.carousel-content');

  carouselItems.forEach(function(item) {
    carouselInner.appendChild(item.cloneNode(true));
  });

  // Start auto-scrolling for each carousel
  function startAutoScroll() {
    scrollIntervals.push(setInterval(function() {
      scrollCarousel(carousel);
    }, 3000)); // Adjust scroll delay as needed
  }

  // Scroll the carousel
  function scrollCarousel(carousel) {
    carousel.scrollBy(scrollAmount, 0);

    // Check if reached the cloned items
    if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
      carousel.scrollLeft = 0; // Reset to the beginning of the original items
    }
  }

  // Stop auto-scrolling for each carousel
  function stopAutoScroll() {
    scrollIntervals.forEach(function(interval) {
      clearInterval(interval);
    });
  }

  // Start auto-scrolling for each carousel when the page loads
  window.addEventListener('load', startAutoScroll);
});
