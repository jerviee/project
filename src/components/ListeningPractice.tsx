import { useState } from 'react';
import { Volume2, CheckCircle, XCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { mockListeningQuestions, ListeningQuestion } from '../data/mockListening';

export default function ListeningPractice() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);

  const currentQuestion: ListeningQuestion = mockListeningQuestions[currentIndex];

  const handleSelectAnswer = (index: number) => {
    if (!showResult) {
      setSelectedAnswer(index);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer !== null && !showResult) {
      setShowResult(true);
      setAnsweredCount(prev => prev + 1);
      if (selectedAnswer === currentQuestion.answer) {
        setScore(prev => prev + 1);
      }
    }
  };

  const handleNext = () => {
    if (currentIndex < mockListeningQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const handleSpeak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 1.25;
    window.speechSynthesis.speak(utterance);
  };

  const progress = ((currentIndex + 1) / mockListeningQuestions.length) * 100;
  const accuracy = answeredCount > 0 ? Math.round((score / answeredCount) * 100) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">听力真题练习</h1>
          <p className="text-blue-200">Listening Practice</p>
        </div>

        {/* Progress Bar */}
        <div className="bg-white/10 rounded-full h-3 mb-6 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-blue-400 to-purple-500 h-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Stats */}
        <div className="flex justify-between items-center mb-6 text-white">
          <div className="flex items-center gap-4">
            <span className="bg-blue-600/50 px-4 py-2 rounded-lg">
              题目: {currentIndex + 1} / {mockListeningQuestions.length}
            </span>
            <span className="bg-purple-600/50 px-4 py-2 rounded-lg">
              得分: {score} / {answeredCount}
            </span>
            <span className="bg-green-600/50 px-4 py-2 rounded-lg">
              正确率: {accuracy}%
            </span>
          </div>
          <span className="bg-white/10 px-4 py-2 rounded-lg">
            {currentQuestion.section}
          </span>
        </div>

        {/* Audio Text Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={() => handleSpeak(currentQuestion.audioText)}
              className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
              title="朗读听力文本"
            >
              <Volume2 size={24} className="text-white" />
            </button>
            <h2 className="text-xl font-semibold text-white">听力文本</h2>
          </div>
          <p className="text-white text-lg mb-3">{currentQuestion.audioText}</p>
          <p className="text-blue-200">{currentQuestion.audioTextCN}</p>
        </div>

        {/* Question Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-4">
            {currentQuestion.question}
          </h3>
          <p className="text-blue-200 mb-6">{currentQuestion.questionCN}</p>

          {/* Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === currentQuestion.answer;
              let optionStyle = 'border-gray-500 hover:border-blue-400';

              if (showResult) {
                if (isCorrect) {
                  optionStyle = 'border-green-500 bg-green-500/20';
                } else if (isSelected && !isCorrect) {
                  optionStyle = 'border-red-500 bg-red-500/20';
                } else {
                  optionStyle = 'border-gray-600 opacity-50';
                }
              } else if (isSelected) {
                optionStyle = 'border-blue-500 bg-blue-500/20';
              }

              return (
                <button
                  key={index}
                  onClick={() => handleSelectAnswer(index)}
                  disabled={showResult}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all ${optionStyle}`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-white font-medium">
                        {String.fromCharCode(65 + index)}. {option}
                      </span>
                      <p className="text-blue-200 text-sm mt-1">
                        {currentQuestion.optionsCN[index]}
                      </p>
                    </div>
                    {showResult && isCorrect && (
                      <CheckCircle size={24} className="text-green-400" />
                    )}
                    {showResult && isSelected && !isCorrect && (
                      <XCircle size={24} className="text-red-400" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Feedback */}
        {showResult && (
          <div className={`rounded-xl p-4 mb-6 ${
            selectedAnswer === currentQuestion.answer 
              ? 'bg-green-500/20 border border-green-500' 
              : 'bg-red-500/20 border border-red-500'
          }`}>
            <p className={`text-lg font-semibold ${
              selectedAnswer === currentQuestion.answer ? 'text-green-400' : 'text-red-400'
            }`}>
              {selectedAnswer === currentQuestion.answer ? '回答正确！' : '回答错误'}
            </p>
            {selectedAnswer !== currentQuestion.answer && (
              <p className="text-white mt-2">
                正确答案: {String.fromCharCode(65 + currentQuestion.answer)}
              </p>
            )}
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl text-white transition-colors"
          >
            <ArrowLeft size={20} />
            上一题
          </button>

          {!showResult ? (
            <button
              onClick={handleSubmit}
              disabled={selectedAnswer === null}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl text-white font-semibold transition-colors"
            >
              提交答案
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={currentIndex === mockListeningQuestions.length - 1}
              className="px-8 py-3 bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl text-white font-semibold transition-colors"
            >
              完成
            </button>
          )}

          <button
            onClick={handleNext}
            disabled={currentIndex === mockListeningQuestions.length - 1}
            className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl text-white transition-colors"
          >
            下一题
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}