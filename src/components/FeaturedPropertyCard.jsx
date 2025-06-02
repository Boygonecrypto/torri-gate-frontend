import React from "react";
import { MdOutlineBathtub } from "react-icons/md";
import { LiaBedSolid } from "react-icons/lia";
import { TbToolsKitchen } from "react-icons/tb";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/priceFormatter";
const FeaturedPropertyCard = ({
  _id,
  images,
  title,
  kitchen,
  bedroom,
  toilet,
  price,
  location,
  status,
}) => {
  return (
    <Link
      to={`/property/${_id}`}
      className="w-full block lg:w-[325px] xl:w-[400px] h-[285px] mt-8"
    >
      <img
        src={images[0]}
        alt="image"
        className="w-full h-[203px] rounded-[10px] object-cover"
      />
      <div className="mt-[10px]">
        <div className="flex items-center justify-between">
          <h2 className="font-medium text-[16px] text-[#0C0C0C] mt-2">
            {title}
          </h2>
          <h1 className="font-[600] text-[20px] text-[#363636]">
            {formatPrice(price)}
            <span className="font-medium text-[16px] ">/yr</span>
          </h1>
        </div>

        <p className="text-[#666666] text-[14px] font-[500]">{location}</p>
        <div className="flex items-center gap-[22px] text-[#363636] text-sm flex-wrap mt-2.5">
          <p className="flex items-center gap-2">
            <LiaBedSolid /> {bedroom} Beds
          </p>
          <p className="flex items-center gap-2">
            <MdOutlineBathtub /> {toilet} Baths
          </p>
          <p className="flex items-center gap-2">
            <TbToolsKitchen /> {kitchen} Kitchen
          </p>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedPropertyCard;
// Note: The Link component is used to navigate to the property details page.
// Ensure that the route for the property details page is defined in your routing setup.
// The formatPrice function is assumed to be defined in utils/priceFormatter.js
// and formats the price as needed (e.g., adding currency symbols, commas).
// The component expects the following props:
// - _id: The unique identifier for the property
// - images: An array of image URLs for the property
// - title: The title of the property
// - kitchen: The number of kitchens in the property
// - bedroom: The number of bedrooms in the property
// - toilet: The number of toilets in the property
// - price: The price of the property
// - location: The location of the property
// - status: The status of the property (e.g., for sale, for rent)
// Ensure that the necessary CSS styles are applied to match your design requirements.
// The component is designed to be responsive and will adjust its layout based on the screen size.
// Make sure to import the necessary icons from react-icons and any other dependencies you need.
// Example usage of the FeaturedPropertyCard component:
