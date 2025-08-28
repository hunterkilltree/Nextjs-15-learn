import ClientSearchForm from "./ClientSearchForm"; // you create this
import Link from "next/link";

interface HeaderProps {
  q?: string;
  location?: string;
}

export default function HeaderServer({ q, location }: HeaderProps) {
  return (
    <header className="bg-primary py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          <Link href="/">
            <span className="text-3xl font-bold text-primary-foreground">
              Restaurant Finder
            </span>
          </Link>
          <ClientSearchForm q={q} location={location} />
        </div>
      </div>
    </header>
  );
}
