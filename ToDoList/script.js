const taskInput= document.getElementById("task-input");
const taskForm =document.getElementById("todo-section");
const taskList =document.getElementById("task-list");

taskForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const taskTitle = taskInput.value;
    console.log(taskTitle);

    if(taskTitle == ""){
        alert("Please Enter a Task");
    }
    else{
        const listItem =document.createElement('li');
        listItem.innerHTML = taskTitle;
        taskList.append(listItem);
        let span = document.createElement("span");
        span.innerHTML = `&times;`
        listItem.append(span);
        taskInput.value = "";
        saveListData();
    }

});

taskList.addEventListener("click",(e)=>{
    if(e.target.tagName =="LI"){
        e.target.classList.toggle("task-completed");console.log("hi");
        saveListData();
    }
    if(e.target.tagName =="SPAN"){
        const li = e.target.parentElement;
        li.remove();
        saveListData();
    }
});

function showListData(){
    taskList.innerHTML= localStorage.getItem("listItem");
}

function saveListData(){
    localStorage.setItem("listItem",taskList.innerHTML);
}
showListData();