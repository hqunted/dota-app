export const HomeStyles = {
  homeScreen: {
    homeContainer:
      "flex-1 mx-auto h-screen bg-opacity-50 bg-roshan-1 bg-opacity-75 bg-no-repeat bg-cover bg-center bg-fixed",
    homeTextContainer:
      "text-6xl tracking-widest font-Blaka Hollow, cursive text-transparent text-center leading-loose bg-gray-400 bg-clip-text ",
    homeHeroListContainer: "mx-auto max-w-[35%]",
  },
  carouselScreen: {
    carouselContainer: "xl:container absolute",
  },
  heroListScreen: {
    heroListContainer: "bg-gray-200 rounded-lg ",
    listboxButton:
      "bg-gray-400 relative w-full cursor-default hover:bg-gradient-to-r from-red-600 via-orange-700 to-gray-900 rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm",
    listboxContainer: "relative mt-1 ",
    listboxOptions:
      "absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
    listboxOptionActive: "relative cursor-default select-none py-2 pl-10 pr-4",
    listboxOptionActiveTrue:
      "bg-gradient-to-r from-red-600 via-orange-700 to-gray-700",
    listboxOptionActiveFalse: "text-gray-900 ",
    listboxOptionSelected: "block truncate",
    listboxOptionSelectedTrue: "font-medium ",
    listboxOptionSelectedFalse: "font-normal",
    listboxOptionNestedSelectedSpan:
      "absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600",
    listboxOptionNestedSelectedSpanCheckIcon: "h-5 w-5",
  },
};