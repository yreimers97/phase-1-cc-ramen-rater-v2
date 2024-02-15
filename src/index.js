// index.js

// Callbacks
const handleClick = (food) => {
  //const imageElement = document.getElementById('image')
    //imageElement.src = food.image
    //const nameElement = document.getElementById('name')
    //nameElement.textContent = food.name
    const ramenDetails = document.getElementById('ramen-details')
    const ramenText = document.createElement('alt')

    //ramenDetails.textContent = food.
  
  // const foodDetails = document.getElementById('ramen-details')
  // foodDetails.img = food.image
  // const ramenName = document.createElement('name')
  // ramenName.textContent = food.name
 
   
// })
}

const addSubmitListener = () => {
  // const newRamen = document.getElementById('new-ramen')
  //   newRamen.addEventListener('submit', (event) => {
  //       event.preventDefault()
       
}

const displayRamens = () => {
  
  fetch('http://localhost:3000/ramens')
  .then(response => response.json())
  .then(ramens => {
    ramens.forEach(food => {
      const myRestaurant = document.getElementById("ramen-menu")
      const imgElement = document.createElement('img')
      imgElement.src = food.image
      myRestaurant.appendChild(imgElement)

      imgElement.addEventListener('click', () => {
        handleClick(food)
      })
    })
  })
}

const main = () => {
  // Invoke displayRamens here
  displayRamens()
  // Invoke addSubmitListener here
  addSubmitListener()
}

 //document.addEventListener('DOMContentLoaded', () => {
 //})

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
