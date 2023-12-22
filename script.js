const slider = document.querySelector('.slider')
const sliderImages = document.querySelectorAll('.slider_img')
const sliderLine = document.querySelector('.slider_line')

const sliderBtnNext = document.querySelector('.slider_btn-next')
const sliderBtnPrev = document.querySelector('.slider_btn-prev')

let sliderCount = 0
let sliderWidth = slider.offsetWidth

sliderBtnNext.addEventListener('click', nextSlide)

sliderBtnPrev.addEventListener('click', prevSlide)

function nextSlide(){

    sliderCount++
    if (sliderCount >= sliderImages.length){
        sliderCount = 0
    }
    rollSlider()
}

function prevSlide(){

    sliderCount--
    if (sliderCount < 0){
        sliderCount = sliderImages.length -1
    }
    rollSlider()
}

function rollSlider(){
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`
}

setInterval(() =>{
    nextSlide()
}, 5000)


const moveTo = new MoveTo()
const button = document.querySelectorAll("button")
button.forEach(btn => moveTo.registerTrigger(btn))
tippy('[data-tippy-content]',{
    theme: 'light',
    animation: 'shift-away'
})





gsap.to('.home', {
    x: 100,
    // y: 200,
    duration: 11,
    rotation: 360,
    stagger: .5,
    ease: "bonuce.out",
})



IMask (document.getElementById('phone'),{
    mask: '{+7} (000) 000-00-00'
})

IMask (document.getElementById('username'),{
    mask: "aaaaaaaaaaaaaaaaaaaaa",
})



// const INPUTS = document.querySelectorAll('input')

// const patterns = {
//     username: /^\w{5,12}$/,
//     email:   /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})$/,
//     slug:  /^\w{1,12}$/,
// }


// function validate(field, regexp){
//     if (regexp.test(field.value)){
//         field.className = 'valid'
//     } else{
//         field.className = 'invalid'
//     }
// }


// INPUTS.forEach((input) =>{
//     input.addEventListener('keyup', (event) => {
//         // console.log(event.target.attributes.name.value)
//         validate(event.target,patterns[event.target.attributes.name.value])
//     })
// })