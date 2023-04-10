



let distanceLeft = 5
let distanceTop = 5


let prevLeft = 0
let prevTop = 0

let leftCount = 0
let topCount = 0





const dataArray = Object.keys(localStorage)

let counter = 0

// axios.get("https://api.unsplash.com/photos/?client_id=DVg-rusOs1a98KWFGJqnADgObgZq_OPYjCNj4SEjHWM").then((res) => {
//     res.data.forEach(val => {
//         localStorage.setItem(val.urls.raw, "0")
//         dataArray.push(val.urls.raw)
//     });
// })




console.log(dataArray);

window.addEventListener("mousemove", e => {

    if (prevLeft != e.clientX) {
        prevLeft = e.clientX
        leftCount++
    }

    if (prevTop != e.clientY) {
        prevTop = e.clientY
        topCount++
    }


    let newDiv = document.createElement('img')
    let randomWidth = getRndInteger(200, 500)

    newDiv.src = dataArray[counter]
    counter++
    if (counter == dataArray.length) {
        counter = 0
    }

    newDiv.width = randomWidth + "px"
    newDiv.style.top = e.clientY + "px"
    newDiv.style.left = e.clientX + "px"

    newDiv.animate({
        width: `${randomWidth}px`,

    }, { duration: 200, fill: "forwards" })


    if (leftCount > distanceLeft || topCount > distanceTop) {
        if (document.querySelector(".maincontainer").children.length > 5) {
            document.querySelector(".maincontainer").children[0].remove()
        }
        document.querySelector('.maincontainer').append(newDiv)
        leftCount = 0
        topCount = 0

    }


    // console.log(e);
})


window.addEventListener("keydown", (e) => {
    if (e.key === "5") {
        for (let i = 0; i < document.querySelector(".maincontainer").children.length; i++) {
            document.querySelector(".maincontainer").children[i].remove()
        }
    }
})




function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}