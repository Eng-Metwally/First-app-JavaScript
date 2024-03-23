let userName = document.querySelector("#username")
let passWord = document.querySelector("#password")
let loginBtn = document.querySelector("#sign_in")

let getUser = localStorage.getItem("username")
let getPassword = localStorage.getItem("password")

loginBtn.addEventListener("click" , function(e){
    e.preventDefault()
    if(userName.value ==="" || passWord.value ===""){
        alert("Please fill complete data")
    }
    else {
        if(getUser && getUser.trim() === userName.value.trim() && getPassword === passWord.value){
            setTimeout(()=> {
                window.location = "index.html"
            }, 1500)
        }
        else {
            alert("User Name or PassWord is Wrong")
        }
    }
})
