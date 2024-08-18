// // const image=document.querySelector('.headline')

const headline1 = document.getElementById('line_one')
const headline2 = document.getElementById('line_two')
const headline3 = document.getElementById('line_three')

const st1 = "embrace the moments as"
const st2 = "a journey through special"
const st3 = "memories"
let i = 0, p = 0, n = 0

//typewritier code landing page
function third() {
    setInterval(function () {
        if (n < st3.length) {
            headline3.innerHTML += `${st3[n]}`
        }
        n++
    }, 100)
}


function second() {
    setInterval(function () {
        if (p < st2.length) {
            headline2.innerHTML += `${st2[p]}`
        }
        p++
        if (p == st2.length) {
            third()
        }
    }, 100)
}


setInterval(function () {
    if (i < st1.length) {
        headline1.innerHTML += `${st1[i]}`
    }
    i++
    if (i == st1.length) {
        second()
    }
}, 100)



//gallery buttons
const prewedd = document.querySelector('#prewedd')
const postwedd = document.querySelector('#postwedd')
const prebirth = document.querySelector('#prebirth')
const postbirth = document.querySelector('#postbirth')
const maternity = document.querySelector('#maternity')

const preweddht = document.querySelector('#prewedding')
const postweddht = document.querySelector('#postwedding')
const postbirthht = document.querySelector('#postbirthday')
const prebirthht = document.querySelector('#prebirthday')
const maternityht = document.querySelector('#maternityph')



prewedd.addEventListener('click', function () {
    preweddht.hidden = false
    postweddht.hidden = true
    postbirthht.hidden = true
    prebirthht.hidden = true
    maternityht.hidden = true


})


postwedd.addEventListener('click', function () {
    preweddht.hidden = true
    postweddht.hidden = false
    postbirthht.hidden = true
    prebirthht.hidden = true
    maternityht.hidden = true
})


prebirth.addEventListener('click', function () {
    preweddht.hidden = true
    postweddht.hidden = true
    postbirthht.hidden = true
    prebirthht.hidden = false
    maternityht.hidden = true
})


postbirth.addEventListener('click', function () {
    preweddht.hidden = true
    postweddht.hidden = true
    postbirthht.hidden = false
    prebirthht.hidden = true
    maternityht.hidden = true
})


maternity.addEventListener('click', function () {
    preweddht.hidden = true
    postweddht.hidden = true
    postbirthht.hidden = true
    prebirthht.hidden = true
    maternityht.hidden = false
})







//form validation
let btn = document.getElementById('btn')
btn.addEventListener("submit", function (event) {
    event.preventDefault()
    const customer_name = document.getElementById('name')
    const phone = document.getElementById('phone')
    const customer_address = document.getElementById('address')
    function istring(name, address) {
        if (typeof name == "string") {
            if ((!isNaN(name))) {
                alert("Please Enter Valid Name")
            }

        }

        if (typeof address == "string") {
            if ((!isNaN(address))) {
                alert("Please Enter Valid Address")
            }

        }
    }

    istring(customer_name,customer_address)

    function isnumber(phone) {

        if (isNaN(phone)) {
            alert("Please The Valid Phone Number")
        }

    }
    isnumber(phone)

})