export const dynamic = "force-dynamic";

export default async function Page() {
    return (
        <div>
            <h1 className="font-bold text-4xl">Client-side Router Cache - Dynamic Page</h1>
            <div className="mt-6">
                This page is dynamic rendered in{" "}
                <span className="text-blue-400">run time</span>.
            </div>
        </div>
    );
}