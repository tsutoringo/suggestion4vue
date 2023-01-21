import { InjectionKey } from 'vue';
export declare const useSuggestionProvider: () => {
    items: Map<Element, SuggestionItem>;
    indexedItems: import("vue").Ref<{
        index: number;
        pick: () => void;
        select: () => void;
    }[]>;
    addItem: (element: Element, item: SuggestionItem) => void;
    removeItem: (element: Element) => void;
    setItemIndex: (element: Element, index: number) => void;
    openBox: () => boolean;
    closeBox: () => boolean;
    selectedItem: import("vue").Ref<void | {
        index: number;
        pick: () => void;
        select: () => void;
    }>;
    selectItem: () => void;
    clearIndexedItems: () => never[];
    addItemToIndexedItems: (element: Element) => void;
    next: () => void;
    prev: () => void;
    searchBox: import("vue").Ref<void | Element>;
    isOpen: import("vue").Ref<boolean>;
};
export interface SuggestionItem {
    index: number;
    pick: () => void;
    select: () => void;
}
export declare type SuggestionStore = ReturnType<typeof useSuggestionProvider>;
export declare const suggestionInjectionKey: InjectionKey<SuggestionStore>;
export declare const injectSuggestionProvider: () => {
    items: Map<Element, SuggestionItem>;
    indexedItems: import("vue").Ref<{
        index: number;
        pick: () => void;
        select: () => void;
    }[]>;
    addItem: (element: Element, item: SuggestionItem) => void;
    removeItem: (element: Element) => void;
    setItemIndex: (element: Element, index: number) => void;
    openBox: () => boolean;
    closeBox: () => boolean;
    selectedItem: import("vue").Ref<void | {
        index: number;
        pick: () => void;
        select: () => void;
    }>;
    selectItem: () => void;
    clearIndexedItems: () => never[];
    addItemToIndexedItems: (element: Element) => void;
    next: () => void;
    prev: () => void;
    searchBox: import("vue").Ref<void | Element>;
    isOpen: import("vue").Ref<boolean>;
};
