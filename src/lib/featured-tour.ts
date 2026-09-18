/**
 * Featured-tour helpers — Editor's Choice flagship used for homepage cards / schema.
 */
import { getBookableProduct } from "@/data/bookable-products";

const flagship = getBookableProduct("tangier-highlights-cape-spartel-hercules-caves");

export const featuredTour = flagship
  ? {
      slug: flagship.slug,
      path: flagship.path,
      bookingPath: flagship.bookingPath,
      cardName: flagship.name,
      fullName: flagship.experienceName,
    }
  : {
      slug: "tangier-highlights-cape-spartel-hercules-caves",
      path: "/shore-excursions/tangier-highlights-cape-spartel-hercules-caves",
      bookingPath: "/book/tangier-highlights-cape-spartel-hercules-caves",
      cardName: "Tangier Highlights, Cape Spartel & Hercules Caves",
      fullName: "Tangier Highlights, Cape Spartel & Hercules Caves",
    };
