import Task from "./class/Task.js"
import {updateTask, deleteTaskById, getIdTasktoEventButton, getIndexToIdTask} from "./functions.js"

var tasks = [];
var addTaskButton = $("#addTask");
var countTask = 0;

// evento de agregar tarea
var eventAddTaskButton = () => {
    let contentTaskTextArea = $("#contentTask").val();
    let idTask = ++countTask;
    let task = new Task(idTask, contentTaskTextArea);
    tasks.push(task);
    $("#contentTask").val(''); // limpio el textArea
    updateTask(tasks);
}

addTaskButton.click(eventAddTaskButton);

// evento de borrar tarea
$(document).on("click", ".delete", (e) => {
    let idTask = getIdTasktoEventButton(e);
    tasks = deleteTaskById(idTask, tasks);
    updateTask(tasks);
});

// evento de editar tarea
$(document).on("click", ".edit", (e) => {
    var idTask = getIdTasktoEventButton(e);
    var index = getIndexToIdTask(idTask, tasks);
    $("#contentTask").val(tasks[index].content); // llenar el textarea
    let eventEditTaskButton = () => {
        let contentTaskTextArea = $("#contentTask").val();
        tasks[index].content = contentTaskTextArea;
        $("#contentTask").val(''); // limpio el textArea
        updateTask(tasks);
        addTaskButton.off(); // quitar eventos
        addTaskButton.click(eventAddTaskButton); // vuelve como estaba
    }
    addTaskButton.off(); // quitar eventos
    addTaskButton.click(eventEditTaskButton);
});