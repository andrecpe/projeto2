<template>
  <div @click="$emit('taskStateChanged', task)" class="task" :class="stateClass">
    <span @click.stop="$emit('taskDeleted', task)" class="close">X</span>
    <span class="task-text">{{ task.name }}</span>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: {type: Object, requered: true}
  },
  computed: {
    stateClass() {
      return {
        done: this.task.done,
        todo: !this.task.done
      }
    }
  }
}
</script>

<style scoped>
.task {
  position: relative;
  box-sizing: border-box;
  width: 350px;
  height: 150px;
  padding: 10px;
  border-radius: 8px;
  font-size: 1.7rem;
  font-weight: 300;
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: center;
  align-content: center;
}

.todo {
  border-left: 12px solid #B73229;
  background-color: #F44336;
}

.done {
  color: #ddd;
  border-left: 12px solid #0A8F50;
  background-color: #4CAF50;
  text-decoration: line-through;

}

.todo .close {
  background-color: #B73229;
}

.done .close {
  background-color: #0A8F50;
}

.close {
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: .9rem;
  font-weight: 600;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.task-text {
  padding: 14px;
}
</style>