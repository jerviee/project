import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { sentencePatterns, patternTypes } from '@/data/writing';

export default function SentencePatterns() {
  const [selectedType, setSelectedType] = useState('全部');
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const filteredPatterns = sentencePatterns.filter(pattern => {
    if (selectedType === '全部') return true;
    return pattern.type === selectedType;
  });

  const handleCopy = async (text: string, id: number) => {
    await navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'argument': return 'bg-blue-100 text-blue-700';
      case 'cause': return 'bg-orange-100 text-orange-700';
      case 'effect': return 'bg-red-100 text-red-700';
      case 'comparison': return 'bg-purple-100 text-purple-700';
      case 'example': return 'bg-green-100 text-green-700';
      case 'conclusion': return 'bg-indigo-100 text-indigo-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'argument': return '论点';
      case 'cause': return '原因';
      case 'effect': return '结果';
      case 'comparison': return '比较';
      case 'example': return '举例';
      case 'conclusion': return '结论';
      default: return type;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex flex-wrap gap-2 mb-6">
        {patternTypes.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedType === type
                ? 'bg-primary-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {type === '全部' ? '全部' : getTypeLabel(type)}
          </button>
        ))}
      </div>

      <div className="grid gap-4">
        {filteredPatterns.map((pattern) => (
          <div
            key={pattern.id}
            className="bg-white rounded-xl p-5 shadow-sm border border-gray-100"
          >
            <div className="flex items-start justify-between mb-3">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(pattern.type)}`}>
                {getTypeLabel(pattern.type)}
              </span>
              <button
                onClick={() => handleCopy(pattern.pattern, pattern.id)}
                className="p-2 text-gray-400 hover:text-primary-500 hover:bg-primary-50 rounded-lg transition-colors"
                title="复制句型"
              >
                {copiedId === pattern.id ? (
                  <Check size={18} className="text-green-500" />
                ) : (
                  <Copy size={18} />
                )}
              </button>
            </div>
            
            <div className="mb-3">
              <p className="text-lg font-semibold text-gray-800 bg-gray-50 rounded-lg p-3">
                {pattern.pattern}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">说明:</p>
                <p className="text-gray-700">{pattern.explanation}</p>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-1">例句:</p>
                <p className="text-gray-700 italic">"{pattern.example}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
