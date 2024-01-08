import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../src/app/page'

describe('Page', () => {
    it('renders a heading', () => {
        render(<Home />)

        const heading = screen.getByRole('heading', { level: 1 })

        expect(heading).toBeInTheDocument()
    })
})

// TODO: Add tests for Square component
describe('Square component', () => {
    it('renders without crashing', () => {
        // TODO: Write a test to render the Square component
    });

    it('handles click event', () => {
        // TODO: Write a test to simulate a click on the Square component
    });
});

// TODO: Add tests for Board component
describe('Board component', () => {
    test('renders without crashing', () => {
        // TODO: Write a test to render the Board component
    });

    test('updates state on square click', () => {
        // TODO: Write a test to simulate a click on a square and check if the state is updated
    });
});

// TODO: Add tests for the overall Home component
describe('Home component', () => {
    test('renders without crashing', () => {
        // TODO: Write a test to render the App component
    });

    test('displays winner correctly', () => {
        // TODO: Write a test to check if the App component displays the correct winner status
    });

    test('updates state on square click', () => {
        // TODO: Write a test to simulate a click on a square and check if the state is updated
    });
});