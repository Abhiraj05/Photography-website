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
document.querySelector('form').addEventListener("submit", function (event) {
    event.preventDefault();
    
    const customer_name = document.getElementById('name').value.trim();
    const customer_phone = document.getElementById('phone').value.trim();
    const customer_address = document.getElementById('address').value.trim();
    
    function validateString(value, fieldName) {
        if (!isNaN(value) || value === "") {
            alert(`Please enter a valid ${fieldName}`);
            return false;
        }
        return true;
    }

    function validatePhone(phone) {
        if (isNaN(phone) || phone.length < 10) {
            alert("Please enter a valid phone number");
            return false;
        }
        return true;
    }

    const isNameValid = validateString(customer_name, "name");
    const isAddressValid = validateString(customer_address, "address");
    const isPhoneValid = validatePhone(customer_phone);

    if (isNameValid && isAddressValid && isPhoneValid) {
  
        alert("Form submitted successfully!");
      
    }
});

