import React from "react";

export function Preview() {
    const [view, setView] = React.useState(false)
    return (
        <section className="flex flex-col border">
            <div className="flex-initial flex items-center justify-between p-2 border-b">
                <span>Example</span>
                <button onClick={() => setView(!view)}>{`{ }`}</button>
            </div>
            {view && <code className="bg-gray-100 border-b">sample code</code>}
            <div className="flex-1 min-h-[200px]">
                preview
            </div>
        </section>
    );
}
