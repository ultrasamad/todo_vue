<template>
    <v-container grid-list-md>
      <v-layout wrap>
        <v-flex md6>
            <v-content>
              <v-card >
                  <v-form @submit.prevent="addTodo">
                      <v-text-field label="Add todo or double click an item to edit" v-model="newTodo"></v-text-field>
                  </v-form>
                <v-list>
                    <v-subheader>
                        <span>All Todos ({{ todosCount }})</span> &nbsp;&nbsp;
                        <span><a href="" @click.prevent="clearTodos">Clear Todos</a></span>
                    </v-subheader>
                    <v-list-item-group multiple>
                        <todo v-for="todo in todos" :todo="todo" :key="todo.id"></todo>
                    </v-list-item-group>
                </v-list>
                </v-card>
            </v-content>
        </v-flex>
        <!-- Completed todos -->
        <v-flex md6>
            <v-content>
                <v-card>
                   <v-list>
                       <v-subheader>Completed Todos ({{ completedTodos.length }})</v-subheader>
                       <v-list-item-group multiple>
                           <todo v-for="todo in completedTodos" :todo="todo" :key="todo.id"></todo>
                       </v-list-item-group>
                   </v-list>
                </v-card>
            </v-content>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'

import * as Storage from '../storage'

import Todo from './Todo'

export default {
    components: {
        Todo
    },
    props: {

    },
    data() {
        return {
            newTodo: null,
        }
    },
    computed: {
        ...mapState({
            todos: state => state.todos,
        }),
        ...mapGetters({
            'completedTodos': 'completedTodos',
            'todosCount': 'todosCount'
        })
    },
    methods: {

        ...mapMutations({
            'removeTodo': 'REMOVE_TODO'
        }),

        addTodo() {
            if (!this.newTodo) return

            const item = {
                id: this.todosCount + 1,
                title: this.newTodo,
                completed: false,
            }
            this.$store.commit('ADD_TODO', item)
            this.newTodo = null

            //Sync with local storage
            Storage.syncTodos(this.todos)
        },
        clearTodos() {
            this.$store.commit('CLEAR_TODOS')
            //Sync with local storage
            Storage.syncTodos(this.todos)
        }
    },
    mounted() {
        let todos = Storage.getTodos()
        if (!todos) {// A temporal workaround for converting null to empty array
            todos = [] 
        }
        this.$store.commit('LOAD_TODOS', todos)
    }
}
</script>

<style scoped>

</style>

