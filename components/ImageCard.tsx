import Image from "next/image";

const ImageCard = ({ url }: { url: string }) => {
  return (
    <div className="flex-center h-full w-full">
      <Image
        src={url}
        alt={url}
        height={500}
        width={400}
        className="h-56 object-none hover:object-cover md:h-64"
      />
    </div>
  );
};

export default ImageCard;
