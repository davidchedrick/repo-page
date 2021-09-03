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
    let li = document.createElement('li');
    let btn = document.createElement('button');
    btn.addEventListener('click', deleteItem);
    btn.textContent = 'X';
    li.textContent = ` ${items} `;
    li.appendChild(btn);
    document.querySelector('#tasks').appendChild(li);
  }
  
  function deleteItem(e){
    e.target.parentNode.remove();
  }
  
  