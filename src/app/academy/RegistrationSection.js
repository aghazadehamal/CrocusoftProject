export default function RegistrationSection() {
    return (
      <section className="flex flex-col items-center justify-center text-center py-20 px-4 md:px-20 relative">
        <div className="absolute left-0 top-10 w-24 h-24 bg-white opacity-40 rounded-lg" />
        <div className="absolute right-0 top-20 w-32 h-32 bg-white opacity-40 rounded-lg" />
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-green-400 opacity-50 rounded-lg" />
        
        <h2 className="text-4xl md:text-5xl font-bold text-black">Başlamaq lazımdır!</h2>
        
        <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl">
          Öyrənmək üçün heç vaxt gec deyil. Sadəcə qeydiyyat formasını doldurun, 
          gələcək karyeranızı birlikdə planlayaq.
        </p>
        
        <button className="mt-6 bg-green-500 hover:bg-green-600 text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-md transition-all">
          BİZİMLƏ ÖYRƏN
        </button>
      </section>
    );
  }
  