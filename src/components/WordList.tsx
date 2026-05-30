import { useState, useMemo } from 'react';
import { Volume2, Search, RotateCcw, ChevronDown, ChevronUp } from 'lucide-react';
import { mockWords, IELTSWord } from '@/data/mockWords';

const wordLevels = ['全部', 'IELTS5', 'IELTS6', 'IELTS7', 'IELTS8'];

export default function WordList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('全部');
  const [expandedLetters, setExpandedLetters] = useState<Set<string>>(new Set());
  const [expandedSecondLetters, setExpandedSecondLetters] = useState<Set<string>>(new Set());
  const [expandedThirdLetters, setExpandedThirdLetters] = useState<Set<string>>(new Set());
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());

  // 按字母分组单词 - 支持三级分组（首字母 + 第二个字母 + 第三个字母）
  const groupedWords = useMemo(() => {
    const groups: Record<string, Record<string, Record<string, IELTSWord[]>>> = {};
    
    let filtered = mockWords;
    if (selectedLevel !== '全部') {
      filtered = filtered.filter(w => w.level === selectedLevel);
    }
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(w => 
        w.word.toLowerCase().includes(term) ||
        w.meaning.includes(term)
      );
    }
    
    filtered.forEach(word => {
      const firstLetter = word.word.charAt(0).toUpperCase();
      const secondLetter = word.word.length > 1 ? word.word.charAt(1).toUpperCase() : '';
      const thirdLetter = word.word.length > 2 ? word.word.charAt(2).toUpperCase() : '';
      
      const secondKey = secondLetter ? `${firstLetter}${secondLetter}` : firstLetter;
      const thirdKey = thirdLetter ? `${secondKey}${thirdLetter}` : secondKey;
      
      if (!groups[firstLetter]) {
        groups[firstLetter] = {};
      }
      if (!groups[firstLetter][secondKey]) {
        groups[firstLetter][secondKey] = {};
      }
      if (!groups[firstLetter][secondKey][thirdKey]) {
        groups[firstLetter][secondKey][thirdKey] = [];
      }
      groups[firstLetter][secondKey][thirdKey].push(word);
    });
    
    return groups;
  }, [selectedLevel, searchTerm]);

  // 获取所有字母（按顺序，确保包含WXYZ）
  const sortedLetters = useMemo(() => {
    const allLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    return allLetters.filter(letter => 
      groupedWords[letter] && Object.keys(groupedWords[letter]).length > 0
    );
  }, [groupedWords]);

  const toggleLetter = (letter: string) => {
    setExpandedLetters(prev => {
      const newSet = new Set(prev);
      if (newSet.has(letter)) {
        newSet.delete(letter);
      } else {
        newSet.add(letter);
      }
      return newSet;
    });
  };

  const toggleSecondLetter = (key: string) => {
    setExpandedSecondLetters(prev => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  };

  const toggleThirdLetter = (key: string) => {
    setExpandedThirdLetters(prev => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  };

  const toggleExpandAll = () => {
    if (expandedLetters.size === sortedLetters.length) {
      setExpandedLetters(new Set());
      setExpandedSecondLetters(new Set());
      setExpandedThirdLetters(new Set());
    } else {
      setExpandedLetters(new Set(sortedLetters));
      // 展开所有二级和三级分组
      const allSecondKeys = new Set<string>();
      const allThirdKeys = new Set<string>();
      sortedLetters.forEach(letter => {
        Object.keys(groupedWords[letter] || {}).forEach(secondKey => {
          allSecondKeys.add(secondKey);
          Object.keys(groupedWords[letter][secondKey] || {}).forEach(thirdKey => {
            allThirdKeys.add(thirdKey);
          });
        });
      });
      setExpandedSecondLetters(allSecondKeys);
      setExpandedThirdLetters(allThirdKeys);
    }
  };

  const handleSpeak = (word: string) => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
  };

  const toggleFlip = (id: string) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
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

  const getFrequencyColor = (frequency: string) => {
    switch (frequency) {
      case '高频': return 'bg-red-500 text-white';
      case '中频': return 'bg-yellow-500 text-white';
      default: return 'bg-gray-400 text-white';
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* 搜索和筛选栏 */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="搜索单词..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
        
        <div className="flex gap-2 items-center">
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white appearance-none cursor-pointer"
          >
            {wordLevels.map((level) => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
          
          <button
            onClick={toggleExpandAll}
            className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white hover:bg-gray-50 cursor-pointer whitespace-nowrap"
          >
            {expandedLetters.size === sortedLetters.length ? '全部收起' : '全部展开'}
          </button>
        </div>
      </div>

      {/* 统计信息 */}
      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500">
        <span>共 {mockWords.length} 个单词</span>
        {selectedLevel !== '全部' && (
          <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded">
            筛选: {selectedLevel}
          </span>
        )}
        {searchTerm && (
          <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded">
            搜索: "{searchTerm}"
          </span>
        )}
      </div>

      {/* 按字母分组的单词列表 - 三级分组 */}
      <div className="space-y-3">
        {sortedLetters.map(letter => (
          <div key={letter} className="border border-gray-200 rounded-xl overflow-hidden">
            {/* 一级：首字母头部 - 可点击展开 */}
            <button
              onClick={() => toggleLetter(letter)}
              className="w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 flex items-center justify-between transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-primary-600">{letter}</span>
                <span className="text-sm text-gray-500">
                  {Object.values(groupedWords[letter] || {}).reduce((acc, val) => acc + Object.values(val).flat().length, 0)} 个单词
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400">
                  {Object.keys(groupedWords[letter] || {}).length} 个二级分组
                </span>
                {expandedLetters.has(letter) ? (
                  <ChevronUp className="text-gray-400" size={20} />
                ) : (
                  <ChevronDown className="text-gray-400" size={20} />
                )}
              </div>
            </button>

            {/* 展开后的二级分组 */}
            {expandedLetters.has(letter) && (
              <div className="bg-white p-4 space-y-3">
                {Object.keys(groupedWords[letter] || {})
                  .sort()
                  .map(secondKey => {
                    const secondGroups = groupedWords[letter][secondKey];
                    const isSecondExpanded = expandedSecondLetters.has(secondKey);
                    const totalWords = Object.values(secondGroups || {}).flat().length;
                    
                    return (
                      <div key={secondKey} className="border border-gray-100 rounded-lg overflow-hidden">
                        {/* 二级：第二个字母头部 */}
                        <button
                          onClick={() => toggleSecondLetter(secondKey)}
                          className="w-full px-4 py-2 bg-blue-50 hover:bg-blue-100 flex items-center justify-between transition-colors text-sm"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-xl font-bold text-blue-600">{secondKey}</span>
                            <span className="text-gray-500">
                              {totalWords} 个单词
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-400">
                              {Object.keys(secondGroups || {}).length} 个三级分组
                            </span>
                            {isSecondExpanded ? (
                              <ChevronUp className="text-gray-400" size={16} />
                            ) : (
                              <ChevronDown className="text-gray-400" size={16} />
                            )}
                          </div>
                        </button>

                        {/* 展开后的三级分组 */}
                        {isSecondExpanded && (
                          <div className="bg-blue-50 p-3 space-y-2">
                            {Object.keys(secondGroups || {})
                              .sort()
                              .map(thirdKey => {
                                const words = secondGroups[thirdKey];
                                const isThirdExpanded = expandedThirdLetters.has(thirdKey);
                                
                                return (
                                  <div key={thirdKey} className="border border-blue-100 rounded-lg overflow-hidden">
                                    {/* 三级：第三个字母头部 */}
                                    <button
                                      onClick={() => toggleThirdLetter(thirdKey)}
                                      className="w-full px-4 py-2 bg-green-50 hover:bg-green-100 flex items-center justify-between transition-colors text-sm"
                                    >
                                      <div className="flex items-center gap-2">
                                        <span className="text-lg font-bold text-green-600">{thirdKey}</span>
                                        <span className="text-gray-500">
                                          {words.length} 个单词
                                        </span>
                                      </div>
                                      <div className="flex items-center gap-2">
                                        <span className="text-xs text-gray-400">
                                          {isThirdExpanded ? '收起' : '展开'}
                                        </span>
                                        {isThirdExpanded ? (
                                          <ChevronUp className="text-gray-400" size={14} />
                                        ) : (
                                          <ChevronDown className="text-gray-400" size={14} />
                                        )}
                                      </div>
                                    </button>

                                    {/* 单词卡片网格 */}
                                    {isThirdExpanded && (
                                      <div className="p-4 bg-white">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                          {words.map((word: IELTSWord) => {
                                            const isFlipped = flippedCards.has(word.id);
                                            return (
                                              <div
                                                key={word.id}
                                                className="perspective-1000 h-64"
                                              >
                                                <div 
                                                  className={`relative w-full h-full cursor-pointer transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}
                                                  style={{
                                                    transformStyle: 'preserve-3d',
                                                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                                                  }}
                                                  onClick={() => toggleFlip(word.id)}
                                                >
                                                  {/* 卡片正面 */}
                                                  <div 
                                                    className="absolute inset-0 bg-white rounded-xl p-4 shadow-md border border-gray-100 flex flex-col backface-hidden"
                                                    style={{ backfaceVisibility: 'hidden' }}
                                                  >
                                                    <div className="flex items-start justify-between mb-2">
                                                      <h3 className="text-lg font-bold text-gray-800">{word.word}</h3>
                                                      <div className="flex items-center gap-1">
                                                        <button
                                                          onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleSpeak(word.word);
                                                          }}
                                                          className="p-1.5 text-gray-400 hover:text-primary-500 hover:bg-primary-50 rounded transition-colors"
                                                        >
                                                          <Volume2 size={14} />
                                                        </button>
                                                        <button className="p-1.5 text-gray-400 hover:text-primary-500 hover:bg-primary-50 rounded transition-colors">
                                                          <RotateCcw size={14} />
                                                        </button>
                                                      </div>
                                                    </div>
                                                    <p className="text-xs text-gray-400 mb-2">{word.phonetic}</p>
                                                    <div className="flex items-center gap-2 mb-2">
                                                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getLevelColor(word.level)}`}>
                                                        {word.level}
                                                      </span>
                                                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getFrequencyColor(word.frequency)}`}>
                                                        {word.frequency}
                                                      </span>
                                                    </div>
                                                    <p className="text-sm text-gray-700 flex-1">{word.meaning}</p>
                                                    <p className="text-xs text-gray-400 mt-2 truncate">{word.root} - {word.rootMeaning}</p>
                                                  </div>

                                                  {/* 卡片背面 */}
                                                  <div 
                                                    className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl p-4 shadow-lg flex flex-col text-white overflow-y-auto"
                                                    style={{ 
                                                      backfaceVisibility: 'hidden',
                                                      transform: 'rotateY(180deg)'
                                                    }}
                                                  >
                                                    <div className="flex items-center gap-2 mb-3">
                                                      <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-white/20">
                                                        {word.level}
                                                      </span>
                                                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${word.frequency === '高频' ? 'bg-red-500' : word.frequency === '中频' ? 'bg-yellow-500' : 'bg-gray-500'}`}>
                                                        {word.frequency}
                                                      </span>
                                                      <span className="text-lg font-bold">{word.word}</span>
                                                    </div>
                                                    
                                                    <div className="bg-white/10 rounded-lg p-3 mb-3">
                                                      <p className="text-xs text-blue-200 mb-1">词根</p>
                                                      <p className="text-base font-semibold">{word.root}</p>
                                                      <p className="text-sm text-green-200">{word.rootMeaning} ({word.rootMeaningEn})</p>
                                                    </div>
                                                    
                                                    <div className="bg-white/10 rounded-lg p-3 mb-3">
                                                      <p className="text-xs text-blue-200 mb-1">词源</p>
                                                      <p className="text-sm">{word.rootOrigin}</p>
                                                      <p className="text-xs opacity-80 mt-1">{word.rootOriginNote}</p>
                                                    </div>
                                                    
                                                    <div className="bg-white/10 rounded-lg p-3 mb-3">
                                                      <p className="text-xs text-blue-200 mb-1">词根</p>
                                                      <p className="text-sm">{word.root} - {word.rootMeaning} ({word.rootMeaningEn})</p>
                                                    </div>
                                                    
                                                    {word.relatedWords && word.relatedWords.length > 0 && (
                                                      <div className="bg-white/10 rounded-lg p-3 flex-1">
                                                        <p className="text-xs text-blue-200 mb-2">相关词汇</p>
                                                        <div className="space-y-1">
                                                          {word.relatedWords.slice(0, 3).map((related: any, idx: number) => (
                                                            <div key={idx} className="flex items-center justify-between text-sm">
                                                              <span>{related.word}</span>
                                                              <span className="text-xs opacity-70">{related.meaning}</span>
                                                            </div>
                                                          ))}
                                                        </div>
                                                      </div>
                                                    )}
                                                  </div>
                                                </div>
                                              </div>
                                            );
                                          })}
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
        ))}
      </div>

      {sortedLetters.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <p>没有找到匹配的单词</p>
        </div>
      )}
    </div>
  );
}
