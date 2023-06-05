import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import * as useSWR from 'swr';

jest.mock('swr', () => jest.fn());
jest.mock('./components/loader', () => () => 'LoaderComponent');
jest.mock('./components/navbar/navbar', () => () => 'NavbarComponent');
jest.mock('./components/data-table/data-table', () => () => 'DataTableComponent');

describe('App layout', () => {
  describe('When there is an error', () => {
    const errorSWR = {
      isLoading: false,
      error: {
        foo: 'bar'
      },
      data: undefined
    } as any;

    test('renders the right content', () => {
      const spySwr = jest.spyOn(useSWR, 'default');
      spySwr.mockReturnValue(errorSWR);

      render(<App />);

      const text = screen.getByText("There's an error retrieving data from API");
      expect(text).toBeInTheDocument();
      expect(spySwr).toHaveBeenCalled();
    });
  });

  describe('When there is no data', () => {
    const emptySWR = {
      isLoading: false,
      error: undefined,
      data: undefined
    } as any;

    test('renders the right content', () => {
      const spySwr = jest.spyOn(useSWR, 'default');
      spySwr.mockReturnValue(emptySWR);

      render(<App />);

      const text = screen.getByText("There's no data available");
      expect(text).toBeInTheDocument();
      expect(spySwr).toHaveBeenCalled();
    });
  });

  describe('When IS loading', () => {
    const loadingSWR = {
      isLoading: true,
      error: undefined,
      data: undefined
    } as any;

    test('renders the right content', () => {
      const spySwr = jest.spyOn(useSWR, 'default');
      spySwr.mockReturnValue(loadingSWR);
      render(<App />);

      const loaderElement = screen.getByText('LoaderComponent');
      expect(loaderElement).toBeInTheDocument();
    });
  });

  describe('When IS NOT loading and data exists', () => {
    const successSWR = {
      isLoading: false,
      error: undefined,
      data: {
        foo: 'bar'
      }
    } as any;

    test('renders the navbar', () => {
      const spySwr = jest.spyOn(useSWR, 'default');
      spySwr.mockReturnValue(successSWR);
      render(<App />);

      const navbarElement = screen.getByText('NavbarComponent');
      expect(navbarElement).toBeInTheDocument();
    });

    test('renders main content', () => {
      const spySwr = jest.spyOn(useSWR, 'default');
      spySwr.mockReturnValue(successSWR);
      render(<App />);

      const dataTableElement = screen.getByText('DataTableComponent');
      expect(dataTableElement).toBeInTheDocument();
    });
  });
});
