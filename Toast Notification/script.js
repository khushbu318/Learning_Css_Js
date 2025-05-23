const button = document.getElementById('button')

const toasts = document.getElementById('toasts')

const message = [
    "Message One",
    "Message Two",
    "Message Three",
]
const types = ["info","success","error"]
button.addEventListener('click', () => {
    Notify();
})

function Notify(message = null , type = null) {
    const notif = document.createElement('div')

    notif.classList.add(type ? type : getType())
    notif.classList.add('toast')

    notif.innerText = message ? message : getMessage()

    toasts.appendChild(notif)
    setTimeout(() => {
        notif.remove()
    }, 3000)
}

function getMessage() {
    return message[Math.floor(Math.random() * message.length)]
}

function getType() {
    return types[Math.floor(Math.random() * types.length)]
}