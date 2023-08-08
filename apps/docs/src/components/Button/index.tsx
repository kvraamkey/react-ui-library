import { Button } from '@kvraamkey/core';

export default () => {
    return (
        <>
            <h1>Button</h1>
            <p>Use the button component inside forms, support for multiple styles, colors, sizes</p>
            <h3>Default button</h3>
            <Button onPress={() => console.log('Button Cliked')}>Button</Button>
        </>
    );
};
