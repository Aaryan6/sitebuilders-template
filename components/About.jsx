export default function About() {
  return (
    <section
      className="relative pt-36 pb-20 md:pt-64 md:pb-44 px-4"
      style={{ background: "url(svgbg.svg)" }}
      id="about"
    >
      <div className="flex flex-col md:flex-row justify-center md:justify-between max-w-5xl mx-auto">
        <div className="max-w-sm md:mr-auto">
          <h2 className="barlow text-3xl md:text-4xl font-medium leading-snug">
            Your online presence is our top priority.
          </h2>
        </div>
        <div className="max-w-md md:ml-auto leading-normal shrink mt-4 md:mt-0">
          <p>
            We are a web agency that is passionate about helping businesses
            succeed online. We believe that a well-designed website is essential
            for any business that wants to grow and compete in today&apos;s
            digital world. That&apos;s why we offer a wide range of web design
            and development services, from creating custom websites from scratch
            to optimizing existing websites for search engines.
          </p>
        </div>
      </div>
    </section>
  );
}
