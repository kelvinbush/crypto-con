/*= ============== SHOW MENU =============== */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('toggle-nav');
const navClose = document.getElementById('close-nav');

/*= ==== MENU SHOW ===== */
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('nav__show');
  });
}

/*= ==== MENU HIDDEN ===== */
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('nav__show');
  });
}

/*= ============== REMOVE MENU MOBILE =============== */
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  // When we click on each nav__link, we remove the nav__show class
  navMenu.classList.remove('nav__show');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));

const blockchainTopics = [{
  topic: 'Blockchain',
  description: 'Blockchain is a distributed ledger that is a public ledger of transactions. It is a system that allows users to store, share, and verify data.',
  img: 'img/cryptocurrency.png',
},
{
  topic: 'Crypto-currency',
  description: 'Cryptocurrency is a digital asset that is generated through a process of mining.',
  img: 'img/blockchain.png',
},
{
  topic: 'Smart Contract',
  description: 'Smart contract is a computer program that is executed on a blockchain. It is an agreement between two or more parties to perform a specific task.',
  img: 'img/smart-contract.png',
},
{
  topic: 'Dapps',
  description: 'Dapps is a form of application that is designed to be used by both the users and the developers.',
  img: 'img/dapps.png',
},
{
  topic: 'Ethereum',
  description: 'Ethereum is a decentralized platform that is used to create blockchains.',
  img: 'img/ethereum.png',
}
];

const programSection = document.getElementById('program');
programSection.innerHTML = blockchainTopics.map((topic) => `
  <div class="program__item">
                  <img src="${topic.img}" alt="Program 1">
                    <h3>${topic.topic}</h3>
                    <p>${topic.description}</p>
               </div>`)
  .join('');

const speakersList = [{
  name: 'Juan Pablo',
  title: 'Professor of Entrepreneurial Legal Studies at Melaine University',
  img: 'img/speaker1.jpg',
  description: 'He discusses the current state of Blockchain technology with respect to government policies and economic regulation.',
},
{
  name: 'Jean Moore',
  title: 'Executive Director of the Linder Foundation.',
  img: 'img/speaker2.jpg',
  description: 'Discusses the impact of blockchain technology on the environment, education and public health worldwide.',
},
{
  name: 'Juma Juma',
  title: 'Co-founder of Quick Pay',
  img: 'img/speaker3.jpg',
  description: 'Speaks on integrating cryptocurrency into payment systems. Focuses on helping consumers navigate the digital ecosystem using secure, scalable and fast financial technology.',
},
{
  name: 'Ruby Moore',
  title: 'Chairperson of the Central Bank of Wakanda.',
  img: 'img/speaker4.jpg',
  description: 'Speaks on effects of decentralization of currency: Central banks are ineffectual, and increasingly we see that central-bank intervention is actually causing inflation.',
},
{
  name: 'Tim Cahill',
  title: 'Chief Technology Officer at Krypto Link. ',
  img: 'img/speaker5.jpg',
  description: 'He discusses the role of crypto currency exchanges in today\'s society and how to implement them efficiently, quickly & effectively for Bitcoin buyers and sellers across an array with a view towards increasing global market penetration. Follow @Kryptolinkio on Twitter',
},
{
  name: 'Jean Moore',
  title: 'Executive Director of the Linder Foundation.',
  img: 'img/speaker6.jpg',
  description: 'Discusses the impact of blockchain technology on the environment, education and public health worldwide.',
},

];
const speakerSection = document.getElementById('speakers');
speakerSection.innerHTML = speakersList.map((speaker) => `
  <div class="speaker">
                  <img src="${speaker.img}" alt="${speaker.name}">
                  <div>
                    <h3>${speaker.name}</h3>
                    <h4>${speaker.title}</h4>
                    <hr class="rule">
                    <p>${speaker.description}</p>
                  </div>
               </div>`)
  .join('');
