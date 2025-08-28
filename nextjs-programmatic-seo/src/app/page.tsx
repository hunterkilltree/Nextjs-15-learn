import banner from "@/assets/restaurant-banner.jpg";
import Header from "@/components/Header";
import RestaurantItem from "@/components/RestaurantItem";
import PaginationClient from "@/components/ui/paginationClient";
import { getAllRestaurants } from "@/data/restaurants";
import Image from "next/image";
import { cache } from "react";

export const revalidate = 86400; // refresh cached pages once every 24 hours

export async function generateStaticParams() {
  const results = await getAllRests({ page: 1, pageSize: 2 });
  const totalPages = results.meta.pageCount;
  const params = [];
  for (let i = 1; i <= totalPages; i++) {
    params.push({ page: i });
  }
  return params;
}

const getAllRests = cache(getAllRestaurants);

export default async function Home(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  // const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const results = await getAllRests({ page: currentPage, pageSize: 2 });
  const pageCount = results.meta.pageCount;
  return (
    <div>
      <Header />
      <main className="container mx-auto space-y-8 px-4 py-8">
        <div className="relative h-96 w-full">
          <Image
            src={banner}
            alt="Restaurant Finder"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-end space-y-2 rounded-lg bg-gradient-to-t from-black via-transparent to-transparent p-4 text-white">
            <h1 className="text-center text-3xl font-bold xl:text-4xl">
              Find the best restaurants near you
            </h1>
            <p className="text-center text-lg">
              Search for your favorite cuisine, restaurant, or dish
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-center text-2xl font-bold">All Restaurants</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {results.data.map((restaurant) => (
              <RestaurantItem key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
          <div className="mt-5 flex w-full justify-center">
            <PaginationClient totalPages={pageCount} />
          </div>
        </div>
      </main>
    </div>
  );
}
