import { useState } from 'react';
import { Copy, Check, FileText } from 'lucide-react';
import { essayTemplates, templateTypes } from '@/data/writing';

export default function EssayTemplates() {
  const [selectedType, setSelectedType] = useState(templateTypes[0]);
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const currentTemplate = essayTemplates.find(t => t.type === selectedType);

  const handleCopy = async (text: string, section: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedSection(section);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const getSectionLabel = (section: string) => {
    switch (section) {
      case 'introduction': return '引言';
      case 'body1': return '主体第一段';
      case 'body2': return '主体第二段';
      case 'conclusion': return '结论';
      default: return section;
    }
  };

  const sections = [
    { key: 'introduction', label: '引言' },
    { key: 'body1', label: '主体第一段' },
    { key: 'body2', label: '主体第二段' },
    { key: 'conclusion', label: '结论' },
  ] as const;

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex flex-wrap gap-2 mb-6">
        {templateTypes.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
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
            <div className="flex items-center gap-3">
              <FileText className="text-white" size={24} />
              <div>
                <h2 className="text-xl font-bold text-white">{currentTemplate.title}</h2>
                <p className="text-primary-100 text-sm">{currentTemplate.type}</p>
              </div>
            </div>
          </div>

          <div className="p-6 space-y-4">
            {sections.map(({ key, label }) => (
              <div
                key={key}
                className="bg-gray-50 rounded-xl p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-700">{label}</span>
                  <button
                    onClick={() => handleCopy(currentTemplate.structure[key], key)}
                    className="flex items-center gap-1 px-3 py-1.5 text-sm bg-white rounded-lg text-gray-600 hover:bg-primary-50 hover:text-primary-500 transition-colors"
                  >
                    {copiedSection === key ? (
                      <>
                        <Check size={16} className="text-green-500" />
                        <span className="text-green-500">已复制</span>
                      </>
                    ) : (
                      <>
                        <Copy size={16} />
                        复制
                      </>
                    )}
                  </button>
                </div>
                <p className="text-gray-800 bg-white rounded-lg p-3 border border-gray-200">
                  {currentTemplate.structure[key]}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
