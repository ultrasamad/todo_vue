//After actions like save, edit, delete
export const syncTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

//When app mounts
export const getTodos = () => {
    return JSON.parse(localStorage.getItem('todos'))
}

//When clear button is clicked
export const clearTodos = (/*todos*/) => {
    //Commit a sync mutation
}