import topicsData from './constants/topics.json';
import { SENTIMENT_COLOR, SCORE_THRESHOLD } from './constants';

/**
 * Calculates a popularity score based on the given sentiment score and volume.
 *
 * @param {number} sentimentScore - The sentiment score of the topic.
 * @param {number} volume - The volume of the topic.
 * @returns {string} The popularity score in string format, rounded to two decimal places.
 */
const calculateTopicPopularity = (sentimentScore, volume) => {
	const volumeArray = topicsData.topics.map((topic) => topic.volume);
	const sentimentScoreArray = topicsData.topics.map(
		(topic) => topic.sentimentScore
	);

	const minVolume = Math.min(...volumeArray);
	const maxVolume = Math.max(...volumeArray);
	const minSentimentScore = Math.min(...sentimentScoreArray);
	const maxSentimentScore = Math.max(...sentimentScoreArray);

	const normalizedVolume = (volume - minVolume) / (maxVolume - minVolume);
	const normalizedSentimentScore =
		(sentimentScore - minSentimentScore) /
		(maxSentimentScore - minSentimentScore);

	let popularityScore = normalizedVolume + normalizedSentimentScore;

	return popularityScore.toFixed(2);
};

/**
 * Calculates a font size value based on a given sentiment score.
 *
 * @param {number} sentimentScore - The sentiment score to evaluate.
 * @param {number} volume - The volume to evaluate.
 * @returns {string} The font size value in em units.
 */
export const setFontSize = (sentimentScore, volume) => {
	const popularityScore = calculateTopicPopularity(sentimentScore, volume);
	if (popularityScore > 1.05) {
		return '6em';
	} else if (popularityScore > 0.9) {
		return '5em';
	} else if (popularityScore > 0.75) {
		return '4em';
	} else if (popularityScore > 0.5) {
		return '3em';
	} else if (popularityScore > 0.25) {
		return '2em';
	} else {
		return '1em';
	}
};

/**
 * Determines the text color based on the sentiment score.
 *
 * @param {number} sentimentScore - The sentiment score to evaluate.
 * @returns {string} - The color string for the text.
 */
export const setTextColor = (sentimentScore) => {
	if (sentimentScore > SCORE_THRESHOLD.MEDIUM) {
		return SENTIMENT_COLOR.POSITIVE;
	} else if (sentimentScore < SCORE_THRESHOLD.LOW) {
		return SENTIMENT_COLOR.NEGATIVE;
	} else {
		return SENTIMENT_COLOR.NEUTRAL;
	}
};

/**
 * Converts a hexadecimal color code to an RGB color code.
 *
 * @param {string} hexValue - The hexadecimal color code to convert.
 * @returns {string} The RGB color code in the format "R, G, B".
 */
export const hexToRgb = (hexValue) => {
	const r = parseInt(hexValue.slice(1, 3), 16);
	const g = parseInt(hexValue.slice(3, 5), 16);
	const b = parseInt(hexValue.slice(5, 7), 16);
	return `${r}, ${g}, ${b}`;
};
