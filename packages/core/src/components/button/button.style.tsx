import { tv } from 'tailwind-variants';
import { colorVariants } from '../../helpers';

export const StyledButton = tv({
    base: 'inline-flex items-center justify-center outline-none border-0 font-medium select-none align-middle transition-transform-colors',
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
            text: 'bg-transparent',
            filled: '',
            outlined: 'border bg-transparent',
        },
        size: {
            small: 'px-2 py-1 text-sm',
            medium: 'px-4 py-2 text-base',
            large: 'px-6 py-3 text-lg',
        },
        shape: {
            square: 'rounded-none',
            rounded: 'rounded-md',
            circular: 'rounded-full',
        },
        isDisabled: {
            true: "opacity-50 pointer-events-none",
        },
        shadow: {
            true: "shadow",
        },
    },
    compoundVariants: [
        // filled / color
        {
            color: ["primary", "secondary", "success", "error"],
            class: "text-white",
        },
        // bordered / color
        {
            variant: "outlined",
            color: "default",
            class: colorVariants.outlined.default,
        },
        {
            variant: "outlined",
            color: "primary",
            class: colorVariants.outlined.primary,
        },
        {
            variant: "outlined",
            color: "secondary",
            class: colorVariants.outlined.secondary,
        },
        {
            variant: "outlined",
            color: "info",
            class: colorVariants.outlined.info,
        },
        {
            variant: "outlined",
            color: "success",
            class: colorVariants.outlined.success,
        },
        {
            variant: "outlined",
            color: "warning",
            class: colorVariants.outlined.warning,
        },
        {
            variant: "outlined",
            color: "error",
            class: colorVariants.outlined.error,
        },
    ],
    defaultVariants: {
        color: 'default',
        size: 'medium',
        shape: 'rounded',
        shadow: true
    },
});
