import Header from "@/components/Header";
import ImageList from "@/components/ImageList";
import { get_images } from "@/lib/data";

const album_links: { [id: string]: string } = {
  Nature: "https://photos.app.goo.gl/ksFbiXm2DD5xrhkt8",
  Snow: "https://photos.app.goo.gl/1XL48q6Ls1CAu1pH9",
  Urban: "https://photos.app.goo.gl/BPH12MxTReCruip59",
  Buildings: "https://photos.app.goo.gl/cwo4Pc2cuKYfKM9v9",
};

const Page = async () => {
  const links = await get_images(album_links);
  return (
    <div className="bg-white">
      <Header button_name={Object.keys(album_links)} />
      <div className="w-full bg-stone-300">
        <ImageList links={links} />
      </div>
    </div>
  );
};

export default Page;
