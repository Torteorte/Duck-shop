function createFootWindow() {

    let footWindow = document.createElement('div')
    footWindow.classList.add('foot-window')
    footWindow.insertAdjacentHTML('afterbegin', `
      <div>
        <p>Кря! Кто-то только что заказал:</p>
        <p><img width="70px" src=${ducks[getRandomArbitrary(0, 19)].img}></p>
        <p>Закрякивайте и вы!</p>
        <div>
          <button id="close-foot-window">Закрыть</button>
        </div>
      </div>
    `)
  
    document.body.appendChild(footWindow)
  }
  
  createFootWindow()
  
  let footWindow = document.querySelector(".foot-window")
  let closeFootWindow = document.querySelector("#close-foot-window")
  
  function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) +min)
  }
  
  setTimeout(() => footWindow.classList.add("foot-window-up"), getRandomArbitrary(15, 25)*1000)
  
  closeFootWindow.onclick = () => footWindow.classList.add("foot-window-close")