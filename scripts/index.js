let url = "https://grocery-masai.herokuapp.com/items"

fetch(url)
    .then(function(res) {

        return res.json()
    }).then(function(res) {
        let data = res.data

        console.log(data)

        data.forEach(function(el, index) {

            let div = document.createElement("div")

            let image = document.createElement("img")

            image.src = el.image

            let name = document.createElement("p")

            name.innerText = `NAME:  ${el.name}`

            let price = document.createElement("p")

            price.innerText = `PRICE:  ${el.price}`

            let btn = document.createElement("button")

            btn.innerText = "Add to Cart"



            btn.setAttribute("class", "add_to_cart")

            btn.addEventListener("click", function() {

                addtocart(el, index)

                if (wallet < 50) {
                    alert("Insufficient balance")
                }

                a = JSON.parse(localStorage.getItem("cart_items")).length

                wallet.innerText = a

            })

            div.append(image, name, price, btn)

            document.getElementById("groceries").append(div)
        })
    }).catch(function(err) {

        console.log(err)
    })


let Carts = JSON.parse(localStorage.getItem("cart_items")) || []

function addtocart(el, index) {

    console.log("sanjay")

    Carts.push(el)

    localStorage.setItem("cart_items", JSON.stringify(Carts))


}