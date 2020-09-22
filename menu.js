var burger = document.getElementById('burger')

document.addEventListener('click', function () {
    console.log("clicked")
    burger.classList.toggle('active')
})