import React from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';

import { navigations } from '~/config';
import * as components from '~/components';

function titleCase(str: string) {
    return str
        .replace('-', ' ')
        .toLowerCase()
        .split(' ')
        .map(function (word) {
            return word.replace(word[0], word[0].toUpperCase());
        })
        .join('');
}

function AppLayout() {
    return (
        <section className="flex flex-col w-full h-full overflow-hidden">
            <header className="flex-initial flex border-b h-12 items-center justify-between px-4">
                <div className="flex-initial flex justify-center items-center gap-2">
                    <svg
                        className="block text-foreground text-default-400"
                        fill="currentColor"
                        height="34"
                        viewBox="0 0 43 43"
                        width="34"
                    >
                        <path d="M32 43H11a10.928 10.928 0 01-7.778-3.222A10.928 10.928 0 010 32V11a10.928 10.928 0 013.222-7.778A10.928 10.928 0 0111 0h21a10.929 10.929 0 017.779 3.222A10.927 10.927 0 0143 11v21a10.927 10.927 0 01-3.222 7.778A10.929 10.929 0 0132 43zM11.314 12.293v12.033a6.35 6.35 0 00.87 3.31 6.243 6.243 0 002.422 2.3 7.458 7.458 0 003.595.843 7.474 7.474 0 003.6-.839 6.2 6.2 0 002.418-2.3 6.381 6.381 0 00.869-3.315V12.292h-1.659V24.21a5.149 5.149 0 01-.643 2.578 4.6 4.6 0 01-1.824 1.779 5.668 5.668 0 01-2.759.648 5.646 5.646 0 01-2.756-.648 4.64 4.64 0 01-1.823-1.779 5.116 5.116 0 01-.648-2.578V12.292zm18.6 0v18.175h1.66V12.293z" />
                    </svg>
                    <span className='text-2xl tracking-wide'>ReactUI</span>
                </div>
                <div className='flex gap-2'>
                    <a target='_blank' href='https://github.com/kvraamkey/react-ui-library'>
                        <svg className="w-5 h-5" viewBox="0 0 496 512" fill="currentColor" role="img"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
                    </a>
                </div>
            </header>
            <section className="flex-1 flex w-full h-full">
                <aside className="flex-initial w-64 border-r flex flex-col py-4 space-y-5 overflow-auto">
                    {navigations.map((nav) => (
                        <div className="space-y-2" key={nav.title}>
                            <h2 className="text-sm font-semibold tracking-wide text-black px-4">{nav.title}</h2>
                            {nav?.menus.map((menu) => (
                                <NavLink to={menu.link} key={menu.link} className="flex flex-col space-y-1">
                                    <span className="cursor-pointer hover:underline pl-6">{menu.name}</span>
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
    const params = useParams<{ component?: string }>();
    const loadComponent = React.useMemo(() => {
        const comp = params.component;
        console.log(comp);
        //@ts-ignore
        if (params.component && components[titleCase(comp)]) {
            return React.createElement(components.Button);
        } else return undefined;
    }, [params]);

    if (loadComponent) return loadComponent;

    return (
        <p className="font-mono">
            {/* @ts-ignore */}
            <b>{`<${titleCase(params?.component)} />`}</b> Component Not Found
        </p>
    );
}

export default AppLayout;
