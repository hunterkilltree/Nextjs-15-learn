"use client"
import { usePathname, useSearchParams } from "next/navigation";

export default function PaginationClient({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <ul className="mb-4 flex justify-center">
      {currentPage > 1 && (
        <li>
          <a
            href={createPageURL(1)}
            aria-label="First page"
            className="text-gray-500 hover:text-gray-700"
          >
            &laquo;
          </a>
        </li>
      )}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
        <li key={pageNumber} className="mr-2">
          <a
            href={createPageURL(pageNumber)}
            className={`text-gray-500 hover:text-gray-700 ${currentPage === pageNumber ? "font-bold" : ""}`}
          >
            {pageNumber}
          </a>
        </li>
      ))}
      {currentPage < totalPages && (
        <li>
          <a
            href={createPageURL(totalPages)}
            aria-label="Last page"
            className="text-gray-500 hover:text-gray-700"
          >
            &raquo;
          </a>
        </li>
      )}
    </ul>
  );
}
