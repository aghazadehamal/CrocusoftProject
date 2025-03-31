import Link from "next/link";

const MobilNotariatHero = () => {
  return (
    <div className="px-6 md:px-44 py-10 text-[#1e1e2f]">
      <h1 className="text-4xl md:text-7xl font-semibold mb-12">Mobil Notariat</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div>
          <h2 className="font-semibold text-xl mb-2">Sənaye</h2>
          <p className="leading-10 text-gray-500 text-lg ">Elektron hökumət, Həyat tərzi</p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">Xidmətlər</h2>
          <p className="leading-10 text-gray-500 text-lg ">
            Mobil Tətbiqlərin hazırlanması, Android Development, iOS
            Development, Mobil UI/UX dizayn
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">Texnologiyalar</h2>
          <p className="leading-10 text-gray-500 text-lg ">
            Java, Android SDK, Swift UI Kit, Android Studio, Xcode
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">Layihəyə keçid</h2>
          <div className="flex flex-col gap-2 underline tracking-widest">
            <Link href="https://bit.ly/3HzWIDt" target="_blank">
              https://bit.ly/3HzWIDt
            </Link>
            <Link href="https://apple.co/3DQOCOv" target="_blank">
              https://apple.co/3DQOCOv
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl text-gray-500 space-y-4">
        <p className="text-lg">
          Mobil Notariat{" "}
          <Link
            href="https://www.crocusoft.com"
            target="_blank"
            className="text-blue-600 underline"
          >
            Crocusoft
          </Link>{" "}
          tərəfindən bütün növ notariat əməliyyatlarını asanlaşdırmaq üçün
          hazırlanmış proqramdır.
        </p>
        <p className="text-lg">
          Burada notariat hərəkətlərinin rəsmiləşdirilməsi üçün ödənilməli
          vəsaitin məbləğləri, tələb olunan sənədlər və notariat əməliyyatında
          iştirak etməli şəxslər barədə ətraflı məlumatlar yerləşdirilmişdir.
        </p>
        <p className="text-lg">
          Bu tətbiq üzərindən şəxsin iştirakçısı olduğu bütün notariat
          əməliyyatları ilə bağlı sənədlərin mobil telefonda saxlanılması,
          sənədin qüvvədən düşməsi barədə məlumatın dərhal alınması və elektron
          versiyasından istifadə edilməsi mümkündür.
        </p>
        <p className="text-lg">
          Mobil Notariatın əsas funksionallıqlarından biri nəqliyyat
          vasitəsindən istifadə edilməsinə dair etibarnamələrin elektron qaydada
          verilməsi imkanının əlavə olunmasıdır.
        </p>
      </div>
    </div>
  );
};

export default MobilNotariatHero;
