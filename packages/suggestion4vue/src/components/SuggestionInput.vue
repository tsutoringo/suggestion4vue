<script lang="ts" setup>
import { computed, ref } from 'vue';
import { injectSuggestionProvider } from './provider';

const { selectedItem, openBox, closeBox, pickItem, next, prev } = injectSuggestionProvider();
const inputEl = ref<HTMLInputElement | null>()

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
  if (inputEl.value) inputEl.value.blur();
  pickItem();
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
    @keydown.tab="closeBox()"
    @focus="openBox"
    ref="inputEl"
  >
</template>
