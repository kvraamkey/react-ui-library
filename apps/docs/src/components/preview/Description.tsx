import { PropsWithChildren } from 'react';

export function Description(props: PropsWithChildren<{}>) {
    return (
        <section>
            <h4>Description</h4>
            {props.children}
        </section>
    );
}
