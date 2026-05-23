import { useState } from 'react';
import { Volume2, Search, Filter } from 'lucide-react';
import { ieltsWords, wordCategories, wordLevels, Word } from '@/data/words';

export default function WordList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [selectedLevel, setSelectedLevel] = useState('全部');

  const filteredWords = ieltsWords.filter((word: Word) => {
    const matchesSearch = word.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         word.meaning.includes(searchTerm);
    const matchesCategory = selectedCategory === '全部' || word.category === selectedCategory;
    const matchesLevel = selectedLevel === '全部' || word.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const handleSpeak = (word: string) => {
    const utterance = new SpeechSynthesisUtterance(word);
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
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="搜索单词或释义..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
        
        <div className="flex gap-2">
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="pl-9 pr-8 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white appearance-none cursor-pointer"
            >
              {wordCategories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white appearance-none cursor-pointer"
          >
            {wordLevels.map((level) => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="grid gap-4">
        {filteredWords.map((word) => (
          <div
            key={word.id}
            className="word-card bg-white rounded-xl p-4 shadow-sm border border-gray-100"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">{word.word}</h3>
                  <button
                    onClick={() => handleSpeak(word.word)}
                    className="p-2 text-gray-400 hover:text-primary-500 hover:bg-primary-50 rounded-lg transition-colors"
                  >
                    <Volume2 size={18} />
                  </button>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getLevelColor(word.level)}`}>
                    {word.level}
                  </span>
                </div>
                <p className="text-gray-500 mb-2">{word.phonetic}</p>
                <p className="text-gray-700 mb-2">{word.meaning}</p>
                <p className="text-sm text-gray-400 italic">"{word.example}"</p>
              </div>
              <span className="text-sm text-gray-400">{word.category}</span>
            </div>
          </div>
        ))}
      </div>
      
      {filteredWords.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <p>没有找到匹配的单词</p>
        </div>
      )}
    </div>
  );
}
