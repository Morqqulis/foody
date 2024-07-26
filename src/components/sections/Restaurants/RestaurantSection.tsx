import RestAside from "@sections/Aside/RestAside";
import React, { FC } from "react";
import RestaurantELements from "./RestaurantELements";

export const RestaurantSection: FC = (): JSX.Element => {
  return (
    <div className="container flex items-start gap-10 mt-5">
      <RestAside />
      <RestaurantELements />
    </div>
  );
};
