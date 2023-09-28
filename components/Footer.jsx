export default function Footer() {
  return (
    <section className="pt-12 pb-4 px-4 bg-[#ffbf23]">
      <div className="grid justify-center text-center">
        <h1 className="barlow text-2xl font-semibold">SiteBuilders</h1>
        <p className="mt-2 font-medium">sitebuilder@gmail.com</p>
        <p className="mt-4">
          © {new Date().getFullYear()} by WeDu. Powered and desigened by{" "}
          <a
            href="https://developeraaryan.me"
            target="_blank"
            className="font-medium underline"
          >
            Aaryan Patel.
          </a>
        </p>
      </div>
    </section>
  );
}
