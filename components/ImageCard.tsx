import Image from "next/image";

const ImageCard = ({ url }: { url: string }) => {
  return (
    <div className="flex-center h-full w-full">
      <Image
        src={url}
        alt={url}
        height={500}
        width={400}
        className="h-64 object-none hover:object-cover"
      />
    </div>
  );
};

export default ImageCard;
