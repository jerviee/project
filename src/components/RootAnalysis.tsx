import { useState } from 'react';
import { BookOpen, ArrowRight, Search, Lightbulb, Globe } from 'lucide-react';
import { rootGroups, prefixGroups, suffixGroups } from '@/data/mockWriting';
import { ieltsWords } from '@/data/words';

export default function RootAnalysis() {
  const [activeTab, setActiveTab] = useState<'roots' | 'prefixes' | 'suffixes'>('roots');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRoots = rootGroups.filter(group =>
    group.root.toLowerCase().includes(searchTerm.toLowerCase()) ||
    group.meaning.includes(searchTerm) ||
    group.meaningEn.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPrefixes = prefixGroups.filter(group =>
    group.prefix.toLowerCase().includes(searchTerm.toLowerCase()) ||
    group.meaning.includes(searchTerm) ||
    group.meaningEn.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredSuffixes = suffixGroups.filter(group =>
    group.suffix.toLowerCase().includes(searchTerm.toLowerCase()) ||
    group.meaning.includes(searchTerm) ||
    group.meaningEn.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

  const getSuffixTypeColor = (type: string) => {
    switch (type) {
      case 'noun': return 'bg-indigo-100 text-indigo-700';
      case 'verb': return 'bg-emerald-100 text-emerald-700';
      case 'adjective': return 'bg-amber-100 text-amber-700';
      case 'adverb': return 'bg-rose-100 text-rose-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getSuffixTypeLabel = (type: string) => {
    switch (type) {
      case 'noun': return '名词后缀';
      case 'verb': return '动词后缀';
      case 'adjective': return '形容词后缀';
      case 'adverb': return '副词后缀';
      default: return type;
    }
  };

  const getWordById = (id: number) => {
    return ieltsWords.find(word => word.id === id);
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="flex items-center gap-2 mb-6 flex-wrap">
        <button
          onClick={() => setActiveTab('roots')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all duration-200 ${
            activeTab === 'roots'
              ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/30'
              : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
          }`}
        >
          <BookOpen size={18} />
          词根
        </button>
        <button
          onClick={() => setActiveTab('prefixes')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all duration-200 ${
            activeTab === 'prefixes'
              ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/30'
              : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
          }`}
        >
          <ArrowRight size={18} />
          前缀
        </button>
        <button
          onClick={() => setActiveTab('suffixes')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all duration-200 ${
            activeTab === 'suffixes'
              ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/30'
              : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
          }`}
        >
          <Lightbulb size={18} />
          后缀
        </button>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder={`搜索${activeTab === 'roots' ? '词根' : activeTab === 'prefixes' ? '前缀' : '后缀'}或含义...`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow-sm transition-shadow hover:shadow"
        />
      </div>

      {activeTab === 'roots' ? (
        <div className="grid gap-5">
          {filteredRoots.map((group) => (
            <div
              key={group.root}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex flex-wrap items-start gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
                    {group.root}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getOriginColor(group.origin)}`}>
                    {getOriginLabel(group.origin)}
                  </span>
                </div>
                
                <div className="flex-1 min-w-[200px]">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-gray-500 text-sm">含义:</span>
                    <span className="font-medium text-gray-800">{group.meaning}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Globe size={14} className="text-gray-400" />
                    <span className="text-gray-400">{group.meaningEn}</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-4 mb-4">
                <p className="text-sm text-gray-600 mb-1"><strong>词源说明:</strong> {group.originNote}</p>
                <p className="text-xs text-gray-400">Etymology: {group.originNoteEn}</p>
              </div>
              
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb size={16} className="text-amber-500" />
                <span className="text-sm font-medium text-gray-600">相关单词:</span>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {group.words.map((wordId) => {
                  const word = getWordById(wordId);
                  if (!word) return null;
                  return (
                    <div
                      key={wordId}
                      className="bg-gray-50 rounded-xl px-4 py-3 hover:bg-gray-100 transition-colors cursor-pointer group"
                    >
                      <p className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors">
                        {word.word}
                        <span className="text-xs text-gray-400 ml-2">{word.phonetic}</span>
                      </p>
                      <p className="text-sm text-gray-500">{word.meaning}</p>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-3 pt-3 border-t border-gray-100">
                <p className="text-xs text-gray-400">示例: {group.example}</p>
              </div>
            </div>
          ))}
          
          {filteredRoots.length === 0 && (
            <div className="text-center py-16 bg-gray-50 rounded-2xl">
              <Search className="mx-auto text-gray-300 mb-4" size={48} />
              <p className="text-gray-400">没有找到匹配的词根</p>
            </div>
          )}
        </div>
      ) : activeTab === 'prefixes' ? (
        <div className="grid gap-5">
          {filteredPrefixes.map((group) => (
            <div
              key={group.prefix}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex flex-wrap items-start gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                    {group.prefix}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getOriginColor(group.origin)}`}>
                    {getOriginLabel(group.origin)}
                  </span>
                </div>
                
                <div className="flex-1 min-w-[200px]">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-gray-500 text-sm">含义:</span>
                    <span className="font-medium text-gray-800">{group.meaning}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Globe size={14} className="text-gray-400" />
                    <span className="text-gray-400">{group.meaningEn}</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 mb-4">
                <p className="text-sm text-gray-600 mb-1"><strong>词源说明:</strong> {group.originNote}</p>
                <p className="text-xs text-gray-400">Etymology: {group.originNoteEn}</p>
              </div>
              
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb size={16} className="text-amber-500" />
                <span className="text-sm font-medium text-gray-600">相关单词:</span>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {group.words.map((wordId) => {
                  const word = getWordById(wordId);
                  if (!word) return null;
                  return (
                    <div
                      key={wordId}
                      className="bg-gray-50 rounded-xl px-4 py-3 hover:bg-gray-100 transition-colors cursor-pointer group"
                    >
                      <p className="font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">
                        {word.word}
                        <span className="text-xs text-gray-400 ml-2">{word.phonetic}</span>
                      </p>
                      <p className="text-sm text-gray-500">{word.meaning}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
          
          {filteredPrefixes.length === 0 && (
            <div className="text-center py-16 bg-gray-50 rounded-2xl">
              <Search className="mx-auto text-gray-300 mb-4" size={48} />
              <p className="text-gray-400">没有找到匹配的前缀</p>
            </div>
          )}
        </div>
      ) : (
        <div className="grid gap-5">
          {filteredSuffixes.map((group) => (
            <div
              key={group.suffix}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex flex-wrap items-start gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                    {group.suffix}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getSuffixTypeColor(group.type)}`}>
                    {getSuffixTypeLabel(group.type)}
                  </span>
                </div>
                
                <div className="flex-1 min-w-[200px]">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-gray-500 text-sm">含义:</span>
                    <span className="font-medium text-gray-800">{group.meaning}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Globe size={14} className="text-gray-400" />
                    <span className="text-gray-400">{group.meaningEn}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb size={16} className="text-amber-500" />
                <span className="text-sm font-medium text-gray-600">相关单词:</span>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {group.words.map((wordId) => {
                  const word = getWordById(wordId);
                  if (!word) return null;
                  return (
                    <div
                      key={wordId}
                      className="bg-gray-50 rounded-xl px-4 py-3 hover:bg-gray-100 transition-colors cursor-pointer group"
                    >
                      <p className="font-semibold text-gray-800 group-hover:text-emerald-600 transition-colors">
                        {word.word}
                        <span className="text-xs text-gray-400 ml-2">{word.phonetic}</span>
                      </p>
                      <p className="text-sm text-gray-500">{word.meaning}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
          
          {filteredSuffixes.length === 0 && (
            <div className="text-center py-16 bg-gray-50 rounded-2xl">
              <Search className="mx-auto text-gray-300 mb-4" size={48} />
              <p className="text-gray-400">没有找到匹配的后缀</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
