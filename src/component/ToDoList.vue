<template>
  <div class="main">
    <div class="task" v-for=" task in tasks" :key="task.name">
      <span>X</span>
      {{ task.name }}
    </div>
  </div>
</template>

<script>
import busEvent from "@/busEvent";

export default {
  name: "toDoList",
  props: {
    tasks: { type: Array, requered: true }
  },
  data() {
    return {

    }
  },
  created() {
    busEvent.checkTask(task => {
      this.task = task
    })
  }
}
</script>

<style scoped>
.main {
  display: flex;
  width: 100%;
  align-content: start;
  align-items: stretch;
  justify-content: center;
  user-select: none;
  flex-wrap: wrap;
}

.task {
  display: flex;
  justify-content: start;
  position: relative;
  background-color: rgba(255,0,0,0.8);
  margin: 8px;
  padding: 16px;
  width: 200px;
  min-height: 80px;
  border-left: 6px solid darkred;
  border-radius: 5px;
  color: #ddd;
  box-sizing: border-box;
}

.task.done {
  background-color: green;
  border-left: 6px solid darkgreen;
  text-decoration: line-through;
}
.task.done span {
  background-color: darkgreen;
}

.task span {
  display: flex;
  position: absolute;
  background-color: darkred;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  font-size: 6px;
  align-items: center;
  justify-content: center;
  top: 4px;
  right: 4px;
  cursor: pointer;
}
</style>