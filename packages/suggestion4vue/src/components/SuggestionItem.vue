<script lang="ts">
export default {
  name: 'SuggestionItem',
}
</script>

<script lang="ts" setup>
import { computed, getCurrentInstance, onMounted, onUnmounted, reactive } from 'vue';
import { injectSuggestionProvider, SuggestionItem } from './provider';

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
  if (!instance?.uid) return;

  addItem(instance.uid, suggestionItem)
});

onUnmounted(() => {
  if (!instance?.uid) return;

  removeItem(instance.uid);
});
</script>

<template>
  <div class="suggestion-item"
    @click="pick()"
    :class="{
      selected: isSelected
    }"
  >
    <slot name="default"
      :index="suggestionItem.index"
    ></slot>
  </div>
</template>