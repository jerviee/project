import { useState } from 'react';
import { Copy, Check, FileText, BookOpen, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, User, Quote, Volume2, VolumeX } from 'lucide-react';
import { essayTemplates, templateTypes } from '@/data/writing';

export default function EssayTemplates() {
  const [selectedType, setSelectedType] = useState(templateTypes[0]);
  const [copiedSection, setCopiedSection] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['introduction', 'body1', 'body2', 'conclusion']));
  const [speakingSection, setSpeakingSection] = useState<string | null>(null);
  const [speakingFull, setSpeakingFull] = useState(false);

  const filteredTemplates = essayTemplates.filter(t => t.type === selectedType);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTemplate = filteredTemplates[currentIndex];

  const handleCopy = async (text: string, section: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedSection(section);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const toggleSection = (section: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(section)) {
        newSet.delete(section);
      } else {
        newSet.add(section);
      }
      return newSet;
    });
  };

  const speakText = (text: string, section: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      
      if (speakingSection === section) {
        setSpeakingSection(null);
        return;
      }

      setSpeakingSection(section);
      const utterance = new SpeechSynthesisUtterance(text);
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
      ) || voices.find(voice => voice.lang.startsWith('en-US'));
      if (femaleVoice) {
        utterance.voice = femaleVoice;
      }
      
      utterance.onend = () => setSpeakingSection(null);
      utterance.onerror = () => setSpeakingSection(null);
      
      window.speechSynthesis.speak(utterance);
    }
  };

  const speakFullParagraphs = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      
      if (speakingFull) {
        setSpeakingFull(false);
        return;
      }

      setSpeakingFull(true);
      const fullText = `${currentTemplate.fullParagraphs?.introduction || currentTemplate.structure.introduction} ${currentTemplate.fullParagraphs?.body1 || currentTemplate.structure.body1} ${currentTemplate.fullParagraphs?.body2 || currentTemplate.structure.body2} ${currentTemplate.fullParagraphs?.conclusion || currentTemplate.structure.conclusion}`;
      
      const utterance = new SpeechSynthesisUtterance(fullText);
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
      ) || voices.find(voice => voice.lang.startsWith('en-US'));
      if (femaleVoice) {
        utterance.voice = femaleVoice;
      }
      
      utterance.onend = () => setSpeakingFull(false);
      utterance.onerror = () => setSpeakingFull(false);
      
      window.speechSynthesis.speak(utterance);
    }
  };

  const sections = [
    { key: 'introduction', label: '引言' },
    { key: 'body1', label: '主体第一段' },
    { key: 'body2', label: '主体第二段' },
    { key: 'conclusion', label: '结论' },
  ] as const;

  const handlePrev = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setSpeakingSection(null);
    setSpeakingFull(false);
    setCurrentIndex(prev => prev > 0 ? prev - 1 : filteredTemplates.length - 1);
    setExpandedSections(new Set(['introduction', 'body1', 'body2', 'conclusion']));
  };

  const handleNext = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setSpeakingSection(null);
    setSpeakingFull(false);
    setCurrentIndex(prev => prev < filteredTemplates.length - 1 ? prev + 1 : 0);
    setExpandedSections(new Set(['introduction', 'body1', 'body2', 'conclusion']));
  };

  const handleTypeChange = (type: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setSpeakingSection(null);
    setSpeakingFull(false);
    setSelectedType(type);
    setCurrentIndex(0);
    setExpandedSections(new Set(['introduction', 'body1', 'body2', 'conclusion']));
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex flex-wrap gap-2 mb-6">
        {templateTypes.map((type) => (
          <button
            key={type}
            onClick={() => handleTypeChange(type)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedType === type
                ? 'bg-primary-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {currentTemplate && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="text-white" size={24} />
                <div>
                  <h2 className="text-xl font-bold text-white">{currentTemplate.title}</h2>
                  <p className="text-primary-100 text-sm">{currentTemplate.topic}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary-100 text-sm">
                  {currentIndex + 1} / {filteredTemplates.length}
                </span>
                <button
                  onClick={handlePrev}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  title="上一个"
                >
                  <ChevronLeft className="text-white" size={20} />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  title="下一个"
                >
                  <ChevronRight className="text-white" size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <div className="bg-yellow-50 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="text-yellow-600" size={18} />
                <span className="font-medium text-yellow-800">模板结构</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {sections.map(({ key, label }) => (
                  <div key={key} className="bg-white rounded-lg p-2 text-center">
                    <p className="text-sm font-medium text-gray-700">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={speakFullParagraphs}
              className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl transition-colors ${
                speakingFull
                  ? 'bg-red-100 text-red-600'
                  : 'bg-purple-100 text-purple-600 hover:bg-purple-200'
              }`}
            >
              {speakingFull ? (
                <>
                  <VolumeX size={20} />
                  <span className="font-medium">停止朗读全文</span>
                </>
              ) : (
                <>
                  <Volume2 size={20} />
                  <span className="font-medium">朗读完整范文</span>
                </>
              )}
            </button>

            {sections.map(({ key, label }) => (
              <div
                key={key}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(key)}
                  className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <span className="font-medium text-gray-700">{label}</span>
                  {expandedSections.has(key) ? (
                    <ChevronUp size={20} className="text-gray-400" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-400" />
                  )}
                </button>
                
                {expandedSections.has(key) && (
                  <div className="p-4">
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm text-gray-500">填空模板:</p>
                      </div>
                      <p className="text-gray-700 mb-3">{currentTemplate.structure[key]}</p>
                      <div className="bg-blue-50 rounded-lg p-3">
                        <p className="text-sm text-blue-600 mb-1">中文翻译:</p>
                        <p className="text-gray-700">{currentTemplate.structureCN?.[key] || ''}</p>
                      </div>
                    </div>
                    
                    <div className="bg-primary-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm text-primary-600 font-medium">完整段落示例:</p>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => speakText(currentTemplate.fullParagraphs?.[key] || currentTemplate.structure[key], key)}
                            className={`flex items-center gap-1 px-3 py-1.5 text-sm rounded-lg transition-colors ${
                              speakingSection === key
                                ? 'bg-red-500 text-white'
                                : 'bg-purple-100 text-purple-600 hover:bg-purple-200'
                            }`}
                          >
                            {speakingSection === key ? (
                              <>
                                <VolumeX size={16} />
                                <span>停止</span>
                              </>
                            ) : (
                              <>
                                <Volume2 size={16} />
                                <span>朗读</span>
                              </>
                            )}
                          </button>
                          <button
                            onClick={() => handleCopy(currentTemplate.fullParagraphs?.[key] || currentTemplate.structure[key], key)}
                            className="flex items-center gap-1 px-3 py-1.5 text-sm bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                          >
                            {copiedSection === key ? (
                              <>
                                <Check size={16} />
                                <span>已复制</span>
                              </>
                            ) : (
                              <>
                                <Copy size={16} />
                                <span>复制</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{currentTemplate.fullParagraphs?.[key] || currentTemplate.structure[key]}</p>
                      <div className="mt-3 bg-green-50 rounded-lg p-3">
                        <p className="text-sm text-green-600 mb-1">中文翻译:</p>
                        <p className="text-gray-700">{currentTemplate.fullParagraphsCN?.[key] || ''}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {currentTemplate.speaker && (
            <div className="bg-blue-50 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <User className="text-blue-600" size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium text-blue-800">{currentTemplate.speaker}</span>
                    {currentTemplate.speakerTitle && (
                      <span className="px-2 py-0.5 bg-blue-100 rounded text-xs text-blue-700">
                        {currentTemplate.speakerTitle}
                      </span>
                    )}
                  </div>
                  {currentTemplate.style && (
                    <div className="flex items-center gap-2 mb-2">
                      <Quote className="text-blue-400" size={14} />
                      <span className="text-sm text-blue-600">
                        <span className="font-medium">风格类型:</span> {currentTemplate.style}
                      </span>
                    </div>
                  )}
                  {currentTemplate.styleNote && (
                    <p className="text-sm text-blue-700 leading-relaxed">
                      {currentTemplate.styleNote}
                    </p>
                  )}
                </div>
              </div>
            </div>
            )}

            <div className="bg-green-50 rounded-xl p-4">
              <p className="text-sm font-medium text-green-800 mb-2">推荐词汇:</p>
              <div className="flex flex-wrap gap-2">
                {currentTemplate.vocabulary.map((word, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white rounded-full text-sm text-green-700 border border-green-200"
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
