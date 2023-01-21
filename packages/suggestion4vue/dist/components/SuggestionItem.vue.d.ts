import { SuggestionItem } from './provider';
declare const _sfc_main: import("vue").DefineComponent<{}, {
    element: import("vue").Ref<HTMLDivElement | null>;
    addItem: (element: Element, item: SuggestionItem) => void;
    removeItem: (element: Element) => void;
    closeBox: () => boolean;
    selectedItem: import("vue").Ref<void | {
        index: number;
        pick: () => void;
        select: () => void;
    }>;
    instance: import("vue").ComponentInternalInstance | null;
    emit: {
        (event: 'pick'): void;
        (event: 'select'): void;
    };
    pick: () => void;
    select: () => void;
    suggestionItem: {
        index: number;
        pick: () => void;
        select: () => void;
    };
    isSelected: import("vue").ComputedRef<boolean>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("pick" | "select")[], "pick" | "select", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>> & {
    onPick?: ((...args: any[]) => any) | undefined;
    onSelect?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _sfc_main;
