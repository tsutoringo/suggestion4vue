<script setup lang="ts">
import Suggestion from 'suggestion4vue';
import { computed, ref } from 'vue';
import confetti from 'canvas-confetti';

const items: string[] = ['apple', 'cherry', 'orange', 'peach', 'pinaple', 'melon', 'watermelon', 'KICK BACK'];
const searchValue = ref('');
const searchResult = computed(() => searchValue.value === '' ? items : items.filter(item => item.toLowerCase().includes(searchValue.value.toLowerCase())));
</script>

<template>
  <Suggestion.SearchBox>
    <Suggestion.Input v-model="searchValue" />
    <Suggestion.Box>
      <Suggestion.Item v-for="item in searchResult" :key="item" v-slot="{index}" @pick="() => confetti()">{{ index }}{{ item }}</Suggestion.Item>
    </Suggestion.Box>
  </Suggestion.SearchBox>
</template>

<style scoped>
.suggestion-item.selected {
  background-color: purple;
}
</style>
