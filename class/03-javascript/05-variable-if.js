1 + 1 // 2
1 + "만원" // 1만원
1 + "1" // 11
1 - "1" // 0
"코드" + "캠프" // 코드캠프
"123" == 123 // true
"123" === 123 // false
true && true // true
true && false // false
false || true // true
!false // true
! true // false

if (1+1 === 2) {
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}

if (true) {
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}

if (!true) {
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}

// mdn < html, css, javascript 웹개발의 바이블
// 0 < 거짓같은 값 (mdn 참고)

if (0) {       // false
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}

const profile = {
    name: "철수",
    age: 12,
    school: "다람쥐초등학교"
}

if (profile.age >= 20) {       // 20살 이상
    console.log("성인입니다")
} else if (profile.age >= 8) { // 8살 이상 ~ 19살 이하
    console.log("학생입니다")
} else if (profile.age > 0) {  // 7살 이하
    console.log("어린이입니다")
} else {
    console.log("잘못 입력하셨습니다") // 음수
}