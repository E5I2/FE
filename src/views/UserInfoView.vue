<template>
  <div class="user-info-container">
    <div class="user-info-content">
      <!-- Header -->
      <div class="header">
        <h1 class="title">사용자 정보</h1>
        <div class="progress-container">
          <div class="progress-bar" style="width: 33%"></div>
        </div>
      </div>

      <!-- Form -->
      <div class="form">
        <div class="form-group">
          <div class="label-container">
            <label for="name">이름</label>
            <span class="helper-text">한글 5자 / 영문 7자 이하</span>
          </div>
          <input 
            id="name"
            v-model="formData.name" 
            type="text" 
            placeholder="런피카소"
            class="form-input"
          />
        </div>
      </div>

      <!-- Submit Button -->
      <div class="button-container">
        <BaseButton variant="primary" @click="handleSubmit">다음</BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseButton from '../components/BaseButton.vue'

const formData = ref({
  name: ''
})

const handleSubmit = () => {
  console.log('Form submitted:', formData.value)
  // Add your submit logic here
}
</script>

<style scoped>
.user-info-container {
  min-height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
}

.user-info-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
}

/* Header */
.header {
  margin-top: 40px;
  margin-bottom: 32px;
  text-align: center;
}

.title {
  font-size: 18px;
  font-weight: 600;
  color: #000;
  padding-bottom: 20px;
}

.progress-container {
  width: 100%;
  height: 4px; /* Thin line like in image */
  background-color: #ECECEC; /* Light grey background */
  border-radius: 2px;
  margin-top: 10px;
}

.progress-bar {
  height: 100%;
  background-color: #00FF5E; /* Bright Green */
  border-radius: 2px;
  transition: width 0.3s ease;
}

/* Form */
.form {
  flex: 1;
}

.form-group {
  margin-bottom: 24px;
}

.label-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.form-group label {
  display: block;
  font-size: 16px;
  font-weight: 700;
  color: #000;
}

.helper-text {
  font-size: 13px;
  color: #999;
}

.form-input {
  width: 100%;
  padding: 16px;
  border: none;
  border-radius: 8px;
  background-color: #e5e5e5;
  font-size: 15px;
  color: #333;
  transition: all 0.3s ease;
}

.form-input::placeholder {
  color: #999;
}

.form-input:focus {
  outline: none;
  background-color: #d4d4d4;
}

/* Button Container */
.button-container {
  padding: 16px 0 40px 0;
  margin-top: auto;
}
</style>
