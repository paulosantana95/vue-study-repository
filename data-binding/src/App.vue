<template>
  <div>
    <h1 :style="{ textDecoration: decoration }" >Hello {{ name }}</h1>
    <input type="text" v-model="name">
  <br>
  <br>
    <a :href="link">Link para o curso!</a>
  </div>
</template>

<script>

export default {
  data: () => ({
    name:'Paulo',
    link: 'https://treinamento.vuejsbrasil.org',
    decoration: 'underline'

  })
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
