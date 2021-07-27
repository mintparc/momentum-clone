const toDoForm = document.querySelector('#todo-form')
const toDoInput = document.querySelector('#todo-form input')
const toDoList = document.querySelector('#todo-list')

const TODOS_KEY = 'todos'
let toDos = []

const saveToDos = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

const deleteTodo = (event) => {
  const li = event.target.closest('li')
  li.remove()
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id))
  saveToDos()
}

const paintToDo = (newTodoObj) => {
  const li = document.createElement('li')
  li.id = newTodoObj.id
  const span = document.createElement('span')
  span.innerText = newTodoObj.text
  const icon = document.createElement('i')
  icon.className = 'fas fa-check'
  const button = document.createElement('button')
  button.appendChild(icon)
  button.addEventListener('click', deleteTodo)
  li.appendChild(button)
  li.appendChild(span)
  toDoList.appendChild(li)
}

const handleToDoSubmit = (event) => {
  event.preventDefault()
  const newTodo = toDoInput.value
  toDoInput.value = ''
  const newTodoObj = {
    text: newTodo,
    id: Date.now()
  }
  toDos.push(newTodoObj)
  paintToDo(newTodoObj)
  saveToDos()
}

toDoForm.addEventListener('submit', handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY)
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos)
  toDos = parsedToDos
  parsedToDos.forEach(paintToDo)
}