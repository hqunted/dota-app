import { HeroList } from "../components/HeroList";

export const Home = () => {
  return (
    <div className="flex-initial container mx-auto bg-red-200  ">
      <div className="text-5xl font-mono font-thin italic text-center leading-loose ">
        <text>PICK YOUR HERO!!!!!!</text>
      </div>
      <div
        className="flex-initial
"
      >
        <HeroList />
      </div>
    </div>
  );
};
