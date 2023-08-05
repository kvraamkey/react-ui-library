import { Button } from '@kvraamkey/core';

export default () => {
    return (
        <>
            <h4>Button Variations</h4>
            <Button onPress={() => console.log('Button Cliked')}>Button</Button>
        </>
    );
};
