import { BookOpen, PenTool, LayoutGrid, FileText, Search, ScrollText, Trophy, Mic, Headphones } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Navigation({ activeTab, onTabChange }: NavigationProps) {
  const tabs = [
    { id: 'flashcards', label: '单词卡片', icon: BookOpen },
    { id: 'wordlist', label: '单词列表', icon: LayoutGrid },
    { id: 'roots', label: '词根分析', icon: Search },
    { id: 'patterns', label: '句型库', icon: PenTool },
    { id: 'synonyms', label: '同义词', icon: FileText },
    { id: 'templates', label: '作文模板', icon: FileText },
    { id: 'listening', label: '听力真题', icon: Headphones },
    { id: 'reading', label: '阅读真题', icon: ScrollText },
    { id: 'speaking', label: '口语真题', icon: Mic },
    { id: 'questions', label: '真题示范', icon: FileText },
    { id: 'exam', label: '全真模考', icon: Trophy },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      {/* Desktop Navigation */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="hidden md:flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 via-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/20">
              <BookOpen className="text-white" size={22} />
            </div>
            <div>
              <h1 className="text-lg font-bold bg-gradient-to-r from-primary-600 to-indigo-600 bg-clip-text text-transparent">
                雅思学习工具
              </h1>
              <p className="text-xs text-gray-500">专业级备考助手</p>
            </div>
          </div>

          <div className="flex items-center gap-1 flex-wrap">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all text-sm ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-primary-500 to-indigo-500 text-white shadow-lg shadow-primary-500/30'
                      : 'text-gray-600 hover:bg-gray-100 hover:shadow-sm'
                  }`}
                >
                  <Icon size={16} />
                  <span className="hidden md:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div className="flex items-center justify-between h-14 px-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 via-indigo-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg shadow-primary-500/20">
              <BookOpen className="text-white" size={16} />
            </div>
            <div>
              <h1 className="text-sm font-bold bg-gradient-to-r from-primary-600 to-indigo-600 bg-clip-text text-transparent">
                雅思学习
              </h1>
            </div>
          </div>
          <div className="text-xs text-gray-500">
            v3.1.0
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 pb-safe">
        <div className="grid grid-cols-5 gap-1 px-2 py-2">
          {tabs.slice(0, 10).map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  onTabChange(tab.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`flex flex-col items-center justify-center py-2 px-1 rounded-lg transition-all ${
                  isActive
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                <Icon size={20} className={isActive ? 'stroke-2' : ''} />
                <span className="text-xs mt-1 font-medium truncate max-w-full px-1">
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
