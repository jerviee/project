import { useState } from 'react';
import Navigation from '@/components/Navigation';
import FlashCards from '@/components/FlashCards';
import WordList from '@/components/WordList';
import SentencePatterns from '@/components/SentencePatterns';
import Synonyms from '@/components/Synonyms';
import EssayTemplates from '@/components/EssayTemplates';

function App() {
  const [activeTab, setActiveTab] = useState('flashcards');

  const renderContent = () => {
    switch (activeTab) {
      case 'flashcards':
        return <FlashCards />;
      case 'wordlist':
        return <WordList />;
      case 'patterns':
        return <SentencePatterns />;
      case 'synonyms':
        return <Synonyms />;
      case 'templates':
        return <EssayTemplates />;
      default:
        return <FlashCards />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="max-w-6xl mx-auto px-4 py-8">
        {renderContent()}
      </main>
      <footer className="bg-white border-t border-gray-100 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-gray-400 text-sm">
          <p>雅思学习工具 - 助你高效备考</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
