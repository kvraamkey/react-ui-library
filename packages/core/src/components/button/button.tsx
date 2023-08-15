import type { AriaButtonProps } from 'react-aria';
import type { VariantProps } from 'tailwind-variants';
import type { MouseEventHandler, ReactNode, Ref } from 'react';

import React from 'react';
import { useButton } from 'react-aria';

import { StyledButton } from './button.style';
import { HTMLUIProps, useDOMRef } from '../../helpers';

type ButtonVariantProps = VariantProps<typeof StyledButton>;

interface Props extends HTMLUIProps<'button'> {
    ref?: Ref<HTMLButtonElement | null>;
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export type ButtonProps = Props & Omit<AriaButtonProps, keyof ButtonVariantProps> & ButtonVariantProps;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { as, children, color, variant, size, shape, isDisabled, className } = props;
    const Component = as || 'button';
    const domRef = useDOMRef(ref);

    let { buttonProps } = useButton(props, domRef);
    const styles = React.useMemo(() => StyledButton({ color, variant, size, shape, isDisabled, className }), [color, variant, size, shape, isDisabled, className]);

    return (
        <Component {...buttonProps} className={styles} ref={domRef}>
            {children}
        </Component>
    );
});

Button.displayName = 'Button';

export default Button;
