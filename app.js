const navCards = document.querySelectorAll('nav > div')

// Constants
const art = `
<a href="">3D Character Artist</a>
<a href="">2D Artist</a>
<a href="">Technical Artist</a>
<a href="">Animator</a>
<a href="">3D Environment Artist</a>
<a href="">Senior Video Editor <br><span>Contract Position</span></a>
<a href="">Video Editor <br><span>Bilingual/Mandarin Chinese Contract Position</span></a>
<a href="">Video Editor <br><span>Bilingual/Russian Contract Position</span></a>
<a href="">Effects Artist</a>
`
const audio = `
<a href="#">Sound Designer</a>
<a href="#">Acoustic Systems Engineer</a>
<a href="#">Audio Software Engineer</a>
`
const businessDevelopment = `
<a href="#">Business Development <br><span>Steam Team</span></a>
<a href="#">Steam Partner Technical Account Manager</a>
<a href="#">Business Development <br><span>Other</span></a>
`
const dataScience = `
<a href="#">Economist</a>
<a href="#">Psychologist <br><span>Research/Experimental</span></a>
<a href="#">Statistician / Data Scientist</a>
`
const finance = `
<a href="#">Finance <br><span>Other</span></a>
`
const gameDesign = `
<a href="">Level Designer</a>
<a href="">UX Motion Designer</a>
<a href="">Psychologist <br><span>Research/Experimental</span></a>
<a href="">Sound Designer</a>
<a href="">Technical Artist</a>
<a href="">Game Development Software Engineer</a>
<a href="">Writer</a>
<a href="">Game Design <br><span>Other</span></a>
`

navCards.forEach((navCard) => {
  console.log(navCard.children[1])
  navCard.addEventListener('click', showCard)
  let title
  let card

  // Show Card function
  function showCard() {
    title = this.children[0].innerText
    card = this.children[1]
    // Art
    if (
      title === 'Art' &&
      card.classList.contains('card-description') === false
    ) {
      card.classList.add('card-description', 'grid')
      card.innerHTML = art
      navCard.removeEventListener('click', showCard)
      navCard.addEventListener('click', hideCard)
    }
    // Audio
    if (
      title === 'Audio' &&
      card.classList.contains('card-description') === false
    ) {
      card.classList.add('card-description')
      card.innerHTML = audio
      navCard.removeEventListener('click', showCard)
      navCard.addEventListener('click', hideCard)
    }
    // Business Development
    if (
      title === 'Business Development' &&
      card.classList.contains('card-description') === false
    ) {
      card.classList.add('card-description')
      card.innerHTML = businessDevelopment
      navCard.removeEventListener('click', showCard)
      navCard.addEventListener('click', hideCard)
    }
    // Data Science
    if (
      title === 'Data Science' &&
      card.classList.contains('card-description') === false
    ) {
      card.classList.add('card-description')
      card.innerHTML = dataScience
      navCard.removeEventListener('click', showCard)
      navCard.addEventListener('click', hideCard)
    }
    // Finance
    if (
      title === 'Finance' &&
      card.classList.contains('card-description') === false
    ) {
      card.classList.add('card-description')
      card.innerHTML = finance
      navCard.removeEventListener('click', showCard)
      navCard.addEventListener('click', hideCard)
    }
    // Game Design
    if (
      title === 'Game Design' &&
      card.classList.contains('card-description') === false
    ) {
      card.classList.add('card-description', 'grid')
      card.innerHTML = gameDesign
      navCard.removeEventListener('click', showCard)
      navCard.addEventListener('click', hideCard)
    }
  }

  // Hide Card function
  function hideCard() {
    navCard.addEventListener('click', showCard)
    card.removeAttribute('class')
    card.innerHTML = ''
  }
})


