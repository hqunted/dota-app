import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import { HeroMenuStyles } from "../styles/HeroMenuStyles";
import { Hero } from "../types";
import { MenuTitleLayout } from "../layouts/MenuTitleLayout";

export const HeroMenu = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { data } = state;
  const hero: Hero = data;

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
    <div>
      <Tab.Group>
        <button
          className={HeroMenuStyles.tabListButton}
          onClick={() => navigate(-1)}
        >
          Go back to pick screen
        </button>
        {tabList()}
        <Tab.Panels className={HeroMenuStyles.tabPanels}>
          {tabPanel()}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
