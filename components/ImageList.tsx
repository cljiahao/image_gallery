import Link from "next/link";
import ImageCard from "./ImageCard";
import { ImageProps } from "@/utils/types";

const ImageList = async ({ links }: { links: ImageProps[] }) => {
  const base_link = "https://lh3.googleusercontent.com/";
  const shuffle = (arr: ImageProps[]) =>
    [...arr].sort(() => Math.random() - 0.5);
  const new_links: ImageProps[] = shuffle(links);
  return (
    <div className="grid-cols-1s grid w-full py-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {new_links.map((link) => (
        <Link
          key={link.id + link.type}
          href={`photo?type=${link.type}&id=${link.id}`}
        >
          <ImageCard url={base_link + link.url + "=w1920-h1080"} />
        </Link>
      ))}
    </div>
  );
};

export default ImageList;
