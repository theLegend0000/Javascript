const imageDiv = document.getElementById("image")
const username = document.getElementById("username")
const followers = document.getElementById("followers")

const requestURL = "https://api.github.com/users/thelegend0000"
const xhr = new XMLHttpRequest()
xhr.open("GET", requestURL)
xhr.onreadystatechange = function(){

    if(xhr.readyState === 4){
        console.log(this.responseText);
        
        const data = JSON.parse(this.responseText)
        imageDiv.innerHTML = `<img id = "githubImage" src = "${data.avatar_url}">`
        username.innerHTML = `Username: ${data.login}`
        followers.innerHTML = `Followers: ${data.followers}`

    }
}
xhr.send()