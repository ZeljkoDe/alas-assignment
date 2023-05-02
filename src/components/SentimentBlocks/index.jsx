import PropTypes from 'prop-types';
import { SENTIMENT_COLOR } from '../../constants';
import { SentimentMentionsCard } from './style';

export const SentimentBlocks = ({ sentiment }) => {
	return (
		<>
			<SentimentMentionsCard
				data-testid='positive-card'
				backgroundColor={SENTIMENT_COLOR.POSITIVE}
			>
				<p>
					Positive
					<span>{sentiment?.positive || 0}</span>
				</p>
			</SentimentMentionsCard>
			<SentimentMentionsCard
				data-testid='negative-card'
				backgroundColor={SENTIMENT_COLOR.NEGATIVE}
			>
				<p>
					Negative
					<span>{sentiment?.negative || 0}</span>
				</p>
			</SentimentMentionsCard>
			<SentimentMentionsCard
				data-testid='neutral-card'
				backgroundColor={SENTIMENT_COLOR.NEUTRAL}
			>
				<p>
					Neutral
					<span>{sentiment?.neutral || 0}</span>
				</p>
			</SentimentMentionsCard>
		</>
	);
};

SentimentBlocks.propTypes = {
	sentiment: PropTypes.shape({
		positive: PropTypes.number,
		negative: PropTypes.number,
		neutral: PropTypes.number,
	}),
};
