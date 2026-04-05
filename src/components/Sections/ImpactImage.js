import img1 from "../../assets/ImpactImage.png";

const ImpactImage = () => {
  return (
    <section className="relative bg-bg1 overflow-hidden text-on mt-10 lg:mt-40">
      <div className="relative w-full mx-auto flex flex-col lg:flex-row items-stretch gap-8">
        <div className="relative w-full aspect-video overflow-hidden shadow-2xl">
          <img
            src={img1}
            alt="Nuestros servicios"
            className="absolute inset-0 w-full h-full max-h-[86%] object-fill"
          />
        </div>
      </div>
    </section>
  );
};

export default ImpactImage;
