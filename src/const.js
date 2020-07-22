export const EstateType = {
  APARTMENT: `apartment`,
  HOUSE: `house`,
  HOTEL: `hotel`,
  ROOM: `room`,
};

export const CityName = {
  AMSTERDAM: `Amsterdam`,
  BRUSSELS: `Brussels`,
  COLOGNE: `Cologne`,
  DUSSELDORF: `Dusseldorf`,
  HAMBURG: `Hamburg`,
  PARIS: `Paris`,
};

export const CityCoordinates = {
  [CityName.AMSTERDAM]: [52.38333, 4.9],
  [CityName.PARIS]: [48.864716, 2.35],
};

export const OfferClassNamesForPageType = {
  main: {
    article: `cities__place-card`,
    image: `cities__image-wrapper`,
    list: `cities__places-list tabs__content`,
  },
  details: {
    article: `near-places__card`,
    image: `near-places__image-wrapper`,
    list: `near-places__list`,
  }
};

export const KeyCodes = {
  ENTER: 13,
  SPACEBAR: 32,
};

export const SortTypes = {
  POPULAR: 1,
  PRICE_LOW_TO_HIGH: 2,
  PRICE_HIGH_TO_LOW: 3,
  TOP_RATED_FIRST: 4,
};
