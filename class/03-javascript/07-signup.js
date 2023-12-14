const checkValidation = () => {
    let email = document.getElementById("email").value 
    let pw1 = document.getElementById("pw1").value 
    let pw2 = document.getElementById("pw2").value 

    if (email !== "" && pw1 !== "" && pw2) { // email&&pw1&& pw2 이렇게 작성해도 동일하게 작동 
        document.getElementById("submit").disabled = false
    } else {
        document.getElementById("submit").disabled = true
    }
}

