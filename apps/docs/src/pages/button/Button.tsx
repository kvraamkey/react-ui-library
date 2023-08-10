import React from "react";
import { Button, ButtonProps } from "@kvraamkey/core"

import props from "./props"
import { Description, Playground, Preview, PreviewWrapper, Properties } from "~/components"

const codeTemplate = (props: string, children: string) => `
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button${props}>
      ${children}
    </Button>
  );
}
`;

export default () => {

    const [state, setState] = React.useState<ButtonProps>({ variant: 'default', children: 'Button', size: 'lg' });

    const setStateField = (field: string, value: any) => {
        setState((current) => ({ ...current, [field]: value }));
    }


    const code = codeTemplate("", (state as any).children);

    return (
        <>
            <PreviewWrapper title="Button">

                <Preview code={code}>
                    <Button {...state} />
                </Preview>

                <Description>
                    <p>Button component contains two major types of buttons, namely, regular (default) and icon button (when setting icon property). Icon button can be configured as FAB (Floating Action Button) by setting fab property. The button can become a toggle by setting the toggle property</p>
                </Description>

                <Properties title="Button component props" props={props} />

            </PreviewWrapper>

            <Playground />
        </>

    )
}