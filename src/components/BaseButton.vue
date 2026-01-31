<template>
  <button :class="['base-button', variant]" :disabled="disabled" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary', // primary, secondary
    validator: (value) => ['primary', 'secondary'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])

const handleClick = (event) => {
  emit('click', event)
}
</script>

<style scoped>
.base-button {
  width: 100%;
  padding: 16px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.base-button.primary {
  background-color: #4ade80;
  color: white;
}

.base-button.primary:hover:not(:disabled) {
  background-color: #22c55e;
}

.base-button.secondary {
  background-color: #e5e5e5;
  color: #666;
}

.base-button.secondary:hover:not(:disabled) {
  background-color: #d4d4d4;
}

.base-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
