<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>고양이는 귀엽다</h3>
    <ul>
      <p> 고양이 볼래? </p>
      <li><a href="https://www.youtube.com/watch?v=lOg18vmzgtg" target="_blank" rel="noopener">고양이보러가기</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
