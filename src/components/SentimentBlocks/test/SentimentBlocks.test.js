import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { SENTIMENT_COLOR } from '../../../constants';
import { hexToRgb } from 'helpers';
import { SentimentBlocks } from '..';

describe('SentimentBlocks', () => {
	test('renders the sentiment blocks', () => {
		const sentiment = {
			positive: 20,
			negative: 10,
			neutral: 5,
		};

		render(<SentimentBlocks sentiment={sentiment} />);

		const positiveCard = screen.getByTestId('positive-card');
		const negativeCard = screen.getByTestId('negative-card');
		const neutralCard = screen.getByTestId('neutral-card');

		expect(positiveCard).toHaveTextContent(/Positive20/i);
		expect(negativeCard).toHaveTextContent(/Negative10/i);
		expect(neutralCard).toHaveTextContent(/Neutral5/i);

		expect(positiveCard).toHaveStyle(
			`backgroundColor: rgba(${hexToRgb(
				SENTIMENT_COLOR.POSITIVE
			)}, 0.2) }`
		);
		expect(negativeCard).toHaveStyle(
			`backgroundColor: rgba(${hexToRgb(
				SENTIMENT_COLOR.NEGATIVE
			)}, 0.2) }`
		);
		expect(neutralCard).toHaveStyle(
			`backgroundColor: rgba(${hexToRgb(SENTIMENT_COLOR.NEUTRAL)}, 0.2) }`
		);
	});
});
