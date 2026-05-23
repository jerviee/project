import { useState } from 'react';
import { Volume2, RotateCcw } from 'lucide-react';
import { Word } from '@/data/words';

interface WordCardProps {
  word: Word;
  onFlip?: () => void;
}

export default function WordCard({ word, onFlip }: WordCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    setShowAnswer(true);
    onFlip?.();
  };

  const handleReset = () => {
    setIsFlipped(false);
    setShowAnswer(false);
  };

  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(word.word);
    utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
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

  return (
    <div className="card-flip w-full max-w-md mx-auto">
      <div 
        className={`card-inner relative w-full h-80 cursor-pointer ${isFlipped ? 'flipped' : ''}`}
        onClick={handleFlip}
      >
        <div className="card-front absolute inset-0 bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center border-2 border-primary-100">
          <span className={`px-3 py-1 rounded-full text-sm font-medium mb-4 ${getLevelColor(word.level)}`}>
            {word.level}
          </span>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{word.word}</h2>
          <p className="text-gray-500 text-lg">{word.phonetic}</p>
          <button
            onClick={(e) => { e.stopPropagation(); handleSpeak(); }}
            className="mt-6 p-3 rounded-full bg-primary-50 text-primary-600 hover:bg-primary-100 transition-colors"
          >
            <Volume2 size={24} />
          </button>
          <p className="mt-4 text-gray-400 text-sm">点击卡片查看释义</p>
        </div>
        
        <div className="card-back absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center text-white">
          <span className={`px-3 py-1 rounded-full text-sm font-medium mb-4 bg-white/20`}>
            {word.category}
          </span>
          <h3 className="text-2xl font-semibold mb-6">{word.meaning}</h3>
          <div className="bg-white/10 rounded-xl p-4 w-full">
            <p className="text-sm opacity-80 mb-1">例句:</p>
            <p className="text-base">{word.example}</p>
          </div>
        </div>
      </div>
      
      {showAnswer && (
        <div className="mt-4 flex justify-center gap-4 fade-in">
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <RotateCcw size={18} />
            再看一次
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); handleSpeak(); }}
            className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
          >
            <Volume2 size={18} />
            发音
          </button>
        </div>
      )}
    </div>
  );
}
