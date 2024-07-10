let navSearchDropdwn = document.querySelector(".nav-search-dropdwn")
let navSearchIcon = document.querySelector(".nav-search-icon")
let navSearchInput = document.querySelector(".nav-search-input")
navSearchDropdwn.addEventListener('click', () => {
    navSearchDropdwn.classList.toggle("active")
})
navSearchIcon.addEventListener('click', () => {
    navSearchIcon.classList.toggle("active")
})
navSearchInput.addEventListener('click', () => {
    document.querySelector(".nav-search").classList.toggle("active")
})

let slide1 = document.querySelector('.slide1')
let backbtn1 = document.getElementById("prev1") 
let nxtbtn1 = document.getElementById("next1")
nxtbtn1.addEventListener("click", () => {
    slide1.style.scrollBehavior = "smooth";
    slide1.scrollLeft += 1300;
})
backbtn1.addEventListener("click", () => {
    slide1.style.scrollBehavior = "smooth";
    slide1.scrollLeft -= 1300;
})

let slide2 = document.querySelector('.slide2')
let backbtn2 = document.getElementById("prev2") 
let nxtbtn2 = document.getElementById("next2")
nxtbtn2.addEventListener("click", () => {
    slide2.style.scrollBehavior = "smooth";
    slide2.scrollLeft += 1300;
})
backbtn2.addEventListener("click", () => {
    slide2.style.scrollBehavior = "smooth";
    slide2.scrollLeft -= 1300;
})

let slide3 = document.querySelector('.slide3')
let backbtn3 = document.getElementById("prev3") 
let nxtbtn3 = document.getElementById("next3")
nxtbtn3.addEventListener("click", () => {
    slide3.style.scrollBehavior = "smooth";
    slide3.scrollLeft += 1300;
})
backbtn3.addEventListener("click", () => {
    slide3.style.scrollBehavior = "smooth";
    slide3.scrollLeft -= 1300;
})

let slide4 = document.querySelector('.slide4')
let backbtn4 = document.getElementById("prev4") 
let nxtbtn4 = document.getElementById("next4")
nxtbtn4.addEventListener("click", () => {
    slide4.style.scrollBehavior = "smooth";
    slide4.scrollLeft += 1300;
})
backbtn4.addEventListener("click", () => {
    slide4.style.scrollBehavior = "smooth";
    slide4.scrollLeft -= 1300;
})

let slide5 = document.querySelector('.slide5')
let backbtn5 = document.getElementById("prev5") 
let nxtbtn5 = document.getElementById("next5")
nxtbtn5.addEventListener("click", () => {
    slide5.style.scrollBehavior = "smooth";
    slide5.scrollLeft += 900;
})
backbtn5.addEventListener("click", () => {
    slide5.style.scrollBehavior = "smooth";
    slide5.scrollLeft -= 900;
})

let productDetails = [
    {
        src: "./images/row5/box3/pic1.jpg",
        desc: "ZEROLINE 1 Seater Swing Chair Without Stand & Cushion & Hook Indoor Outdoor Living Room Bal...",
        price: "7,699",
        mrp: "₹12,999.00"
    },
    {
        src: "./images/row5/box3/pic2.jpg",
        desc: "Smartkart Pouffes Sitting Stool for Living Room Mudda Puffy Wooden Ottoman Stools Poof Foot...",
        price: "2,179",
        mrp: "₹4,999.00"
    },
    {
        src: "./images/row5/box3/pic3.jpg",
        desc: "IDEAL HANDICRAFTS Hand-Made Velvet 3 Seater Modern Chesterfield Button Tufted Sofa for Livin...",
        price: "15,999",
        mrp: "₹27,999.00"
    },
    {
        src: "./images/row5/box3/pic4.jpg",
        desc: "SARANSH Collection Wooden Room Partition Room Divider Wooden Partition for Living Room...",
        price: "3,999",
        mrp: "₹6,999.00"
    }
]

let productImage = document.getElementById("productImage")
let productDesc = document.getElementById("productDesc")
let productPrice = document.getElementById("productPrice")
let productMrp = document.getElementById("productMrp")
let miniBox = document.querySelectorAll(".mini-product-box")
function changeProduct(id){
    productImage.src = productDetails[id].src
    productDesc.innerHTML = productDetails[id].desc
    productPrice.innerHTML = productDetails[id].price
    productMrp.innerHTML = productDetails[id].mrp
    miniBox.forEach(e => {
        e.classList.remove("active")
    });
    miniBox[id].classList.add("active")
}