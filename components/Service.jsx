import Image from "next/image";

const items = [
  {
    image: "landingpage.jpg",
    title: "High-Converting Landing Pages",
    description:
      "Our landing page design services can help you create custom landing pages that are tailored to your specific campaign goals.",
  },
  {
    image: "businesswebsite.jpg",
    title: "Growth-Driven Business Websites",
    description:
      "We can help you create a custom website that reflects your brand and values, is easy to navigate, and is optimized for search engines so that potential customers can find you.",
  },
  {
    image: "redesignwebsite.jpg",
    title: "Website Redesign That Drives Results",
    description:
      "Redesigning your website to give it a fresh new look and feel, improving the user experience and navigation, optimizing your website for search engines.",
  },
  {
    image: "hosting.jpeg",
    title: "Web Hosting Services",
    description:
      "From domain registration to server setup to ongoing maintenance. We'll also make sure that your website is always up and running and accessible to your visitors.",
  },
];

export default function Service() {
  return (
    <section className="py-20 px-3" id="service">
      <div className="max-w-6xl mx-auto">
        <div className="">
          <h1 className="barlow text-3xl md:text-4xl font-medium">
            What We Offer
          </h1>
          <p className="max-w-md mt-5">
            We offer a wide range of web design and development services, from
            creating custom websites from scratch to optimizing existing
            websites for search engines.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-20 gap-8">
          {items.map((item, i) => (
            <div className="grid max-w-xs" key={i}>
              <Image
                src={"/" + item.image}
                alt=""
                width={500}
                height={450}
                className="aspect-[3/3.8] w-56 md:w-full h-auto object-cover rounded-md border-2 border-black"
              />
              <h3 className="barlow text-xl font-semibold mt-4 max-w-[11.5rem]">
                {item.title}
              </h3>
              <p className="mt-4">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
