let arrowsN = document.querySelector(".arrows .next");
let arrowsP = document.querySelector(".arrows .prev");
let page = document.querySelector(".landing-page")
let slider = document.querySelector(".landing-page .landing");

arrowsN.onclick = function() {
    show("next"); 
}
arrowsP.onclick = function() {
    show("prev"); 
}
let runTimeOut;
function show(type) {
    let sliderItem = document.querySelectorAll(".landing-page .landing .item");
    if(type === "next") {
        slider.appendChild(sliderItem[0]);
        page.classList.add("next");
    }
    else {
        slider.prepend(sliderItem[sliderItem.length - 1]);
        page.classList.add("prev");
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(()=>{
        page.classList.remove("next");
        page.classList.remove("prev");
    },1000)
}

let ulLinks = document.querySelector(".header-links");
let toggle = document.querySelector(".toggle");
let toggleSpan = document.querySelectorAll(".toggle span");
// console.log(toggleSpan[2])
toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    if(toggle.className === "toggle") {
        ulLinks.classList.toggle("show");
        toggleSpan[0].classList.toggle("span1")
        toggleSpan[1].classList.toggle("span2")
        toggleSpan[2].classList.toggle("span3")
    }
})

// let carsBox = document.querySelector(".popular .container");
let carsBox2 = document.querySelector(".popular .cars-box");
let nBtn  = document.querySelector(".popular .next");
let pBtn  = document.querySelector(".popular .prev");

nBtn.onclick = function() {
    moveEle("next");
}
pBtn.onclick = function() {
    moveEle("prev");
}
function moveEle(type) {
    let myCars = document.querySelectorAll(".cars-box .car");
    if(type === "prev") {
        // carsBox2.classList.add("move-left");
        carsBox2.classList.add("move-ele-left");
        carsBox2.appendChild(myCars[0])
        
    } else {
        carsBox2.classList.add("move-ele-right");
        carsBox2.prepend(myCars[myCars.length - 1])
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(()=>{
        // carsBox2.classList.remove("ani-count");
        carsBox2.classList.remove("move-ele-left");
        carsBox2.classList.remove("move-ele-right");
        // page.classList.remove("prev");
    },1000)
    
}


let brandItem = document.querySelectorAll(".brand-list .item");
let cars = document.querySelectorAll(".cars-container .my-car")
// console.log(brandList);

brandItem.forEach(l => {
    l.addEventListener("click" , activeFeat)
    l.addEventListener("click", mangeCar)
    // cars.forEach(car=>{
    // })
})

function activeFeat() {
    brandItem.forEach(l => l.classList.remove("active-feat"))
    this.classList.add("active-feat")
}

function mangeCar() {
    cars.forEach((car)=>{
        car.style.opacity = 0;
        function dNone() {
            car.style.display="none"
        }
        setTimeout(dNone,550)
    })
    document.querySelectorAll(this.dataset.filter).forEach((ele)=>{
        ele.style.opacity = 1;
        function dBlock() {
            ele.style.display="block"
        }
        setTimeout(dBlock,550)
    })
}

let goUp = document.querySelector(".go-up i");
goUp.addEventListener("click", goToUp)

function goToUp() {
    window.scrollTo({
        top:0,
    })
}
window.onscroll = function() {
    if(window.scrollY >= 500) {
        goUp.classList.add("right");
    } else {
        goUp.classList.remove("right");
    }
}

let headreLinks = document.querySelectorAll(".header-links a")
headreLinks[0].addEventListener("click",goToUp)
headreLinks.forEach(a => {
    a.addEventListener("click",(e)=>{
        ulLinks.classList.remove("show");
        toggleSpan[0].classList.remove("span1")
        toggleSpan[1].classList.remove("span2")
        toggleSpan[2].classList.remove("span3")
        e.preventDefault();
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: 'smooth',
        });
    })
})

let about = document.querySelector(".about")
let popular = document.querySelector(".popular")
let features = document.querySelector(".features")
let choseCar = document.querySelector(".chose-car")
let brandList = document.querySelector(".brand-list")
let offers = document.querySelector(".offers")
let logoBrand = document.querySelector(".logo-brand")
let footer = document.querySelector(".footer")
let groupEle = []
groupEle.push(about, popular, features, choseCar, brandList, offers, logoBrand, footer)
// console.log(groupEle)
function scrollTriger() {
    groupEle.forEach(ele => {
        if(window.pageYOffset >= (ele.offsetTop - 150 )) {
            ele.classList.add("scroll")
        } 
        else {
            ele.classList.remove("scroll")
        }
    })
}
window.addEventListener("scroll", scrollTriger)
window.addEventListener("scroll", footers)

function footers() {
    if(window.pageYOffset >= (footer.offsetTop + footer.offsetHeight - window.innerHeight)) {
        footer.classList.add('scroll')
    } else {
        footer.classList.remove('scroll')
    }
}