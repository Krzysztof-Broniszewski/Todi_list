{
    let tasks = [];

    // const formElement = document.querySelector("js-form");


    // formElement.addEventListener("submit", (event) => {
    //     event.preventDefault();
    // });

    const setFocus = () => {
        const inputElement = document.querySelector(".js-newTask");
        inputElement.focus();
    };


    const clearField = () => {
        let inputContent = document.querySelector(".js-newTask");
        inputContent.value = "";
    };

    const addNewTask = (event) => {
        event.preventDefault();
        setFocus();
    };

    clearField()

    const bindToggleDone = () => {
        const toggleDoneButton = document.querySelectorAll(".js-toggleButton");

        toggleDoneButton.forEach((toggleButton, index) => {
            toggleButton.addEventListener("click", () => {
                tasks[index].done = !tasks[index].done;
                render()
            });
        });
    };

    const bindDeleteTask = () => {
        const toggleButtonElements = document.querySelectorAll(".js-tasksList");

        deleteButtonElements.forEach((deleteButton, index) => {
            deleteButton.addEventListener("click", () => {
                tasks.splice(index, 1);
                render()
            });
        });
    };

    const render = () => {

        const tasksListElement = document.querySelector(".js-tasksList");

        let tasksListHtmlContent = "";

        for (const task of tasks) {
            tasksListHtmlContent += `
                <li class="tasksLists__task">
                    <button class="tasksList__listButton js-toggleButton
                        ${
                            task.done
                            ? "&#1004"
                            : ""
                        }
                    </button>

                    <span class="tasksList__content ${
                        task.done ? "style=\"text-decoration: line-through\"" : ""
                    }>
                        ${task.content}
                    </span >

                    <button class="
                        tasksList_listButton
                        tasksList__listButton--delete
                        js-deleteButton">K
                    </button>
                </li>
                `;
            }

            
            tasksListElement.innerHTML = tasksListHtmlContent;

        bindDeleteTask();
        bindToggleDone();


        };

        const onFormSubmit = (event) => {
            event.preventDefault();

            const newTaskContent = document.querySelector(".js-newTask").value.trim();

            if (newTaskContent === "") {
                return;
            }

            addNewTask(newTaskCotent);
        };

    const init = () => {
        render();

        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}




