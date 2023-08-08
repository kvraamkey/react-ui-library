import { PropsWithChildren } from "react";

export function PreviewWrapper(props: PropsWithChildren<{ title: string }>) {
    return (
        <section className="flex-1 flex flex-col w-full h-full overflow-auto px-4 pt-2">
            <h3 className="text-2xl mt-1 mb-3">{props.title}</h3>
            {props.children}
        </section>
    );
}