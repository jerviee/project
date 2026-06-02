import { useCallback, useState } from 'react';

export function useSpeech() {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speak = useCallback((text: string, rate: number = 0.8) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = rate;
      utterance.pitch = 1.25;
      utterance.volume = 1;

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

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      window.speechSynthesis.speak(utterance);
    }
  }, []);

  const stop = useCallback(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, []);

  return { speak, stop, isSpeaking };
}
