import { Dumbbell, HeartPulse, Utensils, Activity } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Personal Training",
    icon: <Dumbbell />,
    desc: "Get one-on-one training with expert guidance.",
  },
  {
    id: 2,
    title: "Cardio Programs",
    icon: <Activity />,
    desc: "Improve your stamina with specialized cardio sessions.",
  },
  {
    id: 3,
    title: "Health & Wellness",
    icon: <HeartPulse />,
    desc: "Stay fit and healthy with our wellness programs.",
  },
  {
    id: 4,
    title: "Nutrition Guidance",
    icon: <Utensils />,
    desc: "Personalized meal plans for better results.",
  },
];

export default function Page() {
  return (
    <div className="min-h-[92dvh] pt-20 px-6 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-10">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center flex flex-col items-center hover:bg-gray-700 transition"
          >
            <div className="text-5xl text-red-500 mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-300">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
