<template>
  <div class="new-task">
    <input type="text" placeholder="Nova tarefa?" v-model.trim="name" @keyup.enter="add" class="form-element" autofocus>
    <button @click="add" class="form-element">+</button>
  </div>
</template>

<script>
export default {
  name: "NewTask",
  data() {
    return {
      name: ''
    }
  },
  methods: {
    add() {
      if(this.name!==''){
        this.$emit('taskAdded', {name: this.name})
        this.name = ''
      }
    }
  }
}
</script>

<style scoped>
.new-task {
  margin: 35px;
}
.form-element{
  outline: none;
  font-size: 2rem;
  border: 1px solid #fff;
  padding: 5px 10px 8px;
  color: #FFFFFF;
}
input.form-element {
  width: 500px;
  background-color: #FFF2;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}
button.form-element {
  border-left: none;
  background-color: #2196F3;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}
</style>