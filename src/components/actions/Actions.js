'use client';

const actions = [
  {
    id: 1,
    title: 'Layiəni göndər',
    description: 'Layihəni göndər, təklifini al',
    buttonText: 'LAYİHƏNİ GÖNDƏR',
    buttonColor: 'bg-customPurple  text-white'
  },
  {
    id: 2,
    title: 'Təqdimat',
    description: 'Şirkətin profil təqdimatı',
    buttonText: 'TƏQDİMAT',
    buttonColor: 'bg-customGreen  text-white'
  },
  {
    id: 3,
    title: 'Lisenziya',
    description: 'İnformasiya ehtiyatlarının formalaşdırılması',
    buttonText: 'LİSENZİYA',
    buttonColor: 'bg-customPurple  text-white'
  },
  {
    id: 4,
    title: 'Bizimlə öyrən',
    description: 'Akademiyamızı ziyarət edin',
    buttonText: 'BİZİMLƏ ÖYRƏN',
    buttonColor: 'bg-customGreen  text-white'
  }
];

export default function Actions() {
  return (
    <div className="text-center py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 justify-center items-center">
        {actions.map((action) => (
          <div key={action.id} className="flex flex-col items-center text-center">
            <button className={`px-3 py-2 text-sm rounded-md  ${action.buttonColor}`}>
              {action.buttonText}
            </button>
            <p className="text-gray-700 mt-2 text-lg">{action.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
