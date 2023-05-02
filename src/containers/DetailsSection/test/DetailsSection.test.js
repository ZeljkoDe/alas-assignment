import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { DetailsSection } from '..';

describe('DetailsSection', () => {
	const selectedTopic = {
		label: 'example',
		volume: 100,
		sentiment: {
			positive: 10,
			negative: 20,
			neutral: 70,
		},
	};

	it('renders initial element block if no topic is selected', () => {
		render(<DetailsSection isSelected={false} selectedTopic={null} />);

		expect(
			screen.getByText(/Please click on a topic to see its details/i)
		).toBeInTheDocument();
	});

	it('renders details element block if a topic is selected', () => {
		render(
			<DetailsSection
				isSelected={true}
				selectedTopic={selectedTopic}
			/>
		);

		expect(screen.getByText(/information on topis:/i)).toBeInTheDocument();
		expect(screen.getByText(/example/i)).toBeInTheDocument();
		expect(screen.getByText(/total mentions:/i)).toBeInTheDocument();
		expect(screen.getByText(/100/i)).toBeInTheDocument();
	});
});
