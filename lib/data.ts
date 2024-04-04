import getGooglePhotos from "@/utils/GoogleApis";
import { ImageProps } from "@/utils/types";

export async function get_images(album_links: { [id: string]: string }) {
  let links: ImageProps[] = [];

  const promises = Object.keys(album_links).map(async (key) => {
    const results = await getGooglePhotos(album_links[key]);
    let i = 0;
    for (let res of results) {
      links.push({
        id: i,
        type: key,
        url: res,
      });
      i++;
    }
  });

  await Promise.all(promises);

  return links;
}
