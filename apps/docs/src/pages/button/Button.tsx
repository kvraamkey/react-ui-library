import { Description, Playground, Preview, PreviewWrapper, Properties } from "~/components"
import props from "./props"

export default () => {
    return (
        <>
            <PreviewWrapper title="Button">

                <Preview />

                <Description>
                    <p>Button component contains two major types of buttons, namely, regular (default) and icon button (when setting icon property). Icon button can be configured as FAB (Floating Action Button) by setting fab property. The button can become a toggle by setting the toggle property</p>
                </Description>

                <Properties props={props} />

            </PreviewWrapper>

            <Playground />
        </>

    )
}