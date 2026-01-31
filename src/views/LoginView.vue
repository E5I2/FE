<script setup>
</script>

<template>
  <div class="login-container">
    <div class="logo-wrapper">
      <img src="@/assets/logo.svg" alt="RUN!PICASO Logo" class="logo" />
      <h1 class="brand-name">RUN!PICASO</h1>
    </div>
    
    <div class="button-wrapper">
      <button class="google-login-btn">
        구글 로그인으로 시작
      </button>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  background-color: var(--color-background-soft); /* Secondary color (Light Green) */
  padding: 0 24px;
  padding-bottom: 40px; /* Bottom spacing for button */
}

.logo-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1; /* Pushes content to center effectively */
}

.logo {
  width: 120px; /* Adjust based on actual SVG size */
  height: auto;
  margin-bottom: 16px;
}

.brand-name {
  font-family: 'Permanent Marker', cursive;
  font-size: 40px; /* Slightly larger for impact */
  font-weight: normal;
  color: #181818; /* Dark text */
  margin: 0;
}

.button-wrapper {
  width: 100%;
}

.google-login-btn {
  width: 100%;
  padding: 16px;
  background-color: var(--color-primary); /* Primary Green */
  color: #000; /* Assuming black text based on contrast */
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 8px; /* Rounded corners */
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Basic shadow */
  transition: all 0.2s ease;
}

.google-login-btn:hover {
  background-color: #00e650; /* Slightly darker green or just rely on opacity/shadow */
  transform: translateY(-2px); /* Lift effect */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* Deepened shadow */
}

.google-login-btn:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
