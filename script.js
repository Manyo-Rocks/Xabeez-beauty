//javascript code for menu bar
var toggleButton = document.getElementsByClassName('toggle-button')[0]
var navbarLinks = document.getElementsByClassName('navbar-links')[0]

//take the navbar links and acces the different classes on it(use classlist)then toggle the active class(meaning if the active class exist it will add it and if it dosesnt exist it will remove it)//

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

//javascript code for add to cart button
var addToCart = document.getElementsByClassName('buy');
var mainContainer = document.getElementsByTagName("tbody")[0];

for (var i =0; i< addToCart.length; i++){
addToCart[i].addEventListener('click', addItem)
}
function addItem(event){
 let btn = event.target;
 let btn_parent = btn.parentElement
  let itemName = btn_parent.children[2].innerText;
  let itemImage = btn_parent.children[0].src;
  let itemPrice = btn_parent.children[3].innerHTML;


var itemContainer = document.createElement('tr');
itemContainer.innerHTML = `
                    <td><input class="uk-checkbox" type="checkbox"></td>
                    <td><img class="image" width="40" alt="">${itemImage}</td>
                    <td class="uk-table-link">
                        <h3 class = "name">${itemName}</h3>
                    </td>
                    <td class="uk-text-truncate item-price"><h3>${itemPrice}</h3></td>
                    <td><input type = 'number' class = 'num' value = '1'></td>
                    <td class="uk-text-truncate total-price"><h3>$100</h3></td>
                    <td><button class="uk-button uk-button-danger" type="button">Remove</button></td>`
                    
mainContainer.appendChild(itemContainer);
}