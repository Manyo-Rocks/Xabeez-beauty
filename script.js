 //javascript code for menu bar
 const toggleButton = document.getElementsByClassName('toggle-button')[0]
 const navbarLinks = document.getElementsByClassName('navbar-links')[0]

 //take the navbar links and acces the different classes on it(use classlist)then toggle the active class(meaning if the active class exist it will add it and if it dosesnt exist it will remove it)//

 toggleButton.addEventListener('click', () => {
   navbarLinks.classList.toggle('active')
 })

// //javascript code for add to cart button
//  const cartContainer = document.getElementsByTagName("tbody")[0];    
              
// const addToCart = document.getElementsByClassName('buy');

// for (var i =0; i< addToCart.length; i++){
// addToCart[i].addEventListener('click', addItem)
// }
// function addItem(event){
//   let btn = event.target;
//   let btnParent = btn.parentElement
//   let itemName = btnParent.children[2].innerText;
//   let itemImage = btnParent.children[0].src;
//   let itemPrice = btnParent.children[3].innerText;

//   let itemContainer = document.createElement('tr');
//   itemContainer.innerHTML = `
//     <td><img class="item-image" src=${itemImage} width="40" alt=""></td>
//     <td class = "item-name">${itemName}</h3>
//     </td>
//     <td class="item-price"><h3>${itemPrice}</h3></td>
//     <td><input type = 'number' class = 'num' value = '1'></td>
//     <td class="total-price"><h3>${itemPrice}</h3></td>
//     <td><button class="delete-button" type="button">Remove</button></td>
// `
// console.log(itemContainer)

//    cartContainer.appendChild(itemContainer);

// }
// /*"Uncaught TypeError: cartContent.appendChild is not a function at HTMLButtonElement.addItem " how can i solve this*/

const emailBtn = document.getElementsByClassName("email-btn")
  for (var i =0; i< emailBtn.length; i++){
    emailBtn[i].addEventListener('click', function(){
      alert("your email has been sent")
    })
  }
