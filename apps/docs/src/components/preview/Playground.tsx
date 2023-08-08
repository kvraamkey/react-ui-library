import { PropsWithChildren } from "react";

export function Playground(props: PropsWithChildren<{}>) {
    return (
        <section className="border-l w-[350px]">
            <h5>Play with Props</h5>
            {props.children}
        </section>
    );
}
