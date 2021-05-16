let links = document.querySelectorAll("a")
let contactsButton = document.querySelector(".contacts-button")
let hiddenField = document.querySelector(".contacts-list")

// for (let link of links) {
//     link.onclick = (event) => event.preventDefault()
// }

contactsButton.onclick = function() {
    hiddenField.classList.toggle("hidden")
    this.classList.toggle("hover")
}