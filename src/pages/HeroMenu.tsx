import { useLocation, useNavigate } from "react-router-dom";
import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import { HeroMenuStyles } from "../styles/HeroMenuStyles";
import { Hero } from "../types";
import { MenuTitleLayout } from "../layouts/MenuTitleLayout";
import { useHeroPicker } from "../hooks/useHeroPicker";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProvideHeroData } from "../context/RandomHeroContext";
import { NewGame } from "../components/NewGame";

export const HeroMenu = () => {
  const { heroes } = useHeroPicker();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { data } = state;
  const hero: Hero = data;
  let counter = -1;
  const randomHero = JSON.parse(localStorage.getItem("randomHero") || "{}");

  const comparePickedHero = (item: string) => {
    if (item === "id") {
      if (heroes.length < 1) return;
      return randomHero?.id === data.id
        ? toast.success(<NewGame></NewGame>, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          })
        : toast.error(
            "Oops, you selected the wrong hero. Try again on the pick screen...",
            {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            }
          );
    }
  };

  comparePickedHero("id");

  const formatKey = (key: string) => {
    return MenuTitleLayout[key];
  };

  const tabPanel = () => {
    return (
      <div className="bg-gray-800 text-sm text-center">
        <div className={"text-bg-green-500"}>
          {"Green"}= Matched, {"Red"}= Didn't matched
        </div>
      </div>
    );
  };

  const tabList = () => {
    const heroDataValue = Object.entries(hero).map(([key, value]) => {
      counter++;
      let color = "";
      console.log(randomHero);

      const setComparedPickedHeroBackgroundColor = () => {
        const dataValue = Object.values(data)[counter];
        const randomHeroValue = Object.values(randomHero)[counter];
        if (heroes.length < 1) return;

        return dataValue === randomHeroValue
          ? (color = HeroMenuStyles.predictionContainer.predictionTrue)
          : Array.isArray(dataValue) &&
            randomHero?.roles
              .filter((value: string, index: number) => index >= 4)
              .some((value: string) => {
                return data.roles.includes(value);
              })
          ? (color = HeroMenuStyles.predictionContainer.predictionTrue)
          : (color = HeroMenuStyles.predictionContainer.predictionFalse);
      };

      setComparedPickedHeroBackgroundColor();

      return (
        <Tab.List className={HeroMenuStyles.tabList + color} key={key}>
          <Tab as={Fragment} key={key}>
            {({ selected }) => (
              <button
                className={
                  selected
                    ? HeroMenuStyles.selectedTrue
                    : HeroMenuStyles.selectedFalse
                }
              >
                {formatKey(key) + ": " + value}
              </button>
            )}
          </Tab>
        </Tab.List>
      );
    });

    return <div>{heroDataValue}</div>;
  };

  return (
    <div className={HeroMenuStyles.heroMenuContainer.heroMenuBackground}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <button
        className={HeroMenuStyles.heroMenuBackButton}
        onClick={() => {
          navigate(-1);
        }}
      >
        Back to Hero Pick
      </button>

      <div className={HeroMenuStyles.heroMenuContainer.heroMenu}>
        <ProvideHeroData>
          <Tab.Group>
            {tabList()}
            <Tab.Panels className={HeroMenuStyles.tabPanels}>
              {tabPanel()}
            </Tab.Panels>
          </Tab.Group>
        </ProvideHeroData>
      </div>
    </div>
  );
};
