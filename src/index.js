document.addEventListener("DOMContentLoaded", () => {
  // your code here
let form = document.querySelector('form')
 form.addEventListener('submit',(e) =>{
  e.preventDefault()
  buildTodo(e.target.new_todo.value)
  form.reset()
 })  
});
function buildTodo(todo){
  let p =document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent= 'x'
  p.textContent = `${todo}`
  p.appendChild(btn)
  document.querySelector('#todo_container').appendChild(p)

}
function handleDelete(e){
  e.target.parentNode.remove()
}