import React, { useState } from 'react';
import Questions from "./Components/Questions"
import ReactPlayer from "react-player";

let questions

let learningOptions =
	[
		{
			questionText: 'Select Learning Level',
			answerOptions: 
			[
				{ answerText: 'Beginner', choice: 1 },
				{ answerText: 'Somewhat Experienced', choice: 2 },
				{ answerText: 'Experienced', choice: 3 },

			],
		}
	];

export default function App() {

	const refreshPage = ()=>{
		window.location.reload();
	 }
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [learningChoice,setLearningChoice] = useState(0);

	const handleLearningAnswer = (choice) =>
	{ // eslint-disable-next-line
        switch (choice) 
		{
        	case 1:
        		questions = Questions.beginnerQuestions()
						setLearningChoice(1)
						break
				 case 2:
				    questions = Questions.dayTradingForBeginnersQuestions()
						setLearningChoice(2)
						break
				case 3:
				    questions = Questions.elliotWaveQuestions()
						setLearningChoice(3)
				    break
        }
	}

	const handleAnswerOptionClick = (isCorrect) => 
		{
			if (isCorrect) 
			{
				setScore(score + 1);
			}

			const nextQuestion = currentQuestion + 1;

			if (nextQuestion < questions.length)
			{
				setCurrentQuestion(nextQuestion);
			} else 
			{
				setShowScore(true);
			}
		};
	if(learningChoice === 0)
	{
		return(
			<div className='app'>
				<div className='question-section'>
				<div className='question-count'>
						<span>Select Learning Level</span>
						<div className='firstReact'>
							  <ReactPlayer 
							  	width={420} 
								height={377}
								url="https://www.youtube.com/watch?v=PFyZv4OFfvs"
							  />
				</div>
				</div>
				</div>
				<div className='answer-section'>
					{learningOptions[currentQuestion].answerOptions.map((answerOption) => (
						<button onClick={() => handleLearningAnswer(answerOption.choice)}>{answerOption.answerText}</button>
					))}
				</div>
			</div>
		)
	}
	else{
		return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You have answered correctly {score} out of {questions.length -1} questions.
					<button onClick={refreshPage}>
  					Restart
					</button>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							{currentQuestion!==0 && 	<div>
								<span>Question {currentQuestion}</span>/{questions.length -1}
							</div>}
							{currentQuestion === 0 && learningChoice ===1 &&
								<div>
							<div className='react'>
							  <ReactPlayer 
							  	width={420} 
								height={348}
								url="https://www.youtube.com/watch?v=Z94tNTsQnb4"
							  />
							  </div>
							</div>
							}
							{currentQuestion === 0 && learningChoice ===2 &&
								<div>
									<ReactPlayer
									width={420} 
									height={348}
										url="https://www.youtube.com/watch?v=I4yiHiM8OgI"
									/>
								</div>
							}
							{currentQuestion === 0 && learningChoice ===3 &&
								<div>
									<ReactPlayer
									width={420} 
									height={348}
										url="https://www.youtube.com/watch?v=wAuSDVI3lJA"
									/>
								</div>
							}

						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}

}
