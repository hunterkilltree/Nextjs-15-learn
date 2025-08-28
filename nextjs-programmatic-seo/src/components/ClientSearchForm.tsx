"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import LocationInput from "@/components/LocationInput";
import { Search } from "lucide-react";

interface ClientSearchFormProps {
  q?: string;
  location?: string;
}

export default function ClientSearchForm({
  q,
  location,
}: ClientSearchFormProps) {
  const createPageURL = (q: string, location: string) => {
    return `/${location}/${q}`;
  };

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const q = formData.get("q") as string;
    const location = formData.get("location") as string;
    const newURL = createPageURL(q, location);
    window.location.href = newURL;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-2xl flex-wrap gap-2 sm:flex-nowrap"
      key={`${q}-${location}`}
    >
      <Input
        name="q"
        placeholder="Search restaurants..."
        defaultValue={q}
        type="search"
        required
      />
      <LocationInput name="location" defaultValue={location} />
      <Button variant="secondary">
        <Search className="size-4" />
        Search
      </Button>
    </form>
  );
}
