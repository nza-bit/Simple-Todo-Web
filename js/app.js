const input = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

// 添加待办
function addTodo(text) {
  const li = document.createElement('li');
  li.innerText = text;
  // 新增：点击标记完成
  li.addEventListener('click', ()=>{
    li.classList.toggle('done');
  })
  todoList.appendChild(li);
}

addBtn.addEventListener('click', () => {
  const val = input.value.trim();
  if(val) {
    addTodo(val);
    input.value = '';
  }
})