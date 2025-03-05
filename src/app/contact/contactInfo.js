export default function ContactInfo() {
    return (
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left py-10 px-5 max-w-6xl mx-auto">
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-gray-400 text-sm uppercase tracking-wide">BİZƏ YAZIN</h3>
          <p className="text-lg font-semibold text-black">sales@crocusoft.com</p>
        </div>
  
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-gray-400 text-sm uppercase tracking-wide">ZƏNG EDİN</h3>
          <p className="text-lg font-semibold text-black">+994512060920</p>
        </div>
  
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-gray-400 text-sm uppercase tracking-wide">GƏLİN, DANIŞAQ</h3>
          <p className="text-lg font-semibold text-black">Bakı, Nizami, Heydər Əliyev pr 115, AZ1029</p>
        </div>
      </div>
    );
  }
  