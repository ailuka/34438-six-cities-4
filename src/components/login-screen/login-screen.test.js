import React from "react";
import renderer from "react-test-renderer";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {LoginScreen} from "./login-screen.jsx";
import {CityName} from "../../const.js";
import {NameSpace} from "../../reducer/name-space.js";

const mockStore = configureStore([]);

const store = mockStore({
  [NameSpace.FILTERS]: {
    city: CityName.AMSTERDAM,
  },
  [NameSpace.USER]: {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    email: ``,
  }
});

describe(`LoginScreen`, () => {
  describe(`when city is Amsterdam`, () => {
    it(`should render correctly`, () => {
      const tree = renderer.create(
          <Provider store={store}>
            <LoginScreen
              onUserLogIn={() => null}
              city={CityName.AMSTERDAM}
            />
          </Provider>
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});