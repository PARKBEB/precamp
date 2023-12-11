// 수학 객체
let result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0") // 6자리 숫자가 되지않으면 앞에서 부터 문자열 0을 채움
console.log(result)

// DOM (Document Object Model)
function greeting() {
    document.getElementById("target").innerText = "World"
    document.getElementById("input").value = "World"
}