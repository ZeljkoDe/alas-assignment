import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TopicButton } from '../';
import { SENTIMENT_COLOR } from '../../../constants';

describe('TopicButton', () => {
	const handleTopicClickMock = jest.fn();
	const buttonTextMock = 'Test click';
	const sentimentScoreMock = 19;
	const volumeMock = 19;

	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('renders button with text', () => {
		render(
			<TopicButton
				handleTopicClick={handleTopicClickMock}
				sentimentScore={sentimentScoreMock}
				buttonText={buttonTextMock}
				volume={volumeMock}
			/>
		);

		const buttonElement = screen.getByRole('button', { name: buttonTextMock });
		expect(buttonElement).toBeInTheDocument();
		expect(buttonElement).toHaveTextContent(buttonTextMock);
	});

    it('renders button text color', () => {
        render(
			<TopicButton
				handleTopicClick={handleTopicClickMock}
				sentimentScore={sentimentScoreMock}
				buttonText={buttonTextMock}
				volume={volumeMock}
			/>
		);

        const buttonElement = screen.getByRole('button', { name: buttonTextMock });
        expect(buttonElement).toHaveStyle(`
            color: ${SENTIMENT_COLOR.NEGATIVE}
        `);
    })

	it('calls handleTopicClick when button is clicked', () => {
		render(
			<TopicButton
				handleTopicClick={handleTopicClickMock}
				sentimentScore={sentimentScoreMock}
				buttonText={buttonTextMock}
				volume={volumeMock}
			/>
		);

		const buttonElement = screen.getByRole('button', { name: buttonTextMock });
		userEvent.click(buttonElement);
		expect(handleTopicClickMock).toHaveBeenCalledTimes(1);
	});
});
