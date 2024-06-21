const buttonShowAll = document.querySelector('.show-all');
const listproducts = document.querySelector('ul');
const buttonMapAll = document.querySelector('.map-all');
const buttonReduceAll = document.querySelector('.reduce-all');

function showAll(productsArray) { 
    listproducts.innerHTML = ''
    productsArray.forEach((item) => {
        return listproducts.innerHTML +=`
            <li>
                <img src="${item.src}" alt="">
                <p class="item-name">${item.name}</p>
                <p class="item-price">R$ ${item.price},00</p>
            </li>
        `
    })

}

function mapAllItems() {
    const newPrices = menuOptions.map((item) => ({
        ...item,
        price: item.price * 0.9,
    }))

    showAll(newPrices)
}

function reduceAllItems() {
    const total = menuOptions.reduce((acc, item) => acc + item.price, 0)
    return listproducts.innerHTML = `
    <li>
        <p>A soma de todos os itens do menu é: R$ ${total},00</p>
    </li>`
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
buttonReduceAll.addEventListener('click', reduceAllItems)