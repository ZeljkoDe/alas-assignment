import { useState } from 'react';
import { TopicsSection, DetailsSection } from './containers';
import topicsData from './constants/topics.json';
import styled from 'styled-components';

const Dashboard = styled.div`
	@media (min-width: 768px) {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
`;

export const App = () => {
	const [isSelected, setIsSelected] = useState(false);
	const [selectedTopic, setSelectedTopic] = useState(null);

	const handleTopicClick = (topic) => {
		setIsSelected(true);
		setSelectedTopic(topic);
	};

	return (
		<Dashboard>
			<TopicsSection
				data-testid='topics-section'
				handleTopicClick={handleTopicClick}
				topics={topicsData}
			/>
			<DetailsSection
				data-testid='details-section'
				isSelected={isSelected}
				selectedTopic={selectedTopic}
			/>
		</Dashboard>
	);
};
