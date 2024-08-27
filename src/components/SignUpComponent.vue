<template>
  <div class="signup-container">
    <div class="signup">
      <form @submit.prevent="handleSignUp">
        <input type="text" v-model="name" placeholder="아이디를 입력하세요" required />
        <input type="email" v-model="email" placeholder="이메일을 입력하세요" required />
        <input type="password" v-model="password" placeholder="비밀번호를 입력하세요" required />
        <input type="password" v-model="confirmPassword" placeholder="비밀번호 확인" required />
        <input type="text" v-model="nickname" placeholder="닉네임을 입력하세요" required />
        <input type="text" v-model="phone" placeholder="전화번호를 입력하세요" required />
        <button type="submit">회원가입</button>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      nickname: '',
      phone: '',
      errorMessage: '',
    };
  },
  methods: {
    async handleSignUp() {
      this.errorMessage = '';

      // 비밀번호 확인
      if (this.password !== this.confirmPassword) {
        this.errorMessage = '비밀번호가 일치하지 않습니다.';
        return;
      }

      try {
        const response = await fetch('http://localhost:8080/api/sign-up', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            password: this.password,
            nickname: this.nickname,
            phone: this.phone,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || '회원가입 실패');
        }

        // 회원가입 성공 후 로그인 페이지로 이동
        alert('회원가입 성공! 로그인 페이지로 이동합니다.');
        this.$router.push({ name: 'Login' }); // 로그인 페이지로 이동
      } catch (error) {
        this.errorMessage = error.message; // 에러 메시지를 표시
      }
    },
  },
};
</script>

<style scoped>
.signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh; /* 전체 화면 높이 중앙 정렬 */
}
.signup {
  max-width: 400px;
  padding: 20px;
}
input {
  border-radius: 30px;
  margin: 6px 0;
  padding: 10px;
  margin-top: 20px;
  width: 100%;
}
button {
  padding: 10px 20px;
  font-size: 16px;
  background: linear-gradient(135deg, #F919C4, #20B7EE);
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  margin-top: 70px;
  width: 80%;
}
.error {
  color: red;
}
</style>
