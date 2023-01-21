<script lang="ts">
export default {
  name: 'SuggestionItem',
}
</script>

<script lang="ts" setup>
import { computed, getCurrentInstance, onBeforeUnmount, onMounted, reactive, ref } from 'vue';
import { injectSuggestionProvider, SuggestionItem } from './provider';
const element = ref<HTMLDivElement | null>(null);

const { addItem, removeItem, closeBox, selectedItem } = injectSuggestionProvider();
const instance = getCurrentInstance();

const emit = defineEmits<{
  (event: 'pick'): void;
  (event: 'select'): void;
}>();

const pick = () => {
  closeBox();
  emit('pick');
};

const select = () => {
  emit('select');
};

const suggestionItem = reactive<SuggestionItem>({
  index: 0,
  pick,
  select
});

const isSelected = computed(() => selectedItem.value === suggestionItem)

onMounted(() => {
  if (!element.value) return;

  addItem(element.value, suggestionItem)
});

onBeforeUnmount(() => {
  if (!element.value) return;

  removeItem(element.value);
});
</script>

<template>
  <div class="suggestion-item"
    @click="pick()"
    :class="{
      selected: isSelected
    }"
    ref="element"
  >
    <slot name="default"
      :index="suggestionItem.index"
    ></slot>
  </div>
</template>