"use client";

import Image from "next/image";

export default function MobilNotariatNews() {
  return (
    <section className="bg-white px-4 sm:px-8 md:px-16 lg:px-24 xl:px-60 py-10 sm:py-16 relative">
   
      <div className="flex justify-center bg-gray-100 p-4 sm:p-12 lg:p-20 mb-8 sm:mb-12">
        <Image
          src="/blogsPhoto/blogNotariat.png"
          alt="Mobil Notariat Yenilik"
          width={600}
          height={400}
          className="rounded-lg object-contain"
        />
      </div>


      <div className="relative mb-8 sm:mb-12">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 justify-center items-center text-gray-400 text-sm">
          <span>Yeniliklər</span>
          <span>2 MIN READ</span>
          <span>29.11.2022 09:59:43</span>
        </div>
      </div>


      <div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-customPurple leading-relaxed mb-6 sm:mb-8 text-center sm:text-left">
          "Mobil notariat"da <br />
          <span className="block text-purple-700">YENİLİK!</span>
        </h1>

        <p className="max-w-4xl mx-auto text-gray-500 leading-relaxed text-base sm:text-lg text-justify sm:text-left">
          Artıq daşınmaz əmlaka sərəncam verilməsinə, o cümlədən almaq, satmaq,
          bağışlamaq, dəyişmək, ipoteka qoymaq və sair hərəkətlərin edilməsinə dair
          etibarnamələri də tətbiq vasitəsilə rəsmiləşdirə bilərsiniz. Özünüzə
          məxsus bütün daşınmaz əmlakları və ya konkret əmlakı mobil tətbiq
          üzərindən istənilən sərəncam hüququnu digər şəxsə etibar edə bilərsiniz.
        </p>
      </div>

     
      {/* <div className="mt-10 flex md:hidden justify-center gap-4">
        {["/blogsIcon/facebookIcon.png", "/blogsIcon/twitterIcon.png", "/blogsIcon/linkedinIcon.png"].map((icon, index) => (
          <div
            key={index}
            className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow"
          >
            <Image src={icon} alt="icon" width={20} height={20} />
          </div>
        ))}
      </div> */}

      <div className="hidden md:flex flex-col gap-4 absolute right-8 lg:right-32 top-[75%]">
      <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fcrocusoft.com%2Fen%2FBlog%2FDetails%2Fmobilnotariat-new"
          
            className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow"
          >
            <Image src="/blogsIcon/facebookIcon.png" alt="icon" width={20} height={20} />
          </a>

          <a target="_blank" href="https://twitter.com/intent/tweet?url=http%3A%2F%2Fcrocusoft.com%2Fen%2FBlog%2FDetails%2Fmobilnotariat-new&text=NEW+in+%22Mobile+Notary%22!+"
          
          className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow"
        >
          <Image src="/blogsIcon/linkedinIcon.png" alt="icon" width={20} height={20} />
        </a>

        <a target="_blank" href="https://www.linkedin.com/shareArticle?mini=true&url=http%3A%2F%2Fcrocusoft.com%2Fen%2FBlog%2FDetails%2Fmobilnotariat-new&title=NEW+in+%22Mobile+Notary%22!+"
          
          className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow"
        >
          <Image src="/blogsIcon/twitterIcon.png" alt="icon" width={20} height={20} />
        </a>
      </div>
    </section>
  );
}
