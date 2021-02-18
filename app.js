const text = document.getElementById('text');
const phrases = ['Hello, I am Heze.', 'I am a Freelancer Frontend developer and UI/UX Designer.','This is my learning path.' ];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function loop(){
  isEnd = false
  text.innerHTML =currentPhrase.join('')

  if(i <phrases.length){

    if(!isDeleting && j <= phrases[i].length){
      currentPhrase.push(phrases[i][j])
      j++
      text.innerHTML =currentPhrase.join('')
    }


    if (isDeleting && j<=phrases[i].length){
      currentPhrase.pop(phrases[i][j])
      j--
      text.innerHTML =currentPhrase.join('')
    }

    if(j == phrases[i].length){
      isEnd  = true;
      isDeleting = true
    }

    if(isDeleting && j ===0 ){
      currentPhrase = [];
      isDeleting = false;
      i++;

      if(i == phrases.length){
        i = 0;

      }
    }


  }
  const spedUp = Math.random() * (80 - 50) + 50;
  const normalSpeed = Math.random() * (300 - 200 ) + 200;
  const time = isEnd ? 3000 : isDeleting ? spedUp : normalSpeed;
   setTimeout(loop, time)
}

loop()