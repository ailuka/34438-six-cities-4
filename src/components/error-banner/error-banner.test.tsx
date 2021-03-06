import * as React from "react";
import * as renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {NameSpace} from "../../reducer/name-space";
import ErrorBanner from "./error-banner";

const mockStore = configureStore([]);

describe(`ErrorBanner snapshot`, () => {
  it(`should not render`, () => {
    const store = mockStore({
      [NameSpace.ERROR]: {
        errorMessage: ``,
      }
    });

    const tree = renderer.create(
        <Provider store={store}>
          <ErrorBanner/>
        </Provider>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should render`, () => {
    const store = mockStore({
      [NameSpace.ERROR]: {
        errorMessage: `New Error Text`,
      }
    });

    const tree = renderer.create(
        <Provider store={store}>
          <ErrorBanner/>
        </Provider>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
