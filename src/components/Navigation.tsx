import { BookOpen, PenTool, LayoutGrid, FileText } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Navigation({ activeTab, onTabChange }: NavigationProps) {
  const tabs = [
    { id: 'flashcards', label: '单词卡片', icon: BookOpen },
    { id: 'wordlist', label: '单词列表', icon: LayoutGrid },
    { id: 'patterns', label: '句型库', icon: PenTool },
    { id: 'synonyms', label: '同义词', icon: FileText },
    { id: 'templates', label: '作文模板', icon: FileText },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
              <BookOpen className="text-white" size={22} />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-800">雅思学习工具</h1>
              <p className="text-xs text-gray-500">背单词 · 写作辅助</p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-primary-500 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon size={18} />
                  <span className="hidden md:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
