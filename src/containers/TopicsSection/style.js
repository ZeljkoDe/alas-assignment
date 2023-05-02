import styled from 'styled-components';

export const Wrapper = styled.ul`
	list-style: none;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	font-size: 12px;
	margin: 0;
	padding: 0;

	@media (min-width: 798px) {
		border-right: 1px solid black;
		font-size: 16px;
	}
`;
