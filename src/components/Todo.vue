<template>
    <v-hover v-slot:default="{ hover }">
        <v-list-item @dblclick="editTodo">
            <v-list-item-action>
                <v-checkbox 
                    color="primary" 
                    v-model="todo.completed"
                    @change="toggle"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content v-show="!editing">
                <v-list-item-title>{{ todo.title }}</v-list-item-title>
            </v-list-item-content>

            <v-text-field 
                v-show="editing"
                v-model="todo.title"
                @keyup.enter="updateTodo(todo)"
                label="Type and press enter" >
            </v-text-field>

            <v-list-item-action
                v-show="hover" 
                @click="removeTodo(todo)">
                <v-icon>mdi-delete</v-icon>
            </v-list-item-action>
        </v-list-item> 
    </v-hover>
      
</template>

<script>

import { mapMutations } from 'vuex'
import { mapState } from 'vuex'

import { syncTodos } from '../storage'

export default {
    props: {
        todo: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            editing: false,
        }
    },

    computed: {
        ...mapState({
            todos: state => state.todos,
        })
    },

    methods: {
        ...mapMutations({
            'removeTodo': 'REMOVE_TODO'
        }),

        editTodo() {
           this.editing = true
        },

        updateTodo() {
            this.editing = false
            //commit update mutation
            this.$store.commit('UPDATE_TODO', this.todo)
        },

        //Toggling state of todo
        toggle() {
            syncTodos(this.todos)
        }
    }
}
</script>

<style scoped>

</style>
