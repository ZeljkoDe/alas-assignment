import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { TopicsSection } from '..';

describe('TopicsSection', () => {
	const topicsMock = {
		topics: [
			{
				id: '1',
				sentimentScore: 169,
				label: 'Topic 1',
				volume: 67,
			},
			{
				id: '2',
				sentimentScore: 59,
				label: 'Topic 2',
				volume: 5,
			},
		],
	};

	it('should render a list of TopicButtons', () => {
		const handleTopicClick = jest.fn();
		render(
			<TopicsSection
				handleTopicClick={handleTopicClick}
				topics={topicsMock}
			/>
		);

		const topicButtons = screen.getAllByRole('button');
		expect(topicButtons).toHaveLength(2);
		expect(topicButtons[0]).toHaveTextContent('Topic 1');
		expect(topicButtons[1]).toHaveTextContent('Topic 2');
	});
});
