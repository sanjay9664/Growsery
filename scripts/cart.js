let show = JSON.parse(localStorage.getItem("cart_items"))

console.log(show)

show.forEach(function(el, index) {

    let div = document.createElement("div")

    let image = document.createElement("img")

    image.src = el.image

    let name = document.createElement("p")

    name.innerText = `NAME:  ${el.name}`

    let price = document.createElement("p")

    price.innerText = `PRICE:  ${el.price}`

    let btn = document.createElement("button")

    btn.innerText = "Remove"



    btn.setAttribute("class", "add_to_cart")

    btn.addEventListener("click", function() {

        removeItems(el, index)
    })

    div.append(image, name, price, btn)

    document.getElementById("cart").append(div)
})


function removeItems(el, index) {

    show.splice(index, 1)

    localStorage.setItem("cart_items", JSON.stringify(show))

    window.location.reload()
}

let sum = 0

for (var a = 0; a < show.length; a++) {
    sum = sum + show[a].price
}

document.getElementById("cart_total").append("TOTAL BILL =  ", sum)

console.log(sum)