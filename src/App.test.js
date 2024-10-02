import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Store from './Features/Store'; // Adjust this import based on your store's location
import configureStore from 'redux-mock-store';
import NavbarCategory from './Components/NavbarCategory';
import { sortdata } from './Features/Productslice';
describe('App Component Tests', () => {
  it('renders NavbarSearch and NavbarCategory on the home page', () => {
    render(
      <Provider store={Store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );
    expect(screen.getByTestId('searchcontainer')).toBeInTheDocument();
    expect(screen.getByTestId('categorycontainer')).toBeInTheDocument();
  });
});


const mockStore = configureStore([]);

describe('NavbarCategory Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
    store.dispatch = jest.fn();
  });

  test('renders and dispatches action on sort selection', () => {
    const { getByText, getByRole } = render(
      <Provider store={store}>
        <Router>
          <NavbarCategory />
        </Router>
      </Provider>
    );

    fireEvent.change(screen.getByRole('combobox'), { target: { value: '1' } });
    expect(store.dispatch).toHaveBeenCalledWith(sortdata('1'));
    fireEvent.click(screen.getByText(/\+ Sell Item/i));
  });
});
