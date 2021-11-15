// Module import
import { render } from '@testing-library/react';

// Component imports
import { Details } from 'components';

// Test suite
test('contains details text', () => {
  const { container } = render(<Details />);
  expect(container.querySelector('h1').textContent).toBe('Details');
});
