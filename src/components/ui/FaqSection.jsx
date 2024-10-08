
import FaqQuestionSvg from "../svg/FaqQuestionSvg";
import FaqSvgDots from "../svg/FaqSvgDots";
import FaqSvgDotsG from "../svg/FaqSvgDotsG";
import SectionHeading from "./SectionHeading";

const faqItems = [
  {
    id: 1,
    icon: <FaqQuestionSvg />,
    title: "Is TailGrids Well-documented?",
    description:
      "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content UI/UX strategy that we do writing your first blog post.",
  },
  {
    id: 2,
    icon: <FaqQuestionSvg />,
    title: "What is TailGrids used for?",
    description:
      "TailGrids helps you quickly design user interfaces and build UI components that follow a modern design system.",
  },
  {
    id: 3,
    icon: <FaqQuestionSvg />,
    title: "Is TailGrids free to use?",
    description:
      "TailGrids offers both free and premium plans to suit the needs of different users and businesses.",
  },
  {
    id: 4,
    icon: <FaqQuestionSvg />,
    title: "Can I use TailGrids for commercial purposes?",
    description:
      "Yes, you can use TailGrids for commercial projects by subscribing to the premium plan.",
  },
];

const FaqSection = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
      <div className="container mx-auto">
        {/* Section Heading */}
        <SectionHeading
          sectionName={"FAQ"}
          sectionTitle={"Any Questions? Look Here"}
          sectionDescription={
            "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          }
        />
        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12">
          {faqItems.map((item) => (
            <div key={item.id} className="flex">
              <div className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]">
                {item.icon}
              </div>
              <div className="w-full">
                <h3 className="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  {item.title}
                </h3>
                <p className="text-base text-body-color dark:text-dark-6">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Background SVGs */}
      <div>
        <span className="absolute left-4 top-4 -z-[1]">
          <FaqSvgDots />
        </span>
        <span className="absolute bottom-4 right-4 -z-[1]">
          <FaqSvgDotsG />
        </span>
      </div>
    </section>
  );
};

export default FaqSection;
