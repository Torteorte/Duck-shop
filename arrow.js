let upButton = document.querySelector('.up-button');
let footer = document.querySelector('footer');

function getCoords(elem) {
  let box = elem.getBoundingClientRect()
  let point = box.bottom + box.top + elem.clientHeight + elem.clientTop
  return point
}

window.onscroll = function () {
  if (window.pageYOffset >= getCoords(footer)) {
    upButton.classList.add('shown');
  } else {
    upButton.classList.remove('shown');
  }

};

upButton.onclick = function () {
  window.scrollTo(0, 0);
};

let footerFields = footer.querySelectorAll('div')

document.onscroll = function () {
  if (window.pageYOffset >= getCoords(footer)) {
    for (let footerField of footerFields) {
      footerField.classList.add('show-footer');
    }
  }
};