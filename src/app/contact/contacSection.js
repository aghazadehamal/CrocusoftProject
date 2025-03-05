export default function ContactSection() {
  return (
    <section className="flex flex-col items-center py-16 px-6 md:px-16 mt-10">
     
      <div className="w-full  rounded-lg overflow-hidden shadow-lg">
        <iframe
          className="w-full h-96"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3033.190935424733!2d49.87082851563245!3d40.4092644793665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dba08c111fd%3A0x9eae2b8a3fd4c6a4!2sCrocusoft!5e0!3m2!1sen!2saz!4v1712056748496!5m2!1sen!2saz"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      
    
      <div className="mt-12 text-center">
        <h2 className="text-4xl font-bold text-gray-900">Bizimlə əlaqə</h2>
        <button className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-lg text-lg shadow-md hover:bg-purple-700 transition">
          Bizi Seç
        </button>
      </div>
    </section>
  );
}
