//helper

function stop(func) {
    debugger;
    func(); 
}
//toDoScript

// console.log('scriptWorks');

var toDoList = [];
list = document.getElementById('todo_list')
toggleButton = document.getElementById('toggle_list');
todoInputSelect = document.getElementById('todoInput');
indexInputSelect = document.getElementById('indexInput');
addButtonSelect = document.getElementById('addBtn');
modifyButtonSelect = document.getElementById('modifyBtn');
removeButtonSelect = document.getElementById('removeBtn');
// var toggleState = false;

function addItem() {
    addToUl = document.createElement('li');
    addToUl.textContent = '* ' + todoInputSelect.value;
    document.getElementById('todo_list').appendChild(addToUl);
    // toDoList.push('( ) ' + todo);
    // displayList();
    // modifyUL();
};

function removeItem() {
    document.getElementById('todo_list').children[indexInputSelect.value - 1].remove();
    // toDoList.splice(index, 1);
    // displayList();
    // modifyUL();
};

function modifyItem() {
    document.getElementById('todo_list').children[indexInputSelect.value - 1].textContent = '* ' + todoInputSelect.value;
    // toDoList[index] = '( ) ' + todo;
    // displayList();
    // modifyUL();
};

// function toggleItem(index) {
//     if (toDoList[index][1] === ' ') {
//             toDoList[index] = toDoList[index].replace(' ', 'x');
//         } else {
//             toDoList[index] = toDoList[index].replace('x', ' ');
//         }
//     modifyUL();
//     displayList();
// }

// function toggleList() {
//         toggleState = !toggleState;
//         for(a = 0; a < toDoList.length; a++) {
//             if (toDoList[a][1] === ' ' && toggleState === true) {
//                 toDoList[a] = toDoList[a].replace(' ', 'x');
//             } else if (toDoList[a][1] === 'x' && toggleState === false) {
//                 toDoList[a] = toDoList[a].replace('x', ' ');
//             }
//         }
//     modifyUL();
//     console.log(toDoList);
// }

function displayList() {
    if (toDoList.length === 0) {return 'your todo list is empty'};
    console.log('your todo list:')
    for(a = 0; a < toDoList.length; a++) {
        console.log(toDoList[a]);
    }
};

function displayDoneItems() {
    let doneItems = [];
    for(a = 0; a < toDoList.length; a++) {
        if (toDoList[a][1] === 'x') {
            doneItems.push(toDoList[a].replace('(x) ', ''));
        } 
    }
    if (doneItems.length === 0) {return 'you dont have done items'};
    console.log('your done items:')
    for(a = 0; a < doneItems.length; a++) {
        console.log(doneItems[a]);
    }
}

function displayNotDoneItems() {
    let notDoneItems = [];
    for(a = 0; a < toDoList.length; a++) {
        if (toDoList[a][1] === ' ') {
            notDoneItems.push(toDoList[a].replace('( ) ', ''));
        } 
    }
    if (notDoneItems.length === 0) {return 'you dont have not done items'};
    console.log('your not done items:')
    for(a = 0; a < notDoneItems.length; a++) {
        console.log(notDoneItems[a]);
    }
}

list.addEventListener('click', function(e) {
    var element = e.target;
    var callee = e.currentTarget;
    if (element != callee && element.className === "") {
        element.className = "done";
    } else {
        element.className = "";
    }
})

toggleButton.onclick = function() {
    if(list.className === '' && toggleButton.textContent === 'Select All') {
        list.className = 'done';
        button.textContent = 'Deselect All';
    } else {
        list.className = '';
        button.textContent = 'Select All';
    }
}

// function modifyUL() {
//     document.getElementById('todo_list').innerHTML = '';
//     for(i = 0; i < toDoList.length; i++) {
//         var list = document.createElement('li');
//         list.appendChild(document.createTextNode(toDoList[i]));
//         document.getElementById('todo_list').appendChild(list);
//     }
//     return document.getElementById('todo_list');
// }



addButtonSelect.addEventListener('click', function() {
    if(todoInputSelect && todoInputSelect.value){
        addItem();
    } else {
        alert('Type a to-do')
    }

});

modifyButtonSelect.addEventListener('click', function() {
    if(todoInputSelect && todoInputSelect.value && indexInputSelect.value){
        modifyItem();
    } else {
        alert('You forget to type needed data');
    }

});

removeButtonSelect.addEventListener('click', function() {
    if(indexInputSelect && indexInputSelect.value){
        removeItem();
    } else {
        alert('You forget to type needed data');
    }

});

//pasos que me ahorro

// addItem('Complete the app');
// addItem('Solve bugs');
// addItem('Rewrite stuff');
// addItem('Rewrite more stuff');
// addItem('kms trying to make a beautiful and minimalist app <3');