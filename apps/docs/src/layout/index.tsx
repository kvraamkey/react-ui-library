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
                        <svg width="24" height="24" fill="currentColor" viewBox="3 3 18 18"><title>GitHub</title><path d="M12 3C7.0275 3 3 7.12937 3 12.2276C3 16.3109 5.57625 19.7597 9.15374 20.9824C9.60374 21.0631 9.77249 20.7863 9.77249 20.5441C9.77249 20.3249 9.76125 19.5982 9.76125 18.8254C7.5 19.2522 6.915 18.2602 6.735 17.7412C6.63375 17.4759 6.19499 16.6569 5.8125 16.4378C5.4975 16.2647 5.0475 15.838 5.80124 15.8264C6.51 15.8149 7.01625 16.4954 7.18499 16.7723C7.99499 18.1679 9.28875 17.7758 9.80625 17.5335C9.885 16.9337 10.1212 16.53 10.38 16.2993C8.3775 16.0687 6.285 15.2728 6.285 11.7432C6.285 10.7397 6.63375 9.9092 7.20749 9.26326C7.1175 9.03257 6.8025 8.08674 7.2975 6.81794C7.2975 6.81794 8.05125 6.57571 9.77249 7.76377C10.4925 7.55615 11.2575 7.45234 12.0225 7.45234C12.7875 7.45234 13.5525 7.55615 14.2725 7.76377C15.9937 6.56418 16.7475 6.81794 16.7475 6.81794C17.2424 8.08674 16.9275 9.03257 16.8375 9.26326C17.4113 9.9092 17.76 10.7281 17.76 11.7432C17.76 15.2843 15.6563 16.0687 13.6537 16.2993C13.98 16.5877 14.2613 17.1414 14.2613 18.0065C14.2613 19.2407 14.25 20.2326 14.25 20.5441C14.25 20.7863 14.4188 21.0746 14.8688 20.9824C16.6554 20.364 18.2079 19.1866 19.3078 17.6162C20.4077 16.0457 20.9995 14.1611 21 12.2276C21 7.12937 16.9725 3 12 3Z" /></svg>
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
