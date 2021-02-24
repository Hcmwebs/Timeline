const text = document.getElementById('text');
const phrases = [
  'Hello, I am Heze.',
  'I am a Freelance Frontend developer and UI/UX Designer.',
  'This is my learning path.',
];
const listCards = document.querySelectorAll('li');
const appearOnScrollOptions = {
<<<<<<< HEAD
  // root : document.querySelector('container'),
  threshold: 0,
  rootMargin: '-150px',
=======
  threshold: 0,
  rootMargin: '-200px 0px -200px 0px ',
>>>>>>> 339106388bdd3b0d69c32290ab1d9023280ef3ae
};

let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

// Typewriter - effect

function loop() {
  isEnd = false;
  text.innerHTML = currentPhrase.join('');

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
      text.innerHTML = currentPhrase.join('');
    }

    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j]);
      j--;
      text.innerHTML = currentPhrase.join('');
    }

    if (j == phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;

      if (i == phrases.length) {
        i = 0;
      }
    }
  }
  const spedUp = Math.random() * (80 - 50) + 50;
  const normalSpeed = Math.random() * (300 - 200) + 200;
  const time = isEnd ? 2500 : isDeleting ? spedUp : normalSpeed;

  setTimeout(loop, time);
}

loop();

<<<<<<< HEAD
=======
// OnScroll, listCards appear

>>>>>>> 339106388bdd3b0d69c32290ab1d9023280ef3ae
const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
<<<<<<< HEAD
      entry.target.classList.add('appear');
      // appearOnScroll.unobserve(entry.target);
=======
      entry.target.classList.add('fade-move');
      appearOnScroll.unobserve(entry.target);
>>>>>>> 339106388bdd3b0d69c32290ab1d9023280ef3ae
    }
  });
},
appearOnScrollOptions);

listCards.forEach((card) => {
  appearOnScroll.observe(card);
});
