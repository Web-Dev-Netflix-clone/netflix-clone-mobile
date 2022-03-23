import React from "react";
import { PressableCard } from "../PressableCard";
import image from "../../../assets/images/posters/stranger-things.jpg";

export const StandardLaneCard = ({ item }: { item: any }) => (
  <PressableCard
    background={image}
    onClick={() => console.log("click")}
    height={200}
    width={150}
  />
);
