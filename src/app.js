const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

addForm.addEventListener('submit', event => {
  event.preventDefault();

  const todo = addForm.add.value.trim();

  if(todo.length) {
    generateTemplate(todo);
    
    addForm.reset();
  }
});

function generateTemplate(todo) {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
  `;

  list.innerHTML += html;
}