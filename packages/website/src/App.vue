<script setup lang="ts">
import { SearchBox, SuggestionInput, SuggestionItem } from 'suggestion4vue';
import { computed, ref } from 'vue';
import confetti from 'canvas-confetti';

const items: string[] = ['apple', 'cherry', 'orange', 'peach', 'pinaple', 'melon', 'watermelon', 'KICK BACK'];
const searchValue = ref('');
const searchResult = computed(() => searchValue.value === '' ? items : items.filter(item => item.toLowerCase().includes(searchValue.value.toLowerCase())));
</script>

<template>
  <SearchBox>
    <SuggestionInput v-model="searchValue" />
    <SuggestionItem v-for="item in searchResult" :key="item" v-slot="{index}" @pick="() => confetti()">{{ index }}{{ item }}</SuggestionItem>
    <SuggestionItem v-slot="{index}" @pick="() => confetti()">{{ index }} out
      <SuggestionItem v-slot="{index}" @pick="() => confetti()">
        {{ index }}in
      </SuggestionItem>
    </SuggestionItem>
  </SearchBox>
</template>

<style scoped>
.suggestion-item.selected {
  background-color: purple;
}
</style>
