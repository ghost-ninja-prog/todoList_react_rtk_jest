import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import App from './App';

test('renders learn react link', () => {
  render(<Provider store={store}>
            <App />
        </Provider>);

  expect(screen.getByText('Todo List React+RTK+Jest')).toBeInTheDocument();
});