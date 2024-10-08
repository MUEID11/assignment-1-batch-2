import FeatureCard from "./FeatureCard";
import SectionHeading from "./SectionHeading";
import GiftBoxFeat from "../svg/GiftBoxFeatSvg";
import GuideFeatSvg from "../svg/GuideFeatSvg";
import MatchFeatSvg from "../svg/MatchFeatSvg";
import VisualTourFeatSvg from "../svg/VisualTourFeatSvg";

const features = [
  {
    id: 1,
    iconSvg: <GiftBoxFeat />,
    title: "Real-time Notifications",
    description:
      "Get notified instantly when new content or updates are available.",
    link: "/notifications",
  },
  {
    id: 2,
    iconSvg: <MatchFeatSvg />, // Replace with actual SVG code
    title: "User Analytics",
    description:
      "Track your engagement and view insights with comprehensive analytics tools.",
    link: "/analytics",
  },
  {
    id: 3,
    iconSvg: <GuideFeatSvg />, // Replace with actual SVG code
    title: "Customizable Dashboard",
    description:
      "Personalize your dashboard to focus on the tools and metrics that matter most.",
    link: "/dashboard",
  },
  {
    id: 4,
    iconSvg: <VisualTourFeatSvg />, // Replace with actual SVG code
    title: "Secure Payments",
    description:
      "Enjoy safe and secure transactions with our integrated payment system.",
    link: "/payments",
  },
];

const FeaturesSection = () => {
  return (
    // <!-- ====== Features Section Start -->
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <SectionHeading
          sectionName={"Features"}
          sectionTitle={"Main Features Of Play"}
          sectionDescription={
            "There are many variations of passages of Lorem Ipavailable but the majority have suffered alteration in some form."
          }
        />

        <div className="-mx-4 flex flex-wrap">
          {features.map((feature) => (
            <div key={feature.id} className="w-full px-4 md:w-1/2 lg:w-1/4">
              <FeatureCard
                icon={feature.iconSvg}
                title={feature.title}
                description={feature.description}
                link={feature.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
    // <!-- ====== Features Section End -->
  );
};

export default FeaturesSection;
