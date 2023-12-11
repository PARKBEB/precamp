// function send() {
//     document.getElementById("num").innerText = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
// }

// function send() {
//     const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
//     document.getElementById("num").innerText = token 
// }

const send = () => {
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    document.getElementById("num").innerText = token
    document.getElementById("num").style.color = "#" + token
    // const random__color = (Math.floor(Math.random() * 0xffffff)).toString(16) // 0x000000 ~ 0xffffff
    // document.getElementById("num").style.color = "#" + random__color
}

