import React from 'react';

import { navigations } from '../config';
import * as components from "./../components";
import { NavLink, Outlet, useParams } from 'react-router-dom';

function titleCase(str: string) {
    return str.replace("-", " ").toLowerCase().split(' ').map(function (word) {
        return word.replace(word[0], word[0].toUpperCase());
    }).join('');
}


function AppLayout() {
    return (
        <section className="flex flex-col w-full h-full overflow-hidden">
            <header className="flex-initial border-b h-12">header</header>
            <section className="flex-1 flex w-full h-full">
                <aside className="flex-initial w-64 border-r flex flex-col py-4 space-y-5 overflow-auto">
                    {navigations.map((nav) => (
                        <div className="space-y-2" key={nav.title}>
                            <h2 className="text-sm font-semibold tracking-wide text-black px-4">{nav.title}</h2>
                            {nav?.menus.map((menu) => (
                                <NavLink to={menu.link} key={menu.link} className="flex flex-col space-y-1">
                                    <span className="cursor-pointer hover:underline pl-6">
                                        {menu.name}
                                    </span>
                                </NavLink>
                            ))}
                        </div>
                    ))}
                </aside>
                <Outlet />
            </section>
        </section>
    );
}


export function AppComponentRender() {
    const params = useParams<{ component?: string }>()
    const loadComponent = React.useMemo(() => {
        const comp = params.component;
        console.log(comp)
        if (params.component && components[titleCase(comp)]) {
            return React.createElement(components.Button)
        }
        else return undefined
    }, [params])

    if (loadComponent) return loadComponent

    return <p className='font-mono'><b>{`<${titleCase(params?.component)} />`}</b> Component Not Found</p>
}


export default AppLayout;
