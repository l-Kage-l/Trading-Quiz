
let learningText

export default{

beginnerQuestions(){
  learningText="This is one of the best videos out there for getting started in trading. Have fun!"
  const questions = [
    {
      questionText: learningText ,
      answerOptions: [
        { answerText: 'Test Yourself!', isCorrect: false },

      ],
    },
		{
			questionText: 'What is the one thing you need to do first and foremost?',
			answerOptions: [
				{ answerText: 'Change My Mental', isCorrect: true },
				{ answerText: 'Open a Brokerage Account', isCorrect: false },
				{ answerText: 'Throw Money at someone to do it for me', isCorrect: false },
				{ answerText: 'Pay for courses', isCorrect: false },
			],
		},
		{
			questionText: 'What do you need to do in the short term for a good start?',
			answerOptions: [
				{ answerText: 'Time sacrificing', isCorrect: false },
				{ answerText: 'Lots of learning', isCorrect: false },
				{ answerText: 'Raise capital', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: true },
			],
		},
		{
			questionText: 'How much time should you dedicate to trading?',
			answerOptions: [
				{ answerText: 'Most of my time', isCorrect: false },
				{ answerText: 'Some of my time', isCorrect: false },
				{ answerText: 'None of my time', isCorrect: false },
				{ answerText: 'As much as i can afford', isCorrect: true },
			],
		},
		{
			questionText: 'Is it fine to live on a budget for some time so you can start trading?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
				{ answerText: 'I refuse to limit my daily needs', isCorrect: false },
				{ answerText: 'Maybe', isCorrect: false },
			],
		},
	];
  return questions
},

dayTradingForBeginnersQuestions(){
  learningText="Day Trading is difficult for most people, even the more experienced ones. Here's a really good starting point for it."


  const questions = [
    {
      questionText: learningText ,
      answerOptions: [
        { answerText: 'Test Yourself!', isCorrect: false },

      ],
    },
    {
      questionText: 'What is the first step that needs to be done in Day Trading?',
      answerOptions: [
        { answerText: 'Open a CFD Account', isCorrect: false },
        { answerText: 'Invest in Apple', isCorrect: false },
        { answerText: 'Buy Options', isCorrect: false },
        { answerText: 'Setting up a Paper Trading account', isCorrect: true },
      ]
    },
    {
      questionText: 'What is a good broker to set up a Paper Trading account?',
      answerOptions: [
        { answerText: 'Robinhood', isCorrect: false },
        { answerText: 'ThinkOrSwim', isCorrect: true },
        { answerText: 'XTBStation', isCorrect: false },
        { answerText: 'Trading212', isCorrect: false },
      ]
    },
    {
      questionText: 'Should you buy courses or Text Alerts when starting out?',
      answerOptions: [
        { answerText: 'No, thats dumb', isCorrect: false },
        { answerText: 'Yes, please give me links', isCorrect: false },
        { answerText: 'No, there are lots of good free resources', isCorrect: true },
        { answerText: 'Yes, paid content is better than free content', isCorrect: false },
      ]
    },
    {
      questionText: 'What do you need to write down after market closes?',
      answerOptions: [
        { answerText: 'Starting Money', isCorrect: false },
        { answerText: 'How much did you lose/win', isCorrect: false },
        { answerText: 'Entries, Exists and Strategies', isCorrect: true },
        { answerText: 'That beautiful candle that got me 5$', isCorrect: false },
      ]
    }

  ]
  return questions
},
elliotWaveQuestions(){
  learningText=" Elliot Wave Theory is one of the oldest and most tried and true strategy for advanced traders out there."

  const questions = [
    {
      questionText: learningText ,
      answerOptions: [
        { answerText: 'Test Yourself!', isCorrect: false },

      ],
    },
    {
      questionText: 'What is Elliot Wave?',
      answerOptions: [
        { answerText: 'A scalping signal', isCorrect: false },
        { answerText: 'A strategy that resolves over time', isCorrect: false },
        { answerText: 'A Day Trading Strategy', isCorrect: false },
        { answerText: 'A theory that says that the market unfolds in a predictable manner', isCorrect: true },
      ]
    },
    {
      questionText: 'What is this strategy Elliot based upon?',
      answerOptions: [
        { answerText: 'Market movement', isCorrect: false },
        { answerText: 'A "herd mentality" by traders', isCorrect: true },
        { answerText: 'Price prediction', isCorrect: false },
        { answerText: 'Institution Holdings', isCorrect: false },
      ]
    },
    {
      questionText: 'What waves are in an uptrend?',
      answerOptions: [
        { answerText: '1, 3 and 5.', isCorrect: true },
        { answerText: '2 and 4', isCorrect: false },
        { answerText: '3 and 5', isCorrect: false },
        { answerText: '2, 4 and 5.', isCorrect: false },
      ]
    },
    {
      questionText: 'What is the strongest wave?',
      answerOptions: [
        { answerText: '3', isCorrect: true },
        { answerText: '1', isCorrect: false },
        { answerText: '5.', isCorrect: false },
        { answerText: '4', isCorrect: false },
      ]
    }
  ]
  return questions
}


}
