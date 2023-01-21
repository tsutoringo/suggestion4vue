<script lang="ts">
import { computed, defineComponent, h, provide, renderSlot, watch } from 'vue';
import { getVNodesByType } from '@tsutoringo/vue-utils';
import SuggestionItem from './SuggestionItem.vue'
import { suggestionInjectionKey, useSuggestionProvider } from './provider';

export default defineComponent({
  name: 'SuggestionBox',
  setup (props, { slots }) {
    const defaultSlots = computed(() => renderSlot(slots, 'default'));

    const provided = useSuggestionProvider();
    provide(suggestionInjectionKey, provided);
    const { setItemIndex, clearIndexedItems, addItemToIndexedItems } = provided;

    // Reindex
    watch(provided.items, () => {
      if (!defaultSlots.value) return;

      const nodes = getVNodesByType([defaultSlots.value] || [], SuggestionItem);
      clearIndexedItems();

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        const uid = node.component?.uid;

        if (!uid) continue;

        setItemIndex(uid, i);
        addItemToIndexedItems(uid);
      }
    });

    return () => h(
      'div',
      {
        class: 'suggestion-box'
      },
      [h(defaultSlots.value)]
    )
  }
});
</script>
