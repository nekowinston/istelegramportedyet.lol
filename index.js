var githubOpened = false
const contribute = () => { githubOpened = true }


const randomIntBetween = (min, max) => { return Math.floor(Math.random() * (max - min) + min) }

let jumpscared = false;

const jumpscare = () => {
  if (jumpscared === false) {
    let e = document.createElement('div');
    e.classList.add('jumpscare')

    let text = document.createElement('p')
    text.classList.add('jumpscare-title')
    text.innerHTML = "YOU WERE GOING TO CONTRIBUTE, WERE YOU?"

    e.appendChild(text)

    document.body.appendChild(e)
    jumpscared = true
  }
}





setInterval(() => {
  let rando = randomIntBetween(1, 10);
  console.log(rando)
  if (rando > 3) {
    if (!githubOpened) {
      jumpscare()
    }
  }
}, 5000)
