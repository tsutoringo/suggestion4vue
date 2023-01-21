declare const _sfc_main: import("vue").DefineComponent<{
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
    closeBox: () => boolean;
    selectItem: () => void;
    next: () => void;
    prev: () => void;
    props: any;
    emit: {
        (event: 'update:modelValue', value: string): void;
        (event: 'enter', value: KeyboardEvent): void;
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
export default _sfc_main;
