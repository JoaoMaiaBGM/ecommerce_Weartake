//renderizando os cards na vitrine
const ulProductsList = document.querySelector('.productsList')

const liProductsListItem = document.createElement('li')
ulProductsList.appendChild(liProductsListItem)
liProductsListItem.classList.add('productsList__item')

function createCard(productList){

  for(let i = 0; i < productList.length; i++){

    //criando os elementos
    const divProductCard = document.createElement('div')
    liProductsListItem.appendChild(divProductCard)
    divProductCard.classList.add('productCard')

      const divProductCardImage = document.createElement('div')
      divProductCard.appendChild(divProductCardImage)
      divProductCardImage.classList.add('productCard__image')

        const tagImg = document.createElement('img')
        divProductCardImage.appendChild(tagImg)

      const divProductCardBody = document.createElement('div')
      divProductCard.appendChild(divProductCardBody)
      divProductCardBody.classList.add('productCard__body')

        const spanProductCardTag = document.createElement('span')
        divProductCardBody.appendChild(spanProductCardTag)
        spanProductCardTag.classList.add('productCard__tag')

        const h2ProductCardTitle = document.createElement('h2')
        divProductCardBody.appendChild(h2ProductCardTitle)
        h2ProductCardTitle.classList.add('productCard__title')

        const divProductCardDescription = document.createElement('div')
        divProductCardBody.appendChild(divProductCardDescription)
        divProductCardDescription.classList.add('productCard__description')

        const tagP = document.createElement('p')
        divProductCardDescription.appendChild(tagP)

        const spanProductCardPrice = document.createElement('span')
        divProductCardBody.appendChild(spanProductCardPrice)
        spanProductCardPrice.classList.add('productCard__price')

        const buttonProductCardButton = document.createElement('button')
        divProductCardBody.appendChild(buttonProductCardButton)
        buttonProductCardButton.classList.add('productCard__button')
    
    //coletando os valores
      //card__img
    tagImg.src = productList[i].img
      
      //id
    buttonProductCardButton.id = productList[i].id

      //card__body
    spanProductCardTag.innerHTML = productList[i].tag
    h2ProductCardTitle.innerHTML = productList[i].nameItem
    tagP.innerHTML = productList[i].description
    spanProductCardPrice.innerHTML = `R$${productList[i].value},00`
    buttonProductCardButton.innerHTML = productList[i].addCart
    
    buttonProductCardButton.addEventListener('click', () =>{
      addCheckoutCart(productList[i]), summary()
 })
  } 
}
createCard(data)


//adicionando o card no carrinho
const ulcheckoutList = document.querySelector('.checkoutList')

const liCheckoutListItem = document.createElement('li')
ulcheckoutList.appendChild(liCheckoutListItem)
liCheckoutListItem.classList.add('checkoutList__item')

function addCheckoutCart(event){
  
  //criando os elementos
  const divCheckoutCard = document.createElement('div')
    liCheckoutListItem.appendChild(divCheckoutCard)
    divCheckoutCard.classList.add('checkoutCard')

      const divCheckoutCardImage = document.createElement('div')
      divCheckoutCard.appendChild(divCheckoutCardImage)
      divCheckoutCardImage.classList.add('checkoutCard__image')

        const tagImg = document.createElement('img')
        divCheckoutCardImage.appendChild(tagImg)
        
  const divCheckoutCardBody = document.createElement('div')
  divCheckoutCard.appendChild(divCheckoutCardBody)
  divCheckoutCardBody.classList.add('checkoutCard__body')

    const h5CheckoutListTitle = document.createElement('h5')
    divCheckoutCardBody.appendChild(h5CheckoutListTitle)
    h5CheckoutListTitle.classList.add('checkoutList__title')

  const spancheckoutListPrice = document.createElement('span')
  divCheckoutCardBody.appendChild(spancheckoutListPrice)
  spancheckoutListPrice.classList.add('checkoutList__price')

  const buttonCheckoutListBtn = document.createElement('button')
  divCheckoutCardBody.appendChild(buttonCheckoutListBtn)
  buttonCheckoutListBtn.classList.add('checkoutList__btn')

  //coletando os valores
    //card_img
  tagImg.src = event.img

    //id
  buttonCheckoutListBtn.id = event.id

    //card_body
  h5CheckoutListTitle.innerHTML = event.nameItem
  spancheckoutListPrice.innerHTML = `R$${event.value},00`
  buttonCheckoutListBtn.innerText = 'Remover produto'

  buttonCheckoutListBtn.addEventListener('click', (event) =>{
    removeCheckoutCart(event)
})
}


//removendo o card do carrinho
function removeCheckoutCart(event){

  const target = event.target

  const divCheckoutCard = target.parentElement

  divCheckoutCard.parentElement.remove()
}



//calculando a quantidade e o total

const divCheckout = document.querySelector('.checkout')

const divSummary = document.createElement('div')
  divCheckout.appendChild(divSummary)
  divSummary.classList.add('summary')

  const spanSummaryCount = document.createElement('span')
  divSummary.appendChild(spanSummaryCount)
  spanSummaryCount.classList.add('summary__count')

  const spanSummaryTotal = document.createElement('span')
  divSummary.appendChild(spanSummaryTotal)
  spanSummaryTotal.classList.add('summary__total')

function summary(event){

  const element = event.target
  
  let count = 0
  let soma = 0

  for(let i = 0; i < event.length; i++){
      count++
      soma += event[i].value
  }
  
  spanSummaryCount.innerHTML = '<div>Quantidade</div>' + `<div>${count}</div>`

  spanSummaryTotal.innerHTML = '<div>Total</div>' + `<div>R$${soma},00</div>`
  
}