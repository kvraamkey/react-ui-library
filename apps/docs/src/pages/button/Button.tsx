import React from "react";
import { Button, ButtonProps } from "@kvraamkey/core"

import { usageProps } from "~/pages/button/props"
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

                <Preview code={codeTemplate(state.toString(), (state as any).children)}>
                    <div className="flex gap-2">
                        <Button {...state} />
                        <Button {...state} size="icon">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 32 32" height="1.5rem" width="1.5rem" xmlns="http://www.w3.org/2000/svg"><path d="M22.427 12.503c-0.066-0.034-0.123-0.069-0.19-0.104 0.1 0.241 0.132 0.447 0.129 0.63 0.035-0.149 0.059-0.302 0.062-0.462 0.002 0.198-0.022 0.385-0.068 0.558 0.003-0.031 0.006-0.063 0.006-0.096-0.055 0.23-0.146 0.444-0.268 0.639 0.021-0.020 0.040-0.041 0.059-0.063-0.72 1.205-2.684 1.468-3.653 0.224-1.555-1.998 0.032-4.151 0.254-6.266 0.278-2.651-1.384-5.225-3.446-6.765 1.135 1.837-0.361 4.266-1.557 5.625-1.16 1.317-2.572 2.417-3.852 3.613-1.376 1.285-2.699 2.639-3.83 4.147-2.262 3.018-3.648 6.815-2.63 10.581 1.017 3.764 4.277 6.16 7.958 7.007-1.857-0.803-3.595-2.843-3.599-4.931-0.005-2.276 1.437-4.209 3.232-5.479-0.216 0.815-0.333 1.56 0.201 2.289 0.497 0.678 1.367 1.007 2.188 0.828 1.919-0.42 2.008-2.53 0.87-3.76-1.125-1.217-2.214-2.593-1.785-4.358 0.215-0.885 0.758-1.714 1.447-2.306-0.529 1.391 0.975 2.762 1.965 3.445 1.719 1.185 3.604 2.081 5.185 3.47 1.662 1.46 2.89 3.434 2.642 5.724-0.269 2.482-2.241 4.208-4.453 5.079 4.674-1.032 9.504-4.66 9.603-9.844 0.082-4.265-2.844-7.547-6.468-9.426z" /></svg>
                        </Button>
                    </div>
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