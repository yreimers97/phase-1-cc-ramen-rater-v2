// index.js

// Callbacks
const handleClick = () => {
   const img = document.createElement('img')
  img.src = ramens.image
  ramenMenu.appendChild(img)
  img.addEventListener('click', () => {
    displayRamens(ramens.target.ramen-menu.alt)
  })
};

const addSubmitListener = () => {
  document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form')
    form.document.addEventListener('submit',(event) => {
    event.preventDefault()
    buildRamen(event.target.ramen-menu.alt)
    })
 })
}

 

const displayRamens = (ramens) => {
  fetch('http://localhost:3000/ramens/:id')
  .then(response => response.json())
  .then(ramens => {

   
    ramens.forEach((ramens) => {
      displayRamens(ramens)
      const newRamen = document.getElementById('ramen-menu')
      newRamen
    })
  })
  const detailedImages = document.querySelector('detail-image')
  detailedImages.class = ramens[0].images
  const nameElement = document.querySelector('name')
  nameElement.textContent = ramens[0].name
  const displayElement = document.getElementsByClassName("restaurant")
  displayElement.textContent = ramens[0].restaurant
}

const main = () => {
  // Invoke displayRamens here
  displayRamens(ramens)
  // Invoke addSubmitListener here
  addSubmitListener()
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
