export default function AcademyHero() {
    return (
      <section className="text-center py-20 px-4 md:px-20 bg-white relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-green-500">Professional proqramçı</span>
            <br />
            olmaq üçün <span className="text-green-500">öyrənməyə</span>
            <br />
            indi başla!
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mt-6">
            Təcrübəli müəllimlərdən öyrən, professional mühəndislər ilə tətbiq et,
            kurslarımızı bitirdikdən sonra isə təcrübə proqramlarımıza qoşulmaq
            şansı qazan.
          </p>
        </div>
        <div className="absolute top-10 left-10 w-12 h-12 bg-green-300 opacity-50 transform rotate-12"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-gray-200 opacity-50 transform rotate-12"></div>
      </section>
    );
  }
  