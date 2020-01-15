// Add new todo
function newTodo() {
    $('.todoForm').submit((e) => { 
        e.preventDefault();
        
        // Grab text from textarea and empty it
        let todoText = $('.newTodo').val();
        $('.newTodo').val("");

        // Add todo 
        $('.listOfTodos').prepend("<p><input type='checkbox'> " + todoText + "</p>");
    });
}

function clearAll() {
    $(".clearButton").click((e) => { 
        // Unchecks all todo
        $("input[type=checkbox]").prop('checked', false);
    });
}

function markAll() {
    // Checks all todos
    $(".markAllButton").click((e) => { 
        $("input[type=checkbox]").prop('checked', true);
    });
}

function deletAll() {
    $('.deleteButton').click((e) => {
        // Deletes all todos
        $('.listOfTodos').empty();
    })
}

function init() {
    newTodo();
    clearAll();
    markAll();
    deletAll();
}

init();
