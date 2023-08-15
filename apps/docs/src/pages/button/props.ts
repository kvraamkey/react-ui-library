export const usageProps = [];

export const playgroundProps = [
    {
        name: 'variant',
        type: 'select',
        data: [
            { label: 'filled', value: 'filled' },
            { label: 'light', value: 'light' },
            { label: 'outline', value: 'outline' },
            { label: 'default', value: 'default' },
            { label: 'subtle', value: 'subtle' },
        ],
        initialValue: 'filled',
        defaultValue: 'filled',
    },
    { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
    { name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    { name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    { name: 'disabled', type: 'boolean', initialValue: false, defaultValue: false },
    { name: 'compact', type: 'boolean', initialValue: false, defaultValue: false },
    { name: 'uppercase', type: 'boolean', initialValue: false, defaultValue: false },
    { name: 'children', type: 'string', initialValue: 'Settings' },
];
