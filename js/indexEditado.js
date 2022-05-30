function createCard(productItem) {
  const ulCardList = document.querySelector('.cardList');

    const liCard = document.createElement('li');
    liCard.classList.add('card');

      const cardImg = document.createElement('img');
      cardImg.classList.add('card__image');

      const spanCardTag = document.createElement('span');
      spanCardTag.classList.add('card__tag');

      const h2CardTitle = document.createElement('h2');
      h2CardTitle.classList.add('card__title');

      const pCardDescription = document.createElement('p');
      pCardDescription.classList.add('card_description');

      const spanCardPrice = document.createElement('span');
      spanCardPrice.classList.add('card__price');

      const cardButton = document.createElement('button');
      cardButton.classList.add('card__button');

  cardImg.src = productItem.img;
  spanCardTag.innerText = productItem.tag;
  h2CardTitle.innerText = productItem.nameItem;
  pCardDescription.innerText = productItem.description;
  spanCardPrice.innerText = `R$${productItem.value},00`;
  cardButton.innerText = productItem.addCart;

  cardButton.id = productItem.id;
  cardButton.addEventListener('click', () => {
    checkoutCard(productItem);
  });

  liCard.append(cardImg, spanCardTag, h2CardTitle, pCardDescription, spanCardPrice, cardButton);
  ulCardList.append(liCard);

}

function dataBaseIteration(productsData) {

  document.getElementById('cardList').innerHTML = '';

  for(let index = 0; index < productsData.length; index++){

    const productItem = productsData[index];

    createCard(productItem);

  }
  
}
dataBaseIteration(data);

//renderizando cards no carrinho
function checkoutCard(event) {

  const divCheckoutCard = document.querySelector('.checkout__card');

    const tagImg = document.createElement('img');
    tagImg.classList.add('checkoutCard__image');

    const tagH5 = document.createElement('h5');
    tagH5.classList.add('checkoutList__title');

    const tagSpan = document.createElement('span');
    tagSpan.classList.add('checkoutList__price');

    const tagButton = document.createElement('button');
    tagButton.classList.add('checkoutList__btn');

    tagImg.src = event.img;
    tagH5.innerText = event.nameItem;
    tagSpan.innertext = `R$${event.value},00`;
    tagButton.innerText = 'Remover produto'; //adicionar eventListener para a função removeCheckoutCard

    divCheckoutCard.append(tagImg, tagH5 , tagSpan, tagButton);

}

/* function removeCheckoutCard(event) {
  
  const target = event.target;
  const divCheckoutCard = target.parentElement;

  divCheckoutCard.parentElement.remove();

} */

//filtrando por categoria.
const buttonFilterTodos = document.getElementById('principal');
buttonFilterTodos.addEventListener('click', function() {

    let produtoTodos = [];

    data.forEach((element) => {
    produtoTodos.push(element);

});

  dataBaseIteration(produtoTodos);

});


const buttonFilterAcessorio = document.getElementById('acessorio');
buttonFilterAcessorio.addEventListener('click', function() {

  let produtoAcessorio = [];

  data.forEach((element) => {
    if(element.tag == 'Acessórios') {
      produtoAcessorio.push(element);
    }
  });

  dataBaseIteration(produtoAcessorio);

});

const buttonFilterCalcado = document.getElementById('camiseta');
buttonFilterCalcado.addEventListener('click', function() {

  let produtoCalcado = [];

  data.forEach((element) => {
    if(element.tag == 'Camisetas') {
      produtoCalcado.push(element);
    }
  });

  dataBaseIteration(produtoCalcado);

});


//filtrando por nome.
const searchInput = document.querySelector('.search__input');
searchInput.addEventListener('keyup', filterByName);

function filterByName() {

  let value = '';

  value = searchInput.value;

  let filtro = [];
  let newStr = '';

  for(let index = 0; index < data.length; index++) {
    newStr = data[index].nameItem;
    if(newStr.includes(value.toUpperCase()) || newStr.includes(value.toLowerCase())) {
        filtro.push(data[index]);
    }
  }

  dataBaseIteration(filtro);

}