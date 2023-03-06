import { Listbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import "./HeroList.css";
import { useNavigate } from "react-router-dom";
import { HomeStyles } from "../styles/HomeStyles";
import { useHeroPicker } from "../hooks/useHeroPicker";

export const HeroList = () => {
  const navigate = useNavigate();
  const { heroes, setHeroes } = useHeroPicker();

  return (
    <div>
      <div className={HomeStyles.heroListScreen.heroListContainer}>
        <Listbox value={heroes} onChange={setHeroes}>
          <div className={HomeStyles.heroListScreen.listboxContainer}>
            <Listbox.Options
              className={HomeStyles.heroListScreen.listboxOptions}
            >
              {heroes.map((hero) => (
                <Listbox.Option
                  key={hero.id}
                  value={hero}
                  onClick={() => {
                    navigate("HeroMenu", {
                      state: { data: hero },
                    });
                  }}
                  className={({ active }) =>
                    `${HomeStyles.heroListScreen.listboxOptionActive} ${
                      active
                        ? HomeStyles.heroListScreen.listboxOptionActiveTrue
                        : HomeStyles.heroListScreen.listboxOptionActiveFalse
                    }`
                  }
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`${
                          HomeStyles.heroListScreen.listboxOptionSelected
                        } ${
                          selected
                            ? HomeStyles.heroListScreen
                                .listboxOptionSelectedTrue
                            : HomeStyles.heroListScreen
                                .listboxOptionSelectedFalse
                        }`}
                      >
                        {hero.localized_name}
                      </span>
                      {selected ? (
                        <span
                          className={
                            HomeStyles.heroListScreen
                              .listboxOptionNestedSelectedSpan
                          }
                        >
                          <CheckIcon
                            className={
                              HomeStyles.heroListScreen
                                .listboxOptionNestedSelectedSpanCheckIcon
                            }
                            aria-hidden="true"
                          />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
          <Listbox.Button className={HomeStyles.heroListScreen.listboxButton}>
            Select Hero
          </Listbox.Button>
        </Listbox>
      </div>
    </div>
  );
};
