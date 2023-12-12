function start__word() {
    let my__word = document.getElementById("my__word").value
    let word = document.getElementById("word").innerText

    let last__word = word[word.length - 1]
    let first__word = my__word[0]

    if (last__word === first__word) {
        document.getElementById("result").innerText = "정답입니다"
        document.getElementById("word").innerText = my__word
        document.getElementById("my__word").value = ""
    } else {
        document.getElementById("result").innerText = "땡!"
        document.getElementById("my__word").value = ""
    }
}

let lotto = [];

function lotto__btn() {
    while (lotto.length < 6) {
        let num = Math.floor(Math.random() * 45) + 1

        if (!lotto.includes(num)) {
            lotto.push(num);
        }
    }
    
    let result = ""
    for (let i = 0; i < lotto.length; i++) {
        result += lotto[i] + " "
    }

    document.getElementById("numbox").innerText = result
}
