import { PropsWithChildren } from "react";

export function PreviewWrapper(props: PropsWithChildren<{ title: string, desc?: string }>) {
    return (
        <section className="flex-1 flex flex-col w-full h-full overflow-auto p-4 pt-2 gap-3">
            <div>
                <h3 className="text-2xl">{props.title}</h3>
                {props.desc && <p>{props.desc}</p>}
            </div>
            {props.children}
        </section >
    );
}