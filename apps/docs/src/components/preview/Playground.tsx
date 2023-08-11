import { PropsWithChildren } from "react";

export function Playground(props: PropsWithChildren<{}>) {
    return (
        <section className="border-l w-[350px] flex flex-col gap-3 p-4">
            {props.children}
        </section>
    );
}
