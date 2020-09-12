export function updateTask(tasks) {
    var taskList = $("#taskList");
    taskList.empty();
    for(var i in tasks){
        let html = `<li idTask="${tasks[i].id}">${tasks[i].content} <button class="edit">Editar</button> <button class="delete">Quitar</button></li>`;
        taskList.append(html);
    }
}


export function getIndexToIdTask(id, tasks){
    let task =  tasks.find((task, i) => {
        return task.id == id;
    })
    return tasks.indexOf(task);
}

export function deleteTaskById(id, tasks){
    let indexToDelate = getIndexToIdTask(id, tasks);
    tasks.splice(indexToDelate, 1);
    return tasks;
}

export function getIdTasktoEventButton(e){
    let button =  e.target;
    let taskLiElement = $(button).parent();
    return taskLiElement.attr("idtask");
}
