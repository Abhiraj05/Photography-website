// // const image=document.querySelector('.headline')

const headline1 = document.getElementById('1')
const headline2 = document.getElementById('2')
const headline3 = document.getElementById('3')

const st1 = "embrace the moments as"
const st2 = "a journey through special"
const st3 = "memories"
let i = 0, p = 0, n = 0
// setInterval(function () {
//     if (i < st1.length) {
//         headline1.innerHTML += `${st1[i]}`
//     }
//     i++
//     if (i == st1.length) {
//         setInterval(function () {
//             if (p < st2.length) {
//                 headline2.innerHTML += `${st2[p]}`
//             }
//             p++
//             if (p == st2.length) {
//                 setInterval(function () {
//                     if (n < st3.length) {
//                         headline3.innerHTML += `${st3[n]}`
//                     }
//                     n++
//                 }, 100)
//             }
//         }, 100)
//     }
// }, 100)

function third(){
    setInterval(function () {
        if (n < st3.length) {
            headline3.innerHTML += `${st3[n]}`
        }
        n++
    }, 100)
}


function second(){
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




const prewedd = document.querySelector('#prewedd')
const postwedd = document.querySelector('#postwedd')
const prebirth = document.querySelector('#prebirth')
const postbirth = document.querySelector('#postbirth')
const maternity = document.querySelector('#maternity')

const preweddht = document.querySelector('#prewedding')
const postweddht = document.querySelector('#postwedding')
const postbirthht = document.querySelector('#postbirthday')
const prebirthht = document.querySelector('#prebirthday')
const  maternityht= document.querySelector('#maternityph')



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
    prebirthht.hidden= false
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