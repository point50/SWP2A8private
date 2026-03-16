import Image from "next/image"
import TopMenuItem from "./TopMenuItem";

export default function TopMenu () {
    return (
        <div className="h-[50px] bg-white fixed top-0 left-0 right-0 z-30 border-t border-b border-gray-300 flex flex-row-reverse items-center">

            <div className="h-full w-[100px] relative">
                <Image
                    src="/img/logo.png"
                    alt="logo"
                    fill
                    style={{ objectFit: "contain" }}
                />
            </div>

            <TopMenuItem title="Booking" pageRef="/booking" />
            <TopMenuItem title="Select Venue" pageRef="/venue" />

        </div>
    );
}