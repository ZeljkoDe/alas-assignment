import PropTypes from 'prop-types';
import { Button } from './styles';

export const TopicButton = ({
	handleTopicClick,
	sentimentScore,
	volume,
	buttonText,
}) => {
	return (
		<Button
			onClick={handleTopicClick}
			sentimentScore={sentimentScore}
			volume={volume}
		>
			{buttonText}
		</Button>
	);
};

TopicButton.propTypes = {
	handleTopicClick: PropTypes.func.isRequired,
	buttonText: PropTypes.string.isRequired,
	sentimentScore: PropTypes.number.isRequired,
	volume: PropTypes.number.isRequired,
};
