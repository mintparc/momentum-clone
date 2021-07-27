const images = [
  'img01.jpg',
  'img02.jpg',
  'img03.jpg',
  'img04.jpg',
  'img05.jpg',
  'img06.jpg',
]

const chosenImage = images[Math.floor(Math.random() * images.length)]
const body = document.querySelector('body')

body.style.backgroundImage = `url(img/${chosenImage})`