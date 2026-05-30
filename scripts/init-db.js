import initSqlJs from 'sql.js';
import fs from 'fs';
import path from 'path';

const initDB = async () => {
  const SQL = await initSqlJs({
    locateFile: file => `https://sql.js.org/dist/${file}`
  });
  
  const db = new SQL.Database();
  
  db.run(`
    CREATE TABLE words (
      id INTEGER PRIMARY KEY,
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
    CREATE TABLE root_groups (
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
    CREATE TABLE prefix_groups (
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
    CREATE TABLE suffix_groups (
      id INTEGER PRIMARY KEY,
      suffix TEXT UNIQUE NOT NULL,
      meaning TEXT NOT NULL,
      meaning_en TEXT NOT NULL,
      type TEXT NOT NULL,
      word_ids TEXT
    );
  `);

  db.run(`
    CREATE TABLE sentence_patterns (
      id INTEGER PRIMARY KEY,
      pattern TEXT NOT NULL,
      explanation TEXT NOT NULL,
      example TEXT NOT NULL,
      type TEXT NOT NULL
    );
  `);

  db.run(`
    CREATE TABLE synonym_groups (
      id INTEGER PRIMARY KEY,
      word TEXT UNIQUE NOT NULL,
      synonyms TEXT NOT NULL
    );
  `);

  db.run(`
    CREATE TABLE essay_templates (
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
    CREATE TABLE ielts_questions (
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
    CREATE TABLE user_progress (
      user_id TEXT PRIMARY KEY,
      mastered_words TEXT DEFAULT '[]',
      review_words TEXT DEFAULT '[]',
      study_days INTEGER DEFAULT 0,
      total_words_studied INTEGER DEFAULT 0
    );
  `);

  const dataDir = path.join(process.cwd(), 'src/data');
  const wordsData = JSON.parse(fs.readFileSync(path.join(dataDir, 'words.json'), 'utf-8'));
  
  wordsData.forEach(word => {
    db.run(`
      INSERT OR IGNORE INTO words (
        id, word, phonetic, meaning, example, level, category,
        prefix, prefix_meaning, prefix_meaning_en, root, root_meaning,
        root_meaning_en, root_origin, root_origin_note, suffix,
        suffix_meaning, suffix_meaning_en, writing_usage, topics
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [
      word.id, word.word, word.phonetic, word.meaning, word.example,
      word.level, word.category, word.root?.prefix || null,
      word.root?.prefixMeaning || null, word.root?.prefixMeaningEn || null,
      word.root.root, word.root.rootMeaning, word.root.rootMeaningEn,
      word.root.rootOrigin, word.root.rootOriginNote, word.root?.suffix || null,
      word.root?.suffixMeaning || null, word.root?.suffixMeaningEn || null,
      word.writingUsage, JSON.stringify(word.topic)
    ]);
  });

  const rootGroups = JSON.parse(fs.readFileSync(path.join(dataDir, 'rootGroups.json'), 'utf-8'));
  rootGroups.forEach(group => {
    db.run(`
      INSERT OR IGNORE INTO root_groups (root, meaning, meaning_en, origin, origin_note, origin_note_en, example, word_ids)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `, [group.root, group.meaning, group.meaningEn, group.origin, group.originNote, group.originNoteEn, group.example, JSON.stringify(group.words)]);
  });

  const prefixGroups = JSON.parse(fs.readFileSync(path.join(dataDir, 'prefixGroups.json'), 'utf-8'));
  prefixGroups.forEach(group => {
    db.run(`
      INSERT OR IGNORE INTO prefix_groups (prefix, meaning, meaning_en, origin, origin_note, origin_note_en, word_ids)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `, [group.prefix, group.meaning, group.meaningEn, group.origin, group.originNote, group.originNoteEn, JSON.stringify(group.words)]);
  });

  const suffixGroups = JSON.parse(fs.readFileSync(path.join(dataDir, 'suffixGroups.json'), 'utf-8'));
  suffixGroups.forEach(group => {
    db.run(`
      INSERT OR IGNORE INTO suffix_groups (suffix, meaning, meaning_en, type, word_ids)
      VALUES (?, ?, ?, ?, ?)
    `, [group.suffix, group.meaning, group.meaningEn, group.type, JSON.stringify(group.words)]);
  });

  const writingData = JSON.parse(fs.readFileSync(path.join(dataDir, 'writing.json'), 'utf-8'));
  
  writingData.sentencePatterns.forEach(pattern => {
    db.run(`
      INSERT OR IGNORE INTO sentence_patterns (id, pattern, explanation, example, type)
      VALUES (?, ?, ?, ?, ?)
    `, [pattern.id, pattern.pattern, pattern.explanation, pattern.example, pattern.type]);
  });

  writingData.synonymGroups.forEach(group => {
    db.run(`
      INSERT OR IGNORE INTO synonym_groups (id, word, synonyms)
      VALUES (?, ?, ?)
    `, [group.id, group.word, JSON.stringify(group.synonyms)]);
  });

  writingData.essayTemplates.forEach(template => {
    db.run(`
      INSERT OR IGNORE INTO essay_templates (id, title, type, topic, structure, full_paragraphs, vocabulary)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `, [template.id, template.title, template.type, template.topic, JSON.stringify(template.structure), JSON.stringify(template.fullParagraphs), JSON.stringify(template.vocabulary)]);
  });

  const ieltsQuestions = JSON.parse(fs.readFileSync(path.join(dataDir, 'ieltsQuestions.json'), 'utf-8'));
  ieltsQuestions.forEach(question => {
    db.run(`
      INSERT OR IGNORE INTO ielts_questions (year, month, type, topic, question, model_answer, band_score, keywords)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `, [question.year, question.month, question.type, question.topic, question.question, question.modelAnswer, question.bandScore, JSON.stringify(question.keywords)]);
  });

  const data = db.export();
  const buffer = Buffer.from(data);
  fs.writeFileSync(path.join(dataDir, 'ielts.db'), buffer);

  console.log('Database initialized successfully!');
  db.close();
};

initDB().catch(console.error);