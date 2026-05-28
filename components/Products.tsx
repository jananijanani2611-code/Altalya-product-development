import Image from "next/image";

const products = [
  {
    title: "FABRIC TRACK",
    subtitle: "Manufacturing Management System",
    image: "/images/fabric-track.png",
    points: [
      "Job Management",
      "Yarn Inward & Delivery",
      "Machine & Maintenance",
      "Reports & Analytics",
    ],
  },
  {
    title: "FIELD TRACK",
    subtitle: "Service Management System",
    image: "/images/field-track.png",
    points: [
      "Service Requests",
      "AMC Contracts",
      "Engineer Management",
      "Analytics Dashboard",
    ],
  },
];

export default function Products() {
  return (
    <section id="products" className="section-padding bg-[#f8ffff]">
      <div className="text-center mb-14">
        <p className="text-[#1ADCED] tracking-[8px] text-sm font-bold">
          OUR PRODUCTS
        </p>
        <h2 className="text-5xl font-black mt-4">
          Intelligent Products Built for{" "}
          <span className="text-[#1ADCED]">Efficiency & Growth</span>
        </h2>
        <p className="text-[#21474C] mt-4">
          We develop scalable products that solve real business problems.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {products.map((product) => (
          <div key={product.title} className="card p-8">
            <h3 className="text-[#1ADCED] tracking-[6px] font-black">
              {product.title}
            </h3>
            <p className="font-semibold mt-2">{product.subtitle}</p>

            <ul className="mt-8 space-y-3">
              {product.points.map((point) => (
                <li key={point} className="text-[#21474C]">
                  ● {point}
                </li>
              ))}
            </ul>

            <div className="relative h-64 mt-6">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain"
              />
            </div>

            <button className="mt-6 border border-[#1ADCED] px-6 py-3 rounded-xl text-[#0B859D] font-bold">
              View Product →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}