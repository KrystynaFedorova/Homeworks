const list = document.getElementById('to-do-list')
const input = document.getElementById('filterTodos')
const getTodos = async () => {
    const response = await (await fetch('https://jsonplaceholder.typicode.com/todos')).json()
    response.forEach((el) => {
        list.innerHTML += `
       <li id=${el.id} style="display: flex;">
           <input type="checkbox" name="" id="check checkbox-${el.id}">
            <p>${el.title}</p>
            <button onclick="changeTodo(${el.id, el})" id="change-todo-${el.id}">Change todo</button>
            <button onclick="deleteTodo(${el.id})" id="delete-todo-${el.id}">Delete todo</button>
        </li>
    `
    })
    return await response;
}


const deleteTodo = async (idOfDeleted) => {
    await fetch(`https://jsonplaceholder.typicode.com/todos/${idOfDeleted}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })

}

const changeTodo = async (idOfDeleted, changeTodo) => {
    await fetch(`https://jsonplaceholder.typicode.com/todos/${idOfDeleted}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(changeTodo)
    })
}

const filterTodos = (e) => {
    console.log(result)
    const newTodo = result.filter(el => el.title.includes(e.target.value))
    list.innerHTML = ''
    newTodo.forEach((el) => {
        list.innerHTML += `
       <li id=${el.id} style="display: flex;">
           <input type="checkbox" name="" id="check checkbox-${el.id}">
            <p>${el.title}</p>
            <button onclick="changeTodo(${el.id, el})" id="change-todo-${el.id}">Change todo</button>
            <button onclick="deleteTodo(${el.id})" id="delete-todo-${el.id}">Delete todo</button>
        </li>
    `
    })
}
input.addEventListener('input', filterTodos)

let result = null
getTodos().then(res => result = res)

const createTodo = async () => {
    let response = await (await fetch(`https://jsonplaceholder.typicode.com/todos`, {
        method: 'POST',
        body: JSON.stringify({
            title: {
                'some_tasks': document.getElementById('title').value,
                'completed': false
            },
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }))

    response.forEach((el) => {
        list.innerHTML += `
             <li id=${el.id} style="display: flex;">
           <div id="post_todos"><input type="checkbox" name="" id="checkbox-${el.id}"></div>
            <p>${el.title}</p>
            <button onclick="changeTodo(${el.id, el})" id="change-todo-${el.id}">Change todo</button>
            <button onclick="deleteTodo(${el.id})" id="delete-todo-${el.id}">Delete todo</button>
        </li>
            `
    })
    // document.getElementById('post_todos').innerHTML = response.title


}

const sortTodo=(e)=>{
    let state=document.querySelectorAll('#check')
    state.forEach(checkbox => {
        checkbox.onclick = () => {
            // let elems = document.querySelectorAll('#check:checked');
            // document.getElementById('active').value=elems
            const newTodo = result.filter(el => el.checked.includes(e.checked))
            newTodo.forEach((el) => {
                list.innerHTML += `
       <li id=${el.id} style="display: flex;">
           <input type="checkbox" name="" id="check checkbox-${el.id}">
            <p>${el.title}</p>
            <button onclick="changeTodo(${el.id, el})" id="change-todo-${el.id}">Change todo</button>
            <button onclick="deleteTodo(${el.id})" id="delete-todo-${el.id}">Delete todo</button>
        </li>
    `
            })
        }
    })
}


























