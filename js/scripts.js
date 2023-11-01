console.log('Im connected')

const hb = document.querySelector('#hamburgerBtn')
const pw = document.querySelector('#pageWrapper')

hb.addEventListener('click', ()=>{
    pw.classList.toggle()
})
import { hotels } from "../data/data.js";
const target = document.querySelector('#target')


hotels.forEach((hotel)=>{
    const mySection = document.createElement('section')

    const hotelName = document.createElement('h3')
    hotelName.textContent = hotel.name

    const hotelImg = document.createElement('img')
    hotelImg.src = `images/${hotel.photo}`
    hotelImg.alt = hotel.name

    const hotelNumber = document.createElement('a')
    hotelNumber.textContent = hotel.number
    hotelNumber.href = `tel:${hotel.number}`

    const hotelAddress = document.createElement ('address')
    hotelAddress.innerHTML = `${hotel.address[0]} <br> ${hotel.address[1]} `

    mySection.appendChild(hotelName)
    mySection.appendChild(hotelImg)
    mySection.appendChild(hotelNumber)
    mySection.appendChild(hotelAddress)
    target.appendChild(mySection)
})

const rightNow = new Date()
console.log(rightNow.getFullYear())

document.querySelector('#year').textContent = rightNow.getFullYear();
