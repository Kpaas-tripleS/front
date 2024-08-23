<template>
  <div id="app">
    <h1>문해력 (가제)</h1>
    <img src="./assets/logo.png" alt="로고" class="logo" />
    <h3 class="description">문해력 키우기(설명 미정)</h3>
    <LoginComponent />
  </div>
</template>

<script>
import LoginComponent from "@/components/LoginComponent.vue";

export default {
  name: 'App',
  components: {
    LoginComponent,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.description {
  font-size: 10px; /* 글자 크기 조정 (원하는 크기로 변경) */
  color: #666; /* 선택적으로 색상 변경 */
  margin-bottom: 40px;
}
</style>
