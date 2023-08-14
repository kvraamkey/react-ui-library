import React from "react";
import { Button, ButtonProps } from "@kvraamkey/core"

import { usageProps, playgroundProps } from "~/pages/button/props"
import { codeTemplate } from "~/pages/button/code";
import { Description, Playground, Preview, PreviewWrapper, Properties } from "~/components"

export default () => {

    const [state, setState] = React.useState<ButtonProps>({ children: 'Contained' });

    const setStateField = (field: string, value: any) => {
        setState((current) => ({ ...current, [field]: value }));
    }

    return (
        <>
            <PreviewWrapper title="Button" desc="Buttons allow users to take actions, and make choices, with a single tap.">

                <Preview code={codeTemplate(state, (state as any).children)}>
                    <Button {...state} />
                </Preview>

                <Description>
                    <p>Button component contains two major types of buttons, namely, regular (default) and icon button (when setting icon property). Icon button can be configured as FAB (Floating Action Button) by setting fab property. The button can become a toggle by setting the toggle property</p>
                </Description>

                <Properties title="Button component props" props={usageProps} />

            </PreviewWrapper>

            <Playground>
                <pre>{JSON.stringify(state, null, 2)}</pre>
                <div className="col-span-full">
                    <label htmlFor="children" className="block text-sm font-medium leading-6 text-gray-900 capitalize">Children</label>
                    <input name="children" value={state?.children} id="children" onChange={(e) => setStateField('children', e.target.value)} />
                </div>
                <div className="col-span-full">
                    <label htmlFor="color" className="block text-sm font-medium leading-6 text-gray-900 capitalize">color</label>
                    <select name="color" id="color" onChange={(e) => setStateField('color', e.target.value)}>
                        <option value="default">default</option>
                        <option value="primary">primary</option>
                        <option value="secondary">secondary</option>
                        <option value="success">success</option>
                        <option value="error">error</option>
                        <option value="info">info</option>
                        <option value="warning">warning</option>
                    </select>
                </div>
                <div className="col-span-full">
                    <label htmlFor="variant" className="block text-sm font-medium leading-6 text-gray-900 capitalize">variant</label>
                    <select name="variant" id="variant" onChange={(e) => setStateField('variant', e.target.value)}>
                        <option value="text">Text</option>
                        <option value="filled">Filled</option>
                        <option value="outlined">Outlined</option>
                    </select>
                </div>
                <div className="col-span-full">
                    <label htmlFor="shape" className="block text-sm font-medium leading-6 text-gray-900 capitalize">shape</label>
                    <select name="shape" id="shape" onChange={(e) => setStateField('shape', e.target.value)}>
                        <option value="square">square</option>
                        <option value="rounded">rounded</option>
                        <option value="circular">circular</option>
                    </select>
                </div>

                <div className="col-span-full">
                    <label htmlFor="size" className="block text-sm font-medium leading-6 text-gray-900 capitalize">size</label>
                    <select name="size" id="size" onChange={(e) => setStateField('size', e.target.value)}>
                        <option value="small">small</option>
                        <option value="medium">medium</option>
                        <option value="large">large</option>
                    </select>
                </div>

                <div className="col-span-full flex gap-2">
                    <input type="checkbox" name="isDisabled" id="isDisabled" onChange={(e) => setStateField('isDisabled', e.target.checked)} />
                    <label htmlFor="isDisabled" className="block text-sm font-medium leading-6 text-gray-900 capitalize">isDisabled</label>
                </div>

                <div className="col-span-full">
                    <label htmlFor="className" className="block text-sm font-medium leading-6 text-gray-900 capitalize">className</label>
                    <input name="className" id="className" onChange={(e) => setStateField('className', e.target.value)} />
                </div>

            </Playground>
        </>

    )
}