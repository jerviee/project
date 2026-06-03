import { useState, useEffect } from 'react';
import { Clock, Play, Pause, CheckCircle, XCircle, ChevronLeft, ChevronRight, AlertCircle, BookOpen, Award, RotateCcw, Trophy } from 'lucide-react';
import { mockExams, Exam } from '../data/mockExam';

type ExamState = 'select' | 'in-progress' | 'paused' | 'completed';

export default function MockExam() {
  const [state, setState] = useState<ExamState>('select');
  const [selectedExam, setSelectedExam] = useState<Exam | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  // Timer effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (state === 'in-progress' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setState('completed');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [state, timeLeft]);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const startExam = (exam: Exam) => {
    setSelectedExam(exam);
    setState('in-progress');
    setTimeLeft(exam.totalTime * 60);
    setCurrentQuestionIndex(0);
    setAnswers({});
  };

  const togglePause = () => {
    setState(prev => prev === 'in-progress' ? 'paused' : 'in-progress');
  };

  const submitAnswer = (questionId: number, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const nextQuestion = () => {
    if (selectedExam && currentQuestionIndex < selectedExam.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const finishExam = () => {
    setState('completed');
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-700';
      case 'medium': return 'bg-yellow-100 text-yellow-700';
      case 'hard': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'listening': return '听力';
      case 'reading': return '阅读';
      case 'writing': return '写作';
      case 'speaking': return '口语';
      default: return type;
    }
  };

  // Calculate estimated score (simplified)
  const calculateScore = () => {
    if (!selectedExam) return 0;
    const completed = Object.keys(answers).length;
    return Math.min(9, Math.max(1, Math.round((completed / selectedExam.questions.length) * 9)));
  };

  // Exam Selection Screen
  if (state === 'select') {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-3 flex items-center justify-center gap-3">
            <Trophy className="text-yellow-500" />
            全真模拟考试
          </h2>
          <p className="text-gray-600 text-lg">选择一套真题开始你的雅思备考之旅</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockExams.map(exam => (
            <div
              key={exam.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all cursor-pointer group"
              onClick={() => startExam(exam)}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-primary-600 transition-colors">
                    {exam.title}
                  </h3>
                  <p className="text-sm text-gray-500">{exam.year}年{exam.month}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(exam.difficulty)}`}>
                  {exam.difficulty === 'easy' ? '简单' : exam.difficulty === 'medium' ? '中等' : '困难'}
                </span>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock size={16} />
                  <span>总时长: {exam.totalTime}分钟</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <BookOpen size={16} />
                  <span>题目数量: {exam.questions.length}题</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {['listening', 'reading', 'writing', 'speaking'].map(type => (
                  <span key={type} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg">
                    {getTypeLabel(type)}
                  </span>
                ))}
              </div>

              <button
                className="w-full py-3 bg-gradient-to-r from-primary-500 to-indigo-500 text-white rounded-xl font-semibold hover:from-primary-600 hover:to-indigo-600 transition-all shadow-lg shadow-primary-500/30"
              >
                开始考试
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Award className="text-yellow-500" />
            考试说明
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold">1</div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">完整模拟</h4>
                <p className="text-sm text-gray-600">包含听、说、读、写四个部分</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold">2</div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">限时答题</h4>
                <p className="text-sm text-gray-600">严格按照考试时间要求</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold">3</div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">答题技巧</h4>
                <p className="text-sm text-gray-600">每道题都有详细的答题提示</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold">4</div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">评分参考</h4>
                <p className="text-sm text-gray-600">Band Score 评分标准说明</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = selectedExam?.questions[currentQuestionIndex];

  // Exam In Progress
  if (state === 'in-progress' || state === 'paused') {
    return (
      <div className="max-w-5xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 mb-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div>
                <h2 className="text-lg font-bold text-gray-800">{selectedExam?.title}</h2>
                <p className="text-sm text-gray-500">
                  Question {currentQuestionIndex + 1} of {selectedExam?.questions.length}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-lg font-bold ${
                timeLeft < 300 ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700'
              }`}>
                <Clock size={20} />
                {formatTime(timeLeft)}
              </div>

              <button
                onClick={togglePause}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors"
              >
                {state === 'paused' ? <Play size={18} /> : <Pause size={18} />}
                {state === 'paused' ? '继续' : '暂停'}
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">总体进度</span>
              <span className="text-sm font-semibold text-primary-600">
                {Math.round(((currentQuestionIndex + 1) / (selectedExam?.questions.length || 1)) * 100)}%
              </span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary-500 to-indigo-500 transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / (selectedExam?.questions.length || 1)) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Pause Overlay */}
        {state === 'paused' && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 text-center max-w-sm mx-4">
              <Pause className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">考试暂停</h3>
              <p className="text-gray-600 mb-6">点击"继续"按钮恢复考试</p>
              <button
                onClick={togglePause}
                className="w-full py-3 bg-gradient-to-r from-primary-500 to-indigo-500 text-white rounded-xl font-semibold hover:from-primary-600 hover:to-indigo-600 transition-all"
              >
                继续考试
              </button>
            </div>
          </div>
        )}

        {/* Question Card */}
        {currentQuestion && (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  currentQuestion.type === 'listening' ? 'bg-blue-100 text-blue-700' :
                  currentQuestion.type === 'reading' ? 'bg-green-100 text-green-700' :
                  currentQuestion.type === 'writing' ? 'bg-purple-100 text-purple-700' :
                  'bg-orange-100 text-orange-700'
                }`}>
                  {getTypeLabel(currentQuestion.type)} - Section {currentQuestion.section}
                </span>
                {currentQuestion.timeLimit && (
                  <span className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock size={14} />
                    {currentQuestion.timeLimit}分钟
                  </span>
                )}
              </div>
            </div>

            {/* Listening Audio Text */}
            {currentQuestion.type === 'listening' && currentQuestion.audioText && (
              <div className="mb-6">
                <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                  <Play className="text-blue-500" />
                  听力原文
                </h3>
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <p className="text-gray-800 text-base leading-relaxed whitespace-pre-wrap mb-4">
                    {currentQuestion.audioText}
                  </p>
                  {currentQuestion.audioTextCN && (
                    <>
                      <div className="border-t border-blue-200 my-4" />
                      <p className="text-gray-600 text-base leading-relaxed whitespace-pre-wrap">
                        {currentQuestion.audioTextCN}
                      </p>
                    </>
                  )}
                </div>
              </div>
            )}

            {/* Reading Passage */}
            {currentQuestion.type === 'reading' && currentQuestion.passage && (
              <div className="mb-6">
                <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                  <BookOpen className="text-green-500" />
                  阅读文章
                </h3>
                <div className="bg-green-50 rounded-xl p-6 border border-green-100 max-h-96 overflow-y-auto">
                  <p className="text-gray-800 text-base leading-relaxed whitespace-pre-wrap mb-4">
                    {currentQuestion.passage}
                  </p>
                  {currentQuestion.passageCN && (
                    <>
                      <div className="border-t border-green-200 my-4" />
                      <p className="text-gray-600 text-base leading-relaxed whitespace-pre-wrap">
                        {currentQuestion.passageCN}
                      </p>
                    </>
                  )}
                </div>
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">题目</h3>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <p className="text-gray-800 text-lg leading-relaxed whitespace-pre-wrap">
                  {currentQuestion.question}
                </p>
              </div>
            </div>

            {/* Answer Area */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 mb-3">你的答案</h4>
              {(currentQuestion.type === 'writing' || currentQuestion.type === 'speaking') ? (
                <textarea
                  value={answers[currentQuestion.id] || ''}
                  onChange={(e) => submitAnswer(currentQuestion.id, e.target.value)}
                  placeholder="在此输入你的答案..."
                  className="w-full h-64 p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                />
              ) : (
                <textarea
                  value={answers[currentQuestion.id] || ''}
                  onChange={(e) => submitAnswer(currentQuestion.id, e.target.value)}
                  placeholder="在此输入你的答案..."
                  className="w-full h-32 p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                />
              )}
            </div>

            {/* Tips */}
            {currentQuestion.tips && (
              <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-4 mb-6">
                <h5 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
                  <AlertCircle size={16} />
                  答题技巧
                </h5>
                <ul className="text-sm text-yellow-700 space-y-1">
                  {currentQuestion.tips.map((tip, i) => (
                    <li key={i}>• {tip}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Band Score Guide */}
            {currentQuestion.bandScoreGuide && (
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                <h5 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                  <Award size={16} />
                  Band Score 评分标准
                </h5>
                <p className="text-sm text-blue-700">{currentQuestion.bandScoreGuide}</p>
              </div>
            )}
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={prevQuestion}
            disabled={currentQuestionIndex === 0}
            className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft size={20} />
            上一题
          </button>

          <button
            onClick={finishExam}
            className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all shadow-lg"
          >
            交卷
          </button>

          <button
            onClick={nextQuestion}
            disabled={!selectedExam || currentQuestionIndex >= selectedExam.questions.length - 1}
            className="flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-xl hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            下一题
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    );
  }

  // Exam Completed
  if (state === 'completed') {
    const score = calculateScore();
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-8 text-center text-white">
            <CheckCircle className="w-20 h-20 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-2">考试完成!</h2>
            <p className="opacity-90">恭喜你完成了这套模拟试题</p>
          </div>

          <div className="p-8">
            {/* Score Display */}
            <div className="text-center mb-8">
              <div className="inline-block bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-6 mb-4">
                <p className="text-sm text-gray-600 mb-2">预估分数</p>
                <p className="text-6xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                  {score}.0
                </p>
                <p className="text-yellow-700 mt-1">Band Score</p>
              </div>
            </div>

            {/* Summary */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-blue-50 rounded-xl p-5 text-center">
                <p className="text-2xl font-bold text-blue-600">{selectedExam?.questions.length}</p>
                <p className="text-sm text-blue-700">总题目数</p>
              </div>
              <div className="bg-green-50 rounded-xl p-5 text-center">
                <p className="text-2xl font-bold text-green-600">{Object.keys(answers).length}</p>
                <p className="text-sm text-green-700">已作答</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-5 text-center">
                <p className="text-2xl font-bold text-purple-600">{selectedExam?.totalTime}</p>
                <p className="text-sm text-purple-700">总时长(分钟)</p>
              </div>
            </div>

            {/* Band Score Interpretation */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 mb-8 border border-indigo-100">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <Award size={20} className="text-indigo-600" />
                分数说明
              </h3>
              <div className="text-sm text-gray-600 space-y-2">
                {score >= 7 && <p>• <strong>Band 7+</strong>: 优秀水平，达到大多数名校入学要求</p>}
                {score >= 6 && score < 7 && <p>• <strong>Band 6-7</strong>: 良好水平，达到一般大学入学要求</p>}
                {score >= 5 && score < 6 && <p>• <strong>Band 5-6</strong>: 合格水平，基础沟通能力</p>}
                {score < 5 && <p>• <strong>Band 5以下</strong>: 需要加强基础训练</p>}
              </div>
            </div>

            {/* Answer Review */}
            <div className="mb-8">
              <h3 className="font-bold text-gray-800 mb-4">答题回顾</h3>
              <div className="space-y-4">
                {selectedExam?.questions.map((q, index) => (
                  <div key={q.id} className="border border-gray-100 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        {getTypeLabel(q.type)} - Q{index + 1}
                      </span>
                      {answers[q.id] ? (
                        <span className="flex items-center gap-1 text-sm text-green-600">
                          <CheckCircle size={14} />
                          已作答
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-sm text-red-600">
                          <XCircle size={14} />
                          未作答
                        </span>
                      )}
                    </div>
                    {answers[q.id] && (
                      <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mt-2">{answers[q.id]}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <button
                onClick={() => setState('select')}
                className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
              >
                返回考试列表
              </button>
              <button
                onClick={() => selectedExam && startExam(selectedExam)}
                className="flex-1 py-3 bg-gradient-to-r from-primary-500 to-indigo-500 text-white rounded-xl font-semibold hover:from-primary-600 hover:to-indigo-600 transition-all flex items-center justify-center gap-2"
              >
                <RotateCcw size={18} />
                再考一次
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
