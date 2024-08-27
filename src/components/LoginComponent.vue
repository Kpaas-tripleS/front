<template>
  <div class="login">
    <form @submit.prevent="handleLogin">
      <input type="text" v-model="username" id="username" placeholder="id 입력하세요" required />
      <input type="password" v-model="password" id="password" placeholder="password 입력하세요" required />
      <button type="submit">로그인</button>
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
        try {
          const response = await fetch('http://localhost:8080/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: this.username,
              password: this.password,
            }),
          });

          if (!response.ok) {
            throw new Error('로그인 실패. 다시 시도하세요.');
          }

          const data = await response.json();
          const { accessToken, refreshToken } = data;

          console.log('Access Token:', accessToken);
          console.log('Refresh Token:', refreshToken);

          // 여기서 토큰을 저장하거나, 로그인 후 작업을 수행
          // 예시: localStorage.setItem('accessToken', accessToken);

          alert('로그인 성공!');
        } catch (error) {
          this.errorMessage = error.message;
          console.error(error);
        }
      }
    },
    handleSignUp() {
      alert('회원가입 페이지로 이동합니다.');
      this.$router.push({ name: 'SignUp' });
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
  border-radius: 30px;
  cursor: pointer;
  margin-top: 20px;
  width: 80%;
}
button:hover {
  background-color: #0056b3;
}
.error {
  color: red;
}
</style>
