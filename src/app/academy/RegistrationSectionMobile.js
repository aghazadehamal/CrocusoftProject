import GreenCube from "../GreenCube";
import WhiteCube from "../WhiteCube";

export default function RegistrationSectionMobile() {
  return (
    <section className="flex flex-col items-center text-center py-20 px-6">
      <h2 className="text-3xl font-semibold text-black">Başlamaq lazımdır!</h2>
      <p className="text-lg text-gray-600 mt-4">
        Qeydiyyat formasını doldurun, gələcək karyeranızı birlikdə planlayaq.
      </p>
      <button className="mt-6 bg-customGreen text-white py-4 px-8 rounded-lg">
        BİZİMLƏ ÖYRƏN
      </button>
    </section>
  );
}
