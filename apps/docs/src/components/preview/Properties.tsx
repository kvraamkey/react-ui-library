
interface PropertiesProps {
    name: string,
    desc: string,
    type: string,
    def: string,
}

export function Properties({ props }: { props: PropertiesProps[] }) {
    console.log(props)
    return (
        <section className="flex flex-col gap-3">
            <h4 className='text-xl'>Properties</h4>
            <table className="properties table border w-full font-mono text-[13.5px]">
                <thead>
                    <tr className="bg-gray-100 border">
                        <td className="px-3 py-1 border-r w-44">Name</td>
                        <td className="px-3 py-1 border-r">Description</td>
                        <td className="px-3 py-1 w-32">Default</td>
                    </tr>
                </thead>
                <tbody>
                    {props?.map((prop) => (
                        <tr key={prop.name} className="border">
                            <td className="px-3 py-1 border-r">
                                <div className="flex flex-col">
                                    <code className="text-pink-600">{prop.name}</code>
                                    {prop.type && <small>{prop.type}</small>}
                                </div>
                            </td>
                            <td className="px-3 py-1 border-r" dangerouslySetInnerHTML={{ __html: prop.desc }} />
                            <td className="px-3 py-1">
                                {/* {#if item.def && (item.def[0] === '#' || item.def.indexOf('rgb') === 0)} */}
                                {/* <span style={`display:inline-block;width:10px;height:10px;background-color:${item.def}`} /> */}
                                {prop.def}
                                {/* {:else}
                                <strong>
                                    {@html item.def}
                                </strong>
                                {/if} */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}
