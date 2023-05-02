import styled from 'styled-components';
import { setFontSize, setTextColor } from 'helpers';

export const Button = styled.button`
	font-size: ${({ sentimentScore, volume }) =>
		setFontSize(sentimentScore, volume)};
	color: ${({ sentimentScore }) => setTextColor(sentimentScore)};
	padding: 0 10px;
	background: none;
	border: none;
	cursor: pointer;

	&:hover {
		color: black;
	}

	&:focus-visible {
		outline: 3px dotted black;
	}
`;
