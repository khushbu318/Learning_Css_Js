const testimonialContainer = document.querySelector('.testimonials-container')

const testimonial = document.querySelector('.testimonial')

const userImage = document.querySelector('.user-Image')

const username = document.querySelector('.username')

const role = document.querySelector('.role')

const testimonials = []

let idx = 1

function updateTestimonial(){
    const {name,position,photo,text} = testimonials[idx]

    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML = name
    role.innerHTML = position

    idx++

    if(idx > testimonials.length - 1){
        idx = 0
    }
}

setInterval(updateTestimonial , 10000)




