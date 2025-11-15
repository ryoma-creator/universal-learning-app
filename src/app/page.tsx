'use client';

import React, { useState, useEffect } from 'react';
import { Plus, BookOpen, List, Target, Home, Zap } from 'lucide-react';
import { initialLearningItems } from '../data/learningData';
import type { LearningItem, Mode, Category } from '../types';

const UniversalLearningApp = () => {
  const [currentMode, setCurrentMode] = useState<Mode>('home');
  const [learningItems, setLearningItems] = useState<LearningItem[]>([]);
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [mistakeItems, setMistakeItems] = useState<LearningItem[]>([]);
  const [isClient, setIsClient] = useState(false);
  const [setCompletionCounts, setSetCompletionCounts] = useState<{[key: number]: number}>({});

  useEffect(() => {
    setIsClient(true);
    
    const forceUpdate = true;
    if (forceUpdate) {
      setLearningItems(initialLearningItems);
      if (typeof window !== 'undefined') {
        localStorage.setItem('universal-learning-items', JSON.stringify(initialLearningItems));
      }
    } else {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('universal-learning-items');
        if (saved) {
          setLearningItems(JSON.parse(saved));
        } else {
          setLearningItems(initialLearningItems);
        }
      }
    }

    if (typeof window !== 'undefined') {
      const savedMistakes = localStorage.getItem('universal-mistake-items');
      if (savedMistakes) {
        setMistakeItems(JSON.parse(savedMistakes));
      }

      const savedCounts = localStorage.getItem('set-completion-counts');
      if (savedCounts) {
        setSetCompletionCounts(JSON.parse(savedCounts));
      }
    }
  }, []);

  const saveLearningItems = (items: LearningItem[]) => {
    setLearningItems(items);
    if (isClient && typeof window !== 'undefined') {
      localStorage.setItem('universal-learning-items', JSON.stringify(items));
    }
  };

  const saveMistakeItems = (items: LearningItem[]) => {
    setMistakeItems(items);
    if (isClient && typeof window !== 'undefined') {
      localStorage.setItem('universal-mistake-items', JSON.stringify(items));
    }
  };

  const getCurrentSet = () => {
    const startIndex = currentSetIndex * 10;
    return learningItems.slice(startIndex, startIndex + 10);
  };

  const totalSets = Math.ceil(learningItems.length / 10);

  const handleSetCompletion = (setIndex: number) => {
    const newCounts = { ...setCompletionCounts };
    newCounts[setIndex] = (newCounts[setIndex] || 0) + 1;
    setSetCompletionCounts(newCounts);
    
    if (isClient && typeof window !== 'undefined') {
      localStorage.setItem('set-completion-counts', JSON.stringify(newCounts));
    }
  };

  const recordMistake = (item: LearningItem) => {
    const updatedItems = learningItems.map(i => 
      i.id === item.id 
        ? { ...i, mistakeCount: i.mistakeCount + 1, lastReviewed: new Date() }
        : i
    );
    saveLearningItems(updatedItems);

    const existingIndex = mistakeItems.findIndex(i => i.id === item.id);
    let newMistakes;
    if (existingIndex === -1) {
      newMistakes = [...mistakeItems, item];
    } else {
      newMistakes = [...mistakeItems];
    }
    saveMistakeItems(newMistakes);
  };

  const recordCorrect = (item: LearningItem) => {
    const updatedItems = learningItems.map(i => 
      i.id === item.id 
        ? { 
            ...i, 
            correctCount: i.correctCount + 1, 
            lastReviewed: new Date(),
            mastered: i.correctCount + 1 >= 5
          }
        : i
    );
    saveLearningItems(updatedItems);

    const updatedItem = updatedItems.find(i => i.id === item.id);
    if (updatedItem && updatedItem.correctCount >= 5) {
      const newMistakes = mistakeItems.filter(i => i.id !== item.id);
      saveMistakeItems(newMistakes);
    }
  };

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.8;
      utterance.pitch = 1;
      utterance.volume = 0.8;
      
      window.speechSynthesis.speak(utterance);
    } else {
      alert('お使いのブラウザは音声合成に対応していません');
    }
  };

  const getSetTheme = (setIndex: number) => {
    const themes = [
      { name: '基本表現', icon: '📘', description: 'rather than, works など' },
      { name: 'ビジネス語彙', icon: '💼', description: 'allow, data-driven など' },
      { name: 'AWS基礎', icon: '☁️', description: 'bucket, storage など' },
      { name: 'システム用語', icon: '⚙️', description: 'provisioning, scaling など' },
      { name: '操作・設定', icon: '🔧', description: 'configure, reference など' },
      { name: 'ネイティブ表現', icon: '🗣️', description: 'guess what, fair enough など' },
      { name: 'パフォーマンス', icon: '⚡', description: 'latency, throughput など' },
      { name: 'ストレージ', icon: '💾', description: 'archive, retrieval など' },
      { name: '高度な概念', icon: '🎯', description: 'hands-on, use cases など' },
      { name: '応用表現', icon: '🚀', description: '追加の重要語彙' },
      { name: '補完語彙', icon: '📚', description: 'さらなる専門用語' }
    ];
    
    return themes[setIndex] || { name: `セット${setIndex + 1}`, icon: '📝', description: '' };
  };

  const renderUsageExamples = (usage: string | string[]) => {
    let examples: string[] = [];
    
    if (Array.isArray(usage)) {
      examples = usage;
    } else {
      examples = usage.split(' | ');
    }
    
    return (
      <div className="space-y-3">
        {examples.map((example, index) => {
          const [en, jp] = example.split(' = ');
          return (
            <div key={index} className="bg-blue-50 p-3 rounded-lg">
              <div className="text-blue-800 font-medium mb-1">{en}</div>
              <div className="text-blue-600 text-sm">{jp}</div>
            </div>
          );
        })}
      </div>
    );
  };

  const renderFormTags = (form?: string[]) => {
    if (!form || form.length === 0) return null;
    
    return (
      <div className="flex flex-wrap gap-1 mb-3">
        <span className="text-xs font-bold text-gray-600 mr-2">文法:</span>
        {form.map((f, index) => (
          <span key={index} className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
            {f}
          </span>
        ))}
      </div>
    );
  };

  const renderSituationTags = (situation?: string | string[]) => {
    if (!situation) return null;
    
    let situations: string[] = [];
    if (Array.isArray(situation)) {
      situations = situation;
    } else {
      situations = [situation];
    }
    
    return (
      <>
        {situations.map((s, index) => (
          <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
            {s}
          </span>
        ))}
      </>
    );
  };

  const renderGrammarInfo = (item: LearningItem) => {
    if (!item.partOfSpeech && !item.simpleTranslation) return null;
    
    return (
      <div className="bg-gray-50 border rounded-lg p-3 mb-3">
        {item.partOfSpeech && (
          <div className="text-xs text-gray-600 mb-1">
            <span className="font-bold">品詞:</span> {item.partOfSpeech}
          </div>
        )}
        {item.simpleTranslation && (
          <div className="text-sm text-gray-700">
            <span className="font-bold">簡単訳:</span> {item.simpleTranslation}
          </div>
        )}
      </div>
    );
  };

  const [quickAddForm, setQuickAddForm] = useState({
    en: '',
    jp: '',
    category: 'ネイティブ表現' as Category,
    situation: 'カジュアル',
    usage: '',
    nuance: ''
  });

  const handleQuickAdd = () => {
    if (!quickAddForm.en || !quickAddForm.jp) return;

    const newItem: LearningItem = {
      id: `quick-${Date.now()}`,
      ...quickAddForm,
      createdAt: new Date(),
      correctCount: 0,
      mistakeCount: 0,
      mastered: false
    };

    saveLearningItems([...learningItems, newItem]);
    setQuickAddForm({
      en: '',
      jp: '',
      category: 'ネイティブ表現',
      situation: 'カジュアル',
      usage: '',
      nuance: ''
    });
    setCurrentMode('home');
  };

  const HomePage = () => {
    const totalCompletions = Object.values(setCompletionCounts).reduce((sum, count) => sum + count, 0);
    const averageCompletions = totalCompletions > 0 ? (totalCompletions / totalSets).toFixed(1) : '0.0';
    
    return (
      <div className="space-y-6">
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl">
          <h1 className="text-4xl font-bold mb-3">📚 Universal Learning System</h1>
          <p className="text-blue-100 text-lg">継続的学習で知識を確実に定着させよう</p>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-blue-200 text-sm">
            <div className="bg-blue-500/30 rounded-lg p-3">
              <div className="font-bold text-lg text-white">{learningItems.length}</div>
              <div>総語彙数</div>
            </div>
            <div className="bg-red-500/30 rounded-lg p-3">
              <div className="font-bold text-lg text-white">{mistakeItems.length}</div>
              <div>要復習</div>
            </div>
            <div className="bg-green-500/30 rounded-lg p-3">
              <div className="font-bold text-lg text-white">{totalCompletions}</div>
              <div>総完走回数</div>
            </div>
            <div className="bg-yellow-500/30 rounded-lg p-3">
              <div className="font-bold text-lg text-white">{averageCompletions}</div>
              <div>平均完走数</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => setCurrentMode('quick-add')}
            className="bg-green-50 border border-green-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-left"
          >
            <div className="flex items-center space-x-4">
              <div className="text-3xl"><Plus /></div>
              <div>
                <h3 className="text-xl font-bold text-green-800 mb-1">クイック追加</h3>
                <p className="text-green-600">その場で新しい語彙・表現を追加</p>
              </div>
            </div>
          </button>

          <button
            onClick={() => setCurrentMode('vocabulary')}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-left"
          >
            <div className="flex items-center space-x-4">
              <div className="text-3xl"><BookOpen /></div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">語彙学習</h3>
                <p className="text-gray-600">テーマ別の効率学習</p>
                {totalCompletions > 0 && (
                  <div className="text-sm text-green-600 mt-1">
                    🎯 これまで {totalCompletions} セット完走！
                  </div>
                )}
              </div>
            </div>
          </button>

          <button
            onClick={() => setCurrentMode('grammar')}
            className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-left"
          >
            <div className="flex items-center space-x-4">
              <div className="text-3xl">📐</div>
              <div>
                <h3 className="text-xl font-bold text-indigo-800 mb-1">文法・構文</h3>
                <p className="text-indigo-600">分詞構文、カンマの使い方など</p>
              </div>
            </div>
          </button>

          <button
            onClick={() => setCurrentMode('vocab-list')}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-left"
          >
            <div className="flex items-center space-x-4">
              <div className="text-3xl"><List /></div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">全語彙一覧</h3>
                <p className="text-gray-600">全{learningItems.length}語を確認</p>
              </div>
            </div>
          </button>

          {mistakeItems.length > 0 && (
            <button
              onClick={() => setCurrentMode('mistakes')}
              className="bg-red-50 border border-red-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-left"
            >
              <div className="flex items-center space-x-4">
                <div className="text-3xl"><Target /></div>
                <div>
                  <h3 className="text-xl font-bold text-red-800 mb-1">間違い集中訓練</h3>
                  <p className="text-red-600">{mistakeItems.length}語が要復習</p>
                </div>
              </div>
            </button>
          )}
        </div>

        {totalCompletions > 0 && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">🏆 学習進捗状況</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {Array.from({ length: totalSets }, (_, i) => {
                const theme = getSetTheme(i);
                const completionCount = setCompletionCounts[i] || 0;
                return (
                  <div key={i} className="text-center p-3 rounded-lg bg-gray-50">
                    <div className="text-2xl mb-1">{theme.icon}</div>
                    <div className="text-xs font-medium text-gray-600">{theme.name}</div>
                    <div className={`text-sm font-bold mt-1 ${
                      completionCount > 0 ? 'text-green-600' : 'text-gray-400'
                    }`}>
                      {completionCount > 0 ? `${completionCount}周` : '未学習'}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  };

  const VocabularyMode = () => {
    const currentSet = getCurrentSet();
    const currentItem = currentSet[currentItemIndex] || {};
    const setTheme = getSetTheme(currentSetIndex);

    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-xl">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-3">
              <span className="text-3xl">{setTheme.icon}</span>
              <div>
                <h2 className="text-2xl font-bold">{setTheme.name}</h2>
                <p className="text-purple-100 text-sm">{setTheme.description}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">{currentItemIndex + 1}</div>
              <div className="text-sm opacity-90">/ {currentSet.length}</div>
            </div>
          </div>
          <div className="w-full bg-purple-400 rounded-full h-2">
            <div 
              className="bg-white h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentItemIndex + 1) / currentSet.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          {!showAnswer ? (
            <div className="text-left space-y-6">
              <div className="border-b pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-5xl font-bold text-purple-600">{currentItem.en}</h3>
                  <button
                    onClick={() => speakText(currentItem.en)}
                    className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full"
                    title="音声で読み上げ"
                  >
                    🔊
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    {currentItem.category}
                  </span>
                  {renderSituationTags(currentItem.situation)}
                  {currentItem.mistakeCount > 0 && (
                    <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs">
                      間違い{currentItem.mistakeCount}回
                    </span>
                  )}
                </div>
              </div>
              
              <div className="text-center">
                <button
                  onClick={() => setShowAnswer(true)}
                  className="bg-purple-500 hover:bg-purple-600 text-white px-12 py-4 rounded-xl text-xl font-bold"
                >
                  答えを見る
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="border-b pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-4xl font-bold text-purple-600">{currentItem.en}</h3>
                  <button
                    onClick={() => speakText(currentItem.en)}
                    className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full"
                    title="音声で読み上げ"
                  >
                    🔊
                  </button>
                </div>
                <p className="text-2xl text-gray-800 mb-3">{currentItem.jp}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    {currentItem.category}
                  </span>
                  {renderSituationTags(currentItem.situation)}
                </div>
              </div>

              {renderGrammarInfo(currentItem)}
              {renderFormTags(currentItem.form)}

              <div>
                <h4 className="text-lg font-bold text-gray-700 mb-3">📝 使用例</h4>
                {renderUsageExamples(currentItem.usage)}
              </div>

              {currentItem.nuance && (
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <h4 className="text-sm font-bold text-yellow-800 mb-1">💡 ワンポイント</h4>
                  <p className="text-yellow-700 text-sm">{currentItem.nuance}</p>
                </div>
              )}

              {currentItem.image && (
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h4 className="text-sm font-bold text-green-800 mb-1">🎭 覚え方イメージ</h4>
                  <p className="text-green-700 text-sm">{currentItem.image}</p>
                </div>
              )}
            </div>
          )}
        </div>

        {showAnswer && (
          <div className="bg-white rounded-xl p-4">
            <div className="flex space-x-4">
              <button
                onClick={() => {
                  recordMistake(currentItem);
                  const nextIndex = (currentItemIndex + 1) % currentSet.length;
                  
                  if (currentItemIndex === currentSet.length - 1) {
                    handleSetCompletion(currentSetIndex);
                  }
                  
                  setCurrentItemIndex(nextIndex);
                  setShowAnswer(false);
                }}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white py-4 px-6 rounded-xl font-bold text-lg"
              >
                ❌ 間違えた
              </button>
              <button
                onClick={() => {
                  recordCorrect(currentItem);
                  const nextIndex = (currentItemIndex + 1) % currentSet.length;
                  
                  if (currentItemIndex === currentSet.length - 1) {
                    handleSetCompletion(currentSetIndex);
                  }
                  
                  setCurrentItemIndex(nextIndex);
                  setShowAnswer(false);
                }}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-xl font-bold text-lg"
              >
                ✅ 正解
              </button>
            </div>
          </div>
        )}

        <div className="bg-white rounded-xl p-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
            {Array.from({ length: totalSets }, (_, i) => {
              const theme = getSetTheme(i);
              const completionCount = setCompletionCounts[i] || 0;
              return (
                <button
                  key={i}
                  onClick={() => {
                    setCurrentSetIndex(i);
                    setCurrentItemIndex(0);
                    setShowAnswer(false);
                  }}
                  className={`p-3 rounded-lg font-medium text-left relative ${
                    currentSetIndex === i
                      ? 'bg-purple-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span>{theme.icon}</span>
                      <span className="text-sm font-bold">{theme.name}</span>
                    </div>
                    {completionCount > 0 && (
                      <span className={`text-xs px-2 py-1 rounded-full font-bold ${
                        currentSetIndex === i
                          ? 'bg-white text-purple-500'
                          : 'bg-green-500 text-white'
                      }`}>
                        {completionCount}周
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
          
          <div className="text-center">
            <button
              onClick={() => setCurrentMode('home')}
              className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg"
            >
              <Home className="w-4 h-4 inline mr-2" />
              ホーム
            </button>
          </div>
        </div>
      </div>
    );
  };

  const QuickAddMode = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-3">⚡ クイック追加</h2>
        <p className="text-green-100">新しい語彙・表現を即座に記録</p>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">英語・表現</label>
          <input
            type="text"
            value={quickAddForm.en}
            onChange={(e) => setQuickAddForm({...quickAddForm, en: e.target.value})}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            placeholder="例: rather than"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">日本語訳</label>
          <input
            type="text"
            value={quickAddForm.jp}
            onChange={(e) => setQuickAddForm({...quickAddForm, jp: e.target.value})}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            placeholder="例: ～じゃなくて・～ではなく"
          />
        </div>
        <div className="flex space-x-4">
          <button
            onClick={handleQuickAdd}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-xl font-bold"
          >
            追加する
          </button>
          <button
            onClick={() => setCurrentMode('home')}
            className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-3 px-6 rounded-xl"
          >
            キャンセル
          </button>
        </div>
      </div>
    </div>
  );

  const VocabListMode = () => (
    <div className="text-center py-20">
      <h2 className="text-2xl font-bold text-gray-600">語彙一覧機能</h2>
      <button
        onClick={() => setCurrentMode('home')}
        className="mt-4 bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg"
      >
        ホームに戻る
      </button>
    </div>
  );

  const MistakesMode = () => (
    <div className="text-center py-20">
      <h2 className="text-2xl font-bold text-gray-600">間違い訓練機能</h2>
      <button
        onClick={() => setCurrentMode('home')}
        className="mt-4 bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg"
      >
        ホームに戻る
      </button>
    </div>
  );

  const GrammarMode = () => (
    <div className="text-center py-20">
      <h2 className="text-2xl font-bold text-gray-600">文法・構文機能</h2>
      <button
        onClick={() => setCurrentMode('home')}
        className="mt-4 bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg"
      >
        ホームに戻る
      </button>
    </div>
  );

  if (!isClient) {
    return <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-4">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-4">
      <div className="max-w-4xl mx-auto">
        {currentMode === 'home' && <HomePage />}
        {currentMode === 'quick-add' && <QuickAddMode />}
        {currentMode === 'vocabulary' && <VocabularyMode />}
        {currentMode === 'vocab-list' && <VocabListMode />}
        {currentMode === 'mistakes' && <MistakesMode />}
        {currentMode === 'grammar' && <GrammarMode />}
      </div>
    </div>
  );
};

export default UniversalLearningApp;