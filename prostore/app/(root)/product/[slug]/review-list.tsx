"use client";

import { useEffect } from "react";
// import { Review } from "@/types";
import Link from "next/link";
import { useState } from "react";
// import ReviewForm from "./review-form";
// import { getReviews } from "@/lib/actions/review.actions";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, User } from "lucide-react";
import { formatDateTime } from "@/lib/utils";

import ReviewForm from "./review-form";
import Rating from "@/components/shared/product/rating";

const ReviewList = ({
  userId,
  productId,
  productSlug,
}: {
  userId: string;
  productId: string;
  productSlug: string;
}) => {
  // const [reviews, setReviews] = useState<Review[]>([]);
  const [reviews, setReviews] = useState<any>([]);
  useEffect(() => {
    const loadReviews = async () => {
      // const res = await getReviews({ productId });
      // setReviews(res.data);
      const res = {
        data: [
          {
            id: 1,
            title: "Excellent Product!",
            description:
              "I love this product! It's exactly what I was looking for.",
            rating: 5,
            createdAt: new Date("2022-01-01T12:00:00.000Z"),
          },
          {
            id: 2,
            title: "Good but not great",
            description:
              "This product is okay, but it's not the best I've ever used.",
            rating: 3,
            createdAt: new Date("2022-01-15T14:00:00.000Z"),
          },
          {
            id: 3,
            title: "Amazing!",
            description:
              "I'm so impressed with this product! It's exceeded my expectations.",
            rating: 5,
            createdAt: new Date("2022-02-01T10:00:00.000Z"),
          },
          {
            id: 4,
            title: "Disappointing",
            description:
              "Unfortunately, this product didn't live up to the hype.",
            rating: 2,
            createdAt: new Date("2022-02-15T16:00:00.000Z"),
          },
        ],
      };
      setReviews([...res.data]);
    };

    loadReviews();
  }, [productId]);

  // Reload reviews after created or updated
  const reload = async () => {
    // const res = await getReviews({ productId });
    const res = {
      data: {
        id: 1,
        title: "title",
        description: "description",
        rating: 5,
        createdAt: new Date(),
      },
    };
    setReviews([...res.data]);
  };

  return (
    <div className="space-y-4">
      {reviews.length === 0 && <div>No reviews yet</div>}
      {userId ? (
        <ReviewForm
          userId={userId}
          productId={productId}
          onReviewSubmitted={reload}
        />
      ) : (
        <div>
          Please
          <Link
            className="text-blue-700 px-2"
            href={`/sign-in?callbackUrl=/product/${productSlug}`}
          >
            sign in
          </Link>
          to write a review
        </div>
      )}
      <div className="flex flex-col gap-3">
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardHeader>
              <div className="flex-between">
                <CardTitle>{review.title}</CardTitle>
              </div>
              <CardDescription>{review.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4 text-sm text-muted-foreground">
                <Rating value={review.rating} />
                <div className="flex items-center">
                  <User className="mr-1 h-3 w-3" />
                  {review.user ? review.user.name : "User"}
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-1 h-3 w-3" />
                  {formatDateTime(review.createdAt).dateTime}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ReviewList;
