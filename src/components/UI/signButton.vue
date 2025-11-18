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
  background-color: transparent;
  border: 1px solid var(--color-primary-500);
  border-radius: 4px;
  color: var(--color-primary-500);
  cursor: pointer;
  transition: all 0.3s ease;
}

/* 🔹 Размеры */
.auth-button--small {
  padding: 6px 12px;
}

.auth-button--medium {
  padding: 8px 16px;
  width: 189px;
  height: 40px;
}

.auth-button--large {
  padding: 10px 20px;
  width: 240px;
  height: 48px;
}

.auth-button:hover {
  background-color: var(--color-neutral-200);
}

.auth-button:active {
  background-color: transparent;
  border-color: var(--color-primary-600);
  transform: translateY(0);
}

.auth-button.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
