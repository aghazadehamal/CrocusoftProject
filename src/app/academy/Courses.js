"use client"; 

import { useState } from "react";
import Image from "next/image";

const courses = [
  {
    id: 1,
    title: "Java Proqramlaşdırma",
    description:
      "Java dərsləri Sənaye və innovasiyalar üzrə Bakı Dövlət Peşə Təhsil Mərkəzi ilə birgə əməkdaşlıq çərçivəsində həyata keçirilir. Təlimə seçilmiş iştirakçılar Java...",
    fullDescription:
      "Java dərsləri Sənaye və innovasiyalar üzrə Bakı Dövlət Peşə Təhsil Mərkəzi ilə birgə əməkdaşlıq çərçivəsində həyata keçirilir. Təlimə seçilmiş iştirakçılar Java proqramlaşdırmanın əsaslarını öyrənir və real layihələr üzərində işləyirlər.",
    image: "/academyone.png",
  },
  {
    id: 2,
    title: "Proqramlaşdırmanın əsasları",
    description:
      "Proqramlaşdırmanın əsasları Sənaye və innovasiyalar üzrə Bakı Dövlət Peşə Təhsil Mərkəzi ilə birgə əməkdaşlıq çərçivəsində həyata keçirilir. Təlimə...",
    fullDescription:
      "Proqramlaşdırmanın əsasları Sənaye və innovasiyalar üzrə Bakı Dövlət Peşə Təhsil Mərkəzi ilə birgə əməkdaşlıq çərçivəsində həyata keçirilir. Kurs iştirakçıları proqramlaşdırmanın əsas anlayışlarını öyrənir və ilkin praktik bacarıqlar qazanırlar.",
    image: "/academytwo.png",
  },
];

const studentExperience = {
  title: "Tələbələrimiz təcrübə proqramında",
  description:
    "Java proqramlaşdırma kurlarımızda təhsil alan tələbələr artıq Java təcrübə proqramımız qoşuldular. Nərgiz və MirCəlal öz biliklərinə fərqləndikləri üçün ...",
  fullDescription:
    "Java proqramlaşdırma kurlarımızda təhsil alan tələbələr artıq Java təcrübə proqramımız qoşuldular. Nərgiz və MirCəlal öz biliklərinə fərqləndikləri üçün şirkətimizdə real layihələr üzərində işləməyə başladılar.",
  image: "/academythree.png",
};

export default function Courses() {
  const [expandedCourse, setExpandedCourse] = useState(null);
  const [showFullExperience, setShowFullExperience] = useState(false);

  return (
    <div className="px-8 md:px-16 lg:px-24 py-12">
      <h2 className="text-2xl font-bold mb-6">Kurslar</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {courses.map((course) => (
          <div key={course.id} className="bg-white shadow-lg p-6 rounded-lg">
            <Image
              src={course.image}
              alt={course.title}
              width={500}
              height={300}
              className="rounded-lg"
            />
            <h3 className="text-xl font-semibold mt-4">{course.title}</h3>
            <p className="text-gray-600 mt-2">
              {expandedCourse === course.id
                ? course.fullDescription
                : course.description}
            </p>
            <button
              onClick={() =>
                setExpandedCourse(
                  expandedCourse === course.id ? null : course.id
                )
              }
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              {expandedCourse === course.id ? "Show less" : "Show more"}
            </button>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-12">Məlumatlar və yeniliklər</h2>
      <div className="mt-6 bg-white shadow-lg p-6 rounded-lg">
        <Image
          src={studentExperience.image}
          alt={studentExperience.title}
          width={500}
          height={300}
          className="rounded-lg"
        />
        <h3 className="text-xl font-semibold mt-4">{studentExperience.title}</h3>
        <p className="text-gray-600 mt-2">
          {showFullExperience
            ? studentExperience.fullDescription
            : studentExperience.description}
        </p>
        <button
          onClick={() => setShowFullExperience(!showFullExperience)}
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          {showFullExperience ? "Show less" : "Show more"}
        </button>
      </div>
    </div>
  );
}
