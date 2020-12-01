import Vue from 'vue'

export default new Vue({
    methods: {
        addTask(task) {
            this.$emit('changetask', task)
        },
        checkTask(callback) {
            this.$on('changetask', callback)
        }
    }
})