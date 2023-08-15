import { tv, type VariantProps } from "tailwind-variants";

const avatar = tv({
    slots: {
        base: "flex relative justify-center items-center box-border overflow-hidden align-middle text-white z-10",
        img: "flex object-cover w-full h-full transition-opacity !duration-500 opacity-0"
    },
    variants: {
        size: {
            small: {
                base: "w-8 h-8 text-xs",
            },
            medium: {
                base: "w-10 h-10 text-xs",
            },
            large: {
                base: "w-14 h-14 text-sm",
            },
        },
        shape: {
            square: 'rounded-none',
            rounded: 'rounded-md',
            circular: 'rounded-full',
        },
        isBordered: {
            true: {
                base: "ring-2 ring-offset-2 ring-offset-background",
            },
        },
    },
    defaultVariants: {
        size: "medium",
        color: "default",
        radius: "full",
    },
});


export type AvatarVariantProps = VariantProps<typeof avatar>;
export type AvatarSlots = keyof ReturnType<typeof avatar>;