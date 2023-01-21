<script lang="ts" setup>
import { injectSuggestionProvider } from './provider';

const { isOpen } = injectSuggestionProvider();
</script>

<template>
  <div v-if="isOpen" class="suggestion-box">
    <slot name="default"></slot>
  </div>
</template>
