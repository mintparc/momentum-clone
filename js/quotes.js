const quites = [{
    quote: 'A rose by any other name would smell as sweet.',
    author: 'William Shakespeare'
  },
  {
    quote: 'I think therefore I am.',
    author: 'Rene Descartes'
  },
  {
    quote: 'But man is not made for defeat. A man can be destroyed but not defeated.',
    author: 'Ernest Hemingway'
  },
  {
    quote: 'I love you the more in that I believe you had liked me for my own sake and for nothing else.',
    author: 'John Keats'
  },
  {
    quote: 'There is nothing permanent except change.',
    author: 'Heraclitus'
  },
  {
    quote: 'Let us sacrifice our today so that our children can have a better tomorrow.',
    author: 'A. P. J. Abdul Kalam'
  },
  {
    quote: 'All that we see or seem is but a dream within a dream.',
    author: 'Edgar Allan Poe'
  },
  {
    quote: 'If you cannot do great things, do small things in a great way.',
    author: 'Napoleon Hill'
  },
  {
    quote: 'Whoever is happy will make others happy too.',
    author: 'Anne Frank'
  },
]

const quote = document.querySelector('#quote span:first-child')
const author = document.querySelector('#quote span:last-child')

const todaysQuote = quites[Math.floor(Math.random() * quites.length)]

quote.innerText = todaysQuote.quote
author.innerText = todaysQuote.author