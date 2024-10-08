import Button from "../Buttons/Button";
import CtaSvgCircle from "../svg/CtaSvgCircle";
import CtaSvgTriangle from "../svg/CtaSvgTriangle";

const CTASection = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-primary py-20 lg:py-[115px]">
      <div className="container mx-auto">
        <div className="relative overflow-hidden">
          <div className="-mx-4 flex flex-wrap items-stretch">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[570px] text-center">
                <h2 className="mb-2.5 text-3xl font-bold text-white md:text-[38px] md:leading-[1.44]">
                  <span>What Are You Looking For?</span>
                  <span className="text-3xl font-normal md:text-[40px]">
                    Get Started Now
                  </span>
                </h2>
                <p className="mx-auto mb-6 max-w-[515px] text-base leading-[1.5] text-white">
                  There are many variations of passages of Lorem Ipsum but the
                  majority have suffered in some form.
                </p>
                <Button
                  className="bg-green-500 text-white hover:bg-green-600 cursor-pointer"
                  href={"#meeting"}
                >
                  Let&apos;s Have a Meeting
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <span className="absolute left-0 top-0">
          <CtaSvgTriangle />
        </span>
        <span className="absolute bottom-0 right-0">
          <CtaSvgCircle />
        </span>
      </div>
    </section>
  );
};

export default CTASection;
