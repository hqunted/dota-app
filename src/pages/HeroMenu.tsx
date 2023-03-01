import { useLocation, useNavigate } from "react-router-dom";
import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import { HeroMenuStyles } from "../styles/HeroMenuStyles";
import { Hero } from "../types";
import { MenuTitleLayout } from "../layouts/MenuTitleLayout";
import { useHeroPicker } from "../hooks/useHeroPicker";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const HeroMenu = () => {
  const { pickRandomHero, heroes } = useHeroPicker();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { data } = state;
  const hero: Hero = data;

  const comparePickedHero = () => {
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
  };

  comparePickedHero();

  const formatKey = (key: string) => {
    return MenuTitleLayout[key];
  };

  const tabPanel = () => {
    const heroDataValue = Object.entries(hero).map(([key, value]) => {
      return <Tab.Panel key={key}>{<li>{value}</li>}</Tab.Panel>;
    });
    return <div>{heroDataValue}</div>;
  };

  const tabList = () => {
    const heroDataValue = Object.entries(hero).map(([key, value]) => {
      return (
        <Tab.List className={HeroMenuStyles.tabList} key={key}>
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

        <Tab.Group>
          {tabList()}
          <Tab.Panels className={HeroMenuStyles.tabPanels}>
            {tabPanel()}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};
