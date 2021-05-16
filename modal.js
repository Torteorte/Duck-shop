let backet = {
    title: "Ваш заказ",
    width: "680px"
}

function _createModal(options) {

  let modal = document.createElement('div')
  modal.classList.add('vmodal')
  modal.insertAdjacentHTML('afterbegin', `
    <div class="modal-overlay">
      <div class="modal-window">
        <div class="modal-header">
          <span class="modal-title">Modal title</span>
          <span class="modal-close">&times;</span>
        </div>
        <div class="modal-body" data-content>
          <div class="order-modal">
          
          </div>
        </div>
        <div class="modal-footer">
          <p> Сумма заказа <span id="result">0</span> грн.</p>
          <button>Заказать</button>
        </div>
      </div>
    </div>
  `)
  document.body.appendChild(modal)

  let title = document.querySelector(".modal-title");
  title.textContent = options.title || "";

  let modalWidth = document.querySelector(".modal-window")
  // modalWidth.style.width = options.width || "680px";
  
  return modal
}

function createModal() {

  _createModal(backet)
  let vmodal = document.querySelector(".vmodal")
  let backetButton = document.querySelector(".backet")

  let windowModal = {
    open() {
      vmodal.classList.add("open")
    },
    close(event) {
      if ( event.target.className == 'modal-overlay' ||  event.target.className == 'modal-close') 
      vmodal.classList.remove("open")
    }
  }

  backetButton.addEventListener("click", windowModal.open)
  vmodal.addEventListener("click", windowModal.close)
}

createModal()