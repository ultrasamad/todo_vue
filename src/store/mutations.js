
import {ADD_TODO, REMOVE_TODO, UPDATE_TODO, LOAD_TODOS, CLEAR_TODOS} from './mutation-types';
import * as Storage from '../storage'

export default {
    [ADD_TODO] (state, item) {
        state.todos.push(item)
    },

    [REMOVE_TODO](state, todo) {
        state.todos = state.todos.filter(item => item.id != todo.id)
        Storage.syncTodos(state.todos) //Refactor and move over to the component itself
    },

    [UPDATE_TODO](state, todo) {
        const index = state.todos.findIndex((item) => item.id == todo.id)
        state.todos.splice(index, 1, todo)
    },

    [LOAD_TODOS](state, todos) {
        state.todos = todos
    },

    [CLEAR_TODOS](state) {
        state.todos = []
    }
}