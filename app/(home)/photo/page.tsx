import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const page = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const p_id = (searchParams.id || "1") as string;
  const p_type = (searchParams.type || "all") as string;

  return (
    <div className="flex-center min-h-screen w-full">
      <Carousel className="flex-center w-1/2 bg-red-200">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="w-full bg-blue-200">
              <div className="flex-center p-1">test</div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-yellow-300" />
        <CarouselNext className="bg-green-300" />
      </Carousel>
    </div>
  );
};

export default page;
