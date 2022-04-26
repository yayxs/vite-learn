<script setup>

import HelloWorld from './components/HelloWorld.vue'
import TestJSX from './Test.jsx'
/** 静态资源 */
import imgUrl from './assets/logo.png'
</script>

<template>
{{imgUrl}}
  <TestJSX />
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

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
