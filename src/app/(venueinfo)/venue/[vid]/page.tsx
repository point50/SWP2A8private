import Image from "next/image";

export default async function Page({ params }: { params: Promise<{ vid: string }> }) {
  const { vid } = (await params);

  const venuesDetails = new Map();
  venuesDetails.set("001", {venueName: "The Bloom Pavilion", imgSrc: "/img/bloom.jpg"})
  venuesDetails.set("002", {venueName: "Spark Space", imgSrc: "/img/sparkspace.jpg"})
  venuesDetails.set("003", {venueName: "The Grand Table", imgSrc: "/img/grandtable.jpg"})

  return (
    <div>
      <main className="!mt-20 !ml-20 flex">
        <div className="w-[400px] h-[400px] relative">
          <Image src={venuesDetails.get(vid).imgSrc}
            alt="product"
            fill
            objectFit="cover"/>
        </div>
        <h1
        className="!mt-5 !ml-10 text-[22pt] font-bold">{venuesDetails.get(vid).venueName}</h1>
      </main>
    </div>
  );
}