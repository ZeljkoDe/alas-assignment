import styled from 'styled-components';
import { hexToRgb } from 'helpers';

export const SentimentMentionsCard = styled.div`
	display: inline-block;
	padding: 0 15px;
	margin: 10px;
	border-radius: 10px;
	background-color: ${({ backgroundColor }) =>
		`rgba(${hexToRgb(backgroundColor)}, 0.2)`};

	span {
		display: block;
	}
`;
