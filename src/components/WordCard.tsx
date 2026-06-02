import { useState } from 'react';
import { Volume2, RotateCcw, BookOpen, Globe, Lightbulb } from 'lucide-react';
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
    utterance.rate = 1.25;
    utterance.pitch = 1.25;
    
    // 选择年轻女性美式英语发音
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
    ) || voices.find(voice => voice.lang.startsWith('en-US') && voice.gender === 'female');
    if (femaleVoice) {
      utterance.voice = femaleVoice;
    }
    
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

  const getOriginColor = (origin: string) => {
    switch (origin) {
      case 'Latin': return 'bg-blue-500';
      case 'Greek': return 'bg-purple-500';
      case 'Old French': return 'bg-orange-500';
      case 'Anglo-Saxon': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getOriginLabel = (origin: string) => {
    switch (origin) {
      case 'Latin': return '拉丁语';
      case 'Greek': return '希腊语';
      case 'Old French': return '古法语';
      case 'Anglo-Saxon': return '盎格鲁-撒克逊语';
      default: return origin;
    }
  };

  return (
    <div className="card-flip w-full max-w-lg mx-auto">
      <div 
        className={`card-inner relative w-full h-[500px] cursor-pointer ${isFlipped ? 'flipped' : ''}`}
        onClick={handleFlip}
        style={{
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s ease-in-out'
        }}
      >
        <div 
          className="card-front absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl p-8 flex flex-col items-center justify-center border border-gray-100"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getLevelColor(word.level)}`}>
              {word.level}
            </span>
            <span className={`px-4 py-2 rounded-full text-sm font-semibold bg-gray-100 text-gray-600`}>
              {word.category}
            </span>
          </div>
          
          <h2 className="text-5xl font-bold bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent mb-4">
            {word.word}
          </h2>
          
          <p className="text-xl text-gray-500 mb-6">{word.phonetic}</p>
          
          <button
            onClick={(e) => { e.stopPropagation(); handleSpeak(); }}
            className="mt-2 p-4 rounded-full bg-primary-50 text-primary-600 hover:bg-primary-100 transition-all duration-200 hover:scale-110 shadow-md"
          >
            <Volume2 size={28} />
          </button>
          
          <p className="mt-6 text-gray-400 text-sm">点击卡片查看释义和词根分析</p>
        </div>
        
        <div 
          className="card-back absolute inset-0 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 rounded-3xl shadow-xl p-6 flex flex-col overflow-y-auto"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1.5 rounded-full text-sm font-semibold bg-white/20 text-white">
              {word.category}
            </span>
            <span className={`px-3 py-1.5 rounded-full text-sm font-semibold text-white ${getOriginColor(word.root.rootOrigin)}`}>
              {getOriginLabel(word.root.rootOrigin)}
            </span>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-2">{word.word}</h3>
          <p className="text-primary-100 text-lg mb-4">{word.phonetic}</p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-4">
            <p className="text-xl font-semibold text-white mb-1">释义</p>
            <p className="text-primary-100">{word.meaning}</p>
            
            <div className="mt-3 pt-3 border-t border-white/10">
              <div className="flex flex-wrap gap-2">
                {word.root.prefix && (
                  <div className="flex items-center gap-1.5 bg-blue-500/30 px-3 py-1.5 rounded-lg">
                    <span className="text-blue-200 text-xs">前缀</span>
                    <span className="text-white font-medium">{word.root.prefix}</span>
                    <span className="text-blue-200 text-xs">= {word.root.prefixMeaning}</span>
                  </div>
                )}
                
                <div className="flex items-center gap-1.5 bg-green-500/30 px-3 py-1.5 rounded-lg">
                  <span className="text-green-200 text-xs">词根</span>
                  <span className="text-white font-medium">{word.root.root}</span>
                  <span className="text-green-200 text-xs">= {word.root.rootMeaning}</span>
                </div>
                
                {word.root.suffix && (
                  <div className="flex items-center gap-1.5 bg-purple-500/30 px-3 py-1.5 rounded-lg">
                    <span className="text-purple-200 text-xs">后缀</span>
                    <span className="text-white font-medium">{word.root.suffix}</span>
                    <span className="text-purple-200 text-xs">= {word.root.suffixMeaning}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-4">
            <p className="text-sm text-primary-200 mb-2">例句</p>
            <p className="text-white/90 italic">{word.example.split('\n')[0]}</p>
            <p className="text-sm text-gray-300 mt-2">{word.example.split('\n')[1] || ''}</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-4">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen size={18} className="text-primary-200" />
              <span className="font-semibold text-white">词根分析</span>
            </div>
            
            {word.root.prefix && (
              <div className="mb-3 pb-3 border-b border-white/10">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-primary-200 text-sm">前缀:</span>
                  <span className="text-white font-medium">{word.root.prefix}</span>
                </div>
                <p className="text-sm text-primary-100 ml-6">{word.root.prefixMeaning}</p>
                <p className="text-xs text-primary-200 ml-6 flex items-center gap-1">
                  <Globe size={12} />
                  {word.root.prefixMeaningEn}
                </p>
              </div>
            )}
            
            <div className="mb-3 pb-3 border-b border-white/10">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-primary-200 text-sm">词根:</span>
                <span className="text-white font-medium">{word.root.root}</span>
              </div>
              <p className="text-sm text-primary-100 ml-6">{word.root.rootMeaning}</p>
              <p className="text-xs text-primary-200 ml-6 flex items-center gap-1">
                <Globe size={12} />
                {word.root.rootMeaningEn}
              </p>
            </div>
            
            <div className="mb-3">
              <p className="text-sm text-primary-200 mb-1">词源</p>
              <p className="text-sm text-white/80 ml-6">{word.root.rootOriginNote}</p>
            </div>
            
            {word.root.suffix && (
              <div className="pt-3 border-t border-white/10">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-primary-200 text-sm">后缀:</span>
                  <span className="text-white font-medium">{word.root.suffix}</span>
                </div>
                <p className="text-sm text-primary-100 ml-6">{word.root.suffixMeaning}</p>
                {word.root.suffixMeaningEn && (
                  <p className="text-xs text-primary-200 ml-6 flex items-center gap-1">
                    <Globe size={12} />
                    {word.root.suffixMeaningEn}
                  </p>
                )}
              </div>
            )}
          </div>
          
          <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb size={18} className="text-amber-300" />
              <span className="font-semibold text-white">写作应用</span>
            </div>
            <p className="text-sm text-white/90">{word.writingUsage}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {word.topic?.map((topic, index) => (
                <span key={index} className="px-2 py-1 rounded-full text-xs bg-white/20 text-white">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {showAnswer && (
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-lg border border-gray-100"
          >
            <RotateCcw size={20} />
            再看一次
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); handleSpeak(); }}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            <Volume2 size={20} />
            发音
          </button>
        </div>
      )}
    </div>
  );
}
