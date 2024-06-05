export function ThirdwebResources() {
    return (
        <div className="grid gap-4 lg:grid-cols-3 justify-center">
            <ArticleCard
                title="thirdweb SDK Docs"
                href="https://portal.thirdweb.com/typescript/v5"
                description="thirdweb TypeScript SDK documentation"
            />

            <ArticleCard
                title="Components and Hooks"
                href="https://portal.thirdweb.com/typescript/v5/react"
                description="Learn about the thirdweb React components and hooks in thirdweb SDK"
            />

            <ArticleCard
                title="thirdweb Dashboard"
                href="https://thirdweb.com/dashboard"
                description="Deploy, configure, and manage your smart contracts from the dashboard."
            />
        </div>
    );
}

// --- //

export function ArticleCard(props: {
    title: string;
    href: string;
    description: string;
}) {
    return (
        <a
            href={props.href + "?utm_source=vite-template"}
            target="_blank"
            className="flex flex-col border border-zinc-800 p-4 rounded-lg hover:bg-zinc-900 transition-colors hover:border-zinc-700"
        >
            <article>
                <h2 className="text-lg font-semibold mb-2">{props.title}</h2>
                <p className="text-sm text-zinc-400">{props.description}</p>
            </article>
        </a>
    );
}