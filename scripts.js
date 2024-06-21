const buttonShowAll = document.querySelector('.show-all');
const listproducts = document.querySelector('ul');
const buttonMapAll = document.querySelector('.map-all');

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

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)