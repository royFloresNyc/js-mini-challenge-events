/***** Beginning of Starter Code ****/

const playerContainer = document.querySelector(".player-container")

// render one player to the DOM
function renderPlayer(player) {
  // create an element for the outer div
  const playerDiv = document.createElement("div")

  // set attributes on the outer div
  playerDiv.className = "player"
  playerDiv.dataset.number = player.number

  // use innerHTML to create any child elements of the div
  playerDiv.innerHTML = `
    <h3>${player.name} (<em>${player.nickname}</em>)</h3>
    <img src="${player.photo}" alt="${player.name}">
    <p class="likes">${player.likes} likes</p>
    <button class="like-button">❤️</button>
  `

  // append the element to the container
  playerContainer.append(playerDiv)
}

// for each player in the array, render to the DOM
PLAYERS.forEach(renderPlayer)

/***** End of Starter Code ****/




/***** Deliverable 1 *****/
function toggleColor(element) {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
}

const header = document.querySelector("h1#header")

header.addEventListener('click', function(event){
    toggleColor(event.target);
})


/***** Deliverable 2 *****/
const form = document.getElementById('new-player-form');
form.addEventListener('submit', function(e){
    e.preventDefault();
    const submittedForm = e.target;
    const submittedPlayer = {
        name: `${submittedForm.name.value}`,
        nickname: `${submittedForm.nickname.value}`,
        number: `${submittedForm.number.value}`,
        photo: `${submittedForm.photo.value}`,
        likes: 0,
    }

    renderPlayer(submittedPlayer);

    submittedForm.reset()
})

/***** Deliverable 3 *****/

playerContainer.addEventListener('click', function(event){
    const target = event.target;
    if (target.tagName === "BUTTON") {
        const div = target.parentNode
        const likes = div.querySelector('p.likes')
        likes.textContent = `${parseInt(likes.textContent) + 1} likes`
    }
})