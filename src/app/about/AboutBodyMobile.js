export default function AboutBodyMobile() {
    return (
      <section className="px-6 py-16 mt-10">
        <h2 className="text-3xl font-thin mb-6">Biz Kimik?</h2>
        <p className="text-gray-600 tracking-wide leading-8">
          Crocusoft 2015-ci ildən yerli və xarici bazarlar üçün proqram təminatı həlləri hazırlayır...
        </p>
        <div className="grid grid-cols-1 gap-6 mt-6">
          <img src="/aboutPhoto1.webp" alt="Office work" className="rounded-lg" />
          <img src="/aboutPhoto2.jpeg" alt="Office team" className="rounded-lg" />
        </div>
  
        <div className="mt-16">
          <h2 className="text-3xl font-medium mb-4">Strategiya və Missiyamız</h2>
          <p className="text-gray-600 text-lg leading-8">
            Ağılla işləyərək ən yaxşı nəticələri vaxtında təhvil vermək əməkdaşlıqda əsas hədəfimizdir.
          </p>
          <div className="mt-10 space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Ağılla</h3>
              <p className="text-gray-600 mt-2">Ən yaxşı olmağa çalışırıq.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Ən yaxşı nəticələr</h3>
              <p className="text-gray-600 mt-2">Yüksək keyfiyyətli məhsullar təqdim edirik.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Vaxtında</h3>
              <p className="text-gray-600 mt-2">Layihələri vaxtında təhvil veririk.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Əməkdaşlıqlar</h3>
              <p className="text-gray-600 mt-2">Konfidensiallıq və qarşılıqlı güvən vacibdir.</p>
            </div>
          </div>
          <img src="/aboutPhoto3.webp" alt="Strategy" className="rounded-lg mt-10" />
        </div>
  
        <div className="mt-16">
          <h2 className="text-2xl font-normal mb-4">İndiyə qədər nə etmişik?</h2>
          <p className="text-gray-500 text-lg">
            Azərbaycanda dövlət və özəl sektorda 70-dən çox layihə tamamlamışıq.
          </p>
          <p className="text-gray-500 text-lg mt-4">
            20-dən çox proqramçı mühəndis ilə dayanıqlı texnoloji məhsullar təqdim edirik.
          </p>
        </div>
      </section>
    );
  }
  