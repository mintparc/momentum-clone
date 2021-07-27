const images = [
  'img01.jpg',
  'img02.jpg',
  'img03.jpg',
  'img04.jpg',
  'img05.jpg',
  'img06.jpg',
]

const chosenImage = images[Math.floor(Math.random() * images.length)]
const bgImage = document.createElement('img')

bgImage.src = `img/${chosenImage}`
document.body.appendChild(bgImage)