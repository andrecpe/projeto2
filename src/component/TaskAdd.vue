<template>
  <div class="main">
    <input placeholder="Nova tarefa?" v-model.lazy="task" v-model="task2">
    <div @click="mandar">+</div>
  </div>
</template>

<script>
import busEvent from "@/busEvent";

export default {
  name: "TaskAdd",
  data() {
    return {
      task: '',
      task2: ''
    }
  },
  methods: {
    mandar(){
      busEvent.addTask(this.task2)
    }
    // newTask(task) {
    //   busEvent.addTask(task)
    // }
  },
  watch: {
    task: function (task) {
      busEvent.addTask(task)
    }
  }
}
</script>

<style scoped>
.main {
  display: flex;
  margin: 20px;
  overflow: hidden;
  height: 30px;
}

.main input {
  border: 1px solid #ccc;
  border-right-width: 0;
  border-radius: 3px 0 0 3px;
  height: 100%;
  width: 300px;
  background-color: rgb(58, 96, 115);
  color: #FFFFFF;
  box-sizing: border-box;
  padding-left: 5px;
  padding-top: 2px;
}

.main input:focus {
  outline: none;
}

.main div {
  display: flex;
  margin: 0;
  padding: 0;
  background-color: cornflowerblue;
  border: 1px solid #ccc;
  border-radius: 0 3px 3px 0;
  height: 100%;
  width: 24px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  user-select: none;
  cursor: pointer;
}

::placeholder {
  color: #ccc;
}
</style>