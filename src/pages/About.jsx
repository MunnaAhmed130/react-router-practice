const About = () => {
  return (
    <section className="about-section">
      <img
        src="https://i.ibb.co/gmcnDx8/about.png"
        className="about-img w-full object-cover object-center"
        alt="man-on-a-van"
      />
      <div className="px-16 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-5 mb-5">
            <h3 className="text-4xl font-bold">
              Don't squeeze in a sedan when you could relax in a van
            </h3>
            <p>
              Our mission is to enliven your road trip with the perfect travel
              van rental. Our vans are recertified before each trip to ensure
              your travel plans can go off without a hitch. (Hitch costs extra
              😉)
            </p>
            <p>
              Our team is full of vanlife enthusiasts who know firsthand the
              magic of touring the world on 4 wheels.
            </p>
          </div>
          <div className="bg-[#ffcc8d] rounded p-10">
            <h4 className="font-bold text-2xl">Your destination is waiting</h4>
            <h4 className="font-bold text-2xl">Your van is ready</h4>
            <button className="text-white bg-[#161616] px-5 py-3 rounded mt-5">
              Explore out vans
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
