"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-[#020617] text-center px-6"
    >
      <h2 className="text-3xl font-bold text-blue-400">Contact</h2>

      <p className="mt-6 text-gray-400">
        Let’s connect and build something impactful.
      </p>

      <div className="mt-8 flex justify-center gap-6">
        <a
          href="https://www.linkedin.com/in/yugbhatt-ai?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/Yug-Bhatt"
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          GitHub
        </a>

        <a
          href="mailto:yugbhatt75@gmail.com"
          className="text-blue-400 hover:underline"
        >
          Email
        </a>
      </div>
    </section>
  );
}
