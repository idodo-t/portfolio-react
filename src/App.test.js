import { fireEvent, render, screen } from '@testing-library/react';
jest.mock('@vercel/analytics/react', () => ({ Analytics: () => null }), { virtual: true });

import App from './App';

beforeAll(() => {
  global.IntersectionObserver = class {
    observe() {}
    disconnect() {}
  };
});

test('opens skill details and closes them with Escape', () => {
  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: /France Monceau/ }));
  expect(screen.getByRole('dialog')).toHaveTextContent(/AI-based decision-support solutions/);

  fireEvent.keyDown(window, { key: 'Escape' });
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /Master 2 MIAGE AI2/ }));
  expect(screen.getByRole('dialog')).toHaveTextContent(/Université Côte d’Azur/);

  fireEvent.keyDown(window, { key: 'Escape' });

  fireEvent.click(screen.getByRole('button', { name: /Generative & Agentic AI/ }));
  expect(screen.getByRole('dialog')).toHaveTextContent(/Hugging Face/);

  fireEvent.keyDown(window, { key: 'Escape' });
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
});
