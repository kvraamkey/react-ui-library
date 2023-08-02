import { Button } from '@kvraamkey/core';

function AppLayout() {
    return (
        <section className="flex flex-col w-full h-full overflow-hidden">
            <header className="flex-initial border-b h-12">header</header>
            <section className="flex-1 flex w-full h-full">
                <aside className="flex-initial w-64 border-r overflow-auto">aside</aside>
                <main className="flex-1 flex flex-col items-start">
                    <Button>test</Button>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium necessitatibus dolor
                        repellendus fugiat illum nesciunt asperiores. Facilis at tempora architecto perferendis ea
                        consequatur delectus, ipsam cupiditate maxime consectetur id laborum!
                    </p>
                </main>
            </section>
        </section>
    );
}

export default AppLayout;
