import Vue from 'vue'
import Vuex from 'vuex'

import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    project: 'Hello vue + vuex + vuetify',
    todos: [
      {id: 1, title: 'Eat', completed: true},
      {id: 2, title: 'Code', completed: false},
      {id: 3, title: 'Sleep', completed: false},
    ],
  },
  getters: {
    completedTodos: state => state.todos.filter(item => item.completed),
    todosCount: state => state.todos.length,
  },
  mutations: {
    [ADD_TODO](state, item) {
      state.todos.push(item)
    },

    [REMOVE_TODO](state, todo) {
      state.todos = state.todos.filter(item => item.id != todo.id)
    },

    [UPDATE_TODO](state, todo) {
      //find index of todo item in state
      //Replace found item with {todo}
      const index = state.todos.findIndex((item) => item.id == todo.id)
      state.todos.splice(index, 1, todo)
    }
    
  },
})
