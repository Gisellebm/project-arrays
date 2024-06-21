const buttonShowAll = document.querySelector('.show-all');
const listproducts = document.querySelector('ul');
const buttonMapAll = document.querySelector('.map-all');
const buttonReduceAll = document.querySelector('.reduce-all');
const buttonFilterItem = document.querySelector('.filter-item');

function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    return newValue
}
function showAll(productsArray) {
    listproducts.innerHTML = ''
    productsArray.forEach((item) => {
        return listproducts.innerHTML += `
        <li>
            <img src="${item.src}" alt="">
            <p class="item-name">${item.name}</p>
            <p class="item-price">R$ ${formatCurrency(item.price)}</p>
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
    <p>A soma de todos os itens do menu é: R$ ${formatCurrency(total)}</p>
</li>`
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
buttonReduceAll.addEventListener('click', reduceAllItems)
buttonFilterItem.addEventListener('click', () => {
    const filterVegan = menuOptions.filter((item) => item.vegan)
    showAll(filterVegan)
})