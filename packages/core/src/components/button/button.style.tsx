import { tv } from 'tailwind-variants';

export const StyledButton = tv({
    base: 'inline-flex items-center justify-center outline-none border-0 font-medium select-none shadow align-middle min-w-[64px]',
    variants: {
        color: {
            default: 'bg-default text-default-foreground hover:bg-default/90',
            primary: 'bg-blue-500 hover:bg-blue-500/90',
            secondary: "bg-purple-500 hover:bg-purple-500/90",
            success: "bg-green-500 hover:bg-green-500/90",
            error: "bg-red-500 hover:bg-red-500/90",
            info: '',
            warning: '',

        },
        variant: {
            text: 'bg-transparent shadow-none',
            filled: '',
            outlined: 'border bg-transparent shadow-none',
        },
        size: {
            small: 'px-2 py-1 text-sm',
            medium: 'px-4 py-2 text-base',
            large: 'px-6 py-3 text-lg',
            icon: '',
        },
        shape: {
            square: 'rounded-none',
            rounded: 'rounded-md',
            circular: 'rounded-full',
        },
        isDisabled: {
            true: "opacity-50 pointer-events-none",
        },
    },
    compoundVariants: [
        {
            color: ["primary", "secondary", "success", "error"],
            class: "text-white",
        },
    ],
    defaultVariants: {
        color: 'default',
        size: 'medium',
        shape: 'rounded'
    },
});
