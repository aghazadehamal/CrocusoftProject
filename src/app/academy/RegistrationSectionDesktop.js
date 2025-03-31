
import GreenCube from "../GreenCube";
import WhiteCube from "../WhiteCube";

export default function RegistrationSection() {
    return (
      <section className="flex flex-col items-center justify-center text-center py-36 px-4 md:px-20 relative">
        <div className="hidden md:flex absolute left-0 top-1/5 flex-col gap-10 mt-40">

        <WhiteCube size="small" style={{ transform: "translate(-10px, -50px)" }} />
<GreenCube size="small" style={{ transform: "translate(50px, -280px)",  opacity: 0.5  }} />

<WhiteCube size="huge" style={{ transform: "translate(30px, -150px)" }} />
</div>
       
        
        <h2 className="text-4xl md:text-7xl font-semibold text-black">Başlamaq lazımdır!</h2>
        
        <p className="text-2xl leading-[50px] text-gray-500 mt-4 px-16 max-w-2xl">
          Öyrənmək üçün heç vaxt gec deyil. Sadəcə qeydiyyat formasını doldurun, 
          gələcək karyeranızı birlikdə planlayaq.
        </p>
        
        <button className="mt-6 bg-customGreen hover:bg-green-600 text-white text-lg  py-5 px-10 rounded-lg shadow-md transition-all">
          BİZİMLƏ ÖYRƏN
        </button>
        <div className="hidden md:flex absolute right-0 top-1/5 flex-col gap-10 mt-60">

     <GreenCube size="small" style={{ transform: "translate(-50px, -70px)",  opacity: 0.5  }} />
  
  <WhiteCube size="huge" style={{ transform: "translate(-10px, -50px)" }} />
  <GreenCube size="small" style={{ transform: "translate(-10px, -370px)",  opacity: 0.5  }} />
</div>
      </section>
    );
  }
  