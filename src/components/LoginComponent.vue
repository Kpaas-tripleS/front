<template>
  <div class="login">
    <form @submit.prevent="handleLogin">
      <input type="text" v-model="username" id="username" placeholder="id 입력하세요" required />
      <input type="password" v-model="password" id="password" placeholder="password 입력하세요" required />
      <button type="submit">로그인</button>
      <button class="sign-up" type="button" @click="handleSignUp">회원이 아니신가요? </button>
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  name: 'LoginComponent',
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    async handleLogin() {
      if (this.username === '' || this.password === '') {
        this.errorMessage = '모든 필드를 입력하세요.';
      } else {
        this.errorMessage = '';
        alert(`사용자 이름: ${this.username}, 비밀번호: ${this.password}`);
      }
    },
    handleSignUp() {
      // 회원가입 로직 추가 (예: 회원가입 페이지로 리디렉션)
      alert("회원가입 페이지로 이동합니다.");
    }
  }
}
</script>

<style scoped>
.login {
  max-width: 350px;
  margin: auto;
  padding: 20px;
}
h1 {
  color: #333;
}
input {
  margin: 6px 0;
  padding: 10px;
  width: 80%;
  border-radius: 30px;
  font-size: 10px;
}
button {
  padding: 10px 20px;
  font-size: 16px;
  background: linear-gradient(135deg, #F919C4, #20B7EE);
  color: white;
  border: none;
  border-radius: 30px; /* 둥글게 설정 */
  cursor: pointer;
  margin-top: 20px;
  width: 80%; /* 버튼 너비 조정 */
}
button:hover {
  background-color: #0056b3;
}
.error {
  color: red;
}
.sign-up {
  font-size: 10px;
  margin-top: 10px; /* 회원가입 버튼과 로그인 버튼 사이의 간격 설정 */
  background: transparent; /* 배경을 투명하게 설정 */
  color: #F919C4; /* 텍스트 색상 설정 */
  text-decoration: underline; /* 밑줄 추가 */
}
</style>
