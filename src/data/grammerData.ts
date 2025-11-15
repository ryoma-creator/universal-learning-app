// grammarData.ts
export interface GrammarItem {
    id: string;
    name: string;
    description: string;
    usageContext: string;
    pattern: string;
    beforeAfter: {
      before: string;
      after: string;
      explanation: string;
    }[];
    examples: string[];
    nuance: string;
    category: '分詞構文' | '付帯状況' | '関係詞' | 'その他';
  }
  
  export const grammarItems: GrammarItem[] = [
    {
      id: 'participle-construction-1',
      name: '分詞構文（capable of型）',
      description: '主語とbe動詞を省略した修飾表現',
      usageContext: '書き言葉専用（論文、ニュース、技術文書、ビジネス文書）。会話では使わない。',
      pattern: '[主語 + be動詞] + 分詞 → 分詞のみ',
      beforeAfter: [
        {
          before: 'This solution, which is capable of handling unlimited traffic, is great.',
          after: 'This solution, capable of handling unlimited traffic, is great.',
          explanation: '関係詞「which is」を省略して分詞構文に'
        },
        {
          before: 'The system that is configured for hosting receives a URL.',
          after: 'The system configured for hosting receives a URL.',
          explanation: '関係詞「that is」を省略'
        },
        {
          before: 'When the S3 bucket is configured for website hosting, it receives a dedicated URL.',
          after: 'When configured for website hosting, the S3 bucket receives a dedicated URL.',
          explanation: '時間を表すWhen節で主語「S3 bucket is」を省略'
        }
      ],
      examples: [
        'The app, developed by our team, won the award = 我々のチームが開発したアプリが受賞した',
        'Files stored in S3 are automatically backed up = S3に保存されたファイルは自動バックアップされる',
        'The server, running on AWS, handles millions of requests = AWSで稼働するサーバーが数百万リクエストを処理'
      ],
      nuance: '情報を圧縮して文章を簡潔にする技法。聞き手が理解する時間が必要なので会話では不自然。',
      category: '分詞構文'
    },
    {
      id: 'participle-construction-2',
      name: '分詞構文（時間・条件型）',
      description: 'When, If, Becauseなどで始まる節の主語・be動詞省略',
      usageContext: '書き言葉専用。技術文書、説明書、ニュース記事でよく使用。',
      pattern: 'When/If/Because [主語 + be動詞] + 分詞 → When/If + 分詞のみ',
      beforeAfter: [
        {
          before: 'When you are running late, call me immediately.',
          after: 'When running late, call me immediately.',
          explanation: 'When節で主語「you are」を省略'
        },
        {
          before: 'If it is properly configured, the system works perfectly.',
          after: 'If properly configured, the system works perfectly.',
          explanation: 'If節で主語「it is」を省略'
        },
        {
          before: 'Because the data is encrypted, it remains secure.',
          after: 'Being encrypted, the data remains secure.',
          explanation: 'Because節全体を分詞構文に変換'
        }
      ],
      examples: [
        'When properly set up, AWS scales automatically = 適切に設定すると、AWSは自動でスケールする',
        'If configured correctly, S3 serves static websites = 正しく設定すればS3は静的サイトを配信する',
        'Being cloud-based, the service is always available = クラウドベースなので、サービスは常に利用可能'
      ],
      nuance: '条件や時間を簡潔に表現。主文と同じ主語の場合のみ省略可能。',
      category: '分詞構文'
    },
    {
      id: 'with-construction',
      name: '付帯状況（with + 名詞 + 過去分詞）',
      description: 'メインの動作と同時に起こる状況を表現',
      usageContext: '書き言葉・会話両方で使用可能。ビジネス文書、技術説明でよく使用。',
      pattern: 'with + 名詞 + 過去分詞 = 「〜しながら」「〜と同時に」',
      beforeAfter: [
        {
          before: 'The root object can be renamed, and S3 settings are updated accordingly.',
          after: 'The root object can be renamed, with S3 settings updated accordingly.',
          explanation: '2つの文を1つにまとめて簡潔に表現'
        },
        {
          before: 'He entered the room while his hands were covered with mud.',
          after: 'He entered the room with his hands covered with mud.',
          explanation: 'while節をwith構文で置き換えて簡潔に'
        },
        {
          before: 'The meeting ended, and all issues were resolved.',
          after: 'The meeting ended with all issues resolved.',
          explanation: '結果・付随する状況をwithで表現'
        }
      ],
      examples: [
        'Deploy the app with all dependencies included = 全ての依存関係を含めてアプリをデプロイ',
        'Save the file with encryption enabled = 暗号化を有効にしてファイルを保存',
        'Run the server with auto-scaling configured = 自動スケールを設定してサーバーを実行'
      ],
      nuance: 'whileより簡潔。メインの動作に付随する状況や方法を表現。分詞構文より理解しやすい。',
      category: '付帯状況'
    },
    {
      id: 'past-participle-modifier',
      name: '過去分詞による修飾',
      description: '関係詞を省略した修飾表現',
      usageContext: '書き言葉で文章を簡潔にする技法',
      pattern: '名詞 + [which are] + 過去分詞 → 名詞 + 過去分詞',
      beforeAfter: [
        {
          before: 'AWS services which are not used in this lab are disabled.',
          after: 'AWS services not used in this lab are disabled.',
          explanation: '関係詞「which are」を省略'
        }
      ],
      examples: [
        'Services not used = 使用されないサービス',
        'Files deleted yesterday = 昨日削除されたファイル',
        'Users logged in = ログイン中のユーザー'
      ],
      nuance: '「which are」「that are」を省略して文章を簡潔にする技法',
      category: '分詞構文'
    },
    {
      id: 'review-vs-confirm',
      en: 'review (vs confirm)',
      jp: '内容を見直す（確認するではない）',
      category: 'ビジネス英語',
      simpleTranslation: 'ざっと見て理解する',
      usage: [
        'Review the practice lab tasks = 実習タスクに目を通す',
        'Let me review this document = この文書をレビューします',
        'Review vs Confirm: review=内容把握、confirm=正誤確認'
      ],
      nuance: 'confirm（はい/いいえ確認）と違い、内容を理解するために見直すこと。',
      createdAt: new Date(),
      correctCount: 0,
      mistakeCount: 0,
      mastered: false
    }

  ];