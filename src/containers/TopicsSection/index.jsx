import PropTypes from 'prop-types';
import { TopicButton } from 'components';
import { Wrapper } from './style';

export const TopicsSection = ({ handleTopicClick, topics }) => {
	return (
		<Wrapper>
			{topics.topics.map((topic) => {
				return (
					<li key={topic.id}>
						<TopicButton
							handleTopicClick={() => handleTopicClick(topic)}
							sentimentScore={topic.sentimentScore}
							volume={topic.volume}
							buttonText={topic.label}
						/>
					</li>
				);
			})}
		</Wrapper>
	);
};

const topicShape = PropTypes.shape({
	id: PropTypes.string.isRequired,
	sentimentScore: PropTypes.number.isRequired,
	volume: PropTypes.number.isRequired,
	label: PropTypes.string.isRequired,
});

TopicsSection.propTypes = {
	handleTopicClick: PropTypes.func.isRequired,
	topics: PropTypes.shape({
		topics: PropTypes.arrayOf(topicShape).isRequired,
	}).isRequired,
};
