import { useState } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Check, X, HelpCircle, Volume2 } from 'lucide-react';
import { mockReadingPassages } from '@/data/mockReading';

export default function ReadingPassages() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<(string | null)[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [filteredPassages, setFilteredPassages] = useState(mockReadingPassages);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [selectedTopic, setSelectedTopic] = useState<string>('All');

  const currentPassage = filteredPassages[currentIndex];

  const difficulties = ['All', 'Easy', 'Medium', 'Hard'];
  const topics = ['All', ...new Set(mockReadingPassages.map(p => p.topic))];

  const handleFilter = () => {
    let filtered = mockReadingPassages;
    if (selectedDifficulty !== 'All') {
      filtered = filtered.filter(p => p.difficulty === selectedDifficulty);
    }
    if (selectedTopic !== 'All') {
      filtered = filtered.filter(p => p.topic === selectedTopic);
    }
    setFilteredPassages(filtered);
    setCurrentIndex(0);
    resetAnswers();
  };

  const resetAnswers = () => {
    setSelectedAnswer(new Array(currentPassage?.questions.length || 0).fill(null));
    setShowResults(false);
  };

  const handleSelectAnswer = (questionIndex: number, answer: string) => {
    if (showResults) return;
    const newAnswers = [...selectedAnswer];
    newAnswers[questionIndex] = answer;
    setSelectedAnswer(newAnswers);
  };

  const checkAnswers = () => {
    setShowResults(true);
  };

  const goToPrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
    resetAnswers();
  };

  const goToNext = () => {
    setCurrentIndex(prev => Math.min(filteredPassages.length - 1, prev + 1));
    resetAnswers();
  };

  const speakText = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 1.4;
    utterance.pitch = 1.25;
    
    const voices = window.speechSynthesis.getVoices();
    const femaleVoice = voices.find(voice => 
      voice.lang === 'en-US' && 
      (voice.name.toLowerCase().includes('female') || 
       voice.name.toLowerCase().includes('samantha') ||
       voice.name.toLowerCase().includes('karen') ||
       voice.name.toLowerCase().includes('moira') ||
       voice.name.toLowerCase().includes('tessa') ||
       voice.name.toLowerCase().includes('veena') ||
       voice.name.toLowerCase().includes('zira') ||
       voice.name.toLowerCase().includes('allison') ||
       voice.name.toLowerCase().includes('luna') ||
       voice.name.toLowerCase().includes('olivia') ||
       voice.name.toLowerCase().includes('ava'))
    ) || voices.find(voice => voice.lang.startsWith('en-US'));
    if (femaleVoice) {
      utterance.voice = femaleVoice;
    }
    
    window.speechSynthesis.speak(utterance);
  };

  const isCorrect = (questionIndex: number) => {
    return selectedAnswer[questionIndex] === currentPassage.questions[questionIndex].answer;
  };

  if (!currentPassage) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">没有找到匹配的阅读真题</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BookOpen className="text-white" size={24} />
              <div>
                <h2 className="text-xl font-bold text-white">雅思阅读真题</h2>
                <p className="text-indigo-200 text-sm">第 {currentIndex + 1} / {filteredPassages.length} 篇</p>
              </div>
            </div>
            <button
              onClick={() => speakText(currentPassage.passage)}
              className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all"
            >
              <Volume2 size={18} />
              <span>朗读文章</span>
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 font-medium">难度:</span>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {difficulties.map(d => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 font-medium">主题:</span>
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {topics.map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <button
              onClick={handleFilter}
              className="px-4 py-2 bg-indigo-500 text-white rounded-lg text-sm hover:bg-indigo-600 transition-colors"
            >
              筛选
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Passage Info */}
          <div className="flex items-center gap-4 mb-4">
            <h3 className="text-xl font-bold text-gray-800">{currentPassage.title}</h3>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              currentPassage.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
              currentPassage.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
              'bg-red-100 text-red-700'
            }`}>
              {currentPassage.difficulty}
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
              {currentPassage.topic}
            </span>
            <span className="text-sm text-gray-400">约 {currentPassage.wordCount} 词</span>
          </div>

          {/* Passage Text */}
          <div className="bg-gray-50 rounded-xl p-4 mb-6">
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{currentPassage.passage}</p>
          </div>
          
          {/* Chinese Translation */}
          {currentPassage.passageCN && (
            <div className="bg-green-50 rounded-xl p-4 mb-6">
              <p className="text-sm text-green-600 mb-2 font-medium">中文翻译:</p>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{currentPassage.passageCN}</p>
            </div>
          )}

          {/* Questions */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <HelpCircle size={20} className="text-indigo-500" />
              阅读理解题
            </h4>
            
            {currentPassage.questions.map((question, index) => (
              <div
                key={question.id}
                className={`p-4 rounded-xl border-2 transition-all ${
                  showResults 
                    ? isCorrect(index) 
                      ? 'border-green-200 bg-green-50' 
                      : 'border-red-200 bg-red-50'
                    : 'border-gray-100 hover:border-indigo-200'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-semibold text-sm">
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 mb-1">{question.type}</p>
                    <p className="font-medium text-gray-800 mb-3">{question.question}</p>
                    
                    {question.options && question.options.length > 0 ? (
                      <div className="space-y-2">
                        {question.options.map((option, optIndex) => {
                          const isSelected = selectedAnswer[index] === option;
                          const isCorrectAnswer = question.answer === option;
                          
                          return (
                            <button
                              key={optIndex}
                              onClick={() => handleSelectAnswer(index, option)}
                              disabled={showResults}
                              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                                showResults
                                  ? isCorrectAnswer
                                    ? 'bg-green-200 text-green-800'
                                    : isSelected
                                      ? 'bg-red-200 text-red-800'
                                      : 'bg-gray-100 text-gray-600'
                                  : isSelected
                                    ? 'bg-indigo-100 text-indigo-800 border-2 border-indigo-300'
                                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border-2 border-transparent'
                              }`}
                            >
                              <span className="w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0">
                                {showResults ? (
                                  isCorrectAnswer ? (
                                    <Check className="w-3 h-3 text-green-600" />
                                  ) : isSelected ? (
                                    <X className="w-3 h-3 text-red-600" />
                                  ) : null
                                ) : isSelected ? (
                                  <div className="w-3 h-3 bg-indigo-500 rounded-full" />
                                ) : null}
                              </span>
                              <span>{option}</span>
                            </button>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <input
                          type="text"
                          value={selectedAnswer[index] || ''}
                          onChange={(e) => {
                            if (!showResults) {
                              const newAnswers = [...selectedAnswer];
                              newAnswers[index] = e.target.value;
                              setSelectedAnswer(newAnswers);
                            }
                          }}
                          disabled={showResults}
                          className="flex-1 px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          placeholder="输入你的答案..."
                        />
                        {showResults && (
                          <span className={`px-3 py-2 rounded-lg text-sm font-medium ${
                            isCorrect(index) ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                          }`}>
                            正确答案: {question.answer}
                          </span>
                        )}
                      </div>
                    )}
                    
                    {showResults && question.explanation && (
                      <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-700">{question.explanation}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={goToPrevious}
                disabled={currentIndex === 0}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft size={18} />
                <span>上一篇</span>
              </button>
              <button
                onClick={goToNext}
                disabled={currentIndex === filteredPassages.length - 1}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <span>下一篇</span>
                <ChevronRight size={18} />
              </button>
            </div>
            <div className="flex items-center gap-3">
              {!showResults ? (
                <button
                  onClick={checkAnswers}
                  disabled={selectedAnswer.some(a => a === null)}
                  className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-medium hover:from-indigo-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  提交答案
                </button>
              ) : (
                <button
                  onClick={resetAnswers}
                  className="px-6 py-2 bg-gray-500 text-white rounded-lg font-medium hover:bg-gray-600 transition-all"
                >
                  重新答题
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}