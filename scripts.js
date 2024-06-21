const buttonShowAll = document.querySelector('.show-all');
const listproducts = document.querySelector('ul');

function showAll() { 
    menuOptions.forEach((item) => {
        return listproducts.innerHTML +=`
            <li>
                <img src="${item.src}" alt="">
                <p class="item-name">${item.name}</p>
                <p class="item-price">R$ ${item.price},00</p>
            </li>
        `
    })

}

buttonShowAll.addEventListener('click', showAll)