import { tv } from 'tailwind-variants';

export const StyledButton = tv({
    base: 'inline-flex items-center justify-center outline-none border-0 font-medium select-none align-middle min-w-[64px]',
    variants: {
        color: {
            default: 'bg-default text-default-foreground shadow hover:bg-default/90',
            primary: '',
            secondary: '',
            success: '',
            error: '',
            info: '',
            warning: '',

        },
        variant: {
            text: 'bg-transparent shadow-none',
            contained: '',
            outlined: '',
        },
        size: {
            small: '',
            medium: 'px-4 py-2',
            large: '',
            icon: '',
        },
        radius: {
            small: 'rounded',
            medium: 'rounded-md',
            large: 'rounded-lg',
            full: 'rounded-full',
        },
    },
    defaultVariants: {
        color: 'default',
        variant: 'text',
        size: 'medium',
        radius: 'medium'
    },
});
