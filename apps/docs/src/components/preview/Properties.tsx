
interface PropertiesProps {
    name: string,
    desc?: string,
    type: string,
}

export function Properties({ title, props }: { title: string, props: PropertiesProps[] }) {
    return (
        <section className="flex flex-col gap-3">
            <h4 className='text-xl'>{title || "Properties"}</h4>
            <table className="properties table border w-full font-mono text-[13.5px]">
                <thead>
                    <tr className="bg-gray-100 border">
                        <td className="px-3 py-1 border-r w-44">Name</td>
                        <td className="px-3 py-1 border-r">Type</td>
                        <td className="px-3 py-1 border-r">Description</td>
                    </tr>
                </thead>
                <tbody>
                    {props?.map((prop) => (
                        <tr key={prop.name} className="border">
                            <td className="px-3 py-1 border-r">
                                <code>{prop.name}</code>
                            </td>
                            <td className="px-3 py-1 border-r w-60">
                                <code className="text-pink-600">{prop.type}</code>
                            </td>
                            <td className="px-3 py-1" dangerouslySetInnerHTML={{ __html: prop?.desc || '' }} />
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}
