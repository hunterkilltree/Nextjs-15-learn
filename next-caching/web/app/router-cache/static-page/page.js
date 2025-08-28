export default async function Page() {
    return (
        <div>
            <h1 className="font-bold text-4xl">Client-side Router Cache - static Page</h1>
            <div className="mt-6">
                This page is static rendered in{" "}
                <span className="text-blue-400">build time</span>.
            </div>
        </div>
    );
}