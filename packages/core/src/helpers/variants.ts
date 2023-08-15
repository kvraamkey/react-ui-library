export const colorVariants: any = {
    filled: {
        default: 'bg-default text-default-foreground',
        primary: 'bg-primary text-white',
        secondary: 'bg-secondary text-white',
        info: 'bg-info text-white',
        success: 'bg-success text-white',
        warning: 'bg-warning text-white',
        error: 'bg-error text-white',
    },

    outlined: {
        default: 'bg-transparent border-default text-foreground',
        primary: 'bg-transparent border-primary text-primary hover:bg-primary hover:text-white',
        secondary: 'bg-transparent border-secondary text-secondary hover:bg-secondary hover:text-white',
        info: 'bg-transparent border-info text-info hover:bg-info hover:text-white',
        success: 'bg-transparent border-success text-success hover:bg-secondary hover:text-white',
        warning: 'bg-transparent border-warning text-warning hover:bg-warning hover:text-white',
        error: 'bg-transparent border-error text-error hover:bg-error hover:text-white',
    },

    text: {
        default: 'border-default text-default-foreground hover:!bg-default',
        primary: 'border-primary text-primary hover:!text-primary-foreground hover:!bg-primary',
        secondary: 'border-secondary text-secondary hover:text-secondary-foreground hover:!bg-secondary',
        success: 'border-success text-success hover:!text-success-foreground hover:!bg-success',
        warning: 'border-warning text-warning hover:!text-warning-foreground hover:!bg-warning',
        danger: 'border-danger text-danger hover:!text-danger-foreground hover:!bg-danger',
        foreground: 'border-foreground text-foreground hover:!bg-foreground',
    },
};
