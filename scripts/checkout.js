function getdata(e) {

    e.preventDefault()
    let form = document.getElementById("form")

    let name = form.user_name.value

    console.log("name", name)

    let number = form.user_number.value

    console.log("number", number)

    let address = form.user_address.value

    console.log("address", address)
    alert("Your order is confirmed")


    let a = setInterval(function() {
        alert("Your order is being Packed")
    }, 3000)

    let b = setInterval(function() {
        alert("Your order is in transit")
    }, 8000)
    let c = setInterval(function() {
        alert("Your order is out for delivery")
    }, 10000)
    let d = setInterval(function() {
        alert("Order delivered")
    }, 12000)



}