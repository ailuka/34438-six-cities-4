import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Main} from "./main.jsx";
import testMocks from "../../test-mocks/test-mocks.js";
import {CityName, SortTypes} from "../../const.js";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import PropTypes from "prop-types";

Enzyme.configure({
  adapter: new Adapter(),
});

const offers = testMocks;
const cityOffers = offers.slice(0, 4);

const mockStore = configureStore([]);
const store = mockStore({
  city: CityName.AMSTERDAM,
  offers: cityOffers,
  sortType: SortTypes.POPULAR,
  activeCard: null,
});

const Wrapper = ({children}) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

describe(`Main cards`, () => {
  it(`Card header should be pressed`, () => {
    const onOfferDetailsOpen = jest.fn();

    const main = mount(
        <Main
          sortedCityOffers={cityOffers}
          city={CityName.AMSTERDAM}
          onOfferDetailsOpen={onOfferDetailsOpen}
        />,
        {
          wrappingComponent: Wrapper
        }
    );

    const cardsCount = 4;
    const cardHeaders = main.find(`h2.place-card__name a`);
    expect(cardHeaders).toHaveLength(cardsCount);

    cardHeaders.forEach((cardHeader) => {
      cardHeader.simulate(`click`);
    });

    expect(onOfferDetailsOpen.mock.calls.length).toBe(cardsCount);
  });
});
