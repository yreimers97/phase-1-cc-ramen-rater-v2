// index.js
  
// Callbacks
const handleClick = (food) => {
  //const ramenDetail = document.getElementById('ramen-detail')
  const myMenu = document.querySelector(".detail-image")
  myMenu.src = food.image
  const ramenDetail = document.querySelector('.name')
  ramenDetail.innerText = food.name
  const foodName = document.querySelector('.restaurant')
  foodName.textContent = food.restaurant
  const rateRamen = document.getElementById('rating-display')
  rateRamen.textContent = food.rating
  const commentRamen = document.getElementById('comment-display')
  commentRamen.innerText = food.comment
}

const addSubmitListener = () => {
  const addForm = document.getElementById('new-ramen');
  addForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const newName = document.createElement('new-name').value
    const newRestaurant = document.getElementById('new-restaurant').value
    const newImage = document.getElementById('new-image').value
    const newRating = document.getElementById('new-rating').value
    const newComment = document.getElementById('new-comment').value

    let newRamen = {
      name: newName,
      restaurant: newRestaurant,
      image: newImage,
      rating: newRating,
      comment: newComment
    }
    console.log(newRamen)
  })
}
fetch('http://localhost:3000/ramens')
.then(response => response.json())
.then(ramens => displayRamens(ramens))

const displayRamens = (ramens) => {
  // fetch('http://localhost:3000/ramens')
  // .then(response => response.json())
  // .then(ramens => food{ })
  // //displayRamens()

  ramens.forEach(food => {
    const imgElement = document.createElement('img')
    imgElement.src = food.image
    const myRestaurant = document.getElementById("ramen-menu")
    myRestaurant.appendChild(imgElement)

      imgElement.addEventListener('click', () => handleClick(food))
  })     
}

const main = () => {
  // Invoke displayRamens here
  //displayRamens((newRamen))
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
