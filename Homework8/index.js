function getToPosts() {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1')
    xhr.send();
    xhr.onload = () => {
        if (xhr.status === 200) {
            let element = document.getElementById('show_posts')
            element.innerHTML = xhr.response;
            console.log(element)
        }
        if (xhr.status === 500) {
            console.log('error')
        }
    }
}


function addPost() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');
    xhr.send()
    xhr.onload = () => {
        if (xhr.status === 200) {
            let element = document.getElementById('show_posts2')
            element.innerText = xhr.response;
            console.log(element)
        }
        if (xhr.status === 500) {
            console.log('error')
        }
    }
}

getToPosts()


let add_post = document.getElementById('add_post')
add_post.onclick = function () {

    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;
    let userId = document.getElementById('userId').value;

    let obj = {
        title: title,
        body: body,
        userId: userId
    }
    let objJson = JSON.stringify(obj);
    console.log(objJson);

    let element = document.getElementById('show_posts2')
    element.append(objJson)

    // let element = JSON.parse(objJson)
    // console.log(element)

    // let node = document.createElement('div');
    // node.appendChild(document.createTextNode(JSON.stringify(obj)));
    // document.getElementById('show_posts2').appendChild(node);
    addPost(objJson)
}


let btn = document.querySelector('.btn')
btn.onclick = function () {

    let element = document.getElementById('show_posts')

    if (element.classList.contains("show_posts_active")) {
        element.classList.remove("show_posts_active")
        console.log(btn)
    } else {
        element.classList.add("show_posts_active");
        console.log(btn)
    }

}


let btn2 = document.querySelector('.btn2')
btn2.onclick = function () {

    let element = document.getElementById('show_posts2')
    if (element.classList.contains("show_posts_active")) {
        element.classList.remove("show_posts_active")
        console.log(btn2)
    } else {
        element.classList.add("show_posts_active");
        console.log(btn2)
    }
}













