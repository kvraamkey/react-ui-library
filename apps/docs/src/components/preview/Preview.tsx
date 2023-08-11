import React from "react";
import { Highlight, themes } from "prism-react-renderer"

export function Preview(props: React.PropsWithChildren<{ code: any }>) {
    const [view, setView] = React.useState(false)
    return (
        <section className="flex flex-col border">
            <div className="flex-initial flex items-center justify-between p-2 border-b">
                <span>Usage</span>
                <div className="flex gap-3 items-center">
                    <button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-clipboard-copy"
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            strokeWidth={1}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h3m9 -9v-5a2 2 0 0 0 -2 -2h-2" />
                            <path d="M13 17v-1a1 1 0 0 1 1 -1h1m3 0h1a1 1 0 0 1 1 1v1m0 3v1a1 1 0 0 1 -1 1h-1m-3 0h-1a1 1 0 0 1 -1 -1v-1" />
                            <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                        </svg>
                    </button>
                    <button onClick={() => setView(!view)}><svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-code"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M7 8l-4 4l4 4" />
                        <path d="M17 8l4 4l-4 4" />
                        <path d="M14 4l-4 16" />
                    </svg></button>
                </div>
            </div>
            {
                view && <Highlight
                    theme={themes.jettwaveLight}
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
            }
            {
                !view && <div className="flex-1 min-h-[200px] flex items-center justify-center">
                    {props.children}
                </div>
            }
        </section >
    );
}
