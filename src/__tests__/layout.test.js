// Module import
import { render } from '@testing-library/react';

// Component imports
import { Layout } from 'components';

// Test suite
test('contains details text', () => {
  const { container } = render(<Layout />);
  expect(container.querySelector('h1').textContent).toBe('Layout');
});
