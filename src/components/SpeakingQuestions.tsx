import { useState } from 'react';
import { ChevronLeft, ChevronRight, Mic, Volume2, MessageCircle } from 'lucide-react';
import { mockSpeakingQuestions } from '@/data/mockSpeaking';

export default function SpeakingQuestions() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [speaking, setSpeaking] = useState(false);
  const [filteredQuestions, setFilteredQuestions] = useState(mockSpeakingQuestions);
  const [selectedPart, setSelectedPart] = useState<string>('All');

  const currentQuestion = filteredQuestions[currentIndex];

  const parts = ['All', 'Part 1', 'Part 2', 'Part 3'];

  const handleFilter = () => {
    let filtered = mockSpeakingQuestions;
    if (selectedPart !== 'All') {
      filtered = filtered.filter(q => q.part === selectedPart);
    }
    setFilteredQuestions(filtered);
    setCurrentIndex(0);
  };

  const goToPrevious = () => {
    window.speechSynthesis.cancel();
    setSpeaking(false);
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    window.speechSynthesis.cancel();
    setSpeaking(false);
    setCurrentIndex(prev => Math.min(filteredQuestions.length - 1, prev + 1));
  };

  const speakText = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      
      if (speaking) {
        setSpeaking(false);
        return;
      }

      setSpeaking(true);
      const text = currentQuestion.modelAnswer;
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 1.25;
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
      
      utterance.onend = () => setSpeaking(false);
      utterance.onerror = () => setSpeaking(false);
      
      window.speechSynthesis.speak(utterance);
    }
  };

  const speakQuestion = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      
      const text = currentQuestion.question;
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      
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
    }
  };

  if (!currentQuestion) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <MessageCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">没有找到匹配的口语真题</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Mic className="text-white" size={24} />
              <div>
                <h2 className="text-xl font-bold text-white">雅思口语真题</h2>
                <p className="text-pink-200 text-sm">第 {currentIndex + 1} / {filteredQuestions.length} 题</p>
              </div>
            </div>
            <button
              onClick={speakText}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                speaking 
                  ? 'bg-red-500 hover:bg-red-600 text-white' 
                  : 'bg-white/20 hover:bg-white/30 text-white'
              }`}
            >
              <Volume2 size={18} />
              <span>{speaking ? '停止朗读' : '朗读范文'}</span>
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-gray-600">部分：</label>
              <select
                value={selectedPart}
                onChange={(e) => setSelectedPart(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                {parts.map(part => (
                  <option key={part} value={part}>{part}</option>
                ))}
              </select>
              <button
                onClick={handleFilter}
                className="px-4 py-2 bg-pink-500 text-white text-sm rounded-lg hover:bg-pink-600 transition-colors"
              >
                筛选
              </button>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <span className="text-sm text-gray-500">话题：</span>
              <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-medium">
                {currentQuestion.topicCN || currentQuestion.topic}
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                {currentQuestion.part}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Question */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-lg font-semibold text-gray-800">问题</h3>
              <button
                onClick={speakQuestion}
                className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
                title="听问题"
              >
                <Volume2 size={16} className="text-pink-500" />
              </button>
            </div>
            <p className="text-gray-700 text-lg mb-2">{currentQuestion.question}</p>
            {currentQuestion.questionCN && (
              <p className="text-gray-500">{currentQuestion.questionCN}</p>
            )}
          </div>

          {/* Model Answer */}
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-lg font-semibold text-gray-800">高分范文</h3>
              <button
                onClick={speakText}
                className={`p-1.5 rounded-full transition-colors ${
                  speaking ? 'bg-red-100 text-red-600' : 'hover:bg-pink-200 text-pink-600'
                }`}
                title={speaking ? '停止朗读' : '朗读范文'}
              >
                <Volume2 size={16} />
              </button>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4 whitespace-pre-line">{currentQuestion.modelAnswer}</p>
            {currentQuestion.modelAnswerCN && (
              <div className="border-t border-pink-200 pt-4">
                <p className="text-sm text-gray-500 mb-2">中文翻译：</p>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">{currentQuestion.modelAnswerCN}</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 flex items-center justify-between">
          <button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft size={20} />
            <span>上一题</span>
          </button>
          
          <div className="flex items-center gap-2">
            {filteredQuestions.slice(Math.max(0, currentIndex - 2), Math.min(filteredQuestions.length, currentIndex + 3)).map((_, idx) => {
              const actualIndex = Math.max(0, currentIndex - 2) + idx;
              return (
                <button
                  key={actualIndex}
                  onClick={() => {
                    window.speechSynthesis.cancel();
                    setSpeaking(false);
                    setCurrentIndex(actualIndex);
                  }}
                  className={`w-8 h-8 rounded-full text-sm font-medium transition-colors ${
                    actualIndex === currentIndex
                      ? 'bg-pink-500 text-white'
                      : 'bg-white border border-gray-300 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {actualIndex + 1}
                </button>
              );
            })}
          </div>
          
          <button
            onClick={goToNext}
            disabled={currentIndex === filteredQuestions.length - 1}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <span>下一题</span>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
