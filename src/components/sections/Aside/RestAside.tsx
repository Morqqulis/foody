"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getListDocuments } from "../../../utls/functions";
import { collections } from "@libs/appwrite/config";
import { Button } from "@ui/button";

type RestAside = {
  id: number;
  icon: string;
  title: string;
};

const AsideElements: RestAside[] = [
  {
    id: 0,
    icon: "https://picsum.photos/25/25",
    title: "Chinese",
  },
  {
    id: 1,
    icon: "https://picsum.photos/25/25",
    title: "Sea Food",
  },
  {
    id: 2,
    icon: "https://picsum.photos/25/25",
    title: "FastFood",
  },
  {
    id: 3,
    icon: "https://picsum.photos/25/25",
    title: "Chinese",
  },
  {
    id: 4,
    icon: "https://picsum.photos/25/25",
    title: "Sea Food",
  },
  {
    id: 5,
    icon: "https://picsum.photos/25/25",
    title: "FastFood",
  },
  {
    id: 6,
    icon: "https://picsum.photos/25/25",
    title: "Chinese",
  },
  {
    id: 7,
    icon: "https://picsum.photos/25/25",
    title: "Sea Food",
  },
  {
    id: 8,
    icon: "https://picsum.photos/25/25",
    title: "FastFood",
  },
  {
    id: 3,
    icon: "https://picsum.photos/25/25",
    title: "Chinese",
  },
  {
    id: 4,
    icon: "https://picsum.photos/25/25",
    title: "Sea Food",
  },
  {
    id: 5,
    icon: "https://picsum.photos/25/25",
    title: "FastFood",
  },
  {
    id: 3,
    icon: "https://picsum.photos/25/25",
    title: "Chinese",
  },
  {
    id: 4,
    icon: "https://picsum.photos/25/25",
    title: "Sea Food",
  },
  {
    id: 5,
    icon: "https://picsum.photos/25/25",
    title: "FastFood",
  },
];

const RestAside: React.FC = (): JSX.Element => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const { documents } = await getListDocuments(collections.categoriesId);
      setCategories(documents);
    })();
  }, []);

  return (
    <div className="flex h-full min-h-[calc(100vh-130px)] w-full basis-1/5 flex-col gap-8 overflow-y-scroll bg-[#F3F4F6] px-5 py-10">
      {categories?.map((category) => (
        <Button
          className="flex w-full items-center justify-start gap-4 text-left text-xl font-medium text-black hover:bg-red-300"
          type={"button"}
          aria-label={"food category"}
          key={category.$id}
          variant={"ghost"}
        >
          <Image className={`h-[25px] w-[25px] rounded-full`} src={category.image} alt={category.name} width={30} height={30} />
          <p>{category.name}</p>
        </Button>
      ))}
    </div>
  );
};

export default RestAside;
