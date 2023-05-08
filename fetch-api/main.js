const url = 'http://localhost:5500/api'

function getUsers(){
    fetch(url)
    .then(response => response.json())
    .then(data => renderApiResult.textContent  = JSON.stringify(data))
    .catch(error => console.error(error))
}

function getUser(){
    fetch(`${url}/10`)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userCity.textContent  =  data.city
        userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}

//Trabalhando com  POST
function addUser(newUser) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })

    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

const newUser = {
    name: "Edimar Monteiro",
    avatar:  "https://avatars.githubusercontent.com/u/101994520?v=4",
    city: "Fortaleza-ce"
}

addUser(newUser)
getUser()
getUsers()
