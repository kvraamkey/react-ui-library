export const codeTemplate = (props: string, children: string) => `import { Button } from '@kvraamkey/core';
function Demo() {
    return (
        <Button${props}>
            ${children}
        </Button>
    );
}`;
