let orderMoneys = document.querySelectorAll(".order-money")

let ducks = [
    {id: 1, title: "Утка дракон", cost: 135, img: "image/dyno.png", alt: "утка дракон",             inStock: true,  hot: false, new: false},
    {id: 2, title: "Королевская утка", cost: 150, img: "image/queen.png", alt: "утка королева",     inStock: false, hot: true,  new: false},
    {id: 3, title: "Демоническая утка", cost: 165, img: "image/devil.png", alt: "утка демон",       inStock: true,  hot: true,  new: false},
    {id: 4, title: "Утка-детектив", cost: 135, img: "image/sherlock.png", alt: "утка детектив",     inStock: true,  hot: false, new: true},
    {id: 5, title: "Раста утка", cost: 135, img: "image/rasta.png", alt: "утка раста",              inStock: false, hot: true,  new: true},
    {id: 6, title: "Утка-паук", cost: 150, img: "image/spider.png", alt: "утка паук",               inStock: true,  hot: false, new: false},
    {id: 7, title: "Утка-ангел", cost: 135, img: "image/angel.png", alt: "утка ангел",              inStock: true,  hot: false, new: true},
    {id: 8, title: "Утка-пчёлка", cost: 135, img: "image/bee.png", alt: "утка пчёлка",              inStock: false, hot: false, new: true},
    {id: 9, title: "Утка-доктор", cost: 150, img: "image/doctor.png", alt: "утка доктор",           inStock: true,  hot: true,  new: false},
    {id: 10, title: "Утка-футболист", cost: 135, img: "image/football.png", alt: "утка футболист",  inStock: true,  hot: false, new: false},
    {id: 11, title: "Утка-король", cost: 150, img: "image/king.png", alt: "утка король",            inStock: true,  hot: false, new: true},
    {id: 12, title: "Утка-куколка", cost: 150, img: "image/lettledoll.png", alt: "утка куколка",    inStock: true,  hot: false, new: true},
    {id: 13, title: "Утка-кинотеатр", cost: 150, img: "image/monitor.png", alt: "утка кинотеатр",   inStock: false, hot: true,  new: true},
    {id: 14, title: "Утка-паукан", cost: 135, img: "image/pauk.png", alt: "утка паукан",            inStock: false, hot: true,  new: false},
    {id: 15, title: "Утка-пират", cost: 135, img: "image/piret.png", alt: "утка пират",             inStock: true,  hot: false, new: true},
    {id: 16, title: "Утка-гонщик", cost: 135, img: "image/racer.png", alt: "утка гонщик",           inStock: false, hot: false, new: false},
    {id: 17, title: "Утка-скелетон", cost: 150, img: "image/skeleton.png", alt: "утка скелетон",    inStock: true,  hot: true,  new: false},
    {id: 18, title: "Утка-супергёрл", cost: 150, img: "image/supergirl.png", alt: "утка супергёрл", inStock: true,  hot: false, new: false},
    {id: 19, title: "Утка-супермен", cost: 150, img: "image/superman.png", alt: "утка супермен",    inStock: true,  hot: false, new: false},
    {id: 20, title: "Утка-плавун", cost: 135, img: "image/swim.png", alt: "утка плавун",            inStock: true,  hot: false, new: true}
]

const toHTML = duck => `
    <div class="duck-item" id="${duck.id}">
        <p><img src="${duck.img}" alt="${duck.alt}" width="200px" height="200px"></p>
        <h2>${duck.title}</h2>
        <p> <span>${duck.cost}</span> грн. <button class="button-order">Добавить в корзину</button> </p>
    </div>
`

function render() {
  const html = ducks.map(toHTML).join('')
  document.querySelector('.ducks-items').innerHTML = html
}

render()

let buttonOrders = document.querySelectorAll(".button-order")
let orderNumber = document.querySelector("#number-of-ducks")

orderNumber.textContent = 0

document.onclick = function() {
    let target = event.target
    if (target.className != "button-order") return false
    orderNumber.textContent++
    target.classList.add("ordered") 
    target.textContent = "В корзине"
    target.disabled = true
}

let duckItems = document.querySelectorAll(".duck-item")
let orderModal = document.querySelector(".order-modal")

// В наличии / горячие / новые
for (let j = 0; j < duckItems.length; j++) {
    if (!ducks[j].inStock) {
        duckItems[j].classList.add("not-in-stock")
        buttonOrders[j].style.backgroundColor = "lightgray"
        buttonOrders[j].textContent = "Нет в наличии"
        buttonOrders[j].disabled = true
    }
    if (ducks[j].hot) {
        createSmallImage(duckItems[j], "hot")
    }
    if (ducks[j].new) {
        createSmallImage(duckItems[j], "new")
    }
}

function createSmallImage(parent ,classCss) {
    let div = document.createElement("div")
    div.classList.add(classCss)
    parent.appendChild(div)
}
// 

for (let duckItem of duckItems) {
    duckItem.addEventListener("click", addDucksToBucket)
}

function addDucksToBucket() {
    if (event.target.className != "button-order") return false

    let orderDucks = {
        id:    this.id,
        src:   this.querySelector("img").src, 
        alt: this.querySelector("img").alt,
        title: this.querySelector("h2").textContent, 
        money: this.querySelector("span").textContent
    }

    orderModal.insertAdjacentHTML("afterbegin", `
        <div class="order">
            <button id="${orderDucks.id}" class="remove-button">x</button>
            <img src="${orderDucks.src}" alt="${orderDucks.alt}" width="50px" height="50px">
            <p>Игрушечная <span>"${orderDucks.title}"</span></p>
            <p class="order-information">Кол-во <button class="minus" id="minus">-</button><input class="quantity-ducks" value="1" min="0" max="5" disabled><button class="plus" id="plus">+</button>, Цена <span class="order-money">${orderDucks.money}</span> грн.</p>
        </div>
    `)
    
    let order = orderModal.querySelector(".order")
    
    order.addEventListener("click", removeDuck)
    resultSum()
    changeOrder()
}

function removeDuck() {
    if (event.target.className != "remove-button") return;

    let target = buttonOrders[event.target.id - 1]
    let orderDuck = event.target.closest(".order");

    orderDuck.remove();
    orderNumber.textContent--
    target.classList.remove("ordered")
    target.disabled = false
    target.textContent = "Добавить в корзину"
    resultMin(orderDuck)
}

function resultSum() {
    let orderMoney = document.querySelector(".order-money") 
    let plus = +result.textContent

    plus += +orderMoney.textContent
    return result.textContent = +plus
}

function resultMin(deleteItem) {
    let min = result.textContent

    min -= +deleteItem.querySelector(".order-money").textContent
    return result.textContent = min
}

function changeOrder() {
    let orderInformation = document.querySelector(".order-information")
    let quantityDucks = orderInformation.querySelector(".quantity-ducks")
    let orderMoney = orderInformation.querySelector(".order-money")
    let counter = +orderMoney.textContent

    orderInformation.addEventListener("click", plusMinus)

    function plusMinus() {
       
        if (event.target.classList == "plus") {
            quantityDucks.value++
            result.textContent = +result.textContent + counter

            quantityDucks.value >= 5 ? event.target.closest("p").querySelector("#plus").disabled = true 
            : event.target.closest("p").querySelector("#minus").disabled = false
        
        } else if (event.target.classList == "minus") {
            quantityDucks.value--
            result.textContent = +result.textContent - counter
    
            quantityDucks.value <= 1 ? event.target.closest("p").querySelector("#minus").disabled = true 
            :event.target.closest("p").querySelector("#plus").disabled = false
        }
        else return
        orderMoney.textContent = counter * quantityDucks.value
    }
}

// function outNum() {
//     const time = 50;
//     const step = 5;
//     n = +orderMoney.textContent;
//     let interval = setInterval(() => {
//         n = n + step;
//         if(n > counter * quantityDucks.value) {
//             n = counter * quantityDucks.value;
//         } 
//         orderMoney.textContent = n
//         }, time);
//         return orderMoney.textContent
// };
// outNum()