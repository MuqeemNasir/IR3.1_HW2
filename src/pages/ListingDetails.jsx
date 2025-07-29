import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ListingDetails = () => {
  const listingId = useParams();

  const listingInfo = [
    {
      id: 1,
      name: "Luxurious Taj Mahal View Apartment",
      type: "Cottage",
      location: "Mountain View, CA",
      rating: 4.8,
      description: "Escape to a charming cottage nestled in the mountains.",
      amenities: ["Kitchen", "WiFi", "Parking"],
      price: "150/night",
    },
    {
      id: 2,
      name: "Cozy Retreat in the Mountains",
      type: "Villa",
      location: "Maui, Hawaii",
      rating: 4.9,
      description: "Experience luxury living in a stunning beachfront villa.",
      amenities: ["Private Pool", "Ocean View", "Fitness Center"],
      price: "500/night",
    },
    {
      id: 3,
      name: "Seaside Villa with Private Beach Access",
      type: "Apartment",
      location: "Maldives, Maldives",
      rating: 4.6,
      description:
        "Experience luxury living in a stunning beach with private in villa.",
      amenties: ["Private Pool", "Ocean View", "Underwater Life"],
      price: "900/night",
    },
    {
      id: 4,
      name: "Modern Loft in the City Center",
      type: "Villa",
      location: "New York City, NY",
      rating: 4.5,
      description:
        "Live in style in a modern loft apartment in the heart of the city.",
      amenities: ["Downtown Location", "Gym Access", "24/7 Secruity"],
      price: "250/night",
    },
  ];

  const listingData = listingInfo.find(
    (listing) => listing.id == listingId.listingId
  );

  return (
    <>
      <Header />
      <main className="container py-4">
        <h1 className="display-3 fw-medium">{listingData.name}</h1>
        <p>Type: {listingData.type}</p>
        <p>Location: {listingData.location}</p>
        <p>Rating: {listingData.rating}</p>
        <p>{listingData.description}</p>
        <hr />
        <h3 className="mb-3">Amenities</h3>
        <ul>
          {listingData.amenities.map((facility, index) => (
            <li key={index}>{facility}</li>
          ))}
        </ul>
        <p>Price: ${listingData.price}</p>
      </main>
      <Footer />
    </>
  );
};

export default ListingDetails;
