export default function AboutBody() {
    return (
      <section className="px-6 md:px-24 py-16 mt-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Biz Kimik?</h2>
            <p className="text-gray-600">
              Crocusoft 2015-ci ildən yerli və xarici bazarlar üçün proqram təminatı həlləri
              hazırlanması üzrə ixtisaslaşmış, gənc, innovativ komandaya sahib proqram təminatı
              hazırlanması şirkətidir. Ən sürətlə inkişaf edən şirkətlərdən biri olaraq, 7 illik
              fəaliyyətimiz ərzində fərqli sənaye sahələrindən olan şirkətlər, təşkilatlar və dövlət
              qurumlarının işinin rəqəmsal əsaslarla təşkil edilməsində iştirak etmişik.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="/aboutPhoto1.webp" alt="Office work" className="rounded-lg" />
            <img src="/aboutPhoto2.jpeg" alt="Office team" className="rounded-lg" />
          </div>
        </div>
  
        <div className="mt-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Strategiya və Missiyamız</h2>
            <p className="text-gray-600">
              Ağılla işləyərək ən yaxşı nəticələri vaxtında təhvil vermək əməkdaşlıqda əsas hədəfimizdir.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-6">
              <div>
                <h3 className="text-lg font-bold">Ağılla</h3>
                <p className="text-gray-600">Biz ölkədə və regionda ən yaxşı olmağa çalışırıq.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold">Ən yaxşı nəticələr</h3>
                <p className="text-gray-600">Ən yüksək keyfiyyətli məhsullar təqdim edirik.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold">Vaxtında</h3>
                <p className="text-gray-600">Hər layihəni vaxtında çatdırmağa çalışırıq.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold">Əməkdaşlıqlar</h3>
                <p className="text-gray-600">Konfidensiallıq və əməkdaşlıq bizim üçün vacibdir.</p>
              </div>
            </div>
          </div>
          <img src="/aboutPhoto3.webp"  alt="Strategy" className="rounded-lg" />
        </div>
  
        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">İndiyə qədər nə etmişik?</h2>
          <p className="text-gray-600">
            Bu gün Azərbaycanda dövlət və özəl sektoru əhatə edən 70-dən çox uğurla tamamlanmış
            layihənin müəllifiyik. Heyətimizə daxil olan 20-dən çox proqramçı mühəndis müxtəlif
            texnologiyalar istifadə etməklə dayanıqlı məhsullar hazırlayır.
          </p>
        </div>
      </section>
    );
  }
  