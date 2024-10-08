
import BathroomSvg from "../svg/BathroomSvg";
import BedroomSvg from "../svg/BedroomSvg";
import SectionHeading from "./SectionHeading";

const properties = [
  {
    id: 1,
    name: "Rangpur  Housing",
    image:
      "https://images.unsplash.com/photo-1601760562234-9814eea6663a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbGVzdGF0ZXxlbnwwfHwwfHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60",
    price: 1000000,
    rooms: [{ bedrooms: 3 }, { bathrooms: 4 }],
  },
  {
    id: 2,
    name: "Lakeview Apartments",
    image:
      "https://images.unsplash.com/photo-1719297491193-5fd6a4d04467?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 2000000,
    rooms: [{ bedrooms: 4 }, { bathrooms: 3 }],
  },
  {
    id: 3,
    name: "Chittagong Beachside",
    image:
      "https://images.unsplash.com/photo-1597799029342-ab2546a93ec6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 3500000,
    rooms: [{ bedrooms: 5 }, { bathrooms: 5 }],
  },
  {
    id: 4,
    name: "Sylhet Mountain Homes",
    image:
      "https://images.unsplash.com/photo-1719297490923-ac03db82ba18?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1500000,
    rooms: [{ bedrooms: 3 }, { bathrooms: 2 }],
  },
  {
    id: 5,
    name: "Barishal Riverfront Estate",
    image:
      "https://images.unsplash.com/photo-1719299225627-3b902b8805c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1800000,
    rooms: [{ bedrooms: 4 }, { bathrooms: 3 }],
  },
  {
    id: 6,
    name: "Khulna Green Residences",
    image:
      "https://images.unsplash.com/photo-1719294606218-152c3760d23f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1300000,
    rooms: [{ bedrooms: 3 }, { bathrooms: 3 }],
  },
];

const Properties = () => {
  return (
    // <!-- =========== Available ============= -->
    <section>
      <div className="container">
        <SectionHeading
          sectionName={"properties"}
          sectionTitle={"Grab your Dream Property"}
          sectionDescription={
            "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div
              key={property.id}
              className="p-4 bg-white rounded-lg border border-gray-600/10"
            >
              <img src={property.image} alt={property.name} />
              <div className="p-6">
                <h4 className="text-2xl font-bold cursor-pointer">
                  {property.name}
                </h4>

                <div className="mt-2">
                  <span className="text-xl font-extrabold text-blue-600">
                    ${property.price}
                  </span>{" "}
                  /M
                </div>
              </div>
              <div className="flex justify-between p-4 text-gray-700 border-t border-gray-300">
                {property?.rooms.map((room, idx) => (
                  <div key={idx}>
                    {room?.bedrooms && (
                      <div className="flex items-center">
                        <BedroomSvg />
                        <p>
                          <span className="font-bold text-gray-900">
                            {room?.bedrooms}
                          </span>{" "}
                          Bedrooms
                        </p>
                      </div>
                    )}
                    {room?.bathrooms && (
                      <div className="flex items-center">
                        <BathroomSvg />
                        <p>
                          <span className="font-bold text-gray-900">
                            {room?.bathrooms}
                          </span>{" "}
                          Bathrooms
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;
