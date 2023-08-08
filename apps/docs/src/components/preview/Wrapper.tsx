import { PropsWithChildren } from "react";

export function PreviewWrapper(props: PropsWithChildren<{ title: string }>) {
    return (
        <section className="flex-1 flex flex-col w-full h-full overflow-auto p-4 pt-2 gap-3">
            <h3 className="text-2xl">{props.title}</h3>
            {props.children}
        </section>
    );
}