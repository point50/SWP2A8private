import Link from "next/link";
import Card from "./Card";

export default function VenueCatalog({venuesJson}:{venuesJson: Promise<VenueJson>}) {
    return (
        <>
        Explore {venuesJson.count} venues in out catalog
        <div style = {{margin : "20px", display: "flex", flexDirection: "row", alignContent: "space-around", justifyContent: "space-around", flexWrap: "wrap", padding: "10px"}}>
            {
                venuesJson.data.map((venueItem:Object) => (
                    <Link href = {`/venue/${venueItem.id}`} key = {venueItem.id} className="w-1/5">
                        <Card venueName={venueItem.name} imgSrc={venueItem.picture} />
                    </Link>
                ))
            }
        </div>
        </>
    )
}