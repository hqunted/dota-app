import { useLocation, useNavigate } from "react-router-dom";
import { Tab } from "@headlessui/react";
import { Fragment, useState } from "react";
import { HeroMenuStyles } from "../styles/HeroMenuStyles";
import { Hero } from "../types";
import { MenuTitleLayout } from "../layouts/MenuTitleLayout";
import { useHeroPicker } from "../hooks/useHeroPicker";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProvideHeroData } from "../context/RandomHeroContext";

export const HeroMenu = () => {
  const { heroes, pickRandomHero } = useHeroPicker();

  const navigate = useNavigate();
  const { state } = useLocation();
  const { data } = state;
  const hero: Hero = data;
  const pickedHeroData: Hero[] = [];

  const comparePickedHero = (item: string) => {
    if (item === "id") {
      if (heroes.length < 1) return;
      return pickRandomHero()?.id === data.id
        ? toast.success("Congratulations you have found the HERO!!", {
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
    const heroDataValue = Object.entries(hero).map(([key, value]) => {
      return <Tab.Panel key={key}>{<li>{value}</li>}</Tab.Panel>;
    });
    return <div>{heroDataValue}</div>;
  };
  let counter = 0;
  const tabList = () => {
    const heroDataValue = Object.entries(hero).map(([key, value]) => {
      counter++;
      pickedHeroData.push(value);
      let color = "";

      const setComparedPickedHeroBackgroundColor = () => {
        if (heroes.length < 1) return;
        return Object.values(data)[counter] ===
          Object.values(pickRandomHero())[counter]
          ? (color = "bg-green-400")
          : (color = "bg-red-400");
      };
      if (heroes.length < 1) return;

      console.log(Object.values(pickRandomHero())[counter]);
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
                {formatKey(key)}
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
        onClick={() => navigate(-1)}
      >
        Back to Hero Pick
      </button>

      <div className={HeroMenuStyles.heroMenuContainer.heroMenu}>
        <img
          src={require("../images/questionmark.png")}
          className={HeroMenuStyles.questionMarkImage}
          alt="question"
        />
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
