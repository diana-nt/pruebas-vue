<template>
  <div id="app">
      <ul>
          <RouterLink destino="black-cat-1"/>
          <RouterLink destino="black-cat-2"/>
          <RouterLink destino="black-cat-3"/>
      </ul>
      <RouterView />
  </div>
</template>

<script>
import RouterView from "@/components/RouterView";
import RouterLink from "@/components/RouterLink";

export default {
  name: 'App',
  components: {
      RouterView,
      RouterLink
  }
}
</script>

<style>
    html, body {
        height: 100%;
        margin: 0;
        padding: 0;
    }

    ul {
        padding: 0;
        position: absolute;
        width: 100%;
        display: flex;
        justify-content: space-around;
    }

</style>
