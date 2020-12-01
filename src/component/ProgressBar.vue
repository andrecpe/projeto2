<template>
  <div class="progressbar"><div class="bar" :style="{ width: percent+'%' }"><span>{{ percent }}%</span></div></div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    percent: {type: Number, requered: true}
  }
}

</script>

<style scoped>
.progressbar {
  position: relative;
  background-color: transparent;
  border: 1px solid #ccc;
  height: 30px;
  width: 80%;
  border-radius: 3px;
  overflow: hidden;

}

.progressbar .bar {
  background-color: green;
  height: 100%;
}
.progressbar .bar span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  user-select: none;
  font-size: 1.7rem;
}
</style>