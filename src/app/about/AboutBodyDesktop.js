export default function AboutBodyDesktop() {
    return (
      <section className="px-24 py-20 mt-10">
   
        <div>
          <h2 className="text-4xl font-thin mb-6 ml-10">Biz Kimik?</h2>
          <p className="text-gray-600 w-3/5 tracking-wider leading-10 ml-10">
            Crocusoft 2015-ci ildən yerli və xarici bazarlar üçün proqram təminatı həlləri
            hazırlanması üzrə ixtisaslaşmış, gənc, innovativ komandaya sahib proqram təminatı
            hazırlanması şirkətidir...
          </p>
          <div className="grid grid-cols-2 gap-10 mt-10">
            <img src="/aboutPhoto1.webp" alt="Office work" className="rounded-lg" />
            <img src="/aboutPhoto2.jpeg" alt="Office team" className="rounded-lg" />
          </div>
        </div>
  
    
        <div className="mt-20 grid grid-cols-2 gap-10 items-center">
          <div className="w-[800px]">
            <h2 className="text-4xl font-medium mb-6">Strategiya və Missiyamız</h2>
            <p className="text-gray-600 text-2xl">
              Ağılla işləyərək ən yaxşı nəticələri vaxtında təhvil vermək əməkdaşlıqda əsas hədəfimizdir.
            </p>
            <div className="grid grid-cols-2 gap-32 mt-28">
              <div>
                <h3 className="text-2xl font-medium">Ağılla</h3>
                <p className="text-gray-600 text-xl mt-6">Biz ölkədə və regionda ən yaxşı olmağa çalışırıq.</p>
              </div>
              <div>
                <h3 className="text-2xl font-medium">Ən yaxşı nəticələr</h3>
                <p className="text-gray-600 text-xl mt-6">Ən yüksək keyfiyyətli məhsullar təqdim edirik.</p>
              </div>
              <div>
                <h3 className="text-2xl font-medium">Vaxtında</h3>
                <p className="text-gray-600 text-xl mt-6">Hər layihəni vaxtında çatdırmağa çalışırıq.</p>
              </div>
              <div>
                <h3 className="text-2xl font-medium">Əməkdaşlıqlar</h3>
                <p className="text-gray-600 text-xl mt-6">Konfidensiallıq və əməkdaşlıq bizim üçün vacibdir.</p>
              </div>
            </div>
          </div>
          <img src="/aboutPhoto3.webp" alt="Strategy" className="rounded-lg h-3/5 ml-44" />
        </div>
  
   
        <div className="mt-20 px-20">
          <h2 className="text-4xl font-normal mb-6">İndiyə qədər nə etmişik?</h2>
          <p className="text-gray-500 text-2xl">
            Bu gün Azərbaycanda dövlət və özəl sektoru əhatə edən 70-dən çox uğurla tamamlanmış layihənin müəllifiyik.
          </p>
          <p className="text-gray-500 text-2xl mt-6">
            Heyətimizə daxil olan 20-dən çox proqramçı mühəndis müxtəlif texnologiyalar istifadə etməklə dayanıqlı məhsullar hazırlayır.
          </p>
        </div>
      </section>
    );
  }
  