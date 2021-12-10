//js for navbar 
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('nav-bar')[0]

toggleButton.addEventListener('click', function () {
  navbarLinks.classList.toggle('active')
})
//take the navbar links and acces the different classes on it(use classlist)then toggle the active class(meaning if the active class exist it will add it and if it dosesnt exist it will remove it)//



(function () {  
let addToCartButtons =  document.getElementsByClassName('buy')
 let mainContainer =  document.getElementsByTagName('tbody')[0];

 
 for (let i = 0; i < addToCartButtons.length; i++) {addToCartButtons[i].addEventListener('click', addToCartClicked)
 }

 function addToCartClicked(event) {
   
   let cartItem = document.createElement('tr');
   let btn = event.target
   let parentElement = btn.parentElement
   let image = parentElement.children[0].src;
   let name = parentElement.children[2].innerHTML
   let price = parentElement.children[3].innerHTML.replace('N', "")
  
 console.log(image, name, price)
  

   cartItem.innerHTML=`<td class="product-image"><img  src=${image} width="50px"> </td>
              <td class="product-name">${name}</td>
              <td class="product-price">${price}</td>
              <td class="product-quantity"><input type='number' class='num' value='1'> </td>
              <td class="product-finalPrice">${price}</td>`

           
       
 }
})() 