const navMenu = document.querySelector(".nav-menu");
const menuBtn = document.querySelector(".menu-btn");
const categoryContainer = document.querySelector(".category-focus .box-container")
const sliderRiaghtBtn = document.querySelector(".slider-right")
const categorybox = document.querySelectorAll(".category-focus .box-container .box")

// show nav menu 
menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show")
})
// translate box container to right 
let boxLenght = categorybox.length - 5
let currentSlider = 0
sliderRiaghtBtn.addEventListener("click", (e) => {
    currentSlider++
    if (currentSlider > boxLenght) {
        categoryContainer.style.transform = "translateX(0px)"
        currentSlider = 0
    } else {
        categoryContainer.style.transform += "translateX(-280px)"

    }

})
// translate products container to right 
const categoryPtoductsContainer = document.querySelector(".products .box-container")
const sliderRiaghtBtnProducts = document.querySelector(".slider-right-products")
const categoryboxProducts = document.querySelectorAll(".products .box-container .box")
const categoryType = document.querySelectorAll(".products .categoty")

let boxLenghtProducts = categoryboxProducts.length - 5
let currentSliderProducts = 0
sliderRiaghtBtnProducts.addEventListener("click", (e) => {
    currentSliderProducts++
    if (currentSliderProducts > boxLenghtProducts) {
        categoryPtoductsContainer.style.transform = "translateX(0px)"
        currentSliderProducts = 0
    } else {
        categoryPtoductsContainer.style.transform += "translateX(-280px)"

    }
})
// choise your category products
categoryType.forEach((cate) => {

    cate.addEventListener("click", () => {
        // defult translate container box
        categoryPtoductsContainer.style.transform = "translateX(0px)"
        // remove class dontShow
        categoryboxProducts.forEach((box) => {
            box.classList.remove("dont-show")
        })

        // remove active from all category
        categoryType.forEach((cate) => {
            cate.classList.remove("active")
        })
        // add active to category select
        cate.classList.add("active")
        console.log(cate.dataset.type)
        // choise box category selected
        categoryboxProducts.forEach((box) => {
            if (box.id !== cate.dataset.type) {
                box.classList.add("dont-show")
            }
        })
        // choise all category
        if (cate.dataset.type === "all") {
            categoryboxProducts.forEach((box) => {
                box.classList.remove("dont-show")
            })
        }
    })
})