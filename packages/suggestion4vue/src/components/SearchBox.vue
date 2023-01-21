<script lang="ts">
import { computed, defineComponent, h, nextTick, provide, renderSlot, VNode, watch } from 'vue';
import { suggestionInjectionKey, useSuggestionProvider } from './provider';

export default defineComponent({
  name: 'SearchBox',
  setup (props, { slots }) {
    let renderedSlot: VNode | null = null;

    const provided = useSuggestionProvider();
    provide(suggestionInjectionKey, provided);
    const { setItemIndex, clearIndexedItems, addItemToIndexedItems, searchBox } = provided;

    // Reindex
    watch(provided.items, () => {

      if (!searchBox.value) return;

      const elements = searchBox.value.getElementsByClassName('suggestion-item');
      clearIndexedItems();

      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];

        if (!element) continue;

        setItemIndex(element, i);
        addItemToIndexedItems(element);
      }
    });

    return () => h(
      'div',
      {
        class: 'search-box',
        ref: searchBox
      },
      [renderSlot(slots, 'default')]
    );
  }
});
</script>
