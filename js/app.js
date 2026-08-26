const input = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

// 添加待办
function addTodo(text) {
  const li = document.createElement('li');
  li.innerText = text;
  // 标记完成
  li.addEventListener('click', ()=>{
    li.classList.toggle('done');
  })
  // 删除按钮
  const delBtn = document.createElement('button');
  delBtn.innerText = "删除";
  delBtn.style.marginLeft="10px";
  delBtn.addEventListener('click',()=>{
    li.remove();
  })
  li.appendChild(delBtn);
  todoList.appendChild(li);
}

addBtn.addEventListener('click', () => {
  const val = input.value.trim();
  if(val) {
    addTodo(val);
    input.value = '';
  }
})