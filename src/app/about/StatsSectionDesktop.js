"use client";
import { useEffect, useState } from "react";

const statistics = [
  { id: 1, target: 10, label: "İl ərzində" },
  { id: 2, target: 36, label: "Sayda müştərinin" },
  { id: 3, target: 70, label: "Sayda layihəsini uğurla tamamlamışıq" },
];

export default function StatsSectionDesktop() {
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
    <div className="bg-customPurple text-white py-20">
      <div className="max-w-6xl mx-auto flex justify-around text-center">
        {statistics.map((stat, index) => (
          <div key={stat.id} className="flex flex-col items-center gap-2">
            <h2 className="text-5xl font-bold">
              {index === 0 ? counts[index] : "+" + counts[index]}
            </h2>
            <p className="text-xl">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
