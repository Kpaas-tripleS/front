<template>
  <div id="app">
    <!-- 로그인 상태에 따라 로고와 제목을 숨기거나 표시 -->
    <div v-if="isLogin">
      <h1>문해력 (가제)</h1>
      <img src="./assets/logo.png" alt="로고" class="logo" />
      <h3 class="description">문해력 키우기(설명 미정)</h3>
    </div>

    <!-- 조건부 렌더링: 로그인 또는 회원가입 컴포넌트 표시 -->
    <component :is="currentComponent" />

    <!-- 회원가입 버튼을 로그인 상태에 따라 표시 -->
    <button v-if="isLogin" class="sign-up" type="button" @click="handleSignUp">회원이 아니신가요?</button>
  </div>
</template>

<script>
import LoginComponent from "@/components/LoginComponent.vue";
import SignUpComponent from "@/components/SignUpComponent.vue";

export default {
  name: 'App',
  components: {
    LoginComponent,
    SignUpComponent,
  },
  data() {
    return {
      isLogin: true, // 현재 로그인 컴포넌트를 보여줄지 여부
    };
  },
  computed: {
    currentComponent() {
      return this.isLogin ? 'LoginComponent' : 'SignUpComponent'; // 현재 보여줄 컴포넌트 결정
    }
  },
  methods: {
    handleSignUp() {
      this.isLogin = false; // 회원가입 화면으로 전환
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: linear-gradient(13deg, rgba(6, 69, 255, 0.12), rgba(32, 183, 238, 0.12));

  width: 100%; /* 전체 폭 설정 */
  max-width: 600px; /* 최대 폭 설정 */
  margin: 0 auto; /* 중앙 정렬 */
  padding: 20px; /* 패딩 추가 */
  box-sizing: border-box; /* 패딩을 포함한 폭 계산 */
}

.logo {
  max-width: 70%; /* 로고 이미지가 컨테이너 폭을 넘지 않도록 설정 */
  height: auto; /* 비율 유지 */
}

.description {
  font-size: 14px; /* 글자 크기 조정 (원하는 크기로 변경) */
  color: #666; /* 선택적으로 색상 변경 */
  margin-bottom: 40px;
}

/* 회원가입 버튼 스타일 */
.sign-up {
  font-size: 10px;
  margin-top: 10px;
  background: transparent;
  color: #F919C4;
  text-decoration: underline;
}

/* 모바일 화면에서의 스타일 조정 */
@media (max-width: 600px) {
  #app {
    width: 90%; /* 모바일에서 폭을 90%로 설정 */
    padding: 15px; /* 모바일에서 패딩 조정 */
    margin-top: 30px; /* 모바일에서 마진 조정 */
  }

  .description {
    font-size: 12px; /* 모바일에서 글자 크기 조정 */
  }

  .sign-up {
    font-size: 8px; /* 모바일에서 버튼 글자 크기 조정 */
  }
}
</style>
