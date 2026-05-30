import initSqlJs, { Database } from 'sql.js';

let db: Database | null = null;

export interface Word {
  id: number;
  word: string;
  phonetic: string;
  meaning: string;
  example: string;
  level: 'IELTS5' | 'IELTS6' | 'IELTS7' | 'IELTS8';
  category: string;
  root: {
    prefix?: string;
    prefixMeaning?: string;
    prefixMeaningEn?: string;
    root: string;
    rootMeaning: string;
    rootMeaningEn: string;
    rootOrigin: 'Latin' | 'Greek' | 'Old French' | 'Anglo-Saxon';
    rootOriginNote: string;
    suffix?: string;
    suffixMeaning?: string;
    suffixMeaningEn?: string;
  };
  writingUsage: string;
  topic: string[];
}

export interface RootGroup {
  root: string;
  meaning: string;
  meaningEn: string;
  origin: 'Latin' | 'Greek' | 'Old French' | 'Anglo-Saxon';
  originNote: string;
  originNoteEn: string;
  example: string;
  words: number[];
}

export interface PrefixGroup {
  prefix: string;
  meaning: string;
  meaningEn: string;
  origin: 'Latin' | 'Greek' | 'Old French' | 'Anglo-Saxon';
  originNote: string;
  originNoteEn: string;
  words: number[];
}

export interface SuffixGroup {
  suffix: string;
  meaning: string;
  meaningEn: string;
  type: 'noun' | 'verb' | 'adjective' | 'adverb';
  words: number[];
}

export interface SentencePattern {
  id: number;
  pattern: string;
  explanation: string;
  example: string;
  type: 'argument' | 'cause' | 'effect' | 'comparison' | 'example' | 'conclusion';
}

export interface SynonymGroup {
  id: number;
  word: string;
  synonyms: { word: string; level: string }[];
}

export interface EssayTemplate {
  id: number;
  title: string;
  type: 'agree/disagree' | 'discuss both views' | 'advantages/disadvantages' | 'problem/solution';
  topic: string;
  structure: {
    introduction: string;
    body1: string;
    body2: string;
    conclusion: string;
  };
  fullParagraphs: {
    introduction: string;
    body1: string;
    body2: string;
    conclusion: string;
  };
  vocabulary: string[];
}

export interface IELTSQuestion {
  id: number;
  year: number;
  month: string;
  type: string;
  topic: string;
  question: string;
  modelAnswer: string;
  bandScore: string;
  keywords: string[];
}

export async function initDatabase(): Promise<Database> {
  if (db) return db;
  
  console.log('Initializing SQL.js...');
  
  try {
    // 使用fetch加载WASM文件以获得更好的兼容性
    const wasmUrl = '/sql-wasm.wasm';
    const response = await fetch(wasmUrl);
    const wasmBinary = await response.arrayBuffer();
    
    const SQL = await initSqlJs({
      wasmBinary
    });
    
    db = new SQL.Database();
  } catch (error) {
    console.error('Failed to initialize SQL.js:', error);
    throw error;
  }
  
  db.run(`
    CREATE TABLE IF NOT EXISTS words (
      id TEXT PRIMARY KEY,
      word TEXT UNIQUE NOT NULL,
      phonetic TEXT,
      meaning TEXT NOT NULL,
      example TEXT,
      level TEXT NOT NULL,
      category TEXT,
      prefix TEXT,
      prefix_meaning TEXT,
      prefix_meaning_en TEXT,
      root TEXT NOT NULL,
      root_meaning TEXT NOT NULL,
      root_meaning_en TEXT NOT NULL,
      root_origin TEXT NOT NULL,
      root_origin_note TEXT,
      suffix TEXT,
      suffix_meaning TEXT,
      suffix_meaning_en TEXT,
      writing_usage TEXT,
      topics TEXT
    );
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS root_groups (
      id INTEGER PRIMARY KEY,
      root TEXT UNIQUE NOT NULL,
      meaning TEXT NOT NULL,
      meaning_en TEXT NOT NULL,
      origin TEXT NOT NULL,
      origin_note TEXT,
      origin_note_en TEXT,
      example TEXT,
      word_ids TEXT
    );
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS prefix_groups (
      id INTEGER PRIMARY KEY,
      prefix TEXT UNIQUE NOT NULL,
      meaning TEXT NOT NULL,
      meaning_en TEXT NOT NULL,
      origin TEXT NOT NULL,
      origin_note TEXT,
      origin_note_en TEXT,
      word_ids TEXT
    );
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS suffix_groups (
      id INTEGER PRIMARY KEY,
      suffix TEXT UNIQUE NOT NULL,
      meaning TEXT NOT NULL,
      meaning_en TEXT NOT NULL,
      type TEXT NOT NULL,
      word_ids TEXT
    );
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS sentence_patterns (
      id INTEGER PRIMARY KEY,
      pattern TEXT NOT NULL,
      explanation TEXT NOT NULL,
      example TEXT NOT NULL,
      type TEXT NOT NULL
    );
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS synonym_groups (
      id INTEGER PRIMARY KEY,
      word TEXT UNIQUE NOT NULL,
      synonyms TEXT NOT NULL
    );
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS essay_templates (
      id INTEGER PRIMARY KEY,
      title TEXT NOT NULL,
      type TEXT NOT NULL,
      topic TEXT NOT NULL,
      structure TEXT NOT NULL,
      full_paragraphs TEXT NOT NULL,
      vocabulary TEXT NOT NULL
    );
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS ielts_questions (
      id INTEGER PRIMARY KEY,
      year INTEGER NOT NULL,
      month TEXT NOT NULL,
      type TEXT NOT NULL,
      topic TEXT NOT NULL,
      question TEXT NOT NULL,
      model_answer TEXT,
      band_score TEXT,
      keywords TEXT
    );
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS user_progress (
      user_id TEXT PRIMARY KEY,
      mastered_words TEXT DEFAULT '[]',
      review_words TEXT DEFAULT '[]',
      study_days INTEGER DEFAULT 0,
      total_words_studied INTEGER DEFAULT 0
    );
  `);

  return db;
}

export async function loadMockData(): Promise<void> {
  console.log('Starting database initialization...');
  const database = await initDatabase();
  console.log('Database initialized successfully');
  
  let wordCount = 0;
  try {
    const result = database.exec('SELECT COUNT(*) FROM words');
    if (result.length > 0 && result[0].values.length > 0) {
      wordCount = result[0].values[0][0] as number;
    }
  } catch (error) {
    console.error('Error checking word count:', error);
  }
  
  if (wordCount > 0) {
    console.log(`Database already contains ${wordCount} words, skipping data loading`);
    return;
  }

  console.log('Loading mock data into database...');
  
  try {
    console.log('Importing data files...');
    const words = await import('../data/mockWords');
    console.log('mockWords imported');
    const writing = await import('../data/mockWriting');
    console.log('mockWriting imported');
    const questions = await import('../data/mockQuestions');
    console.log('mockQuestions imported');
    
    console.log('Data files loaded successfully');
    console.log(`Words count: ${(words.mockWords as unknown as Word[]).length}`);
    console.log(`Root groups count: ${(writing.rootGroups as RootGroup[]).length}`);
    console.log(`Questions count: ${(questions.default as IELTSQuestion[]).length}`);

    console.log('Inserting words...');
    const wordsArray = words.mockWords as unknown as any[];
    wordsArray.forEach((word, index) => {
      database.run(`
        INSERT OR IGNORE INTO words (
          id, word, phonetic, meaning, example, level, category,
          prefix, prefix_meaning, prefix_meaning_en, root, root_meaning,
          root_meaning_en, root_origin, root_origin_note, suffix,
          suffix_meaning, suffix_meaning_en, writing_usage, topics
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `, [
        word.id,
        word.word,
        word.phonetic || null,
        word.meaning,
        null, // example
        word.level,
        null, // category
        null, // prefix
        null, // prefix_meaning
        null, // prefix_meaning_en
        word.root || null,
        word.rootMeaning || null,
        word.rootMeaningEn || null,
        word.rootOrigin || null,
        word.rootOriginNote || null,
        null, // suffix
        null, // suffix_meaning
        null, // suffix_meaning_en
        null, // writing_usage
        word.relatedWords ? JSON.stringify(word.relatedWords) : null
      ]);
      if ((index + 1) % 1000 === 0) {
        console.log(`Inserted ${index + 1} words...`);
      }
    });
    console.log('Words insertion completed');

    console.log('Inserting root groups...');
    (writing.rootGroups as RootGroup[]).forEach(group => {
      database.run(`
        INSERT OR IGNORE INTO root_groups (root, meaning, meaning_en, origin, origin_note, origin_note_en, example, word_ids)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `, [group.root, group.meaning, group.meaningEn, group.origin, group.originNote, group.originNoteEn, group.example, JSON.stringify(group.words)]);
    });

    console.log('Inserting prefix groups...');
    (writing.prefixGroups as PrefixGroup[]).forEach(group => {
      database.run(`
        INSERT OR IGNORE INTO prefix_groups (prefix, meaning, meaning_en, origin, origin_note, origin_note_en, word_ids)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `, [group.prefix, group.meaning, group.meaningEn, group.origin, group.originNote, group.originNoteEn, JSON.stringify(group.words)]);
    });

    console.log('Inserting suffix groups...');
    (writing.suffixGroups as SuffixGroup[]).forEach(group => {
      database.run(`
        INSERT OR IGNORE INTO suffix_groups (suffix, meaning, meaning_en, type, word_ids)
        VALUES (?, ?, ?, ?, ?)
      `, [group.suffix, group.meaning, group.meaningEn, group.type, JSON.stringify(group.words)]);
    });

    console.log('Inserting sentence patterns...');
    (writing.sentencePatterns as SentencePattern[]).forEach(pattern => {
      database.run(`
        INSERT OR IGNORE INTO sentence_patterns (id, pattern, explanation, example, type)
        VALUES (?, ?, ?, ?, ?)
      `, [pattern.id, pattern.pattern, pattern.explanation, pattern.example, pattern.type]);
    });

    console.log('Inserting synonym groups...');
    (writing.synonymGroups as SynonymGroup[]).forEach(group => {
      database.run(`
        INSERT OR IGNORE INTO synonym_groups (id, word, synonyms)
        VALUES (?, ?, ?)
      `, [group.id, group.word, JSON.stringify(group.synonyms)]);
    });

    console.log('Inserting essay templates...');
    (writing.essayTemplates as EssayTemplate[]).forEach(template => {
      database.run(`
        INSERT OR IGNORE INTO essay_templates (id, title, type, topic, structure, full_paragraphs, vocabulary)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `, [template.id, template.title, template.type, template.topic, JSON.stringify(template.structure), JSON.stringify(template.fullParagraphs), JSON.stringify(template.vocabulary)]);
    });

    console.log('Inserting IELTS questions...');
    (questions.default as IELTSQuestion[]).forEach(question => {
      database.run(`
        INSERT OR IGNORE INTO ielts_questions (year, month, type, topic, question, model_answer, band_score, keywords)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `, [question.year, question.month, question.type, question.topic, question.question, question.modelAnswer, question.bandScore, JSON.stringify(question.keywords)]);
    });
  
    console.log('Mock data loading completed successfully');
  } catch (error) {
    console.error('Error loading mock data:', error);
    throw new Error('数据加载失败，请刷新页面重试');
  }
}

export async function getWords(filter?: { level?: string; category?: string; search?: string }): Promise<Word[]> {
  const database = await initDatabase();
  let query = 'SELECT * FROM words WHERE 1=1';
  const params: string[] = [];

  if (filter?.level && filter.level !== '全部') {
    query += ' AND level = ?';
    params.push(filter.level);
  }

  if (filter?.category && filter.category !== '全部') {
    query += ' AND category = ?';
    params.push(filter.category);
  }

  if (filter?.search) {
    query += ' AND (word LIKE ? OR meaning LIKE ?)';
    params.push(`%${filter.search}%`, `%${filter.search}%`);
  }

  const result = database.exec(query, params);
  if (!result.length) return [];

  return result[0].values.map(row => {
    const [id, word, phonetic, meaning, example, level, category, prefix, prefixMeaning, prefixMeaningEn, root, rootMeaning, rootMeaningEn, rootOrigin, rootOriginNote, suffix, suffixMeaning, suffixMeaningEn, writingUsage, topics] = row;
    return {
      id: id as number,
      word: word as string,
      phonetic: phonetic as string,
      meaning: meaning as string,
      example: example as string,
      level: level as 'IELTS5' | 'IELTS6' | 'IELTS7' | 'IELTS8',
      category: category as string,
      root: {
        prefix: prefix as string || undefined,
        prefixMeaning: prefixMeaning as string || undefined,
        prefixMeaningEn: prefixMeaningEn as string || undefined,
        root: root as string,
        rootMeaning: rootMeaning as string,
        rootMeaningEn: rootMeaningEn as string,
        rootOrigin: rootOrigin as 'Latin' | 'Greek' | 'Old French' | 'Anglo-Saxon',
        rootOriginNote: rootOriginNote as string,
        suffix: suffix as string || undefined,
        suffixMeaning: suffixMeaning as string || undefined,
        suffixMeaningEn: suffixMeaningEn as string || undefined,
      },
      writingUsage: writingUsage as string,
      topic: JSON.parse(topics as string),
    };
  });
}

export async function getWordById(id: number): Promise<Word | null> {
  const database = await initDatabase();
  const result = database.exec('SELECT * FROM words WHERE id = ?', [id]);
  if (!result.length) return null;

  const row = result[0].values[0];
  const [wordId, word, phonetic, meaning, example, level, category, prefix, prefixMeaning, prefixMeaningEn, root, rootMeaning, rootMeaningEn, rootOrigin, rootOriginNote, suffix, suffixMeaning, suffixMeaningEn, writingUsage, topics] = row;
  
  return {
    id: wordId as number,
    word: word as string,
    phonetic: phonetic as string,
    meaning: meaning as string,
    example: example as string,
    level: level as 'IELTS5' | 'IELTS6' | 'IELTS7' | 'IELTS8',
    category: category as string,
    root: {
      prefix: prefix as string || undefined,
      prefixMeaning: prefixMeaning as string || undefined,
      prefixMeaningEn: prefixMeaningEn as string || undefined,
      root: root as string,
      rootMeaning: rootMeaning as string,
      rootMeaningEn: rootMeaningEn as string,
      rootOrigin: rootOrigin as 'Latin' | 'Greek' | 'Old French' | 'Anglo-Saxon',
      rootOriginNote: rootOriginNote as string,
      suffix: suffix as string || undefined,
      suffixMeaning: suffixMeaning as string || undefined,
      suffixMeaningEn: suffixMeaningEn as string || undefined,
    },
    writingUsage: writingUsage as string,
    topic: JSON.parse(topics as string),
  };
}

export async function getRootGroups(): Promise<RootGroup[]> {
  const database = await initDatabase();
  const result = database.exec('SELECT * FROM root_groups');
  if (!result.length) return [];

  return result[0].values.map(row => {
    const [_id, root, meaning, meaningEn, origin, originNote, originNoteEn, example, wordIds] = row;
    return {
      root: root as string,
      meaning: meaning as string,
      meaningEn: meaningEn as string,
      origin: origin as 'Latin' | 'Greek' | 'Old French' | 'Anglo-Saxon',
      originNote: originNote as string,
      originNoteEn: originNoteEn as string,
      example: example as string,
      words: JSON.parse(wordIds as string),
    };
  });
}

export async function getPrefixGroups(): Promise<PrefixGroup[]> {
  const database = await initDatabase();
  const result = database.exec('SELECT * FROM prefix_groups');
  if (!result.length) return [];

  return result[0].values.map(row => {
    const [_id, prefix, meaning, meaningEn, origin, originNote, originNoteEn, wordIds] = row;
    return {
      prefix: prefix as string,
      meaning: meaning as string,
      meaningEn: meaningEn as string,
      origin: origin as 'Latin' | 'Greek' | 'Old French' | 'Anglo-Saxon',
      originNote: originNote as string,
      originNoteEn: originNoteEn as string,
      words: JSON.parse(wordIds as string),
    };
  });
}

export async function getSuffixGroups(): Promise<SuffixGroup[]> {
  const database = await initDatabase();
  const result = database.exec('SELECT * FROM suffix_groups');
  if (!result.length) return [];

  return result[0].values.map(row => {
    const [_id, suffix, meaning, meaningEn, type, wordIds] = row;
    return {
      suffix: suffix as string,
      meaning: meaning as string,
      meaningEn: meaningEn as string,
      type: type as 'noun' | 'verb' | 'adjective' | 'adverb',
      words: JSON.parse(wordIds as string),
    };
  });
}

export async function getSentencePatterns(type?: string): Promise<SentencePattern[]> {
  const database = await initDatabase();
  let query = 'SELECT * FROM sentence_patterns';
  const params: string[] = [];

  if (type && type !== '全部') {
    query += ' WHERE type = ?';
    params.push(type);
  }

  const result = database.exec(query, params);
  if (!result.length) return [];

  return result[0].values.map(row => {
    const [id, pattern, explanation, example, type] = row;
    return {
      id: id as number,
      pattern: pattern as string,
      explanation: explanation as string,
      example: example as string,
      type: type as 'argument' | 'cause' | 'effect' | 'comparison' | 'example' | 'conclusion',
    };
  });
}

export async function getSynonymGroups(): Promise<SynonymGroup[]> {
  const database = await initDatabase();
  const result = database.exec('SELECT * FROM synonym_groups');
  if (!result.length) return [];

  return result[0].values.map(row => {
    const [id, word, synonyms] = row;
    return {
      id: id as number,
      word: word as string,
      synonyms: JSON.parse(synonyms as string),
    };
  });
}

export async function getEssayTemplates(type?: string): Promise<EssayTemplate[]> {
  const database = await initDatabase();
  let query = 'SELECT * FROM essay_templates';
  const params: string[] = [];

  if (type && type !== '全部') {
    query += ' WHERE type = ?';
    params.push(type);
  }

  const result = database.exec(query, params);
  if (!result.length) return [];

  return result[0].values.map(row => {
    const [id, title, type, topic, structure, fullParagraphs, vocabulary] = row;
    return {
      id: id as number,
      title: title as string,
      type: type as 'agree/disagree' | 'discuss both views' | 'advantages/disadvantages' | 'problem/solution',
      topic: topic as string,
      structure: JSON.parse(structure as string),
      fullParagraphs: JSON.parse(fullParagraphs as string),
      vocabulary: JSON.parse(vocabulary as string),
    };
  });
}

export async function getIELTSQuestions(type?: string): Promise<IELTSQuestion[]> {
  const database = await initDatabase();
  let query = 'SELECT * FROM ielts_questions ORDER BY year DESC, month DESC';
  const params: string[] = [];

  if (type && type !== '全部') {
    query = 'SELECT * FROM ielts_questions WHERE type = ? ORDER BY year DESC, month DESC';
    params.push(type);
  }

  const result = database.exec(query, params);
  if (!result.length) return [];

  return result[0].values.map(row => {
    const [id, year, month, type, topic, question, modelAnswer, bandScore, keywords] = row;
    return {
      id: id as number,
      year: year as number,
      month: month as string,
      type: type as string,
      topic: topic as string,
      question: question as string,
      modelAnswer: modelAnswer as string,
      bandScore: bandScore as string,
      keywords: JSON.parse(keywords as string),
    };
  });
}

export async function updateUserProgress(userId: string, masteredWords: number[], reviewWords: number[], studyDays: number, totalWords: number): Promise<void> {
  const database = await initDatabase();
  database.run(`
    INSERT OR REPLACE INTO user_progress (user_id, mastered_words, review_words, study_days, total_words_studied)
    VALUES (?, ?, ?, ?, ?)
  `, [userId, JSON.stringify(masteredWords), JSON.stringify(reviewWords), studyDays, totalWords]);
}

export async function getUserProgress(userId: string): Promise<{ masteredWords: number[], reviewWords: number[], studyDays: number, totalWordsStudied: number } | null> {
  const database = await initDatabase();
  const result = database.exec('SELECT * FROM user_progress WHERE user_id = ?', [userId]);
  if (!result.length) return null;

  const row = result[0].values[0];
  const [_userId, masteredWords, reviewWords, studyDays, totalWordsStudied] = row;
  
  return {
    masteredWords: JSON.parse(masteredWords as string),
    reviewWords: JSON.parse(reviewWords as string),
    studyDays: studyDays as number,
    totalWordsStudied: totalWordsStudied as number,
  };
}