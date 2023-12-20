// 휴대폰 입력
function onInput1() {
    let p1 = document.getElementById("phone1").value

    if (p1.length === 3) {
        document.getElementById("phone2").focus()
    }
}

function onInput2() {
    let p2 = document.getElementById("phone2").value

    if (p2.length === 4) {
        document.getElementById("phone3").focus()
    }
}

// 인증번호전송 버튼 활성화
function onInput3() {
    let p3 = document.getElementById("phone3").value

    if (p3.length === 4) {
        document.getElementById("send__btn").disabled = false
        document.getElementById("send__btn").style = "border: 1px solid #0068FF; background: #FFF; color: #0068FF;"
    }
}

let time = 180
let interval

// 인증번호 생성
function send() {
    if (interval) { // 숫자인 경우 true
        clearInterval(interval)
        time = 180
    } 

    let token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    document.getElementById("target").innerText = token
    document.getElementById("target").style.color = "#" + token
    
    document.getElementById("complete__btn").disabled = false
    document.getElementById("complete__btn").style = "background-color: #0068FF; color: #fff;"

    interval = setInterval (function() {   // setInterval은 숫자 또는 undefined의 값을 가짐
        if (time >= 0) {
            
            let min = String(Math.floor(time / 60))
            let sec = String((time % 60)).padStart(2, "0")
            
            document.getElementById("time").innerText = `${min} : ${sec}`
        
            time = time - 1
        } else {
            document.getElementById("time").innerText = "0 : 00"
            document.getElementById("complete__btn").disabled = true
            document.getElementById("complete__btn").style = "background: #FFF; border: 1px solid #b4b0b0; color: #b4b0b0;"
            
            document.getElementById("target").innerText = "0000000"
            document.getElementById("send__btn").disabled = true
            document.getElementById("send__btn").style = "background: #FFF; border: 1px solid #b4b0b0; color: #b4b0b0;"

            document.getElementById("submit__btn").disabled = false
            document.getElementById("submit__btn").style = "background-color: #0068FF; color: #fff;"
        }
    }, 1000)
    }

    // 인증완료 
    function complete() {
        time = -1
        document.getElementById("time").innerText = "0 : 00"
        document.getElementById("complete__btn").disabled = true
        document.getElementById("complete__btn").style = "background: #FFF; border: 1px solid #b4b0b0; color: #b4b0b0;"

        document.getElementById("target").innerText = "0000000"
        document.getElementById("send__btn").disabled = true
        document.getElementById("send__btn").style = "background: #FFF; border: 1px solid #b4b0b0; color: #b4b0b0;"

        alert("인증이 완료되었습니다.")

        document.getElementById("submit__btn").disabled = false
        document.getElementById("submit__btn").style = "background-color: #0068FF; color: #fff;"
    }

    function submit() {
        let email = document.getElementById("email").value
        let name = document.getElementById("name").value
        let pw1 = document.getElementById("pw1").value
        let pw2 = document.getElementById("pw2").value
        let region = document.getElementById("region").value
        let gender = document.querySelector('input[name="gender"]:checked');

        if (email !== "" && email.includes("@")) {
            document.getElementById("email__issue").style = "visibility:  hidden;"
        } else {
            document.getElementById("email__issue").style = "visibility:  visible;"
        }

        if (name !== "") {
            document.getElementById("name__issue").style = "visibility:  hidden;"
        } else {
            document.getElementById("name__issue").style = "visibility:  visible;"
        }

        if (pw1 !== "") {
            document.getElementById("pw1__issue").style = "visibility:  hidden;"
        } else {
            document.getElementById("pw1__issue").style = "visibility:  visible;"
        }

        if (pw2 !== "" && pw1 === pw2) {
            document.getElementById("pw2__issue").style = "visibility:  hidden;"
        } else {
            document.getElementById("pw2__issue").style = "visibility:  visible;"
        }

        if (region !== "") {
            document.getElementById("select__issue").style = "visibility:  hidden;"
        } else {
            document.getElementById("select__issue").style = "visibility:  visible;"
        }

        if (gender !== null) {
            document.getElementById("gender__issue").style = "visibility:  hidden;"
        } else {
            document.getElementById("gender__issue").style = "visibility:  visible;"
        }
    }