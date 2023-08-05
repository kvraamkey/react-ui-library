import type { MouseEventHandler, Ref } from 'react';
import type { VariantProps } from 'tailwind-variants';
import type { AriaButtonProps } from 'react-aria';

import React from 'react';
import { useButton } from 'react-aria';

import { StyledButton } from './button.style';
import { HTMLUIProps, useDOMRef } from '../../helpers';

type ButtonVariantProps = VariantProps<typeof StyledButton>;

interface Props extends HTMLUIProps<'button'> {
    ref?: Ref<HTMLButtonElement | null>;
    children: React.ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export type ButtonProps = Props & Omit<AriaButtonProps, keyof ButtonVariantProps> & ButtonVariantProps;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { as, children, variant, size, className } = props;
    const Component = as || 'button';
    const domRef = useDOMRef(ref);

    let { buttonProps } = useButton(props, domRef);
    const styles = React.useMemo(() => StyledButton({ variant, size, className }), [variant, size, className]);

    return (
        <Component {...buttonProps} className={styles} ref={domRef}>
            {children}
        </Component>
    );
});

Button.displayName = 'Button';

export default Button;
