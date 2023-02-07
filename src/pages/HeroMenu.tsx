import { useLocation } from "react-router-dom";

import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import {
  tabListStyle,
  selectedFalseStyle,
  selectedTrueStyle,
  tabPanelsStyle,
} from "../styles/HeroMenuStyles";

export const HeroMenu = () => {
  const { state } = useLocation();
  const {
    heroRoles,
    heroAttackType,
    heroName,
    heroId,
    heroPriAttribute,
    heroLegs,
  } = state;

  return (
    <Tab.Group>
      <Tab.List className={tabListStyle}>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={selected ? selectedTrueStyle : selectedFalseStyle}
            >
              Hero Name
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={selected ? selectedTrueStyle : selectedFalseStyle}
            >
              Hero Roles
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <button
              className={selected ? selectedTrueStyle : selectedFalseStyle}
            >
              Hero Attack Type
            </button>
          )}
        </Tab>
      </Tab.List>
      <Tab.Panels className={tabPanelsStyle}>
        <Tab.Panel>{<li>{heroName}</li>}</Tab.Panel>
        <Tab.Panel>{<li>{heroRoles}</li>}</Tab.Panel>
        <Tab.Panel>{<li>{heroAttackType}</li>}</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};
