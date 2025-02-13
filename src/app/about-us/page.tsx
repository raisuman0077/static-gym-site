export default function Page() {
  return (
    <div className="bg-black pt-25 min-h-[92dvh] flex flex-col items-center text-white border-b-2 border-white pb-6">
      <div className="max-w-4xl text-center space-y-8">
        <h1 className="text-6xl font-bold text-white uppercase tracking-wide">
          Who We Are
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed">
          At <span className="font-semibold text-white">IronFit Gym</span>, we empower
          individuals to push their limits and achieve new fitness heights. Our facility
          is designed for athletes of all levels, providing expert guidance, premium
          equipment, and an inspiring community.
        </p>
      </div>

      <div className="w-full max-w-5xl text-center mt-12 space-y-8  ">
        <div className="flex px-4 flex-col md:flex-row justify-between gap-12">
          <p className="text-xl text-gray-300 leading-relaxed max-w-md border-2 border-white rounded-xl p-4 text-center">
            <span className="text-white font-semibold underline">
              🏋️ Expert Trainers:
            </span>
            <p>
              Get personalized coaching from certified professionals dedicated to your
              success.
            </p>
          </p>
          <p className="text-xl text-gray-300 leading-relaxed max-w-md border-2 border-white rounded-xl p-4 text-center">
            <span className="text-white font-semibold underline">
              🔥 Advanced Equipment:
            </span>
            <p>
              Train with cutting-edge machines and free weights tailored to your fitness
              goals.
            </p>
          </p>
          <p className="text-xl text-gray-300 leading-relaxed max-w-md border-2 border-white rounded-xl p-4 text-center">
            <span className="text-white font-semibold flex-wrap underline">
              💪 Strong Community:
            </span>
            <p>
              Surround yourself with passionate individuals who motivate and inspire every
              day.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}
