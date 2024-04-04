const getGooglePhotos = async (link: string) => {
  const resp = await fetch(link, {
    method: "GET",
    headers: {
      Accept: "*/*",
    },
  });
  const html = await resp.text();
  const re = /pw([\/])([^"|=]*)/g;
  const result = html.match(re);
  const unique = Array.from(new Set(result));

  return unique;
};

export default getGooglePhotos;
