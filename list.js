document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      listItems(e.target.taskName.value);
      form.reset();
      console.log('loaded')
    })
  });
  
  function listItems(items){
   

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    let li = document.createElement('li');
    li.textContent = ` ${items} `;
    li.classList.add('todo-item')
    todoDiv.appendChild(li);

    let check = document.createElement('button');
    check.innerHTML = '<i class="fas fa-check"></i>'
    check.classList = 'check'
   
    todoDiv.appendChild(check);
 check.addEventListener('click', checkOff);
    let btn = document.createElement('button');
    btn.innerHTML = '<i class="fas fa-trash"></i>';
    btn.classList = 'trash'
   
    todoDiv.appendChild(btn)
 btn.addEventListener('click', deleteItem);

     
    document.querySelector('#tasks').appendChild(todoDiv);
  }
  
  function deleteItem(e){
    const item = e.target
   if(item.classList[0] === 'trash'){
    const todoDiv = item.parentElement
    todoDiv.remove(e)
   }
    
  }

  function checkOff(e){
    const item = e.target
    if(item.classList[0] === 'check'){
      const todoDiv = item.parentElement
    todoDiv.classList.toggle('completed');
  }
}
  
  