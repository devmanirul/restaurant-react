import TeamCard from "./TeamCard";
import { teamData } from "../constant/team.constant";

const Team = () => {
  return (
    <div className="bg-lightCream">
      <div className="flex flex-col gap-4 justify-center items-center container mx-auto px-5 md:px-0 py-14 md:py-28">
        {/* heading */}
        <div className="flex flex-row gap-5">
          <div className="max-w-[700px] mx-auto text-center">
            <h3 className="text-black text-lg font-semibold font-josefin border-y border-cream inline-block py-1">
              TEAM
            </h3>
            <h1 className="text-black text-2xl md:text-[40px] font-bold font-Cormorant mt-3 mb-4">
              Meet Our Professional Chefs
            </h1>
          </div>
        </div>
        {/* team menber */}

        <div className="flex flex-col md:flex-row gap-5">
          {teamData.map((team) => (
            <TeamCard
              key={team.id}
              img={team.img}
              name={team.name}
              rank={team.rank}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Team;
