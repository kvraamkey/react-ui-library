export default [
    {
        name: 'name',
        desc: 'Name of the button',
        type: 'string',
        def: "''",
    },
    {
        name: 'color',
        desc: "Color of the Button background, additionally, 'default,'primary' and 'secondary' values are possible",
        type: 'enum',
        def: 'default',
    },
    {
        name: 'outlined',
        desc: 'Button with border',
        type: 'boolean',
        def: 'false',
    },
    {
        name: 'rounded',
        desc: 'Button with rounded edges',
        type: 'boolean',
        def: 'false',
    },
    {
        name: 'disabled',
        desc: 'disabled state of the button, effective only if the disabled property is set',
        type: 'boolean',
        def: 'false',
    },
    {
        name: 'link',
        desc: 'enable href effect',
        type: 'boolean',
        def: 'false',
    },
    {
        name: 'icon',
        desc: 'Defines round button, Icon component can be used in slot (slot-name:icon)',
        type: 'slot',
        def: 'false',
    },
    {
        name: 'class',
        desc: 'Custom global CSS class name',
        type: 'string',
        def: "''",
    },
    {
        name: 'style',
        desc: '',
        type: 'string',
        def: '',
    },
];
