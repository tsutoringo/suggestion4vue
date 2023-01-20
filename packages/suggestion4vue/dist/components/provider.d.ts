import { InjectionKey } from 'vue';
export declare const useSuggestionProvider: () => {
    items: Map<number, SuggestionItem>;
    indexedItems: import("vue").Ref<{
        index: number;
        pick: () => void;
        select: () => void;
    }[]>;
    addItem: (uid: number, item: SuggestionItem) => void;
    removeItem: (uid: number) => void;
    setItemIndex: (uid: number, index: number) => void;
    openBox: () => boolean;
    closeBox: () => boolean;
    selectedItem: import("vue").Ref<void | {
        index: number;
        pick: () => void;
        select: () => void;
    }>;
    selectItem: () => void;
    clearIndexedItems: () => never[];
    addItemToIndexedItems: (uid: number) => void;
    next: () => void;
    prev: () => void;
};
export interface SuggestionItem {
    index: number;
    pick: () => void;
    select: () => void;
}
export declare type SuggestionStore = ReturnType<typeof useSuggestionProvider>;
export declare const suggestionInjectionKey: InjectionKey<SuggestionStore>;
export declare const injectSuggestionProvider: () => {
    items: Map<number, SuggestionItem>;
    indexedItems: import("vue").Ref<{
        index: number;
        pick: () => void;
        select: () => void;
    }[]>;
    addItem: (uid: number, item: SuggestionItem) => void;
    removeItem: (uid: number) => void;
    setItemIndex: (uid: number, index: number) => void;
    openBox: () => boolean;
    closeBox: () => boolean;
    selectedItem: import("vue").Ref<void | {
        index: number;
        pick: () => void;
        select: () => void;
    }>;
    selectItem: () => void;
    clearIndexedItems: () => never[];
    addItemToIndexedItems: (uid: number) => void;
    next: () => void;
    prev: () => void;
};
