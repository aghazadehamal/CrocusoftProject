"use client";
import { useRouter } from "next/navigation";

export default function ContactSectionDesktop() {
  const router = useRouter();

  return (
    <section className="flex flex-col items-center py-16 px-16 mt-10 relative">
      <div className="w-full rounded-lg overflow-hidden shadow-lg">
        <iframe
          className="w-full h-[600px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.593817625658!2d49.904705376280546!3d40.41784817143942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dc65fb18da7%3A0xafbb4d94e4be6a00!2sCrocusoft!5e0!3m2!1sen!2saz!4v1742819962078!5m2!1sen!2saz"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="absolute bg-white shadow-lg p-5 top-[500px] left-16 w-3/5 px-14">
        <h2 className="text-8xl font-semibold text-gray-900">Bizimlə əlaqə</h2>
        <button
          onClick={() => router.push("/choose")}
          className="mt-6 px-9 py-5 bg-customPurple text-white rounded-lg text-2xl shadow-md hover:bg-purple-700 transition"
        >
          Bizi Seç
        </button>
      </div>
    </section>
  );
}
