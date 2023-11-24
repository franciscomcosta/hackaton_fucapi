import  { useState } from 'react';
import { FaBook, FaCalculator, FaFlask, FaGlobe } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import User from './User';
function Map() {
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const [selectedDiscipline, setSelectedDiscipline] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState({});
  const [points, setPoints] = useState(0)

  const containerStyle = 'flex  gap-40 w-full mt-[-150px] justify-center items-center ';

  const circleStyle =
    'flex flex-col items-center text-center p-4 cursor-pointer rounded-lg shadow-md transform hover:scale-105 transition-transform ease-in-out';

  const questionnaireStyle =
    'p-6 border border-gray-300 rounded-lg mt-4 shadow-md max-w-md';

  const submitButtonStyle =
    'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800';

  const resultStyle = 'mt-4  p-4 border border-gray-300 rounded-lg shadow-md max-w-md';

  const disciplines = [
    { name: 'Português', icon: <FaBook size={30} color="#FFA500" /> },
    { name: 'Matemática', icon: <FaCalculator size={30} color="#FFA500" /> },
    { name: 'Ciência', icon: <FaFlask size={30} color="#FFA500" /> },
    { name: 'História', icon: <FaGlobe size={30} color="#FFA500" /> },
  ];

  const questions = {
    Português: 'Qual é a importância do estudo da língua portuguesa?',
    Matemática: 'Por que a matemática é fundamental na educação básica?',
    Ciência: 'Qual é o papel da ciência no desenvolvimento educacional?',
    História: 'Como a história contribui para a formação cidadã?',
  };

  const answerOptions = ['Muito Importante', 'Importante', 'Neutro', 'Não Importante'];

  const handleDisciplineClick = (discipline) => {
    setShowQuestionnaire(true);
    setSelectedDiscipline(discipline);
    setSelectedAnswer(null);
  };

  const handleAnswerSubmit = () => {
    if(selectedAnswer === 'Muito Importante'){
      toast.success("Resposta correta!");
      setPoints(points+1)
    }else{
      toast.error("Resposta incorreta.");
    }
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [selectedDiscipline]: selectedAnswer,
    }));
    setShowQuestionnaire(false);
  };

  return (
    <div className={containerStyle}>
      <User points={points} />
      <div className="flex items-center justify-center space-x-4">

        {disciplines.map((discipline, index) => (
          <div
            key={index}
            className={circleStyle}
            onClick={() => handleDisciplineClick(discipline.name)}
          >
            {discipline.icon}
            <span className="text-orange-500 font-semibold">{discipline.name}</span>
          </div>
        ))}
      </div>

      {showQuestionnaire && (
        <div className={questionnaireStyle}>
          <h3 className="text-xl font-semibold mb-4">{questions[selectedDiscipline]}</h3>
          <div className="space-y-4">
            {answerOptions.map((option, index) => (
              <div key={index} className="relative">
                <input
                  type="radio"
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={() => setSelectedAnswer(option)}
                  className="mr-2 focus:ring-0"
                />
                <span className="ml-2">{option}</span>
                {index < answerOptions.length - 1 && (
                  <div
                    className={`absolute h-${20 + index * 10} w-0.5 bg-gray-400 left-6 top-6`}
                  ></div>
                )}
              </div>
            ))}
          </div>
          <button className={submitButtonStyle} onClick={handleAnswerSubmit}>
            Submeter
          </button>
        </div>
      )}

      {Object.keys(answers).length === disciplines.length && (
        <div className={resultStyle}>
          <h3 className="text-xl font-semibold mb-4">Respostas:</h3>
          {Object.entries(answers).map(([discipline, answer], index) => (
            <p key={index} className="mb-2">
              <span className="font-semibold">{discipline}:</span> {answer}
            </p>
          ))}
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

export default Map;
