let span=document.querySelector('#spn')

span.addEventListener('click',function(){

    if( document.getElementById('spn').style.color==="#0056C1"){
        document.getElementById('spn').style.color="black"
    }else{
        document.getElementById('spn').style.color="#0056C1"
    }



    if(document.getElementById('f-bottom').style.opacity==='1'){
        document.getElementById('f-bottom').style.opacity='0'
    }else{
        document.getElementById('f-bottom').style.opacity='1'
    }
})

let spa=document.querySelector('#sp')

spa.addEventListener('click',function(){
    if(document.getElementById('f-bottom').style.opacity==='1'){
        document.getElementById('f-bottom').style.opacity='0'
        document.getElementById('spn').style.color="black"
    }
   
})




const addButton = document.querySelector(".btn");
const taskInput = document.querySelector('.boxs input');
const taskList = document.querySelector('.task-list');
const taskCount = document.querySelector('.task-count');

addButton.addEventListener("click", function () {
  let task = taskInput.value.trim();
  if (task === '') {
    task = 'No tasks..';
  }

  let h2 = document.createElement('h2');
  let div = document.createElement('div');
  let button = document.createElement('button');

  h2.innerHTML = task;
  button.innerHTML = "Delete";
  div.classList.add('box');
  button.classList.add('btn', 'btn-danger', 'delete-btn');

  div.appendChild(h2);
  div.appendChild(button);
  taskList.appendChild(div);

  let all_btns = document.querySelectorAll('.delete-btn');
  for (let btn of all_btns) {
    btn.onclick = function () {
      this.parentElement.remove();
      updateTaskCount();
    }
  }

  updateTaskCount();
});

function updateTaskCount() {
  const taskCount = document.querySelectorAll('.box').length;
  document.querySelector('.task-count').innerHTML = `Number of tasks: ${taskCount}`;
}