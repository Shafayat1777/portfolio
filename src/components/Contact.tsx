import SectionHeading from "./section-heading";

export default function Contact() {
  return (
    <section id="contact" className="mb-28 sm:mb-40 scroll-mt-28">
      <SectionHeading>Contact</SectionHeading>
      <p>
        Please contact me directly at{" "}
        <a href="mailto:shafayat1777@gmail.com" className="underline">
          shafayat1777@gmail.com
        </a>{" "}
        or through this form.
      </p>
    </section>
  );
}
