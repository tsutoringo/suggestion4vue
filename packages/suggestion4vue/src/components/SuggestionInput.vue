<script lang="ts" setup>
import { computed } from 'vue';
import { injectSuggestionProvider } from './provider';

const { selectedItem, openBox, selectItem, next, prev } = injectSuggestionProvider();

const props = withDefaults(
  defineProps<{
    modelValue?: string;
  }>(), {
    modelValue: ''
  });

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void;
  (event: 'enter', value: KeyboardEvent): void;
}>();

const enter = (e: KeyboardEvent) => {
  if (!selectedItem.value) emit('enter', e);
  selectItem();
};

const value = computed<string>({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
});
</script>

<template>
  <input
    type="search"
    class="suggestion-input"
    v-model="value"
    @keydown.enter.prevent="enter($event)"
    @keydown.down.prevent="next()"
    @keydown.up.prevent="prev()"
    @focus="openBox"
  >
</template>
