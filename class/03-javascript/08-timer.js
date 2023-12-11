// 내장함수

// 시간 지연 함수, 시간 단위는 ms > 10초 = 10000ms 
//setTimeout(func, time) // 지정된 시간 뒤에 함수 작동
//시간 반복 함수
//setInterval(func, time) // 지정된 시간 마다 함수 작동

// setTimeout(function() {
//     console.log("펑")
// }, 3000)

// setInterval(function() {
//     console.log("1초가 지났다")
// },1000)

// let t = 10
// setInterval(function() {
//     if (t >= 0) {
//         console.log(t)
//         t = t - 1
//     }
// },1000)

let time = 180

let interval

function send() {
    if (interval) {
        clearInterval(interval);
        time = 180
    }

    let token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    document.getElementById("target").innerText = token
    document.getElementById("target").style.color = "#" + token

    document.getElementById("btn").disabled = false

    interval = setInterval(function() {
        if (time >= 0) {
            let min = String(Math.floor(time / 60))
            let sec = String(time % 60).padStart(2, "0")

            document.getElementById("time").innerText = `${min} : ${sec}`
            
            time = time - 1
        } else {
            document.getElementById("btn").disabled = true
        }
    },1000)
}

function complete() {
    time = 0
    document.getElementById("time").innerText = "0 : 00"
    document.getElementById("send__btn").disabled = true
    document.getElementById("btn").disabled = true
}
