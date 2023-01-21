export { default as SearchBox } from './components/SearchBox.vue';
export { default as Box } from './components/SuggestionBox.vue';
export { default as Input } from './components/SuggestionInput.vue';
export { default as Item } from './components/SuggestionItem.vue';
declare const _default: {
    SearchBox: import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    Input: import("vue").DefineComponent<{
        modelValue: {
            type: StringConstructor;
            required: false;
            default: string;
        };
    }, {
        selectedItem: import("vue").Ref<void | {
            index: number;
            pick: () => void;
            select: () => void;
        }>;
        openBox: () => boolean;
        selectItem: () => void;
        next: () => void;
        prev: () => void;
        props: any;
        emit: {
            (event: "update:modelValue", value: string): void;
            (event: "enter", value: KeyboardEvent): void;
        };
        enter: (e: KeyboardEvent) => void;
        value: import("vue").WritableComputedRef<string>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "enter")[], "update:modelValue" | "enter", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: StringConstructor;
            required: false;
            default: string;
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        onEnter?: ((...args: any[]) => any) | undefined;
    }, {
        modelValue: string;
    }>;
    Item: import("vue").DefineComponent<{}, {
        element: import("vue").Ref<HTMLDivElement | null>;
        addItem: (element: Element, item: import("./components/provider").SuggestionItem) => void;
        removeItem: (element: Element) => void;
        closeBox: () => boolean;
        selectedItem: import("vue").Ref<void | {
            index: number;
            pick: () => void;
            select: () => void;
        }>;
        instance: import("vue").ComponentInternalInstance | null;
        emit: {
            (event: "pick"): void;
            (event: "select"): void;
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
    Box: import("vue").DefineComponent<{}, {
        isOpen: import("vue").Ref<boolean>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
};
export default _default;
