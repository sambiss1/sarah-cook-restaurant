
let container = document.querySelector(".container");
let foodlist__container = document.querySelector(".foodlist__container");
let foodlist = document.querySelector(".foodlist");
let foodimagecontainer = document.querySelector(".food__image--container")
let foodimage = document.querySelector(".food__image--preview");
let foodprice = document.querySelector(".foodprice")



// We create food in an array of object 
let foodList = [
    { id: 0, name: "Butter", image: "./src/images/butter.jpg", price: 15 },
    { id: 1, name: "Bhicken", image: "./src/images/chicken.jpg", price: 30 },
    { id: 2, name: "Cheeseburger", image: "./src/images/cheeseburger.jpg", price: 50 },
    { id: 3, name: "Bean", image: "./src/images/bean.jpg", price: 20 }
];

// This id will help us to change food picture
let id = null

// We loop trough our array to get food list 
for (const food of foodList) {
    foodlist.innerHTML += `
            <li class="fooditem" id="id${food.id}">${food.name}
            <h4 class="foodprice">${food.price} $</h4>
            </li>
            
        `
    let fooditem = document.querySelectorAll(".fooditem");
    for (const item of fooditem) {
        item.addEventListener("click", () => {
            id = item.id.slice(2)
            foodimagecontainer.style = "display: flex"
            foodimage.src = foodList[id].image;
            foodprice.textContent = foodList[id].price;
        })
    }
}