import React from "react";
import { Highlight, RenderProps, themes } from "prism-react-renderer"

export function Preview(props: React.PropsWithChildren<{ code: any }>) {
    const [view, setView] = React.useState(false)
    return (
        <section className="flex flex-col border">
            <div className="flex-initial flex items-center justify-between p-2 border-b">
                <span>Usage</span>
                <button onClick={() => setView(!view)}>{`{ }`}</button>
            </div>
            <Highlight
                theme={themes.vsLight}
                code={props.code}
                language="tsx"
            >
                {({ tokens, getLineProps, getTokenProps }) => (
                    <pre className="pl-4 bg-gray-20">
                        {tokens.map((line, i) => (
                            <div key={i} {...getLineProps({ line })}>
                                {line.map((token, key) => (
                                    <span key={key} {...getTokenProps({ token })} />
                                ))}
                            </div>
                        ))}
                    </pre>
                )}
            </Highlight>
            <div className="flex-1 min-h-[200px] flex items-center justify-center">
                {props.children}
            </div>
        </section>
    );
}
