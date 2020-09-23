var burger = document.getElementById('burger')

burger.addEventListener('click', function () {
    console.log("clicked")
    burger.classList.toggle('active')
})