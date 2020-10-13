const content = document.getElementById("contentPage");

const phrases = ['За твои приятные духи', 'За твои тёплыё обьятия',
 'За твои бип-бип', 'За твои куси перед сном', 'За твою искреннюю поддержку',
  'За твои милые глазки', 'За твой приятный голос', 'За то, что ты всегда рядом',
  'За твой забавный смех', 'За твои мягкие ручки']

let phrasesCopy = phrases.slice(0)

function lovere(e) {



  const index = Math.floor(Math.random()*phrasesCopy.length)
  const phrase = phrasesCopy[index];

 content.innerHTML = phrasesCopy[index];

 document.getElementById("btnjs").value= "А ещё?";

 phrasesCopy.splice(index, 1)

 if (phrasesCopy.length === 0) {
      phrasesCopy = phrases.slice(0)
      phrasesCopy.splice(phrases.indexOf(phrase), 1)
  }
console.log(phrasesCopy)



}

btnresult.addEventListener("click", lovere)
btnresult.addEventListener('submit', (event) => event.preventDefault())
