import { fireEvent, render, screen, within } from '@testing-library/react';
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
  const skillDialog = screen.getByRole('dialog');
  expect(skillDialog).toHaveTextContent(/Hugging Face/);
  expect(skillDialog).toHaveTextContent(/My work spans/);
  expect(skillDialog).not.toHaveTextContent(/the CV|latest CV/i);

  fireEvent.keyDown(window, { key: 'Escape' });
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /Fellah AI — WhatsApp Farming Assistant/ }));
  const projectDialog = screen.getByRole('dialog');
  expect(within(projectDialog).getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', 'https://github.com/idodo-t/fellah-ai');

  fireEvent.keyDown(window, { key: 'Escape' });
  fireEvent.click(screen.getByRole('button', { name: /Malware Detection via CNN/ }));
  expect(within(screen.getByRole('dialog')).queryByRole('link', { name: 'GitHub' })).not.toBeInTheDocument();
});
