import { Hero } from "../types/hero";
import React, { useState, useEffect } from "react";
import { Listbox } from "@headlessui/react";
import { getDotaData } from "../services/dotaHeroApi";
import { CheckIcon } from "@heroicons/react/20/solid";

export const HeroList = (): JSX.Element => {
  const [heroes, setHeroes] = useState<Hero[]>([]);

  useEffect(() => {
    getDotaData().then((dataPromise) => {
      setHeroes(dataPromise);
    });
  }, []);

  return (
    <div className="bg-gray-200 ">
      <Listbox value={heroes} onChange={setHeroes}>
        <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
          Select Hero
        </Listbox.Button>

        <div className="relative mt-1 ">
          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {heroes.map((hero) => (
              <Listbox.Option
                key={hero.id}
                value={hero}
                onClick={() => {
                  alert(
                    `${hero.localized_name} is a ${hero.attack_type} hero that can play as ${hero.roles}`
                  );
                }}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                  }`
                }
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {hero.localized_name}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
};
