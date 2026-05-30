import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, RefreshCw, Check, X, Volume2 } from 'lucide-react';
import { mockWords, IELTSWord } from '@/data/mockWords';

export default function FlashCards() {
  const [words, setWords] = useState<IELTSWord[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [mastered, setMastered] = useState<Set<string>>(new Set());
  const [toReview, setToReview] = useState<Set<string>>(new Set());
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setWords(mockWords);
    setLoading(false);
  }, []);

  const resetCards = () => {
    const shuffled = [...words].sort(() => Math.random() - 0.5);
    setWords(shuffled);
    setCurrentIndex(0);
    setMastered(new Set());
    setToReview(new Set());
    setShowResult(false);
    setIsFlipped(false);
  };

  const handleSpeak = (word: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'en-US';
      speechSynthesis.speak(utterance);
    }
  };

  if (loading) {
    return (
      <div className="w-full max-w-md mx-auto text-center py-20">
        <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-500">加载词汇中...</p>
      </div>
    );
  }

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleMastered = () => {
    setMastered(prev => new Set([...prev, words[currentIndex].id]));
    handleNext();
  };

  const handleToReview = () => {
    setToReview(prev => new Set([...prev, words[currentIndex].id]));
    handleNext();
  };

  const handleNext = () => {
    setIsFlipped(false);
    if (currentIndex < words.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrev = () => {
    setIsFlipped(false);
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'IELTS5': return 'bg-green-100 text-green-700';
      case 'IELTS6': return 'bg-blue-100 text-blue-700';
      case 'IELTS7': return 'bg-purple-100 text-purple-700';
      case 'IELTS8': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  if (showResult) {
    return (
      <div className="w-full max-w-md mx-auto text-center">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">学习完成!</h2>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-green-50 rounded-xl p-4">
              <p className="text-3xl font-bold text-green-600">{mastered.size}</p>
              <p className="text-green-600">已掌握</p>
            </div>
            <div className="bg-yellow-50 rounded-xl p-4">
              <p className="text-3xl font-bold text-yellow-600">{toReview.size}</p>
              <p className="text-yellow-600">需复习</p>
            </div>
          </div>
          <button
            onClick={resetCards}
            className="flex items-center gap-2 mx-auto px-6 py-3 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-colors"
          >
            <RefreshCw size={20} />
            再练一次
          </button>
        </div>
      </div>
    );
  }

  const currentWord = words[currentIndex];

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-500">
          {currentIndex + 1} / {words.length}
        </span>
        <div className="flex gap-2">
          <span className="flex items-center gap-1 text-green-600 text-sm">
            <Check size={16} />
            {mastered.size}
          </span>
          <span className="flex items-center gap-1 text-yellow-600 text-sm">
            <X size={16} />
            {toReview.size}
          </span>
        </div>
      </div>

      <div className="progress-bar h-2 bg-gray-100 rounded-full mb-6 overflow-hidden">
        <div
          className="h-full bg-primary-500 rounded-full"
          style={{ width: `${((currentIndex + 1) / words.length) * 100}%` }}
        />
      </div>

      <div className="card-flip w-full">
        <div
          className={`card-inner relative w-full h-80 cursor-pointer ${isFlipped ? 'flipped' : ''}`}
          onClick={handleFlip}
        >
          <div className="card-front absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center border border-gray-100">
            <span className={`px-3 py-1 rounded-full text-sm font-medium mb-4 ${getLevelColor(currentWord?.level || '')}`}>
              {currentWord?.level}
            </span>
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-4xl font-bold text-gray-800">{currentWord?.word}</h2>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleSpeak(currentWord?.word || '');
                }}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-primary-500"
              >
                <Volume2 size={24} />
              </button>
            </div>
            <p className="text-gray-500 text-lg">{currentWord?.phonetic}</p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-lg">
                {currentWord?.level}
              </span>
            </div>
            <p className="mt-4 text-gray-400 text-sm">点击卡片查看释义</p>
          </div>

          <div className="card-back absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl shadow-lg p-6 flex flex-col overflow-y-auto text-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-white/20">
                {currentWord?.level}
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-3">{currentWord?.meaning}</h3>
            
            <div className="flex items-center gap-2 bg-green-500/30 px-4 py-2 rounded-lg mb-3">
              <span className="text-green-200 text-sm">词根</span>
              <span className="text-white font-bold text-lg">{currentWord?.root}</span>
              <span className="text-green-200 text-sm">= {currentWord?.rootMeaning}</span>
            </div>
            
            <div className="bg-white/10 rounded-xl p-3 w-full mb-3">
              <p className="text-sm opacity-80 mb-1">词源:</p>
              <p className="text-xs opacity-90">{currentWord?.rootOriginNote}</p>
            </div>
            
            <div className="bg-white/10 rounded-xl p-4 w-full mb-3">
              <p className="text-sm opacity-80 mb-1">词根:</p>
              <p className="text-base">{currentWord?.root} - {currentWord?.rootMeaning} ({currentWord?.rootMeaningEn})</p>
            </div>
            
            <div className="bg-white/10 rounded-xl p-4 w-full mb-3">
              <p className="text-sm opacity-80 mb-1">例句:</p>
              <p className="text-base italic">{currentWord?.example}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="flex gap-3">
          <button
            onClick={handleMastered}
            className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors"
          >
            <Check size={20} />
            已掌握
          </button>
          <button
            onClick={handleToReview}
            className="flex items-center gap-2 px-6 py-3 bg-yellow-500 text-white rounded-xl hover:bg-yellow-600 transition-colors"
          >
            <X size={20} />
            需复习
          </button>
        </div>

        <button
          onClick={handleNext}
          disabled={currentIndex === words.length - 1}
          className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
