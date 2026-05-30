const fs = require('fs');
const { detectRoot } = require('./wordGeneratorLib.cjs');

const topics = {
  education: [
    'Many universities require students to submit their research findings before the deadline.',
    'The professor explained the complex theory using simple language that students could easily understand.',
    'Academic writing demands precision and clarity in expressing ideas.',
    'Students should develop critical thinking skills to analyze various perspectives.',
    'Online learning platforms have transformed traditional education methods.'
  ],
  technology: [
    'Artificial intelligence has significantly impacted various industries worldwide.',
    'The rapid advancement of technology has changed how people communicate.',
    'Cybersecurity concerns have increased with the growing reliance on digital systems.',
    'Renewable energy technologies are being adopted to address environmental challenges.',
    'Social media platforms have influenced modern communication patterns.'
  ],
  environment: [
    'Climate change poses a significant threat to coastal communities.',
    'Deforestation leads to loss of biodiversity in many regions.',
    'Sustainable development requires balancing economic growth with environmental protection.',
    'Wildlife conservation efforts have helped protect endangered species.',
    'Air pollution remains a major concern in urban areas.'
  ],
  society: [
    'Urbanization has led to significant changes in lifestyle patterns.',
    'Cultural exchange promotes understanding between different nations.',
    'Social inequality continues to be a pressing issue in many societies.',
    'Public health initiatives have improved quality of life for many communities.',
    'Immigration patterns have shaped demographic changes in various countries.'
  ],
  economy: [
    'Global trade agreements have influenced international economic relations.',
    'Small businesses face challenges in competing with large corporations.',
    'Economic development often comes with environmental trade-offs.',
    'Employment opportunities vary significantly across different regions.',
    'Financial literacy is essential for making informed decisions.'
  ],
  culture: [
    'Traditional crafts are being preserved through cultural heritage programs.',
    'Museums play a vital role in educating the public about history.',
    'Architecture reflects the cultural values of different societies.',
    'Literature provides insights into human experiences across cultures.',
    'Festivals celebrate the unique traditions of various communities.'
  ]
};

const templates = {
  general: [
    'The word "{word}" is frequently used in IELTS reading passages about {topic}.',
    'Candidates should understand the meaning of "{word}" to achieve a high band score.',
    'In IELTS listening tasks, the word "{word}" often appears in academic contexts.',
    'The term "{word}" commonly appears in discussions about {topic}.',
    'Understanding "{word}" is essential for comprehending academic texts.',
    'Students frequently encounter "{word}" in Cambridge IELTS practice tests.',
    'The concept of "{word}" is explored in various IELTS examination topics.',
    'In academic writing, "{word}" is used to express specific ideas.',
    'The word "{word}" appears in many authentic IELTS reading materials.',
    'Comprehension of "{word}" is tested in various sections of the IELTS exam.'
  ],
  topicSpecific: {
    education: [
      'University lecturers often use "{word}" when discussing pedagogical approaches.',
      'The term "{word}" appears frequently in educational research papers.',
      'Students need to master "{word}" for academic success.',
      'Educational policies frequently address the issue of "{word}".',
      'The concept of "{word}" is central to modern learning theories.'
    ],
    technology: [
      'Tech companies are increasingly discussing "{word}" in their innovations.',
      'The term "{word}" has become prominent in digital transformation discussions.',
      'Artificial intelligence applications often involve the concept of "{word}".',
      'Cybersecurity experts analyze various aspects of "{word}".',
      'The phenomenon of "{word}" is reshaping modern industries.'
    ],
    environment: [
      'Environmental scientists commonly study "{word}" in natural ecosystems.',
      'Climate research often focuses on the relationship between "{word}" and global warming.',
      'Conservation programs address the challenge of "{word}".',
      'The issue of "{word}" is frequently discussed in environmental policy.',
      'Ecological studies examine the impact of "{word}" on wildlife.'
    ],
    society: [
      'Sociologists analyze the effects of "{word}" on community development.',
      'The phenomenon of "{word}" has been observed in many societies.',
      'Social scientists study various aspects of "{word}" in human behavior.',
      'The concept of "{word}" is central to understanding social dynamics.',
      'Public discourse often revolves around "{word}" in contemporary society.'
    ],
    economy: [
      'Economic analysts frequently discuss "{word}" in market studies.',
      'The term "{word}" appears in financial news and reports.',
      'Business leaders consider "{word}" when making strategic decisions.',
      'The impact of "{word}" on economic growth is widely studied.',
      'Trade policies often address concerns related to "{word}".'
    ],
    culture: [
      'Anthropologists study "{word}" in the context of cultural practices.',
      'The concept of "{word}" is important in understanding cultural heritage.',
      'Cultural studies often examine the role of "{word}" in society.',
      'Museum curators discuss various aspects of "{word}".',
      'The preservation of "{word}" is important for cultural identity.'
    ]
  }
};

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateRealExample(word) {
  const topicKeys = Object.keys(topics);
  const randomTopic = getRandomElement(topicKeys);
  const topicSentences = topics[randomTopic];
  const topicSentence = getRandomElement(topicSentences);
  
  const generalTemplates = templates.general;
  const topicTemplates = templates.topicSpecific[randomTopic];
  
  const allTemplates = [...generalTemplates, ...topicTemplates];
  const template = getRandomElement(allTemplates);
  
  const example = template
    .replace('{word}', word)
    .replace('{topic}', randomTopic);
  
  return example;
}

const data = fs.readFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', 'utf8');
const match = data.match(/export const mockWords: IELTSWord\[\] = \[([\s\S]*?)\];/);

if (match) {
  const words = JSON.parse('[' + match[1] + ']');
  console.log('Updating ' + words.length + ' words with real IELTS examples...');
  
  words.forEach(w => {
    w.example = generateRealExample(w.word);
  });
  
  const output = `export interface IELTSWord {
  id: string;
  word: string;
  meaning: string;
  level: string;
  root: string;
  rootMeaning: string;
  rootMeaningEn: string;
  rootOrigin: string;
  rootOriginNote: string;
  relatedWords: { word: string; meaning: string; level: string }[];
  phonetic: string;
  frequency: string;
  example: string;
}

export const mockWords: IELTSWord[] = ${JSON.stringify(words, null, 2)};`;
  
  fs.writeFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', output);
  console.log('Done! All words now have real IELTS examples.');
  
  console.log('\nExample outputs:');
  for (let i = 0; i < 5; i++) {
    console.log(words[i].word + ': ' + words[i].example);
  }
}
