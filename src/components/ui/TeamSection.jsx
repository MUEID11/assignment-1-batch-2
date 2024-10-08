
import team1 from "../../assets/images/team/team-01.png";
import team2 from "../../assets/images/team/team-02.png";
import team3 from "../../assets/images/team/team-03.png";
import team4 from "../../assets/images/team/team-04.png";

import HoverSvg2 from "../svg/HoverSvg2";
import HoverSvg from "../svg/HoverSvg";
import SectionHeading from "./SectionHeading";
import TeamCard from "./TeamCard";

const teamMembers = [
  {
    image: team1,
    name: "Melissa Tatcher",
    role: "Marketing Expert",
    hoverIcon: <HoverSvg />,
  },
  {
    image: team2,
    name: "Stuard Ferrel",
    role: "Digital Marketer",
    hoverIcon: <HoverSvg />,
  },
  {
    image: team3,
    name: "Eva Hudson",
    role: "Creative Designer",
    hoverIcon: <HoverSvg />,
  },
  {
    image: team4,
    name: "Jackie Sanders",
    role: "Founder of Facebook",
    hoverIcon: <HoverSvg2 />,
  },
];

const TeamSection = () => {
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <SectionHeading
              sectionName={"Our Team Member"}
              sectionTitle={"Our Clients"}
              sectionDescription={
                "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
              }
            />
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap justify-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4">
              <TeamCard
                image={member.image}
                name={member.name}
                role={member.role}
                hoverIcon={member.hoverIcon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
