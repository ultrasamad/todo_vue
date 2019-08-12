
import {ADD_TODO, REMOVE_TODO, UPDATE_TODO} from './mutation-types';

export default {
    [ADD_TODO] (state, item) {
        state.todos.push(item)
    },

    [REMOVE_TODO](state, todo) {
        state.todos = state.todos.filter(item => item.id != todo.id)
    },

    [UPDATE_TODO](state, todo) {
        const index = state.todos.findIndex((item) => item.id == todo.id)
        state.todos.splice(index, 1, todo)
    }
}