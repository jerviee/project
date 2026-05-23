import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, RefreshCw, Check, X } from 'lucide-react';
import { ieltsWords, Word } from '@/data/words';

export default function FlashCards() {
  const [words, setWords] = useState<Word[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [mastered, setMastered] = useState<Set<number>>(new Set());
  const [toReview, setToReview] = useState<Set<number>>(new Set());
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    resetCards();
  }, []);

  const resetCards = () => {
    const shuffled = [...ieltsWords].sort(() => Math.random() - 0.5);
    setWords(shuffled);
    setCurrentIndex(0);
    setMastered(new Set());
    setToReview(new Set());
    setShowResult(false);
    setIsFlipped(false);
  };

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
          <div className="card-front absolute inset-0 bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center border-2 border-primary-100">
            <span className={`px-3 py-1 rounded-full text-sm font-medium mb-4 ${getLevelColor(currentWord?.level || '')}`}>
              {currentWord?.level}
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{currentWord?.word}</h2>
            <p className="text-gray-500 text-lg">{currentWord?.phonetic}</p>
            <p className="mt-6 text-gray-400 text-sm">点击卡片查看释义</p>
          </div>

          <div className="card-back absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center text-white">
            <span className={`px-3 py-1 rounded-full text-sm font-medium mb-4 bg-white/20`}>
              {currentWord?.category}
            </span>
            <h3 className="text-2xl font-semibold mb-6">{currentWord?.meaning}</h3>
            <div className="bg-white/10 rounded-xl p-4 w-full">
              <p className="text-sm opacity-80 mb-1">例句:</p>
              <p className="text-base">{currentWord?.example}</p>
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
