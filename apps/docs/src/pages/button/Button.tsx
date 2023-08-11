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
                    <Button {...state} style={{ transition: 'all .5s ease' }} />
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
                        <option value="primary">Text</option>
                        <option value="default">Filled</option>
                        <option value="secondary">Outlined</option>
                    </select>
                </div>
                <div className="col-span-full">
                    <label htmlFor="variant" className="block text-sm font-medium leading-6 text-gray-900 capitalize">variant</label>
                    <select name="variant" id="variant" onChange={(e) => setStateField('variant', e.target.value)}>
                        <option value="primary">Text</option>
                        <option value="default">Filled</option>
                        <option value="secondary">Outlined</option>
                    </select>
                </div>
                <div className="col-span-full">
                    <label htmlFor="radius" className="block text-sm font-medium leading-6 text-gray-900 capitalize">radius</label>
                    <select name="radius" id="radius" onChange={(e) => setStateField('radius', e.target.value)}>
                        <option value="small">small</option>
                        <option value="medium">medium</option>
                        <option value="large">large</option>
                        <option value="full">full</option>
                    </select>
                </div>

                <div className="col-span-full">
                    <label htmlFor="className" className="block text-sm font-medium leading-6 text-gray-900 capitalize">className</label>
                    <input name="className" id="className" onChange={(e) => setStateField('className', e.target.value)} />
                </div>

            </Playground>
        </>

    )
}