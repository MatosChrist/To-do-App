//app

var toDoList = [];
list = document.getElementById('todo_list')
toggleButton = document.getElementById('toggle_list');
removeButtonSelect = document.getElementById('removeBtn');
textBox = document.createElement('input');
textBox.type = 'text';
list = document.querySelector('ul');
iconCreate = document.createElement('i');
iconCreate.className = 'material-icons';
iconCreate.textContent = 'close';

function addItem() {
    addToUl = document.createElement('li');
    createInput = document.createElement('input');
    createInput.type = 'text';
    createInput.placeholder = 'Add a to-do';
    addToUl.appendChild(createInput);
    list.appendChild(addToUl);
};

function removeItem() {
    if(list.children[indexInputSelect.value - 1].children.length != 1) {
        list.children[indexInputSelect.value - 1].remove();
    } else {
        alert('You have to select a to-do');
    }
};

function iconListener() {
    iconSelector = document.querySelectorAll('i');
    iconSelector.forEach(function(e) {
        e.addEventListener('click', function(){
	        e.parentElement.remove();
        });
    });
}

list.addEventListener('click', function(e) {
    var element = e.target;
    var callee = e.currentTarget;
    if (element != callee && element.className === "" && element.textContent.length > 0) {
        element.className = "done";
    } else {
        element.className = "";
    }
})

toggleButton.onclick = function() {
    if(list.childNodes.length > 3) {
        if(list.className === '' && toggleButton.textContent === 'Select All') {
            list.className = 'done';
            toggleButton.textContent = 'Deselect All';
        } else {
            list.className = '';
            toggleButton.textContent = 'Select All';
        }
    } else {
        alert('You need at least 1 to-do');
    }
}

list.addEventListener('dblclick', function(e) {
    let element = e.target;
    let callee = e.currentTarget;
    let value = element.textContent;
    if (element != callee) {
        element.innerHTML = textBox.outerHTML
        element.children[0].value = value.replace('close', '');
        element.children[0].focus();
    }
})

list.addEventListener('keypress', function(e) {
    var element = e.target;
    var key = e.which || e.keyCode;
	if (key === 13) {
        inputSelect = document.querySelectorAll('input').length
        if(inputSelect == 1) {
            addItem();
        }
        var contentLi = iconCreate.outerHTML + element.value;
        element.parentElement.innerHTML = contentLi;
        iconListener();
	}
})