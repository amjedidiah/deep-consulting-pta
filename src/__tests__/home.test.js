// Module import
import { render } from '@testing-library/react';

// Component imports
import { Home } from 'components';

// Test suite
test('contains details text', () => {
  const { container } = render(<Home />);
  expect(container.querySelector('h1').textContent).toBe('Home');
});
