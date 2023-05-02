# Getting Started
To run this React app, you can follow these steps:
1. Clone the repository to your local machine: `git clone https://github.com/ZeljkoDe/alas-assignment.git`
2. Navigate to the project directory.
3. Install the required dependencies: `npm install`.
4. Start the app: npm start.
5. Open your browser and navigate to `http://localhost:3000` to view the app.

## Application Overview
The purpose of this application is to display a word cloud, where topics are differentiated by color and font size. The sentiment score is used to determine the color of the topic, while the popularity of the topic is determined by its volume and sentiment score. The font size of each topic is then set based on its popularity score.

## Popularity Score Calculation
The popularity score is a metric that determines the relative importance of a topic in the data set, which is used to determine the font size of the topic in the word cloud. We use sentiment score and volume to calculate the popularity score for each topic.

We chose to use sentiment score because it gives us an idea of the general sentiment around a topic. A high sentiment score means that people generally have positive feelings towards the topic, while a low score means the opposite. This information is useful in determining the overall importance of the topic.

Volume is another important metric in calculating the popularity score. A topic with a high volume means that it is being discussed more frequently, which is an indication of its importance. Combining sentiment score and volume gives us a more comprehensive picture of the importance of a topic.

The calculateTopicPopularity function takes the sentiment score and volume of a topic and returns a popularity score, which is used to determine the font size of the topic in the word cloud.