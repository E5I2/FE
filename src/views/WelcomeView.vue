<template>
  <div class="welcome-container">
    <div class="confetti-container">
      <div v-for="n in 20" :key="n" class="confetti" :style="getConfettiStyle(n)"></div>
    </div>
    
    <div class="content">
      <div class="text-group">
        <h1 class="greeting">스페어런 님,</h1>
        <h1 class="greeting">가입을 축하합니다!</h1>
      </div>

      <div class="logo-container">
        <div class="logo-circle">
          <img src="@/assets/welcome_logo.png" alt="First Course Logo" class="logo" />
        </div>
      </div>

      <p class="sub-text">
        귀여운 러닝 코스를<br />
        그려보세요!
      </p>
    </div>

    <div class="button-container">
      <button class="start-button" @click="handleStart">
        지금 도전할게요
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const handleStart = () => {
  router.push('/home')
}

const getConfettiStyle = (n) => {
  // Randomize confetti position and rotation
  const left = Math.random() * 100 + '%'
  const animationDelay = Math.random() * 2 + 's'
  const backgroundColor = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#FF9F43'][Math.floor(Math.random() * 4)]
  
  return {
    left,
    animationDelay,
    backgroundColor
  }
}
</script>

<style scoped>
.welcome-container {
  min-height: 100vh;
  background-color: #E6FFF2; /* Light green background */
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
  z-index: 10;
}

.text-group {
  text-align: center;
  margin-bottom: 40px;
}

.greeting {
  font-size: 24px;
  font-weight: 700;
  color: #000;
  line-height: 1.4;
  margin: 0;
}

.logo-container {
  margin-bottom: 40px;
  position: relative;
}

.logo-circle {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.sub-text {
  text-align: center;
  color: #666;
  font-size: 16px;
  line-height: 1.5;
}

.button-container {
  padding: 20px;
  padding-bottom: 40px;
  width: 100%;
  box-sizing: border-box;
  z-index: 10;
}

.start-button {
  width: 100%;
  padding: 18px;
  background-color: #00FF5E; /* Bright green button */
  border: none;
  font-size: 16px;
  font-weight: 700;
  color: #000;
  cursor: pointer;
  transition: opacity 0.2s;
}

.start-button:active {
  opacity: 0.9;
}

/* Simple confetti animation */
.confetti {
  position: absolute;
  top: -10px;
  width: 10px;
  height: 20px;
  opacity: 0.8;
  animation: fall 3s linear infinite;
}

@keyframes fall {
  0% {
    transform: translateY(-10vh) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0;
  }
}
</style>
