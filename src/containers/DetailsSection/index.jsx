import PropTypes from 'prop-types';
import { SentimentBlocks } from 'components';
import { Wrapper } from './styles';

export const DetailsSection = ({ isSelected, selectedTopic }) => {
	const initialElementBlock = (
		<h1>Please click on a topic to see its details</h1>
	);
	const detailsElementBlock = selectedTopic && (
		<div>
			<h2>
				Information on topis: <br /> {selectedTopic.label}
			</h2>
			<p>Total Mentions: {selectedTopic.volume}</p>
			<hr />
			<p>Breakdown:</p>

			<SentimentBlocks sentiment={selectedTopic.sentiment} />
		</div>
	);

	return (
		<Wrapper>
			{isSelected ? detailsElementBlock : initialElementBlock}
		</Wrapper>
	);
};

DetailsSection.propTypes = {
	isSelected: PropTypes.bool.isRequired,
	selectedTopic: PropTypes.shape({
		label: PropTypes.string.isRequired,
		volume: PropTypes.number.isRequired,
		sentiment: PropTypes.shape({
			positive: PropTypes.number,
			negative: PropTypes.number,
			neutral: PropTypes.number,
		}),
	}),
};
