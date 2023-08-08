import { PropsWithChildren } from 'react';

export function Description(props: PropsWithChildren<{}>) {
    return (
        <section className='flex flex-col gap-3'>
            <h4 className='text-xl'>Description</h4>
            {props.children}
        </section>
    );
}
