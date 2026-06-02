import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import FlashCards from '@/components/FlashCards';
import WordList from '@/components/WordList';
import RootAnalysis from '@/components/RootAnalysis';
import SentencePatterns from '@/components/SentencePatterns';
import Synonyms from '@/components/Synonyms';
import EssayTemplates from '@/components/EssayTemplates';
import ReadingPassages from '@/components/ReadingPassages';
import IELTSQuestions from '@/components/IELTSQuestions';
import MockExam from '@/components/MockExam';
import { loadMockData } from '@/services/database';

function App() {
  const [activeTab, setActiveTab] = useState('flashcards');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initApp = async () => {
      try {
        // 添加超时机制
        const timeoutPromise = new Promise((_, reject) => {
          setTimeout(() => reject(new Error('初始化超时')), 30000);
        });

        await Promise.race([loadMockData(), timeoutPromise]);
        setLoading(false);
      } catch (err) {
        console.error('App initialization error:', err);
        setError('加载失败，请刷新页面重试');
        setLoading(false);
      }
    };
    initApp();
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'flashcards':
        return <FlashCards />;
      case 'wordlist':
        return <WordList />;
      case 'roots':
        return <RootAnalysis />;
      case 'patterns':
        return <SentencePatterns />;
      case 'synonyms':
        return <Synonyms />;
      case 'templates':
        return <EssayTemplates />;
      case 'reading':
        return <ReadingPassages />;
      case 'questions':
        return <IELTSQuestions />;
      case 'exam':
        return <MockExam />;
      default:
        return <FlashCards />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg mb-2">加载中...</p>
          <p className="text-gray-400 text-sm">正在初始化词汇数据库，请稍候...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-4">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">加载失败</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-gradient-to-r from-primary-500 to-indigo-500 text-white rounded-xl font-semibold hover:from-primary-600 hover:to-indigo-600 transition-all"
          >
            刷新重试
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      <main>
        {renderContent()}
      </main>
      <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-100 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-gray-400 text-sm">
          <p>雅思学习工具 v2.1 - 专业级备考助手 | 全真模考 | 覆盖8000+词汇</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
