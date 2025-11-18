<template>
  <button 
    :class="['auth-button', sizeClass, { 'disabled': disabled }]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <!-- Если передан слот — показываем его, иначе используем buttonText -->
    <slot>{{ buttonText }}</slot>
  </button>
</template>

<script>
export default {
  name: 'AuthButton',
  props: {
    type: {
      type: String,
      default: 'signin',
      validator: (value) => ['signin', 'register'].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value)
    }
  },
  computed: {
    buttonText() {
      return this.type === 'signin' ? 'Sign In' : 'Register'
    },
    sizeClass() {
      return `auth-button--${this.size}`
    }
  },
  emits: ['click']
}
</script>

<style scoped>
.auth-button {
  background-color: var(--color-primary-500);
  border: 1px solid transparent;
  border-radius: 4px;
  color: var(--color-white);
  cursor: pointer;
  transition: all 0.3s ease;

  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* 🔹 Размеры */
.auth-button--small {
  padding: 6px 12px;
}

.auth-button--medium {
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 16px;
gap: 16px;
width: 200px;
height: 32px;
}

.auth-button--large {
  padding: 10px 20px;
  width: 240px;
  height: 48px;
}

.auth-button:hover {
  background-color: var(--color-neutral-300);
}

.auth-button:active {
  background-color: var(--color-primary-600);
  transform: translateY(0);
}

.auth-button.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
