"use client";
import { useEffect, useState } from "react";

const statistics = [
  { id: 1, target: 10, label: "İl ərzində" },
  { id: 2, target: 36, label: "Sayda müştərinin" },
  { id: 3, target: 70, label: "Sayda layihəni tamamlamışıq" },
];

export default function StatsSectionMobile() {
  const [counts, setCounts] = useState(statistics.map(() => 0));

  useEffect(() => {
    const intervals = statistics.map((stat, index) =>
      setInterval(() => {
        setCounts((prev) => {
          const updated = [...prev];
          if (updated[index] < stat.target) updated[index]++;
          return updated;
        });
      }, 50)
    );

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <div className="bg-customPurple text-white py-16 px-4">
      <div className="grid grid-cols-1 gap-8 text-center">
        {statistics.map((stat, index) => (
          <div key={stat.id} className="flex flex-col items-center">
            <h2 className="text-4xl font-bold">
              {index === 0 ? counts[index] : "+" + counts[index]}
            </h2>
            <p className="text-lg mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
