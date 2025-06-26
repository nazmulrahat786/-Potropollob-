

const PromoSection = () => {
  return (
    <section className="bg-emerald-50 text-green-900 py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">
            Your Digital Green Companion 🌾
          </h2>
          <p className="text-lg">
            Discover smarter ways to care for your plants. Monitor growth,
            receive seasonal tips, and stay connected with a community of plant
            lovers. All from the comfort of your phone.
          </p>
        </div>

        {/* Image/Illustration */}
        <div className="flex-1">
          <img
            src="https://cdn-icons-png.flaticon.com/512/7664/7664156.png"
            alt="Plant Assistant Illustration"
            className="w-full max-w-xs mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
