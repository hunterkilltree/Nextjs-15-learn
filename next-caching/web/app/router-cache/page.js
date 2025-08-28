import Link from "next/link";

export default async function Page() {
  return (
    <div>
      <h1 className="font-bold text-4xl">Client-side Router Cache</h1>
      <div className="mt-6">
        This page is statically rendered in{" "}
        <span className="text-blue-400">build time</span>.
      </div>
      <div className="flex flex-col gap-10 mt-10 border rounded border-zinc-900 p-10">
        <div className="flex gap-6">
          <Link
            href="/router-cache/static-page"
            prefetch={false} // prevent fetch
            className="flex rounded gap-6 border-zinc-800 bg-blue-500 w-4xl h-40 items-center justify-center font-bold text-2xl"
          >
            Go to static page
          </Link>
          <Link
            href="/router-cache/dynamic-page"
            prefetch={false} // prevent fetch
            className="flex rounded gap-6 border-zinc-800 bg-blue-500 w-4xl h-40 items-center justify-center font-bold text-2xl"
          >
            Go to dynamic page
          </Link>
          <Link
            href="/router-cache/client-page"
            className="flex rounded gap-6 border-zinc-800 bg-blue-500 w-4xl h-40 items-center justify-center font-bold text-2xl"
          >
            Go to client side page
          </Link>
        </div>
      </div>
    </div>
  );
}
