export default function ContactForm() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-6 mt-14">
      <h2 className="text-4xl font-bold text-center text-purple-700 mb-6">Bizimlə İşlə</h2>
      <p className="text-center text-gray-600 mb-10">
        İdeyanızı uğurlu layihəyə çevrilməsi üçün ən son texnoloji imkanlardan istifadə edəcəyik.
      </p>
      
      <label className="block text-lg font-semibold mb-2">Layihəniz haqqında məlumat verin</label>
      <textarea
        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
        placeholder="Hazırlanmasını istədiyiniz layihəni qısaca izah edin"
        rows={4}
      ></textarea>
      
      <div className="mt-8">
        <label className="block text-lg font-semibold mb-2">Layihənizi icra etmək üçün planlaşdırdığınız tarix</label>
        <input type="range" min="1" max="3" className="w-full accent-purple-600" />
        <div className="flex justify-between text-sm text-purple-700 mt-2">
          <span>1 ay</span>
          <span>3 ay</span>
        </div>
      </div>
      
      <div className="mt-8">
        <label className="block text-lg font-semibold mb-2">Layihənizi icra etmək üçün planlaşdırdığınız büdcə</label>
        <input type="range" min="5000" max="100000" className="w-full accent-purple-600" />
        <div className="flex justify-between text-sm text-purple-700 mt-2">
          <span>5000 AZN</span>
          <span>100000 AZN</span>
        </div>
      </div>
      
      <div className="mt-10">
        <h3 className="text-2xl font-bold mb-4">Əlaqə vasitələriniz?</h3>
        
        <label className="block text-lg font-semibold">Adınız</label>
        <input type="text" className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600" />
        
        <label className="block text-lg font-semibold">E-mailiniz</label>
        <input type="email" className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600" />
        
        <label className="block text-lg font-semibold">Nömrəniz</label>
        <div className="flex items-center border border-gray-300 rounded-lg p-3 mb-4">
          <span className="mr-2">🇦🇿</span>
          <input type="tel" className="w-full focus:outline-none" placeholder="051 206 09 20" />
        </div>
        
        <label className="block text-lg font-semibold">Şirkətinizin Adı</label>
        <input type="text" className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600" />
        
        <div className="flex items-start gap-2 mb-4">
          <input type="checkbox" className="mt-1 w-5 h-5 accent-purple-600" />
          <span className="text-gray-600">Mən <a href="#" className="text-purple-600 underline">şərtlərlə</a> razıyam və məlumatlarımın toplanmasına razılıq verirəm.</span>
        </div>
        
        <div className="border border-gray-300 rounded-lg p-4 flex justify-center mb-6">
          <span className="text-gray-500">[ reCAPTCHA ]</span>
        </div>
        
        <button className="w-full bg-purple-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition">
          LAYİHƏNİ BİZƏ GÖNDƏRİN
        </button>
      </div>
    </div>
  );
}