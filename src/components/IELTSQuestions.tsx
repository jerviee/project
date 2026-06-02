import { useState, useEffect } from 'react';
import { BookOpen, Tag, FileText, ChevronDown, ChevronUp, Copy, Check, Search, Filter, Volume2, VolumeX } from 'lucide-react';
import { getIELTSQuestions, IELTSQuestion } from '../services/database';

export default function IELTSQuestions() {
  const [questions, setQuestions] = useState<IELTSQuestion[]>([]);
  const [filteredQuestions, setFilteredQuestions] = useState<IELTSQuestion[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('全部');
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [speakingId, setSpeakingId] = useState<number | null>(null);

  useEffect(() => {
    const loadQuestions = async () => {
      const data = await getIELTSQuestions();
      setQuestions(data);
      setFilteredQuestions(data);
    };
    loadQuestions();
  }, []);

  useEffect(() => {
    let result = questions;
    if (selectedType !== '全部') {
      result = result.filter(q => q.type === selectedType);
    }
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(q => 
        q.topic.toLowerCase().includes(term) ||
        q.question.toLowerCase().includes(term)
      );
    }
    setFilteredQuestions(result);
  }, [questions, selectedType, searchTerm]);

  const handleCopy = async (text: string, id: number) => {
    await navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const speakQuestion = (text: string, id: number) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      
      if (speakingId === id) {
        setSpeakingId(null);
        return;
      }

      setSpeakingId(id);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 1.4;
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
      
      utterance.onend = () => setSpeakingId(null);
      utterance.onerror = () => setSpeakingId(null);
      
      window.speechSynthesis.speak(utterance);
    }
  };

  const speakAnswer = (text: string, id: number) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      
      if (speakingId === -id) {
        setSpeakingId(null);
        return;
      }

      setSpeakingId(-id);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 1.4;
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
      
      utterance.onend = () => setSpeakingId(null);
      utterance.onerror = () => setSpeakingId(null);
      
      window.speechSynthesis.speak(utterance);
    }
  };

  const types = ['全部', 'agree/disagree', 'discuss both views', 'advantages/disadvantages', 'problem/solution'];

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-primary-100 rounded-xl">
          <BookOpen className="w-6 h-6 text-primary-600" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">雅思写作真题</h2>
          <p className="text-sm text-gray-500">精选历年真题及高分范文</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="搜索真题话题或内容..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="pl-10 pr-8 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent cursor-pointer"
          >
            {types.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {filteredQuestions.length === 0 ? (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">暂无匹配的真题</p>
          </div>
        ) : (
          filteredQuestions.map((question) => (
            <div 
              key={question.id} 
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all hover:shadow-md"
            >
              <div 
                className="p-5 cursor-pointer"
                onClick={() => setExpandedId(expandedId === question.id ? null : question.id)}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">
                        {question.year}年{question.month}
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                        {question.type}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-gray-500">
                        <Tag size={14} />
                        {question.topic}
                      </span>
                    </div>
                    <p className="text-gray-800 font-medium leading-relaxed">
                      {question.question}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        speakQuestion(question.question, question.id);
                      }}
                      className={`p-2 rounded-lg transition-colors ${
                        speakingId === question.id
                          ? 'bg-red-100 text-red-600'
                          : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                      }`}
                      title="朗读题目"
                    >
                      {speakingId === question.id ? (
                        <VolumeX className="w-5 h-5" />
                      ) : (
                        <Volume2 className="w-5 h-5" />
                      )}
                    </button>
                    {expandedId === question.id ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </div>
              </div>

              {expandedId === question.id && (
                <div className="px-5 pb-5 border-t border-gray-100">
                  <div className="pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                        <FileText size={18} className="text-primary-500" />
                        高分范文 ({question.bandScore})
                      </h4>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            speakAnswer(question.modelAnswer, question.id);
                          }}
                          className={`flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg transition-colors ${
                            speakingId === -question.id
                              ? 'bg-red-500 text-white'
                              : 'bg-purple-100 text-purple-600 hover:bg-purple-200'
                          }`}
                        >
                          {speakingId === -question.id ? (
                            <>
                              <VolumeX size={14} />
                              <span>停止</span>
                            </>
                          ) : (
                            <>
                              <Volume2 size={14} />
                              <span>朗读范文</span>
                            </>
                          )}
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCopy(question.modelAnswer, question.id);
                          }}
                          className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                        >
                          {copiedId === question.id ? (
                            <>
                              <Check size={14} />
                              <span>已复制</span>
                            </>
                          ) : (
                            <>
                              <Copy size={14} />
                              <span>复制</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4 whitespace-pre-wrap text-gray-700 leading-relaxed">
                      {question.modelAnswer}
                    </div>
                  </div>

                  {question.modelAnswerCN && (
                    <div className="pt-4">
                      <h4 className="font-semibold text-gray-800 mb-3">中文翻译</h4>
                      <div className="bg-blue-50 rounded-xl p-4 whitespace-pre-wrap text-gray-700 leading-relaxed">
                        {question.modelAnswerCN}
                      </div>
                    </div>
                  )}

                  <div className="pt-4">
                    <h4 className="font-semibold text-gray-800 mb-3">关键词</h4>
                    <div className="flex flex-wrap gap-2">
                      {question.keywords.map((keyword, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1.5 bg-green-50 text-green-700 text-sm rounded-lg"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
