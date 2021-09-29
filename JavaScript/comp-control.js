var newUser = true;
var Todo = /** @class */ (function () {
    function Todo(title, description, status, id) {
        if (status === void 0) { status = "Incomplete"; }
        if (id === void 0) { id = new Date().getTime(); }
        this.title = title;
        this.description = description;
        this.id = id;
        this.status = status;
    }
    return Todo;
}());
function addNewTodo(Todo) {
    localStorage.setItem(Todo.id.toString(), JSON.stringify({ title: Todo.title, description: Todo.description, status: Todo.status }));
    return getTodoDiv(Todo.id.toString(), Todo.title);
}
function getTodo(id) {
    try {
        var TodoData = JSON.parse(localStorage.getItem(id.toString()));
        var newTodo = new Todo(TodoData.title, TodoData.description, TodoData.status, id);
        return newTodo;
    }
    catch (error) {
        console.log(error);
        throw "Error occurred while getting a task or No such task";
    }
}
function getAllTodos() {
    var TodoArray = [];
    for (var todoNumber = 0; todoNumber < localStorage.length; todoNumber++) {
        TodoArray.push(getTodo(parseInt(localStorage.key(todoNumber))));
    }
    return TodoArray;
}
function updateTodo(Todo, newTitle, newDescription) {
    localStorage.setItem(Todo.id.toString(), JSON.stringify({ title: newTitle, description: newDescription, status: Todo.status }));
    return getTodoDiv(Todo.id.toString(), newTitle, Todo.status);
}
function matchTodoSearches(expression) {
}
function singleLineOnly(text) {
    if (/\n/.test(text)) {
        text = text.split("\n")[0].trim() + "...";
    }
    return text;
}
function getBackSVG() {
    return ' \
        <svg \
            xmlns="http://www.w3.org/2000/svg" \
            xmlns:xlink="http://www.w3.org/1999/xlink" \
            version="1.1" \
            id="Capa_1" \
            x="0px" \
            y="0px" \
            viewBox="0 0 384.97 384.97" \
            preserveAspectRatio="xMidYMid meet" \
        > \
            <path \
                d="M192.485,0C86.185,0,0,86.185,0,192.485C0,298.797,86.173,384.97,192.485,384.97S384.97,298.797,384.97,192.485    C384.97,86.185,298.797,0,192.485,0z M192.485,361.282c-92.874,0-168.424-75.923-168.424-168.797S99.611,24.061,192.485,24.061    s168.424,75.55,168.424,168.424S285.359,361.282,192.485,361.282z" \
                style="fill: hsl(0, 0%, 100%)" \
            /> \
            <path \
                d="M235.878,99.876c-4.704-4.74-12.319-4.74-17.011,0l-83.009,84.2c-4.572,4.62-4.584,12.56,0,17.191l82.997,84.2    c4.704,4.74,12.319,4.74,17.011,0c4.704-4.752,4.704-12.439,0-17.191l-74.528-75.61l74.54-75.61    C240.57,112.315,240.57,104.628,235.878,99.876z" \
                style="fill: hsl(0, 0%, 100%)" \
            /> \
        </svg> \
    ';
}
function getBinSVG() {
    return ' \
    <svg \
        xmlns="http://www.w3.org/2000/svg" \
        xmlns:xlink="http://www.w3.org/1999/xlink" \
        version="1.1" \
        viewBox="0 0 256 256" \
        preserveAspectRatio="xMidYMid meet" \
    > \
        <g transform="translate(128 128) scale(0.72 0.72)"> \
            <g \
            style=" \
                stroke: none; \
                stroke-width: 0; \
                stroke-dasharray: none; \
                stroke-linecap: butt; \
                stroke-linejoin: miter; \
                stroke-miterlimit: 10; \
                fill: none; \
                fill-rule: nonzero; \
                opacity: 1; \
            " \
            transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)" \
            > \
            <path \
                d="M 68.162 10.398 H 21.838 c -5.38 0 -9.742 4.362 -9.742 9.742 v 3.065 h 65.808 V 20.14 C 77.904 14.76 73.542 10.398 68.162 10.398 z" \
                class="bin" \
                style=" \
                stroke: none; \
                stroke-width: 1; \
                stroke-dasharray: none; \
                stroke-linecap: butt; \
                stroke-linejoin: miter; \
                stroke-miterlimit: 10; \
                fill-rule: nonzero; \
                opacity: 1; \
                " \
                transform=" matrix(1 0 0 1 0 0) " \
                stroke-linecap="round" \
            /> \
            <path \
                d="M 57.628 14.469 H 32.373 c -1.104 0 -2 -0.896 -2 -2 C 30.373 5.593 35.966 0 42.841 0 h 4.318 c 6.875 0 12.469 5.593 12.469 12.469 C 59.628 13.573 58.732 14.469 57.628 14.469 z M 34.611 10.469 H 55.39 C 54.488 6.761 51.141 4 47.159 4 h -4.318 C 38.86 4 35.512 6.761 34.611 10.469 z" \
                class="bin" \
                style=" \
                stroke: none; \
                stroke-width: 1; \
                stroke-dasharray: none; \
                stroke-linecap: butt; \
                stroke-linejoin: miter; \
                stroke-miterlimit: 10; \
                fill-rule: nonzero; \
                opacity: 1; \
                " \
                transform=" matrix(1 0 0 1 0 0) " \
                stroke-linecap="round" \
            /> \
            <path \
                d="M 16.154 27.346 l 3.555 60.704 C 19.773 89.145 20.679 90 21.776 90 h 46.449 c 1.097 0 2.003 -0.855 2.068 -1.949 l 3.554 -60.704 H 16.154 z" \
                class="bin" \
                style=" \
                stroke: none; \
                stroke-width: 1; \
                stroke-dasharray: none; \
                stroke-linecap: butt; \
                stroke-linejoin: miter; \
                stroke-miterlimit: 10; \
                fill-rule: nonzero; \
                opacity: 1; \
                " \
                transform=" matrix(1 0 0 1 0 0) " \
                stroke-linecap="round" \
            /> \
            </g> \
        </g> \
    </svg> \
    ';
}
function getCheckBoxSVG() {
    return ' \
    <svg \
        xmlns="http://www.w3.org/2000/svg" \
        class="complete" \
        viewBox="0 0 24 24" \
        stroke="#000000" \
        stroke-width="2" \
        stroke-linecap="round" \
        stroke-linejoin="round" \
        fill="none" \
        color="#000000" \
        preserveAspectRatio="xMidYMid meet" \
    > \
        <rect \
            class="complete" \
            x="21" \
            y="3" \
            width="18" \
            height="18" \
            rx="1" \
            transform="rotate(90 21 3)" \
        /> \
        <path class="complete" d="M6.66666 12.6667L9.99999 16L17.3333 8.66669" /> \
    </svg> \
    ';
}
function getPencilSVG() {
    return ' \
    <svg \
        xmlns="http://www.w3.org/2000/svg" \
        viewBox="0 0 306.637 306.637" \
        preserveAspectRatio="xMidYMid meet" \
    > \
        <path \
            class="pencil" \
            d="M12.809,238.52L0,306.637l68.118-12.809l184.277-184.277l-55.309-55.309L12.809,238.52z M60.79,279.943l-41.992,7.896    l7.896-41.992L197.086,75.455l34.096,34.096L60.79,279.943z" \
        /> \
        <path \
            class="pencil" \
            d="M251.329,0l-41.507,41.507l55.308,55.308l41.507-41.507L251.329,0z M231.035,41.507l20.294-20.294l34.095,34.095    L265.13,75.602L231.035,41.507z" \
        /> \
    </svg> \
    ';
}
function getPlusSVG() {
    return ' \
    <svg \
        xmlns="http://www.w3.org/2000/svg" \
        xmlns:xlink="http://www.w3.org/1999/xlink" \
        version="1.1" \
        viewBox="0 0 256 256" \
        xml:space="preserve" \
        preserveAspectRatio="xMidYMid meet" \
    > \
        <g transform="translate(128 128) scale(0.72 0.72)"> \
            <g \
            style=" \
                stroke: none; \
                stroke-width: 0; \
                stroke-dasharray: none; \
                stroke-linecap: butt; \
                stroke-linejoin: miter; \
                stroke-miterlimit: 10; \
                fill: none; \
                fill-rule: nonzero; \
                opacity: 1; \
            " \
            transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)" \
            > \
            <path \
                d="M 86.5 41.5 h -38 v -38 C 48.5 1.567 46.933 0 45 0 c -1.933 0 -3.5 1.567 -3.5 3.5 v 38 h -38 C 1.567 41.5 0 43.067 0 45 s 1.567 3.5 3.5 3.5 h 38 v 38 c 0 1.933 1.567 3.5 3.5 3.5 c 1.933 0 3.5 -1.567 3.5 -3.5 v -38 h 38 c 1.933 0 3.5 -1.567 3.5 -3.5 S 88.433 41.5 86.5 41.5 z" \
                style=" \
                stroke: none; \
                stroke-width: 1; \
                stroke-dasharray: none; \
                stroke-linecap: butt; \
                stroke-linejoin: miter; \
                stroke-miterlimit: 10; \
                fill: hsl(0, 0%, 100%); \
                fill-rule: nonzero; \
                opacity: 1; \
                " \
                transform=" matrix(1 0 0 1 0 0) " \
                stroke-linecap="round" \
            /> \
            </g> \
        </g> \
    </svg> \
    ';
}
function getTooltipDiv(tooltipText) {
    var div = document.createElement('div');
    var h3 = document.createElement('h3');
    h3.innerHTML = tooltipText;
    div.className = "top";
    div.appendChild(h3);
    div.appendChild(document.createElement('i'));
    return div;
}
function getBackFabButton(id, tooltipText) {
    var button = document.createElement('button');
    button.className = "simple-btn-fab circle shadow tooltip p-75 m-75";
    button.innerHTML = getBackSVG();
    button.id = id;
    button.title = tooltipText;
    button.appendChild(getTooltipDiv(tooltipText));
    return button;
}
function getPlusFabButton(id, tooltipText, submit) {
    if (submit === void 0) { submit = false; }
    var button = document.createElement('button');
    button.className = "simple-btn-fab circle shadow tooltip p-75 m-75";
    button.innerHTML = getPlusSVG();
    button.id = id;
    button.title = tooltipText;
    if (submit) {
        button.type = "submit";
    }
    button.appendChild(getTooltipDiv(tooltipText));
    return button;
}
function getDeleteButton(id) {
    var button = document.createElement('button');
    button.className = "h-w-250 simple-btn circle center tooltip bot-shadow m-25 p-50";
    button.innerHTML = getBinSVG();
    button.id = id;
    button.addEventListener('click', function () {
        var buttonParent = this.parentElement;
        localStorage.removeItem(id.split("-")[1]);
        buttonParent.classList.remove("fade-in-div");
        buttonParent.classList.add("fade-out-div");
        setTimeout(function () {
            if (!newUser && localStorage.length == 0) {
                var h2 = document.createElement('h2');
                h2.innerHTML = "Please add a Task";
                buttonParent.parentElement.appendChild(h2);
                newUser = true;
            }
            buttonParent.parentElement.removeChild(buttonParent);
        }, 300);
    });
    button.title = "Delete";
    button.appendChild(getTooltipDiv("Delete"));
    return button;
}
function getEditButton(id) {
    var button = document.createElement('button');
    button.className = "h-w-250 simple-btn circle center tooltip bot-shadow m-25 p-50";
    button.innerHTML = getPencilSVG();
    button.id = id;
    button.addEventListener('click', function () {
        document.body.appendChild(pop_Up_Edit_Task(parseInt(id.split("-")[1]), this.parentElement));
    });
    button.title = "Edit";
    button.appendChild(getTooltipDiv("Edit"));
    return button;
}
function getCheckButton(id) {
    var button = document.createElement('button');
    button.className = "h-w-250 simple-btn circle center tooltip bot-shadow m-25 p-50";
    button.innerHTML = getCheckBoxSVG();
    button.id = id;
    button.title = "Mark Done";
    button.appendChild(getTooltipDiv("Mark Done"));
    return button;
}
function getTodoDiv(id, title, status) {
    if (status === void 0) { status = "Incomplete"; }
    var div = document.createElement('div');
    var p = document.createElement('p');
    p.innerHTML = singleLineOnly(title);
    div.className = "Todo center rounded-edge bot-shadow row wrap m-50 p-50 fade-in-div";
    div.id = id;
    div.appendChild(p);
    div.appendChild(getCheckButton("check-" + id));
    div.appendChild(getEditButton("edit-" + id));
    div.appendChild(getDeleteButton("delete-" + id));
    setTimeout(function () {
        div.classList.remove("fade-in-div");
    }, 850);
    return div;
}
function getAllTodoDivs() {
    var todoDivArray = [];
    var allTodos = getAllTodos();
    for (var todoNumber = 0; todoNumber < allTodos.length; todoNumber++) {
        todoDivArray.push(getTodoDiv(allTodos[todoNumber].id, allTodos[todoNumber].title, allTodos[todoNumber].status));
    }
    return todoDivArray;
}
function pop_Up_Edit_Task(id, oldTodoDiv) {
    var oldTodo = getTodo(id);
    var wrapper = document.createElement('div');
    var div = document.createElement('form');
    var h2 = document.createElement('h2');
    var titleLabel = document.createElement('label');
    var descriptionLabel = document.createElement('label');
    var titleInput = document.createElement('textarea');
    var descriptionInput = document.createElement('textarea');
    var buttonWrapper = document.createElement('div');
    wrapper.className = "pop-up-wrapper fade-from-top";
    wrapper.id = "pop-up-wrapper";
    div.id = "create-todo";
    div.className = "center column rounded-edge bot-shadow p-75 m-50 fade-in";
    h2.innerHTML = "Add Task";
    titleLabel.htmlFor = "edit-title-input";
    titleLabel.className = "m-50";
    titleLabel.innerHTML = "Title";
    descriptionLabel.htmlFor = "edit-description-input";
    descriptionLabel.className = "m-50";
    descriptionLabel.innerHTML = "Description";
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('oninput', 'growTextArea(this, 1)');
    titleInput.className = "rounded-edge p-50";
    titleInput.id = "edit-title-input";
    titleInput.placeholder = "Add Title";
    titleInput.rows = 1;
    titleInput.value = oldTodo.title;
    titleInput.required = true;
    descriptionInput.setAttribute('type', 'text');
    descriptionInput.setAttribute('oninput', 'growTextArea(this, 5)');
    descriptionInput.className = "rounded-edge p-50";
    descriptionInput.id = "edit-description-input";
    descriptionInput.placeholder = "Add Description";
    descriptionInput.rows = 5;
    descriptionInput.value = oldTodo.description;
    div.appendChild(h2);
    div.appendChild(titleLabel);
    div.appendChild(titleInput);
    div.appendChild(descriptionLabel);
    div.appendChild(descriptionInput);
    buttonWrapper.className = "center row";
    buttonWrapper.appendChild(getPlusFabButton("edit-a-todo", "Edit Task", true));
    buttonWrapper.appendChild(getBackFabButton("destroy-edit-todo", "Close Window"));
    div.addEventListener('submit', function (event) {
        event.preventDefault();
        if (titleInput.value.trim() != "") {
            var newTodo = updateTodo(oldTodo, titleInput.value.trim(), descriptionInput.value.trim());
            var oldTodoDivParent = oldTodoDiv.parentElement;
            oldTodoDivParent.insertBefore(newTodo, oldTodoDiv);
            oldTodoDivParent.removeChild(oldTodoDiv);
            div.classList.remove("fade-in");
            div.classList.add("fade-out");
            wrapper.classList.remove("fade-from-top");
            wrapper.classList.add("fade-from-bottom");
            setTimeout(function () {
                document.body.style.overflow = "auto";
                wrapper.parentElement.removeChild(wrapper);
            }, 500);
        }
    });
    buttonWrapper.childNodes[1].addEventListener('click', function () {
        document.body.style.overflow = "auto";
        div.classList.remove("fade-in");
        div.classList.add("fade-out");
        wrapper.classList.remove("fade-from-top");
        wrapper.classList.add("fade-from-bottom");
        setTimeout(function () {
            wrapper.parentElement.removeChild(wrapper);
        }, 500);
    });
    div.appendChild(buttonWrapper);
    wrapper.addEventListener('click', function (event) {
        if (event.target != this)
            return;
        document.body.style.overflow = "auto";
        div.classList.remove("fade-in");
        div.classList.add("fade-out");
        wrapper.classList.remove("fade-from-top");
        wrapper.classList.add("fade-from-bottom");
        setTimeout(function () {
            wrapper.parentElement.removeChild(wrapper);
        }, 500);
    });
    wrapper.appendChild(div);
    return wrapper;
}
function pop_Up_Add_New_Task() {
    var wrapper = document.createElement('div');
    var div = document.createElement('form');
    var h2 = document.createElement('h2');
    var titleLabel = document.createElement('label');
    var descriptionLabel = document.createElement('label');
    var titleInput = document.createElement('textarea');
    var descriptionInput = document.createElement('textarea');
    var buttonWrapper = document.createElement('div');
    wrapper.className = "pop-up-wrapper fade-from-top";
    wrapper.id = "pop-up-wrapper";
    div.id = "create-todo";
    div.className = "center column rounded-edge bot-shadow p-75 m-50 fade-in";
    h2.innerHTML = "Add Task";
    titleLabel.htmlFor = "create-title-input";
    titleLabel.className = "m-50";
    titleLabel.innerHTML = "Title";
    descriptionLabel.htmlFor = "create-description-input";
    descriptionLabel.className = "m-50";
    descriptionLabel.innerHTML = "Description";
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('oninput', 'growTextArea(this, 1)');
    titleInput.className = "rounded-edge p-50";
    titleInput.id = "create-title-input";
    titleInput.placeholder = "Add Title";
    titleInput.rows = 1;
    titleInput.required = true;
    descriptionInput.setAttribute('type', 'text');
    descriptionInput.setAttribute('oninput', 'growTextArea(this, 5)');
    descriptionInput.className = "rounded-edge p-50";
    descriptionInput.id = "create-description-input";
    descriptionInput.placeholder = "Add Description";
    descriptionInput.rows = 5;
    div.appendChild(h2);
    div.appendChild(titleLabel);
    div.appendChild(titleInput);
    div.appendChild(descriptionLabel);
    div.appendChild(descriptionInput);
    buttonWrapper.className = "center row";
    buttonWrapper.appendChild(getPlusFabButton("create-a-todo", "Create Task", true));
    buttonWrapper.appendChild(getBackFabButton("destroy-create-todo", "Close Window"));
    div.addEventListener('submit', function (event) {
        event.preventDefault();
        if (titleInput.value.trim() != "") {
            var TodoWrapper = document.getElementById("TodoWrapper");
            if (newUser) {
                TodoWrapper.removeChild(TodoWrapper.firstChild);
                newUser = false;
            }
            TodoWrapper.appendChild(addNewTodo(new Todo(titleInput.value.trim(), descriptionInput.value.trim())));
            div.classList.add("fade-out");
            div.classList.add("fade-out");
            wrapper.classList.remove("fade-from-top");
            wrapper.classList.add("fade-from-bottom");
            setTimeout(function () {
                document.body.style.overflow = "auto";
                wrapper.parentElement.removeChild(wrapper);
            }, 500);
        }
    });
    buttonWrapper.childNodes[1].addEventListener('click', function (event) {
        event.preventDefault();
        document.body.style.overflow = "auto";
        div.classList.remove("fade-in");
        div.classList.add("fade-out");
        wrapper.classList.remove("fade-from-top");
        wrapper.classList.add("fade-from-bottom");
        setTimeout(function () {
            wrapper.parentElement.removeChild(wrapper);
        }, 500);
    });
    div.appendChild(buttonWrapper);
    wrapper.addEventListener('click', function (event) {
        if (event.target != this)
            return;
        document.body.style.overflow = "auto";
        div.classList.remove("fade-in");
        div.classList.add("fade-out");
        wrapper.classList.remove("fade-from-top");
        wrapper.classList.add("fade-from-bottom");
        setTimeout(function () {
            wrapper.parentElement.removeChild(wrapper);
        }, 500);
    });
    wrapper.appendChild(div);
    return wrapper;
}
function loadTodos() {
    var TodoList = getAllTodoDivs();
    var TodoWrapper = document.getElementById("TodoWrapper");
    if (TodoList.length == 0) {
        var h2 = document.createElement('h2');
        h2.innerHTML = "Please add a Task";
        TodoWrapper.appendChild(h2);
    }
    else {
        for (var todoNumber = 0; todoNumber < TodoList.length; todoNumber++) {
            TodoWrapper.appendChild(TodoList[todoNumber]);
        }
        newUser = false;
    }
}
window.onload = function () {
    loadTodos();
    document.getElementById("New Todo").addEventListener('click', function () {
        var self = this;
        function classList() {
            var list;
            for (var i = 0; i < self.classList.length; i++) {
                list += self.classList[i] + '\n';
            }
            return list;
        }
        document.body.style.overflow = "hidden";
        document.body.appendChild(pop_Up_Add_New_Task());
    });
    console.log(getAllTodos());
};
