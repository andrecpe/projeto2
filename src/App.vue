<template>
  <div id="app">
    <h1>Tarefas</h1>
    <progress-bar :percent="percent"/>
    <NewTask @taskAdded="addTask"/>
    <TaskGrid :tasks="tasks" @taskDeleted="deleteTask" @taskStateChanged="toggleTaskState"/>
  </div>
</template>

<script>
import TaskGrid from "@/component/TaskGrid";
import NewTask from "@/component/NewTask";
import ProgressBar from "@/component/ProgressBar";

export default {
  components: {TaskGrid, NewTask, ProgressBar},
  data() {
    return {
      tasks: []
    }
  },
  watch: {
    tasks: {
      deep: true,
      handler() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
      }
    }
  },
  methods: {
    addTask(task) {
      const sameName = t => t.name === task.name
      const reallyNew = this.tasks.filter(sameName).length === 0
      reallyNew && this.tasks.push({
        name: task.name,
        done: false
      })
    },
    deleteTask(i) {
      this.tasks.splice(i, 1)
    },
    toggleTaskState(i) {
      this.tasks[i].done = !this.tasks[i].done
    }
  },
  computed: {
    percent: function () {
      const total = this.tasks.length
      const done = this.tasks.filter(t => t.done).length
      if (total === 0)
        return 0
      else
        return Math.round(done * 100 / total)
    }
  },
  created() {
    const json = localStorage.getItem('tasks')
    const array = JSON.parse(json)
    this.tasks = Array.isArray(array) ? array : []
  }
}
</script>

<style>
body {
  font-family: 'Lato', sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #FFF;
  margin: 0;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#app h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}
</style>
