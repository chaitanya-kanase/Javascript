const clock = document.querySelector('#clock')

const button = document.querySelector('#start')

button.addEventListener('click', () => {
    setInterval(() => {
        const date = new Date()
        clock.innerHTML = date.toLocaleTimeString();
    },1000)
})
