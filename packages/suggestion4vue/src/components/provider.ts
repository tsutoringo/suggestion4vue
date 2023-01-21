import { getCurrentInstance, inject, InjectionKey, reactive, ref, watch } from 'vue';

export const useSuggestionProvider = () => {
  const items = reactive<Map<Element, SuggestionItem>>(new Map());
  const indexedItems = ref<SuggestionItem[]>([]);
  const isOpen = ref<boolean>(false);
  const selectedItem = ref<SuggestionItem | void>(undefined);
  const searchBox = ref<Element | void>(undefined);

  const addItem = (element: Element, item: SuggestionItem) => {
    items.set(element, item);
  };

  const removeItem = (element: Element) => {
    items.delete(element);
  };

  const setItemIndex = (element: Element, index: number) => {
    const item = items.get(element);

    if (!item) return;

    item.index = index;
  };

  const selectItem = () => {
    if (!selectedItem.value) return;

    selectedItem.value.pick();
  };

  const openBox = () => isOpen.value = true;
  const closeBox = () => isOpen.value = false;

  const next = () => {
    selectedItem.value = selectedItem.value
    // 選択済みのアイテムがあったら次のアイテム
    ? indexedItems.value[selectedItem.value.index + 1]
    // なかったら一番手前のアイテム
    : indexedItems.value[0];
    emitSelect();
  };

  const prev = () => {
    selectedItem.value = selectedItem.value
    // 選択済みのアイテムがあったら一個手前のアイテム
    ? indexedItems.value[selectedItem.value.index - 1]
    // なかったら一番最後のアイテム
    : indexedItems.value[indexedItems.value.length - 1];
    emitSelect();
  }

  const emitSelect = () => {
    if (selectedItem.value) selectedItem.value.select();
  }

  const clearIndexedItems = () => indexedItems.value = [];
  const addItemToIndexedItems = (element: Element) => {
    const item = items.get(element);

    if (!item) {
      console.warn(`Unknown item ${element}`);
      return;
    }

    indexedItems.value.push(item);
  }

  const otherClickHandler = (event: MouseEvent) => {
    if (
      isOpen.value
      && searchBox.value
      && !searchBox.value.contains(event.target as Node)
    ) {
      closeBox();
    }
  }

  watch(isOpen, (value) => value
    ? document.addEventListener('click', otherClickHandler)
    : document.removeEventListener('click', otherClickHandler)
  );

  return {
    items,
    indexedItems,
    addItem,
    removeItem,
    setItemIndex,
    openBox,
    closeBox,
    selectedItem,
    selectItem,
    clearIndexedItems,
    addItemToIndexedItems,
    next,
    prev,
    searchBox,
    isOpen
  };
};

export interface SuggestionItem {
  index: number;
  pick: () => void;
  select: () => void;
}

export type SuggestionStore = ReturnType<typeof useSuggestionProvider>;
export const suggestionInjectionKey: InjectionKey<SuggestionStore> = Symbol('suggestion');

export const injectSuggestionProvider = () => {
  const injected = inject(suggestionInjectionKey);
  if (!injected) throw new Error(`${getCurrentInstance()?.type.name || getCurrentInstance()?.type.__name || 'this component'} must be included in the SearchBox.`);
  return injected;
};
