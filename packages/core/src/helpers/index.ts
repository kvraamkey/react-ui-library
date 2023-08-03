import { Ref, RefObject, useImperativeHandle, useRef } from 'react';

export type As<Props = any> = React.ElementType<Props>;

export type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T> & { as?: As };

export type HTMLUIProps<T extends As = 'div', OmitKeys extends keyof any = never> = Omit<
    PropsOf<T>,
    'ref' | 'color' | 'slot' | OmitKeys
> & { as?: As };

export function useDOMRef<T extends HTMLElement = HTMLElement>(ref?: RefObject<T | null> | Ref<T | null>) {
    const domRef = useRef<T>(null);
    useImperativeHandle(ref, () => domRef.current);
    return domRef;
}
