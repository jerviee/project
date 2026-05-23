import { useState } from 'react';
import { Search, ArrowRight, Copy, Check } from 'lucide-react';
import { synonymGroups } from '@/data/writing';

export default function Synonyms() {
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedWord, setCopiedWord] = useState<string | null>(null);

  const filteredGroups = synonymGroups.filter(group =>
    group.word.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCopy = async (word: string) => {
    await navigator.clipboard.writeText(word);
    setCopiedWord(word);
    setTimeout(() => setCopiedWord(null), 2000);
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
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="搜索常用词查找同义词..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>

      <div className="grid gap-4">
        {filteredGroups.map((group) => (
          <div
            key={group.id}
            className="bg-white rounded-xl p-5 shadow-sm border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-2xl font-bold text-gray-800">
                {group.word}
              </span>
              <ArrowRight size={24} className="text-gray-300" />
              <span className="text-gray-500">替换词：</span>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {group.synonyms.map((synonym, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-2 bg-gray-50 rounded-lg px-4 py-2 hover:bg-primary-50 transition-colors"
                >
                  <span className="font-medium text-gray-800">{synonym.word}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs ${getLevelColor(synonym.level)}`}>
                    {synonym.level}
                  </span>
                  <button
                    onClick={() => handleCopy(synonym.word)}
                    className="opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-primary-500 transition-all"
                    title="复制"
                  >
                    {copiedWord === synonym.word ? (
                      <Check size={16} className="text-green-500" />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {filteredGroups.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <p>没有找到匹配的同义词</p>
          <p className="text-sm mt-2">尝试搜索其他常用词，如: important, show, think</p>
        </div>
      )}
    </div>
  );
}
