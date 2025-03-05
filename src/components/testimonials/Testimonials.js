'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Məhəmməd Zeynallı',
    position: 'Pasha Holding – Administrativ işlər üzrə mütəxəssis',
    image: '/clients/mehemmedZeynalli.png',
    testimonial:
      'DəyərliSən” layihəsi üzərindən əməkdşalığımız hal-hazırda davam edir. Komanda olaraq operativ, nəticə hədəfli və qalıcı həllər ilə daima dəstək olursunuz. Ümid varam ki, əməkdaşlığımız və iş birliyimiz artan xətt üzrə yaxın gələcəkdə də davam edəcək.'
  },
  {
    id: 2,
    name: 'Rəşad Rəsullu',
    position: 'Azərbaycan Cüdo Federasiyası Baş katib',
    image: '/clients/resadResullu.png',
    testimonial:
      'Crocusoft şirkətinin nümayiş etdirdiyi peşəkarlıq və müştəriyönümlülük sayəsində internet saytımızı qısa müddət ərzində yenilədik. Bu komanda ilə əməkdaşlığı rahatlıqla hər kəsə tövsiyyə edə bilərəm.'
  },
  {
    id: 3,
    name: 'Vüsal Məmmədov',
    position: 'Caspiantech, Baş Direktor',
    image: '/clients/vusalMemmedov.png',
    testimonial:
      'Crocusoft ən güvəndiyimiz tərəfdaşlarımızdandır. Son 3 il ərzində bu şirkətlə bərabər bir çox kompleks proqram təminatı həlləri edərək öncələr xaricdən aldığımız həlləri yerli versiyalarla əvəzləmişik ki, bunun sayəsində daha dayanıqlı və daha əlverişli mövqelərə gəlib çıxmışıq.'
  },
  {
    id: 4,
    name: 'Vüsal Əkbərov',
    position: 'Veysəloğlu - Proqram təminatı təkmilləşdirilməsi departament rəhbəri',
    image: '/clients/vusalEkberov.png',
    testimonial:
      'Müasir texnologiyaya əsaslanaraq dünya bazarına çıxa biləcək yerli məhsullar yaratdığınız üçün sizə təşəkkürlər. '
  },
  {
    id: 5,
    name: 'Vüsal Kərimov',
    position: 'Oba marketlər şəbəkəsi - Head of Digital Marketing ',
    image: '/clients/resadResullu.png',
    testimonial:
      'Bərabər çalışdığımız hər bir layihəni doğru həllərlə və dəqiq zamanında təhvil verdiyiniz üçün təşəkkür edirəm.  OBA Market mobil tətbiqi üzərində verdiyiniz UI&UX və unikal funksionallıq həlləri bizi olduqca məmnun etmişdir. Komandanızın çalışqan, səbrli və yaradıcı olması isə xüsusi diqqət çəkir. Biznesinizin rəqəmsal inkişafı üçün hər bir layihəni Crocusoft şirkətinə həvalə etməniz tövsiyyə olunur. '
  },
  {
    id: 6,
    name: 'İqbal Rüstəmov',
    position: 'PashaPay – İcraçı direktorun müşaviri',
    image: '/clients/iqbalRustemov.png',
    testimonial:
      'Crocusoft şirkəti ilə əməkdaşlıq bizim üçün yalnız məqamlarla yadda qalmışdır. Komanda çox dinamik, öz üzərində çalışan və hər zamana müştərilərinin yanında olan üzvlərdən ibarətdir. Crocusoft ilə gələcəkdə də yeni layihələr etməyi arzu edirik.'
  },
  {
    id: 7,
    name: 'Fuad İmanov',
    position: 'Triton Consulting LTD – Finance Manager',
    image: '/clients/fuadimanov.png',
    testimonial:
      'Layihəyə başlarkən üzərimizdə olan gərginliyi Crocusoft-un məsuliyyətli və peşəkar komandası minimuma endirdi. Bundan əlavə verdikləri inovativ ideyalar isə nəticəni möhtəşəm etdi. Təşəkkürlər!'
  },
  {
    id: 8,
    name: 'Fərrux Mahmudov',
    position: 'AltÜst Media - Direktor',
    image: '/clients/ferruxMahmudov.png',
    testimonial:
      'Crocusoftun hazırladığı proqram təminatı həlləri satışlarınızda "AltÜst" effekti yaradır. '
  },
  {
    id: 9,
    name: 'Samir Kərimov',
    position: '189 TAXİ - Direktor',
    image: '/clients/resadResullu.png',
    testimonial:
      'Crocusoft şirkəti bizim bütün tələb və istəklərimizi nəzərə alaraq 189 TAXİ tətbiqində dəstək göstərmişdir. Proses zamanı mükəmməl kommunikasiya qurulmuş, yaranan problemlərə anında müdaxilə edilmişdir.'
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center py-12 flex flex-col items-center w-full max-w-5xl mx-auto mt-10">
      
      <div className="relative flex items-center justify-center w-full  py-8">
        <button
          onClick={handlePrev}
          className="absolute left-0 text-purple-600 text-3xl p-3"
        >
          <FaChevronLeft />
        </button>
        <div className="flex flex-col items-center text-center max-w-3xl transition-transform duration-500">
          <Image
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            width={100}
            height={100}
            className="rounded-full mb-6"
          />
          <p className="text-purple-700 font-semibold text-xl">
            {testimonials[currentIndex].name}
          </p>
          <p className="font-medium text-xl mt-1">
            {testimonials[currentIndex].position}
          </p>
          <p className="text-gray-700 text-lg mt-4">
            {testimonials[currentIndex].testimonial}
          </p>
        </div>
        <button
          onClick={handleNext}
          className="absolute right-0 text-purple-600 text-3xl p-3"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}