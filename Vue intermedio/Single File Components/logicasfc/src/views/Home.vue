<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Tareas></Tareas>
  </div>
</template>

<script>
// @ is an alias to /src
import Tareas from '@/components/Tareas'

export default {
  name: 'Home',
  components: {
    Tareas
  }
}
</script>
