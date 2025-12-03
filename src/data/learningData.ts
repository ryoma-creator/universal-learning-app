// src/data/learningData.ts
import type { LearningItem } from '../types';

export const initialLearningItems: LearningItem[] = [
  // Enhanced vocabulary with grammatical forms and usage patterns
  {
    id: 'rather-than-enhanced-1',
    en: 'rather than',
    jp: '～じゃなくて・～ではなく',
    category: '超頻出表現',
    situation: ['Casual', 'Business'],
    form: ['名詞', '動詞原形', '節'],
    usage: [
      'I prefer tea rather than coffee = コーヒーじゃなくて紅茶が好き',
      'He decided to walk rather than take a bus = バスじゃなくて歩くことにした', 
      'She chose to save money rather than spend it = 使うんじゃなくてお金を貯めることにした'
    ],
    nuance: '比べる形は前後で同じにそろえる。「よりもむしろ」より「AじゃなくてB」が自然。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'allow-vs-let-enhanced-1',
    en: 'allow vs let',
    jp: '可能にする（フォーマル） vs させてくれる（カジュアル）',
    category: 'ビジネス英語',
    situation: ['allow=Business', 'let=Casual'],
    form: ['allow + to動詞', 'let + 原形動詞'],
    usage: [
      'This method allows you to save time = この方法で時間を節約できます',
      'My mom lets me stay up late = 母が夜更かしを許してくれる',
      'The app allows users to edit photos = アプリで写真編集が可能'
    ],
    nuance: 'allow=説明・マニュアル向け、let=友達との会話向け。語順も異なる。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'works-enhanced-1',
    en: 'works',
    jp: 'うまくいく・効果がある',
    category: '超頻出表現',
    situation: ['Casual'],
    form: ['単独で使用', '主語 + works'],
    usage: [
      'This method really works! = この方法、本当に効く！',
      'Does your phone work? = 携帯動く？',
      'That strategy works for me = その作戦、俺には合ってる'
    ],
    nuance: '「job」ではなく「function successfully」の意味。カジュアルで軽い感じ。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'data-driven-enhanced-1',
    en: 'data-driven',
    jp: 'データ重視の・データに基づく',
    category: 'IBM面接',
    situation: ['Business', 'Interview'],
    form: ['形容詞', 'data-driven + 名詞'],
    usage: [
      'I take a data-driven approach = データ重視のアプローチを取ります',
      'Data-driven decisions are more reliable = データに基づく判断の方が信頼できる',
      'Our strategy is completely data-driven = 戦略は完全にデータ重視です'
    ],
    nuance: 'IBM核心価値語彙。感情論ではなく客観的データで判断する姿勢を示す。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'end-up-enhanced-1',
    en: 'end up',
    jp: '結局～になる・最終的に～する',
    category: '超頻出表現',
    situation: ['Casual', 'Business'],
    form: ['end up + 動詞ing', 'end up + 形容詞/名詞'],
    usage: [
      'I ended up staying home = 結局家にいることになった',
      'We ended up choosing React = 最終的にReactを選んだ',
      'You will end up regretting it = きっと後悔することになる'
    ],
    nuance: '当初の予定と違う結果になった時。予想外の結果を表現。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'i-want-you-to-enhanced-1',
    en: 'I want you to',
    jp: '～してほしい・～してもらいたい',
    category: '超頻出表現',
    situation: ['Casual', 'Business'],
    form: ['I want you to + 動詞原形'],
    usage: [
      'I want you to help me = 手伝ってほしい',
      'I want you to check this = これをチェックしてもらいたい',
      'I want you to remember this = これを覚えておいてほしい'
    ],
    nuance: '依頼の基本表現。丁寧さはトーンで調整。必ず原形動詞が続く。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'guess-what-enhanced-1',
    en: 'guess what',
    jp: 'ねえ、聞いてよ！・あのね！',
    category: '日常英語',
    situation: ['Casual'],
    form: ['文頭で単独使用', 'Guess what + 文'],
    usage: [
      'Guess what! I got the job! = ねえ聞いて！仕事決まったよ！',
      'Guess what happened today? = 今日何があったと思う？',
      'Guess what? It is completely free! = あのね、これ完全無料なんだよ！'
    ],
    nuance: 'サプライズ報告の前置き。友達同士のカジュアルな会話専用。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'fair-enough-enhanced-1',
    en: 'fair enough',
    jp: 'なるほど・それはもっともだね',
    category: '感情・反応表現',
    situation: ['Casual', 'Business'],
    form: ['単独で使用', '返答として'],
    usage: [
      'A: I cannot come, I am sick. B: Fair enough. = 体調悪いから行けない。なるほどね。',
      'Fair enough, let us try your way = わかった、君のやり方でやってみよう',
      'That is a fair enough point = それはもっともな指摘だ'
    ],
    nuance: '相手の言い分を理解し受け入れる。「I understand」より軽く自然。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'address-enhanced-1',
    en: 'address',
    jp: '取り上げて答える・対応する',
    category: 'ビジネス英語',
    situation: ['Business', 'Formal'],
    form: ['address + 名詞', 'address + 問題/課題'],
    usage: [
      'Let me address your question = ご質問にお答えします',
      'We need to address this issue = この問題に対処する必要がある',
      'The CEO will address the concerns = CEOが懸念事項に対応します'
    ],
    nuance: '住所のaddressではない。deal withよりフォーマル。ビジネス必須語彙。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'converting-enhanced-1',
    en: 'converting',
    jp: '変換する（技術的・系統的）',
    category: '超頻出表現',
    situation: ['Casual', 'Business'],
    form: ['convert A to B', 'convert + from/into'],
    usage: [
      'Converting JPY to USD = 円をドルに換算',
      'Converting files to PDF = ファイルをPDFに変換',
      'Converting my Japanese thoughts to English = 日本語の考えを英語に変換'
    ],
    nuance: 'changeより技術的・systematic。通貨、言語、ファイル変換で頻出。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'integrate-into-enhanced-1',
    en: 'integrate into',
    jp: '日常に馴染む・自然に組み込まれる',
    category: 'ビジネス英語',
    situation: ['Business', 'Casual'],
    form: ['integrate A into B', 'integrate into + 名詞'],
    usage: [
      'This app integrates into your daily routine = このアプリは日常に自然に馴染む',
      'We need to integrate this system into our workflow = このシステムを業務フローに組み込む必要がある',
      'The new hire integrated into the team quickly = 新人はチームにすぐ馴染んだ'
    ],
    nuance: '「交わって一体化する」イメージ。カレーの具材のように最初は別物だったのが違和感なく溶け込む状態。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  
  // AWS Technical Vocabulary
  {
    id: 'gist-enhanced-1',
    en: 'gist',
    jp: '要点・要旨・概要',
    category: 'AWS用語',
    situation: ['Business', 'Technical'],
    form: ['get the gist', 'the gist of + 名詞'],
    usage: [
      'Get the gist with Explainer = Explainerで要点を把握する',
      'I got the gist of the presentation = プレゼンの要点は理解した',
      'The gist is that we need more servers = 要するにサーバーが足りないということ'
    ],
    nuance: '「main idea」より軽い。全部は理解してないけど大体の内容は分かった状態。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'toggle-enhanced-1',
    en: 'toggle',
    jp: 'オン・オフを切り替える',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['toggle + 名詞', 'toggle on/off'],
    usage: [
      'Turn on the Explainer toggle = Explainerのトグルをオンにする',
      'Toggle between different views = 異なるビューを切り替える',
      'You can toggle this feature = この機能は切り替え可能です'
    ],
    nuance: 'スイッチのようにパチパチと切り替える動作。UIでよく使われる技術用語。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'in-the-lower-right-enhanced-1',
    en: 'in the lower right',
    jp: '右下に・右下で',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['in the + 位置'],
    usage: [
      'Turn on the toggle in the lower right = 右下のトグルをオンにする',
      'The button is in the upper left = ボタンは左上にある',
      'You will find the menu in the lower right corner = メニューは右下の角にあります'
    ],
    nuance: 'UI説明でよく使う位置表現。lower=下、upper=上、left=左、right=右の組み合わせ。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'onboarding-enhanced-1',
    en: 'onboarding',
    jp: '導入・初期設定・慣れさせるプロセス',
    category: 'AWS用語',
    situation: ['Business', 'Technical'],
    form: ['onboarding process', 'onboard + 人/システム'],
    usage: [
      'Onboarding to AWS = AWSへの導入プロセス',
      'Employee onboarding takes one week = 従業員の導入研修は1週間',
      'The onboarding experience is smooth = 導入体験がスムーズ'
    ],
    nuance: '船に乗り込む「on board」から。新しい環境に慣れさせる全プロセスを指す。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'across-different-categories-enhanced-1',
    en: 'across different categories',
    jp: '様々なカテゴリーにわたって',
    category: 'AWS用語',
    situation: ['Business', 'Technical'],
    form: ['across + 複数名詞'],
    usage: [
      'Services across different categories = 様々なカテゴリーのサービス',
      'Data is spread across multiple regions = データは複数のリージョンに分散',
      'We work across different time zones = 異なるタイムゾーンで作業している'
    ],
    nuance: '「横断して・またがって」のイメージ。広範囲にまたがる状況で使用。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'sequence-enhanced-1',
    en: 'sequence',
    jp: '順序・手順・一連の流れ',
    category: 'AWS用語',
    situation: ['Technical', 'Business'],
    form: ['sequence of + 名詞', 'in sequence'],
    usage: [
      'GPTs learning sequence is logical = GPTの学習手順は論理的',
      'Follow the sequence carefully = 手順を注意深く従って',
      'The boot sequence failed = 起動シーケンスが失敗した'
    ],
    nuance: '「連続」より「順序立った手順」のニュアンス。ステップバイステップの流れ。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'consistent-enhanced-1',
    en: 'consistent',
    jp: '一貫した・統一された・ブレない',
    category: 'AWS用語',
    situation: ['Business', 'Technical'],
    form: ['consistent + 名詞', 'be consistent with'],
    usage: [
      'AWS uses consistent terminology = AWSは統一された用語を使用',
      'Keep the interface consistent = インターフェースを一貫して保つ',
      'Results are consistent across regions = 結果はリージョン間で一貫している'
    ],
    nuance: '「同じパターンを維持」。変化せず信頼できる状態を示す重要なビジネス語彙。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'terminology-enhanced-1',
    en: 'terminology',
    jp: '専門用語・術語体系',
    category: 'AWS用語',
    situation: ['Technical', 'Business'],
    form: ['technical terminology', 'terminology + for/of'],
    usage: [
      'AWS console uses simple terminology = AWSコンソールはシンプルな用語を使用',
      'Medical terminology is complex = 医学用語は複雑',
      'Learn the terminology first = まず専門用語を学ぼう'
    ],
    nuance: '単なる「単語」ではなく、特定分野の「専門用語システム」を指す。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'manageable-enhanced-1',
    en: 'manageable',
    jp: '管理可能な・扱いやすい・なんとかなる',
    category: 'AWS用語',
    situation: ['Business', 'Casual'],
    form: ['manageable + 名詞', 'make it manageable'],
    usage: [
      'The English becomes manageable = 英語が扱いやすくなる',
      'Keep the workload manageable = ワークロードを管理可能に保つ',
      'Break it into manageable pieces = 扱いやすい部分に分割する'
    ],
    nuance: '「手に負えない」の反対。複雑だったものが「なんとかできそう」な状態。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'standardized-enhanced-1',
    en: 'standardized',
    jp: '標準化された・統一された',
    category: 'AWS用語',
    situation: ['Technical', 'Business'],
    form: ['standardized + 名詞', 'be standardized'],
    usage: [
      'Technical English is standardized = 技術英語は標準化されている',
      'Use standardized procedures = 標準化された手順を使用',
      'The API is fully standardized = APIは完全に標準化されている'
    ],
    nuance: 'consistentより技術的。規格や基準に従って統一されている状態。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'enriched-enhanced-1',
    en: 'enriched',
    jp: '充実した・豊富にした・強化された',
    category: 'AWS用語',
    situation: ['Business', 'Technical'],
    form: ['enriched by + 名詞', 'enriched with'],
    usage: [
      'This course is enriched by videos = このコースは動画で充実している',
      'Data enriched with metadata = メタデータで強化されたデータ',
      'The experience is enriched = 体験が充実している'
    ],
    nuance: '「rich（豊か）」の強化版。基本的なものに価値あるものを追加した状態。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'diagram-enhanced-1',
    en: 'diagram',
    jp: '図表・ダイアグラム・構成図',
    category: 'AWS用語',
    situation: ['Technical', 'Business'],
    form: ['architecture diagram', 'network diagram'],
    usage: [
      'Architecture diagrams show system structure = アーキテクチャ図はシステム構造を示す',
      'Draw a network diagram = ネットワーク図を描く',
      'The diagram explains the flow = 図表がフローを説明している'
    ],
    nuance: '単なる「絵」ではなく、構造や関係性を示す技術的な図表。AWS設計でよく使用。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'embark-on-enhanced-1',
    en: 'embark on',
    jp: '～に乗り出す・～を始める（冒険的に）',
    category: 'AWS用語',
    situation: ['Business', 'Formal'],
    form: ['embark on + 名詞', 'embark on a journey/quest'],
    usage: [
      'Embark on the quest = クエストに乗り出す',
      'We embarked on a new project = 新しいプロジェクトに着手した',
      'Ready to embark on your AWS journey = AWS学習の旅を始める準備ができた'
    ],
    nuance: '船出のイメージ。単なる「始める」より壮大で冒険的なニュアンス。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'across-nuanced-enhanced-1',
    en: 'across (nuanced)',
    jp: 'またがって・範囲に広がって',
    category: 'AWS用語',
    situation: ['Technical', 'Business'],
    form: ['across + 複数名詞', 'spread across'],
    usage: [
      'Services across different categories = 複数カテゴリーをまたぐサービス',
      'Data spreads across multiple regions = データが複数リージョンに広がる',
      'I came across this solution = この解決策に出くわした'
    ],
    nuance: '橋が両岸をつなぐように「またがる・広がる」イメージ。物理的横断から抽象的範囲まで。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'prompted-enhanced-1',
    en: 'prompted',
    jp: '促される・指示される',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['be prompted to + 動詞', 'prompt + 人 + to'],
    usage: [
      'You will be prompted to enter your password = パスワード入力を求められます',
      'The system prompted me to update = システムが更新を促した',
      'Users are prompted to confirm = ユーザーは確認を求められる'
    ],
    nuance: 'コンピューター画面で「入力してください」と表示される状況。自動的な指示。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'selected-for-you-enhanced-1',
    en: 'selected for you',
    jp: 'あなた向けに選択済み・自動選択された',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['selected for + 人', 'pre-selected'],
    usage: [
      'The role has been selected for you = ロールがあなた向けに選択済み',
      'Default settings are selected for beginners = 初心者向けにデフォルト設定が選択済み',
      'The best option is selected for you = 最適オプションが自動選択されている'
    ],
    nuance: 'システムが自動的に選択。「強制」ではなく「便利機能として事前選択」のニュアンス。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'practitioner-enhanced-1',
    en: 'practitioner',
    jp: '実務者・実際に手を動かす人',
    category: 'AWS用語',
    situation: ['Business', 'Technical'],
    form: ['AWS practitioner', 'cloud practitioner'],
    usage: [
      'AWS Cloud Practitioner certification = AWS実務者認定',
      'She is an experienced practitioner = 彼女は経験豊富な実務者',
      'From theory to practitioner level = 理論から実務レベルまで'
    ],
    nuance: '理論だけでなく実際に手を動かして経験がある人。「初心者実務者」のレベル。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'billing-and-pricing-enhanced-1',
    en: 'billing and pricing',
    jp: '請求と料金体系',
    category: 'AWS用語',
    situation: ['Business', 'Technical'],
    form: ['billing model', 'pricing structure'],
    usage: [
      'AWS billing and pricing models = AWS請求・料金モデル',
      'Understand the billing cycle = 請求サイクルを理解する',
      'Pricing varies by region = 料金はリージョンによって異なる'
    ],
    nuance: 'billing=実際の請求書・支払い、pricing=料金設定。両方セットでよく使われる。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'remain-vs-keep-enhanced-1',
    en: 'remain vs keep',
    jp: '残る（自然に） vs 保つ（意図的に）',
    category: 'AWS用語',
    situation: ['Technical', 'Business'],
    form: ['remain + 形容詞', 'keep + 形容詞'],
    usage: [
      'Application remains available = アプリケーションが利用可能な状態を保つ',
      'Keep the system running = システムを稼働し続ける',
      'Data remains secure = データが安全な状態にとどまる'
    ],
    nuance: 'remain=自然にその状態、keep=意図的に維持、leave=放置、last=時間的に持続。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'fail-components-enhanced-1',
    en: 'components fail',
    jp: 'コンポーネントが故障する・機能しなくなる',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['components fail', 'system fails'],
    usage: [
      'Even if some components fail = 一部コンポーネントが故障しても',
      'When the database fails = データベースが故障した時',
      'Backup systems prevent total failure = バックアップシステムが全体故障を防ぐ'
    ],
    nuance: 'fail=機械的故障・機能停止。人の失敗ではなくシステムの不具合を指す。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'on-completion-enhanced-1',
    en: 'on completion',
    jp: '完了時に・完了すると',
    category: 'AWS用語',
    situation: ['Technical', 'Business'],
    form: ['on completion of + 名詞', 'upon completion'],
    usage: [
      'On completion of the course = コース完了時に',
      'Certificate issued on completion = 完了時に証明書発行',
      'System restarts on completion = 完了時にシステム再起動'
    ],
    nuance: 'タスクやプロセスが100%終わったタイミング。「when finished」より公式的。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'powers-infrastructure-enhanced-1',
    en: 'powers (infrastructure)',
    jp: '電力を供給する・動力を与える',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['power + 名詞', 'powered by'],
    usage: [
      'Data center powers the infrastructure = データセンターがインフラに電力供給',
      'Solar panels power our servers = ソーラーパネルがサーバーに電力供給',
      'This application is powered by AWS = このアプリはAWSで動作'
    ],
    nuance: '物理的電力供給から「～を動かす・支える」まで。ITでは「～で動作する」意味でも使用。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'provisioning-enhanced-1',
    en: 'provisioning',
    jp: '必要なリソースを用意・配布すること',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['provision + 名詞', 'provisioning process'],
    usage: [
      'Server provisioning takes time = サーバー準備には時間がかかる',
      'Automatic provisioning of resources = リソースの自動配布',
      'Cloud provisioning is faster = クラウドでの準備は高速'
    ],
    nuance: 'provisionの動名詞。必要な時に必要な分だけリソースを準備・配布する重要プロセス。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'seem-enhanced-1',
    en: 'seem',
    jp: '～のように見える・思われる',
    category: 'AWS用語',
    situation: ['Business', 'Casual'],
    form: ['seem to + 動詞', 'seem like'],
    usage: [
      'We cant seem to keep them running = どうも安定して動かせないようだ',
      'This seems like a good solution = これは良い解決策のようだ',
      'It seems to be working fine = 正常に動作しているようだ'
    ],
    nuance: '確信はないが「そう見える・感じる」状態。推測や印象を表現。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'reliable-enhanced-1',
    en: 'reliable',
    jp: '信頼できる・安定している',
    category: 'AWS用語',
    situation: ['Technical', 'Business'],
    form: ['reliable + 名詞', 'reliably'],
    usage: [
      'Keep systems running reliably = システムを安定して稼働させる',
      'This is a reliable solution = これは信頼できる解決策',
      'AWS provides reliable infrastructure = AWSは信頼性の高いインフラを提供'
    ],
    nuance: '故障せず期待通りに動作する。「dependable」と似ているがより技術的。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'agile-enhanced-1',
    en: 'agile',
    jp: '素早く柔軟に対応できる',
    category: 'AWS用語',
    situation: ['Business', 'Technical'],
    form: ['agile + 名詞', 'agile methodology'],
    usage: [
      'Agile development process = アジャイル開発プロセス',
      'Be more agile in response = より柔軟に対応する',
      'Cloud enables agile scaling = クラウドは柔軟なスケーリングを可能にする'
    ],
    nuance: '機敏で適応力がある。変化に素早く対応できる能力。開発手法でも重要概念。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'computing-power-enhanced-1',
    en: 'computing power',
    jp: '計算能力・処理能力',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['computing power', 'computational power'],
    usage: [
      'Need more computing power for AI = AI用により多くの計算能力が必要',
      'Cloud provides unlimited computing power = クラウドは無制限の処理能力を提供',
      'High computing power servers = 高性能計算サーバー'
    ],
    nuance: 'CPUやメモリなどコンピューターの処理性能。「horsepower」のIT版。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'set-up-enhanced-1',
    en: 'set up',
    jp: '準備する・構築する・設定する',
    category: 'AWS用語',
    situation: ['Technical', 'Business'],
    form: ['set up + 名詞', 'setup (名詞)'],
    usage: [
      'Set up new servers = 新しいサーバーを構築する',
      'Easy to set up and configure = 設定と構築が簡単',
      'The setup process is automated = 設定プロセスは自動化されている'
    ],
    nuance: '「設定」だけでなく「準備・構築・配置」も含む広い概念。システムを使える状態にする作業。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'running-system-enhanced-1',
    en: 'running (system)',
    jp: '稼働している・実行中',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['keep + running', 'running smoothly'],
    usage: [
      'The whole website stays running = ウェブサイト全体が稼働し続ける',
      'Keep systems running 24/7 = システムを24時間稼働させる',
      'Services are running normally = サービスは正常に稼働中'
    ],
    nuance: 'run = 実行し続けている状態。停止していない、動作中を表現。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'hosting-enhanced-1',
    en: 'hosting',
    jp: '公開・提供（サーバーで）',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['hosting service', 'host + 名詞'],
    usage: [
      'Website hosting feature = ウェブサイト公開機能',
      'API hosting on cloud = クラウドでのAPI提供',
      'AWS Lambda can host your functions = Lambdaでファンクションをホスティングできる'
    ],
    nuance: '自分のサーバーやサービスで他者がアクセスできるように置くこと。「公開・提供」のイメージ。',
    image: 'パーティーのホストが「みんなが集まれる場所を提供」するのと同じ。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'serve-enhanced-1',
    en: 'serve',
    jp: '提供する・配信する（データを）',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['serve + 名詞', 'serve files/data'],
    usage: [
      'S3 can serve your HTML files as a website = HTMLファイルをウェブサイトとして配信',
      'Server serves content to users = サーバーがユーザーにコンテンツを提供',
      'CDN serves files faster = CDNがファイルを高速配信'
    ],
    nuance: '「仕える」ではなく「提供・配信」。ウェイターが料理を丁寧に提供するイメージ。',
    image: 'レストランでウェイターが料理を客テーブルに運ぶ = データをユーザーに届ける',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'provision-verb-enhanced-1',
    en: 'provision (verb)',
    jp: '準備する・用意する（リソースを）',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['provision + 名詞', 'provision resources'],
    usage: [
      'Provision new servers quickly = 新サーバーを素早く準備',
      'AWS can provision storage automatically = AWSは自動でストレージを用意',
      'Provision the right amount of memory = 適切な量のメモリを準備'
    ],
    nuance: '必要な時に必要な分だけリソースを動的に準備。「設定」より広い概念。',
    image: '結婚式の準備係が「人数に合わせて椅子やテーブルを用意」= 必要に応じてリソース準備',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'across-coverage-enhanced-1',
    en: 'across (coverage)',
    jp: 'またがって・幅広くカバーして',
    category: 'AWS用語',
    situation: ['Technical', 'Business'],
    form: ['across multiple + 名詞'],
    usage: [
      'Across multiple data centers = 複数データセンターにまたがって',
      'Services across different regions = 異なるリージョン全体のサービス',
      'Backup across various locations = 様々な場所への分散バックアップ'
    ],
    nuance: '「横断・飛び越える」より「全体にまたがる・幅広くカバー」のイメージ。',
    image: '大きな橋が川全体をつなぐ = 複数の場所・範囲を全てカバーする',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'clear-breakdown-enhanced-1',
    en: 'clear breakdown',
    jp: '分かりやすい詳細説明・内訳',
    category: 'AWS用語',
    situation: ['Technical', 'Business'],
    form: ['clear breakdown of + 名詞'],
    usage: [
      'Clear breakdown of costs = コストの分かりやすい内訳',
      'Provide a clear breakdown = 詳細を分かりやすく説明する',
      'Architecture breakdown diagram = アーキテクチャ詳細図'
    ],
    nuance: '複雑なものを分解して理解しやすくした説明。「故障」のbreakdownとは別。',
    image: 'レゴブロックの完成品を部品ごとに分けて説明書に並べる = 複雑→シンプルに分解',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'architecture-diagram-enhanced-1',
    en: 'architecture diagram',
    jp: 'システム構成図・設計図',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['system architecture', 'network architecture'],
    usage: [
      'AWS architecture diagram shows connections = AWS構成図が接続を示す',
      'Draw the system architecture = システム設計図を描く',
      'Reference architecture for beginners = 初心者向け参考アーキテクチャ'
    ],
    nuance: '建物の設計図と同じ。システムの部品がどう繋がっているかを視覚的に示す図。',
    image: '家の設計図 = どの部屋がどこに配置され、どう繋がっているかを示す図面',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'visual-reference-enhanced-1',
    en: 'visual reference',
    jp: '見て分かる資料・図解',
    category: 'AWS用語',
    situation: ['Technical', 'Business'],
    form: ['visual reference guide', 'use as reference'],
    usage: [
      'Use diagrams as visual reference = 図を見て分かる資料として使用',
      'Visual reference makes it easier = 図解があると理解しやすい',
      'Quick visual reference guide = 見てすぐ分かる早見表'
    ],
    nuance: '「参照」より「見て分かる資料・早見表」のイメージ。',
    image: 'IKEA の組み立て説明書 = 文字より絵を見れば分かる資料',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'hands-on-enhanced-1',
    en: 'hands-on',
    jp: '実際に手を動かす・実践的',
    category: 'AWS用語',
    situation: ['Technical', 'Business'],
    form: ['hands-on experience', 'hands-on training'],
    usage: [
      'Hands-on AWS training = 実際に触るAWS研修',
      'Get hands-on experience = 実践経験を積む',
      'Hands-on lab exercises = 実習ラボ演習'
    ],
    nuance: '理論だけでなく実際に操作・体験すること。「実践的」な学習スタイル。',
    image: '料理教室で先生の話を聞くだけでなく、実際に包丁を握って調理する',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'scale-enhanced-1',
    en: 'scale',
    jp: '規模を変える（拡大・縮小）',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['scale up/down', 'scale automatically'],
    usage: [
      'Scale up when traffic increases = トラフィック増加時に拡張',
      'Auto-scaling saves costs = 自動スケーリングでコスト削減',
      'Scale down during low usage = 使用量少ない時は縮小'
    ],
    nuance: '風船のように膨らませたり萎ませたり。需要に応じてリソース調整。',
    image: '風船を膨らませる・萎ませる = 必要に応じてサーバー数を増減',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'storage-enhanced-1',
    en: 'storage',
    jp: 'データ保存場所・ストレージ',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['cloud storage', 'data storage'],
    usage: [
      'S3 provides unlimited storage = S3は無制限のストレージを提供',
      'Backup important data to storage = 重要データをストレージにバックアップ',
      'Choose the right storage type = 適切なストレージタイプを選択'
    ],
    nuance: 'メモリ（作業机）は一時的、ストレージ（本棚）は長期保管用。',
    image: '本棚 = データを長期間しまっておく場所（USBやHDD）',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'got-you-started-enhanced-1',
    en: 'got you started',
    jp: 'スタートさせた・始めるきっかけを作った',
    category: 'AWS用語',
    situation: ['Business', 'Casual'],
    form: ['get + 人 + started', 'got you started on'],
    usage: [
      'This guide got you started with AWS = このガイドでAWSを始められた',
      'Hope this got you started = これで開始できたと思います',
      'What got you started in programming? = プログラミングを始めたきっかけは？'
    ],
    nuance: '「開始した」より「開始するきっかけを与えた」のニュアンス。',
    image: 'エンジンをかけてくれる人 = スタートのきっかけを作ってくれる',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'migrating-enhanced-1',
    en: 'migrating',
    jp: '移行する・引っ越しする（システム）',
    category: 'AWS用語',
    situation: ['Technical', 'Business'],
    form: ['migrate to + 場所', 'migration process'],
    usage: [
      'Migrating to Amazon S3 = Amazon S3に移行する',
      'Database migration takes time = データベース移行には時間がかかる',
      'Cloud migration strategy = クラウド移行戦略'
    ],
    nuance: 'moveは単純移動、migrateは本拠地を変える引っ越し。システム全体の住み替え。',
    image: '引っ越しトラック = 古い家（オンプレ）から新しい家（クラウド）へ本格移住',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'computing-detailed-enhanced-1',
    en: 'computing',
    jp: 'コンピューター処理・計算作業',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['cloud computing', 'high-performance computing'],
    usage: [
      'Cloud computing saves costs = クラウド処理でコスト削減',
      'Need more computing power = より多くの処理能力が必要',
      'Distributed computing system = 分散処理システム'
    ],
    nuance: 'コンピューターを使った頭脳労働全般。計算、処理、データ変換すべて含む。',
    image: 'スマホ写真加工、YouTube動画再生、ゲーム、Google検索 = 全部computing',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'retrieval-enhanced-1',
    en: 'retrieval',
    jp: '取り出し・呼び出し（データ）',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['data retrieval', 'information retrieval'],
    usage: [
      'Fast data retrieval from S3 = S3からの高速データ取り出し',
      'Backup retrieval process = バックアップ呼び出しプロセス',
      'Efficient retrieval system = 効率的な取り出しシステム'
    ],
    nuance: '保存場所からデータを取り戻すこと。「検索して見つけて持ってくる」プロセス。',
    image: '犬がボールを取ってくる = データを保存場所から呼び出して持ってくる',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'object-aws-enhanced-1',
    en: 'object (AWS)',
    jp: 'オブジェクト・ファイルのかたまり',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['store objects', 'object storage'],
    usage: [
      'S3 stores objects like files = S3はファイルのようなオブジェクトを保存',
      'Each object has metadata = 各オブジェクトにはメタデータがある',
      'Object-based storage system = オブジェクトベースストレージ'
    ],
    nuance: 'AWSでは1つのファイルやデータのかたまり。写真1枚、テキスト1つなど。',
    image: '本棚の1冊の本 = S3の1つのオブジェクト（ファイル）',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'name-value-pairs-enhanced-1',
    en: 'name-value pairs',
    jp: '名前と値のペア・属性情報',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['set of name-value pairs', 'key-value pairs'],
    usage: [
      'Metadata as name-value pairs = メタデータは名前・値ペアとして',
      'Configure using name-value pairs = 名前・値ペアで設定',
      'Tags are name-value pairs = タグは名前・値のペア'
    ],
    nuance: '「名前：値」の組み合わせ。ファイルの属性情報を整理する方法。',
    image: '名札に「名前：田中」「部署：営業」= オブジェクトの属性を名前・値で整理',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'uniquely-enhanced-1',
    en: 'uniquely',
    jp: '一意に・唯一に・重複なく',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['uniquely identify', 'uniquely named'],
    usage: [
      'Each object is uniquely identified = 各オブジェクトは一意に識別',
      'Uniquely named across all buckets = 全バケット間で一意の名前',
      'Uniquely identify resources = リソースを一意に特定'
    ],
    nuance: '世界中で1つだけ、重複しない状態。AWSでは識別子の基本概念。',
    image: 'マイナンバー = 日本で1人1つだけの番号 = uniquely identify',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'industry-leading-enhanced-1',
    en: 'industry-leading',
    jp: '業界トップの・業界最高の',
    category: 'AWS用語',
    situation: ['Business', 'Marketing'],
    form: ['industry-leading + 名詞'],
    usage: [
      'Industry-leading scalability = 業界トップの拡張性',
      'Industry-leading security features = 業界最高のセキュリティ機能',
      'Industry-leading performance = 業界一の性能'
    ],
    nuance: 'その分野で他社より優れている、標準を作っているレベル。',
    image: 'オリンピック金メダル = その分野で世界一 = industry-leading',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'use-cases-enhanced-1',
    en: 'use cases',
    jp: '使用例・活用場面',
    category: 'AWS用語',
    situation: ['Business', 'Technical'],
    form: ['common use cases', 'use case scenarios'],
    usage: [
      'S3 use cases include backup = S3の使用例にはバックアップがある',
      'Various use cases for this service = このサービスの様々な活用場面',
      'Real-world use cases = 実世界での使用例'
    ],
    nuance: 'どんな場面で使えるかの具体例。「使用法」より実践的。',
    image: 'ハサミの使用例：紙を切る、髪を切る、テープを切る = 具体的活用場面',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'fluctuating-enhanced-1',
    en: 'fluctuating',
    jp: '変動する・上下する',
    category: 'AWS用語',
    situation: ['Technical', 'Business'],
    form: ['fluctuating demand', 'fluctuating workloads'],
    usage: [
      'Handle fluctuating traffic = 変動するトラフィックに対応',
      'Fluctuating demand patterns = 変動する需要パターン',
      'Fluctuating workloads require auto-scaling = 変動ワークロードには自動スケールが必要'
    ],
    nuance: '予測できない上下変動。季節性や突発的変化を含む。',
    image: '株価チャート = 上がったり下がったり予測困難 = fluctuating',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'meet-demands-enhanced-1',
    en: 'meet (demands/requirements)',
    jp: '満たす・対応する・応える',
    category: 'AWS用語',
    situation: ['Business', 'Technical'],
    form: ['meet demands', 'meet requirements'],
    usage: [
      'S3 can meet fluctuating demands = S3は変動需要に対応できる',
      'Meet performance requirements = 性能要求を満たす',
      'Meet customer expectations = 顧客期待に応える'
    ],
    nuance: '「会う」ではなく「要求や状況に応える」。satisfy + handleのニュアンス。',
    image: '注文に応える店員 = 客の要求にmeetする = 対応・満足させる',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'resources-it-enhanced-1',
    en: 'resources (IT)',
    jp: 'リソース・ITの力（CPU、メモリ、容量）',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['computing resources', 'scale resources'],
    usage: [
      'Scale resources up and down = リソースを増減する',
      'Allocate more resources = より多くのリソースを割り当て',
      'Optimize resource usage = リソース使用を最適化'
    ],
    nuance: '「資源」ではなく「ITで使える力」。CPU、メモリ、ストレージ、ネットワーク全部。',
    image: '工場の生産力 = 必要に応じて機械や人員を増減 = ITリソース管理',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'up-and-down-enhanced-1',
    en: 'up and down',
    jp: '増減・拡縮（リソース）',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['scale up and down', 'resources up and down'],
    usage: [
      'Scale resources up and down automatically = リソースを自動で増減',
      'Traffic goes up and down = トラフィックが増減する',
      'Costs go up and down with usage = 使用量に応じてコストが増減'
    ],
    nuance: 'scale up（拡張）とscale down（縮小）の組み合わせ。柔軟な調整。',
    image: 'エスカレーター = 上に行ったり下に行ったり = システムの拡縮',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'upfront-enhanced-1',
    en: 'upfront',
    jp: '前払い・初期費用・事前投資',
    category: 'AWS用語',
    situation: ['Business'],
    form: ['upfront costs', 'no upfront payment'],
    usage: [
      'No upfront costs with AWS = AWSは初期費用なし',
      'Avoid large upfront investments = 大きな事前投資を回避',
      'Pay upfront for discounts = 前払いで割引を受ける'
    ],
    nuance: '最初にまとまった金額を払うこと。従量課金の対義語。',
    image: '車の一括購入 vs レンタル = upfront一括 vs 使った分だけ支払い',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'reference-visual-enhanced-1',
    en: 'reference (visual/info)',
    jp: '参考資料・早見表・手引き',
    category: 'AWS用語',
    situation: ['Technical', 'Business'],
    form: ['visual reference', 'reference guide'],
    usage: [
      'Use as a reference guide = 参考ガイドとして使用',
      'Visual reference for beginners = 初心者向け図解資料',
      'Quick reference card = 早見表カード'
    ],
    nuance: '「参照」より「手引き・資料・早見表」のニュアンス。見て分かる情報源。',
    image: 'IKEA組み立て説明書 = 見れば分かる手引き = visual reference',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'procurement-cycles-enhanced-1',
    en: 'procurement cycles',
    jp: '調達サイクル・購買プロセス',
    category: 'AWS用語',
    situation: ['Business'],
    form: ['long procurement cycles', 'procurement process'],
    usage: [
      'Skip lengthy procurement cycles = 長い調達プロセスをスキップ',
      'Traditional procurement cycles take months = 従来の調達は数ヶ月かかる',
      'Cloud eliminates procurement cycles = クラウドは調達プロセスを不要にする'
    ],
    nuance: '企業が設備を購入する時の承認・発注・納品までの長いプロセス。',
    image: '会社で机を買う：上司承認→予算確保→業者選定→発注→納品 = 長い procurement cycle',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'cloud-simple-enhanced-1',
    en: 'cloud (simple concept)',
    jp: 'クラウド・共用貸し倉庫',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['cloud storage', 'cloud computing'],
    usage: [
      'Store files in the cloud = ファイルをクラウドに保存',
      'Access from anywhere via cloud = クラウド経由でどこからでもアクセス',
      'Cloud eliminates server management = クラウドでサーバー管理不要'
    ],
    nuance: '世界中からアクセスできる貸し倉庫。ファイルを入れる→URLで見れる。',
    image: 'スーパーの共用冷蔵庫 = 自分の冷蔵庫じゃないけど、どこからでも使える',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'bucket-enhanced-1',
    en: 'bucket (S3)',
    jp: 'バケット・最上位の入れ物',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['S3 bucket', 'create a bucket'],
    usage: [
      'Create an S3 bucket = S3バケットを作成',
      'Bucket name must be unique = バケット名は世界で唯一',
      'Store objects in buckets = オブジェクトをバケットに保存'
    ],
    nuance: 'ディレクトリより大きい概念。最上位の大きな入れ物・金庫。',
    image: '大きな金庫 = 最上位の入れ物、この中にフォルダやファイルを入れる',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'associated-metadata-enhanced-1',
    en: 'associated metadata',
    jp: '関連するメタデータ・付属情報',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['file metadata', 'object metadata'],
    usage: [
      'Objects have associated metadata = オブジェクトには関連メタデータがある',
      'Metadata includes file size and type = メタデータにはサイズと種類が含まれる',
      'Custom metadata can be added = カスタムメタデータを追加可能'
    ],
    nuance: 'ファイル本体ではない説明情報。作成日、サイズ、形式など。',
    image: '本の表紙ラベル = 中身ではないが「タイトル・著者・発行日」などの説明情報',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'static-website-enhanced-1',
    en: 'static website',
    jp: '静的サイト（HTML/CSS/JSだけ）',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['static website hosting', 'static content'],
    usage: [
      'Host a static website on S3 = S3で静的サイトをホスト',
      'Static websites load faster = 静的サイトは読み込みが早い',
      'No server required for static sites = 静的サイトにサーバー不要'
    ],
    nuance: 'データベースなし、HTML/CSS/JSファイルのみ。動的処理なし。',
    image: '紙のパンフレット = 内容変わらない、誰が見ても同じ = static website',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'host-publish-enhanced-1',
    en: 'host (publish)',
    jp: 'ホスト・公開する（別の場所で）',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['host a website', 'hosting service'],
    usage: [
      'S3 can host your website = S3があなたのサイトを公開',
      'Host files on the cloud = クラウドでファイルを公開',
      'Hosting eliminates server management = ホスティングでサーバー管理不要'
    ],
    nuance: '自分のサーバーではない場所で公開すること。場所を提供して動かす。',
    image: 'フードコート = 自分で店を建てずに、場所を借りて料理を提供',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'handling-processing-enhanced-1',
    en: 'handling',
    jp: 'さばく・処理する・扱う',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['handle traffic', 'handle requests'],
    usage: [
      'S3 handles unlimited traffic = S3は無制限トラフィックをさばく',
      'System handles 1000 requests per second = システムは秒間1000リクエストを処理',
      'Handle large file uploads = 大きなファイルアップロードを扱う'
    ],
    nuance: 'manage（管理）より実務的。大量の処理を上手にさばく感じ。',
    image: '忙しい店員 = 大量の注文を効率よくさばく = handling requests',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'capable-of-enhanced-1',
    en: 'capable of',
    jp: '～する能力がある・～できる',
    category: 'AWS用語',
    situation: ['Technical', 'Business'],
    form: ['capable of handling', 'capable of supporting'],
    usage: [
      'S3 is capable of handling unlimited traffic = S3は無制限トラフィックを処理できる',
      'System capable of auto-scaling = 自動スケールできるシステム',
      'Capable of processing millions of requests = 数百万リクエストを処理可能'
    ],
    nuance: 'can（できる）より能力・実力があることを強調。',
    image: '筋トレした人 = 重いものを持ち上げる capability（能力）がある',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'traffic-volumes-enhanced-1',
    en: 'traffic volumes',
    jp: 'トラフィック量・アクセス量',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['high traffic volumes', 'traffic spikes'],
    usage: [
      'Handle high traffic volumes = 高トラフィック量に対応',
      'Traffic volumes increase during sales = セール中にアクセス量が増加',
      'Monitor traffic volume patterns = トラフィック量パターンを監視'
    ],
    nuance: '道路交通量のネット版。サイトへのアクセス数・通信量。',
    image: '高速道路の車の量 = 道路交通量、ウェブサイトのアクセス数 = traffic volume',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'cost-effectively-enhanced-1',
    en: 'cost-effectively',
    jp: 'コスト効率よく・安く効率的に',
    category: 'AWS用語',
    situation: ['Business'],
    form: ['cost-effective solution', 'cost-effectively manage'],
    usage: [
      'Scale resources cost-effectively = リソースをコスト効率よく拡張',
      'Store data cost-effectively = データを安く効率的に保存',
      'Cost-effective cloud solution = コスト効率的なクラウドソリューション'
    ],
    nuance: '安いだけでなく効率も良い。費用対効果が高い状態。',
    image: '業務スーパー = 安くて品質も良い = cost-effective shopping',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'configured-enhanced-1',
    en: 'configured',
    jp: '設定済み・構成された',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['configured for', 'properly configured'],
    usage: [
      'Bucket configured for website hosting = ウェブホスティング用に設定済みバケット',
      'System properly configured = システムが適切に構成されている',
      'Auto-scaling configured = オートスケーリングが設定済み'
    ],
    nuance: 'set upより詳細。細かい設定を調整して使える状態にした。',
    image: 'IKEA家具の組み立て完了 = 基本set up + 高さ調整などの細かいconfigure',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'dedicated-url-enhanced-1',
    en: 'dedicated URL',
    jp: '専用URL・独占URL',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['dedicated + 名詞'],
    usage: [
      'Bucket gets a dedicated URL = バケットは専用URLを取得',
      'Dedicated server for high traffic = 高トラフィック用専用サーバー',
      'Dedicated connection for security = セキュリティ用専用接続'
    ],
    nuance: '他と共有せず、そのためだけの専用。独占使用。',
    image: '専用駐車場 = 自分だけが使える場所 = dedicated resource',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'requests-url-enhanced-1',
    en: 'requests to URL',
    jp: 'URLへのリクエスト・アクセス要求',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['requests to', 'HTTP requests'],
    usage: [
      'Requests to this URL trigger S3 = このURLへのリクエストがS3を起動',
      'Handle 1000 requests per minute = 毎分1000リクエストを処理',
      'Monitor incoming requests = 入ってくるリクエストを監視'
    ],
    nuance: 'requestは動詞ではなく名詞。「～へのアクセス要求」が主語。',
    image: 'ドアのノック = 家への requests、ウェブアクセス = URLへの requests',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'designated-root-object-enhanced-1',
    en: 'designated root object',
    jp: '指定されたルートオブジェクト・メインファイル',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['designated + 名詞', 'root object'],
    usage: [
      'Serve the designated root object = 指定されたルートオブジェクトを返す',
      'Usually index.html is the root object = 通常index.htmlがルートオブジェクト',
      'Configure root object for website = ウェブサイト用ルートオブジェクト設定'
    ],
    nuance: 'designated=指定・決められた、root=最初・メイン、object=ファイル。',
    image: '家の玄関に飾る看板 = 最初に見せる決められたもの = designated root object',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'dedicated-vs-designated-enhanced-1',
    en: 'dedicated vs designated',
    jp: '専用の vs 指定された',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['dedicated + 名詞', 'designated + 名詞'],
    usage: [
      'Dedicated server = 専用サーバー（他と共有しない）',
      'Designated driver = 指定運転手（役割を決められた）',
      'Dedicated vs designated resources = 専用リソース vs 指定リソース'
    ],
    nuance: 'dedicated=独占使用、designated=役割を指定・決められた。',
    image: 'dedicated=専用駐車場（自分だけ）、designated=指定席（決められた場所）',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'supporting-assets-enhanced-1',
    en: 'supporting assets',
    jp: '補助ファイル・関連ファイル',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['supporting + 名詞', 'static assets'],
    usage: [
      'Store HTML and supporting assets = HTMLと関連ファイルを保存',
      'Supporting assets include images and CSS = 関連ファイルには画像やCSSが含まれる',
      'Upload supporting assets to S3 = 補助ファイルをS3にアップロード'
    ],
    nuance: 'supporting=補助する、assets=ファイル・資産。メインファイルを支える関連ファイル。',
    image: '舞台の主役（HTML）と脇役（CSS、JS、画像）= supporting assets',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'client-side-scripts-enhanced-1',
    en: 'client-side scripts',
    jp: 'クライアント側スクリプト（JavaScript）',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['client-side + 名詞', 'server-side'],
    usage: [
      'Client-side scripts run in browser = クライアント側スクリプトはブラウザで実行',
      'JavaScript is a client-side script = JavaScriptはクライアント側スクリプト',
      'Client-side vs server-side processing = クライアント側 vs サーバー側処理'
    ],
    nuance: 'JavaScriptの正式な言い方。ドキュメント的表現でJSと言わない。',
    image: 'ブラウザで動くプログラム = client-side、サーバーで動くプログラム = server-side',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'style-sheets-enhanced-1',
    en: 'style sheets',
    jp: 'スタイルシート（CSS）',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['cascading style sheets', 'CSS files'],
    usage: [
      'Style sheets control website appearance = スタイルシートがサイト外観を制御',
      'Link style sheets to HTML = スタイルシートをHTMLにリンク',
      'External style sheets load faster = 外部スタイルシートは高速読み込み'
    ],
    nuance: 'CSSの正式名称。ドキュメントではCSSと略さず正式名で書くことが多い。',
    image: '服の着せ替え = HTMLに色や形を付ける style sheets',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 's3-react-hosting-enhanced-1',
    en: 'S3 React hosting',
    jp: 'S3でのReact公開（静的ビルド）',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['static hosting', 'build and deploy'],
    usage: [
      'Deploy React app to S3 = ReactアプリをS3にデプロイ',
      'React builds to static files = Reactは静的ファイルにビルド',
      'S3 hosts React after npm run build = S3はbuild後のReactをホスト'
    ],
    nuance: 'ReactはビルドするとHTML+CSS+JSになり、S3で公開可能。アップロードの概念。',
    image: 'React開発→npm run build→静的ファイル→S3アップロード→世界に公開',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'latency-enhanced-1',
    en: 'latency',
    jp: '待ち時間・遅延',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['low latency', 'high latency'],
    usage: [
      'S3 delivers low latency = S3は低遅延を実現',
      'Network latency affects performance = ネットワーク遅延が性能に影響',
      'Reduce latency with CDN = CDNで遅延を削減'
    ],
    nuance: 'クリックしてから反応が返るまでの待ち時間。速度の体感に直結。',
    image: 'ピザ注文から最初の1枚が届くまでの時間 = latency',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'throughput-enhanced-1',
    en: 'throughput',
    jp: '処理量・スループット',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['high throughput', 'throughput capacity'],
    usage: [
      'S3 provides high throughput = S3は高いスループットを提供',
      'Increase throughput with parallel processing = 並列処理でスループット向上',
      'Network throughput measures data transfer = ネットワークスループットはデータ転送量を測定'
    ],
    nuance: '1秒間にどれだけの量を処理できるか。水道管の太さのような概念。',
    image: 'ピザ屋が1時間に焼ける枚数 = throughput（処理量）',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'delivers-performance-enhanced-1',
    en: 'delivers (performance)',
    jp: '実現する・発揮する（性能を）',
    category: 'AWS用語',
    situation: ['Technical', 'Business'],
    form: ['deliver performance', 'deliver results'],
    usage: [
      'S3 delivers low latency = S3は低遅延を実現',
      'System delivers high performance = システムが高性能を発揮',
      'Cloud delivers cost savings = クラウドがコスト削減を実現'
    ],
    nuance: 'serve（提供）より「約束通り性能・結果を実現」のニュアンス。',
    image: 'serve=料理を出す、deliver=約束した美味しさを実現する',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'milliseconds-enhanced-1',
    en: 'milliseconds',
    jp: 'ミリ秒（1/1000秒）',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['in milliseconds', 'response time'],
    usage: [
      'Access data in milliseconds = ミリ秒でデータアクセス',
      'Response time under 100 milliseconds = 100ミリ秒以下の応答時間',
      'Millisecond-level precision = ミリ秒レベルの精度'
    ],
    nuance: '1秒の1000分の1。コンピューターの速度単位では非常に高速。',
    image: 'まばたき（300ミリ秒）より速い = millisecond級の超高速',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'functionality-enhanced-1',
    en: 'functionality',
    jp: '機能・機能性',
    category: 'AWS用語',
    situation: ['Technical', 'Business'],
    form: ['core functionality', 'additional functionality'],
    usage: [
      'S3 provides storage functionality = S3はストレージ機能を提供',
      'Add new functionality to the app = アプリに新機能を追加',
      'Core functionality remains unchanged = 基本機能は変更なし'
    ],
    nuance: '「機能的」ではなく「機能そのもの」。システムができることの集合。',
    image: 'スマホの機能一覧（電話、メール、カメラ）= functionality',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'enabled-for-enhanced-1',
    en: 'enabled for',
    jp: '～用に有効化された・～が可能',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['enabled for + 機能', 'enable/disable'],
    usage: [
      'Bucket enabled for static website hosting = 静的ホスティング用に有効化されたバケット',
      'Account enabled for auto-scaling = 自動スケール有効なアカウント',
      'Service enabled for public access = 公開アクセス可能なサービス'
    ],
    nuance: 'ONに設定された、その機能が使える状態。スイッチがONのイメージ。',
    image: 'スイッチON = enabled、スイッチOFF = disabled',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'static-language-conversion-enhanced-1',
    en: 'static conversion',
    jp: '静的変換（どんな言語も最終的にHTML/CSS/JS）',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['build to static', 'static output'],
    usage: [
      'React builds to static files = Reactは静的ファイルにビルド',
      'Vue compiles to static assets = Vueは静的ファイルにコンパイル',
      'Any framework can generate static output = どのフレームワークも静的出力可能'
    ],
    nuance: 'どんなプログラミング言語も最終的にはHTML/CSS/JSに変換されてブラウザで動く。',
    image: '料理の材料（React/Vue）→調理（ビルド）→完成品（HTML/CSS/JS）',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'infrequent-enhanced-1',
    en: 'infrequent',
    jp: '頻度の低い・めったにない',
    category: 'AWS用語',
    situation: ['Technical', 'Business'],
    form: ['infrequent access', 'infrequently used'],
    usage: [
      'Infrequent access storage = 低頻度アクセスストレージ',
      'Data accessed infrequently = めったにアクセスされないデータ',
      'Infrequent usage patterns = 使用頻度の低いパターン'
    ],
    nuance: 'frequent（頻繁）の反対。月に1回程度しかアクセスしないデータ向け。',
    image: '年に数回しか開かない押し入れの箱 = infrequent access',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 's3-backup-system-enhanced-1',
    en: 'S3 backup system',
    jp: 'S3は最低3箇所に自動コピー保存',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['multi-AZ storage', 'redundant copies'],
    usage: [
      'S3 stores data in multiple locations = S3はデータを複数箇所に保存',
      'Automatic backup across availability zones = アベイラビリティゾーン間の自動バックアップ',
      'Three copies ensure data durability = 3つのコピーがデータ耐久性を保証'
    ],
    nuance: 'S3は自動で最低3箇所にデータをコピー。1箇所壊れても他で復旧可能。',
    image: '重要書類を家・銀行・親の家の3箇所に保管 = S3の冗長化',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'one-zone-ia-enhanced-1',
    en: 'One Zone-IA',
    jp: '1箇所のみ保存（安いが壊れやすい）',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['One Zone-IA storage', 'single AZ storage'],
    usage: [
      'One Zone-IA stores data in single location = One Zone-IAは1箇所のみにデータ保存',
      'Choose One Zone-IA for recreatable data = 再作成可能データにOne Zone-IAを選択',
      'One Zone-IA costs less than Standard = One Zone-IAはStandardより安価'
    ],
    nuance: '1つのデータセンターのみ。壊れても再作成できるデータ専用。',
    image: '自宅の押し入れ1箇所のみに保管 = 安いが火事で消えるリスク',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'glacier-enhanced-1',
    en: 'Glacier',
    jp: '氷河・長期保存モード（取り出し時間かかる）',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['S3 Glacier', 'Glacier storage class'],
    usage: [
      'Archive data to Glacier for long-term storage = 長期保存用にデータをGlacierにアーカイブ',
      'Glacier retrieval takes hours = Glacierの取り出しには数時間必要',
      'Use Glacier for compliance data = コンプライアンスデータにGlacierを使用'
    ],
    nuance: 'S3の保存クラスの1つ。氷河のように凍結保存。安いが取り出しに時間。',
    image: '冷凍庫の奥に入れた食材 = すぐ使えないが長期保存可能',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'archive-storage-enhanced-1',
    en: 'archive (storage)',
    jp: 'アーカイブ・古いデータの保管',
    category: 'AWS用語',
    situation: ['Technical', 'Business'],
    form: ['archive data', 'long-term archive'],
    usage: [
      'Archive old files to reduce costs = 古いファイルをアーカイブしてコスト削減',
      'Legal documents require archive storage = 法的書類にはアーカイブ保存が必要',
      'Archive retrieval for compliance = コンプライアンス用アーカイブ取り出し'
    ],
    nuance: 'achieve（達成）ではなく、古いデータを倉庫にしまう概念。',
    image: '卒業アルバムを倉庫の箱にしまう = archive storage',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'digital-preservation-enhanced-1',
    en: 'digital preservation',
    jp: 'デジタル長期保存・電子資料保護',
    category: 'AWS用語',
    situation: ['Technical', 'Business'],
    form: ['data preservation', 'digital archiving'],
    usage: [
      'Digital preservation of historical documents = 歴史文書のデジタル長期保存',
      'Ensure digital preservation compliance = デジタル保存コンプライアンスを確保',
      'Digital preservation strategy for museums = 博物館向けデジタル保存戦略'
    ],
    nuance: 'preserve = 保護する・守る。デジタルデータを将来も読める状態で保管。',
    image: '古いフィルムをデジタル化して永久保存 = digital preservation',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'storage-class-enhanced-1',
    en: 'storage class',
    jp: 'ストレージクラス・保存方法の種類',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['S3 storage classes', 'choose storage class'],
    usage: [
      'S3 offers multiple storage classes = S3は複数のストレージクラスを提供',
      'Choose appropriate storage class = 適切なストレージクラスを選択',
      'Different storage classes have different costs = ストレージクラスにより料金が異なる'
    ],
    nuance: 'S3内での保存方法の種類。Standard、IA、Glacierなどの分類名。',
    image: 'ホテルの部屋タイプ（スタンダード、スイート、エコノミー）= storage class',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'ia-infrequent-access-enhanced-1',
    en: 'IA (Infrequent Access)',
    jp: 'IA・低頻度アクセス（月1-2回程度）',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['S3 Standard-IA', 'infrequent access pattern'],
    usage: [
      'Use IA for monthly backups = 月次バックアップにIAを使用',
      'IA reduces storage costs = IAでストレージコストを削減',
      'Perfect for infrequent access data = 低頻度アクセスデータに最適'
    ],
    nuance: 'Standard より安いが、アクセス時に料金発生。月1-2回程度の利用に最適。',
    image: '年に数回開く押し入れの箱 = めったに使わないが保存は必要',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'rename-enhanced-1',
    en: 'rename',
    jp: '名前を変える・リネーム',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['rename file', 'rename to'],
    usage: [
      'Rename index.html to waves.html = index.htmlをwaves.htmlに名前変更',
      'Rename the bucket for clarity = 分かりやすくするためバケット名変更',
      'Files can be renamed easily = ファイルは簡単にリネーム可能'
    ],
    nuance: 'ファイルやリソースの名前を変更すること。設定も合わせて更新が必要。',
    image: '店の看板を「田中商店」から「田中ベーカリー」に付け替える',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'accordingly-enhanced-1',
    en: 'accordingly',
    jp: 'それに応じて・それに合わせて',
    category: 'AWS用語',
    situation: ['Technical', 'Business'],
    form: ['update accordingly', 'adjust accordingly'],
    usage: [
      'Update settings accordingly = 設定をそれに合わせて更新',
      'Prices adjusted accordingly = 価格をそれに応じて調整',
      'Configure services accordingly = サービスをそれに合わせて構成'
    ],
    nuance: '前の変更に連動して、関連する部分も合わせて調整すること。',
    image: '引っ越し→住所変更→銀行・会社にも連絡 = accordingly対応',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'reference-point-enhanced-1',
    en: 'reference (point to)',
    jp: '参照する・指し示す',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['reference the file', 'reference new filename'],
    usage: [
      'Settings reference the new filename = 設定が新しいファイル名を参照',
      'Configuration references the correct path = 構成が正しいパスを参照',
      'URL references the updated resource = URLが更新されたリソースを参照'
    ],
    nuance: '「参考資料」ではなく「指定する・ポイントする」の意味。技術文書でよく使用。',
    image: '道路標識が目的地を指し示す = reference（参照・指定）',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'provisioning-improved-enhanced-1',
    en: 'provisioning',
    jp: '動的に準備すること',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['provision resources', 'auto-provisioning'],
    partOfSpeech: '名詞（動名詞）',
    simpleTranslation: '必要な時に必要な分だけ準備',
    usage: [
      'Server provisioning takes time = サーバー準備には時間がかかる',
      'Auto-provisioning saves effort = 自動準備で労力削減',
      'Cloud provisioning is flexible = クラウド準備は柔軟'
    ],
    nuance: 'ready（準備済み）と違い「必要に応じて動的に用意する過程」。配布ではなく準備作業。',
    image: '結婚式場が来客数に合わせて机と椅子を準備する作業 = provisioning',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'upfront-improved-enhanced-1',
    en: 'upfront',
    jp: '前払いの・事前の',
    category: 'AWS用語',
    situation: ['Business'],
    form: ['upfront costs', 'upfront payment'],
    partOfSpeech: '形容詞・副詞',
    simpleTranslation: '最初にまとめて払う',
    usage: [
      'No upfront costs = 初期費用なし',
      'Pay upfront for discount = 前払いで割引',
      'Avoid upfront investment = 事前投資を回避'
    ],
    nuance: '最初にドカンと払うこと。従量課金（後払い）の対義語。',
    image: '車を現金一括購入（upfront） vs 月々のローン払い',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'bucket-simple-enhanced-1',
    en: 'bucket',
    jp: '入れ物・格納場所',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['S3 bucket', 'bucket name'],
    partOfSpeech: '名詞',
    simpleTranslation: 'ファイルを入れる箱',
    usage: [
      'Create a bucket = 入れ物を作成',
      'Upload files to bucket = ファイルを入れ物にアップロード',
      'Bucket stores objects = 入れ物がオブジェクトを保存'
    ],
    nuance: 'バケツが語源だが、AWSでは「ファイルを入れる最上位の箱」の意味。',
    image: '大きなプラスチック製収納ボックス = bucket（ファイルを入れる箱）',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'reference-multiple-enhanced-1',
    en: 'reference',
    jp: '指定・参照・資料',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['reference (動詞)', 'reference (名詞)'],
    partOfSpeech: '動詞・名詞',
    simpleTranslation: '動詞=指す、名詞=資料',
    usage: [
      'Settings reference the file = 設定がファイルを指定（動詞）',
      'Use as a reference = 資料として使用（名詞）',
      'Reference documentation = 参考資料（形容詞的）'
    ],
    nuance: '品詞で意味が変わる重要単語。動詞は「指定」、名詞は「資料・手引き」。',
    image: '動詞=道路標識が目的地を指す、名詞=地図や案内書',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'accordingly-improved-enhanced-1',
    en: 'accordingly',
    jp: '連動して・合わせて',
    category: 'AWS用語',
    situation: ['Technical', 'Business'],
    form: ['update accordingly', 'adjust accordingly'],
    partOfSpeech: '副詞',
    simpleTranslation: '前の変更に合わせて',
    usage: [
      'File renamed, so update settings accordingly = ファイル名変更したので設定も連動して更新',
      'Price changed, bill accordingly = 価格変更、請求も合わせて調整',
      'System upgraded, configure accordingly = システム更新、設定も連動して変更'
    ],
    nuance: '「それ」ではなく「前に起きた変更」を指す。連鎖反応的な調整を表現。',
    image: 'ドミノ倒し = 最初の変更に連動して他も順番に調整される',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'root-object-enhanced-1',
    en: 'root object',
    jp: 'メインファイル・入口ファイル',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['root object', 'root file'],
    partOfSpeech: '名詞',
    simpleTranslation: 'ウェブサイトの入口ファイル',
    usage: [
      'Set index.html as root object = index.htmlをメインファイルに設定',
      'Root object loads first = 入口ファイルが最初に読み込まれる',
      'Change root object name = メインファイル名を変更'
    ],
    nuance: 'root=根っこ・最初、object=ファイル。ウェブサイトに最初にアクセスした時に表示されるファイル。',
    image: 'お店の入口ドア = 最初に通る場所 = root object',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'participle-construction-enhanced-1',
    en: 'participle construction (分詞構文)',
    jp: '主語とbe動詞を省略した修飾表現',
    category: '文法・構文',
    situation: ['Technical', 'Formal Writing'],
    form: ['[主語 + be動詞] + 分詞', '省略パターン'],
    partOfSpeech: '文法構造',
    simpleTranslation: '文章を短くするテクニック',
    usage: [
      'The solution, capable of handling traffic, is great = そのソリューションは、トラフィックを処理でき、素晴らしい',
      'The app developed by our team won = 我々のチームが開発したアプリが勝った',
      'The man sitting there is my friend = そこに座っている男性は友人です'
    ],
    nuance: '書き言葉専用。会話では使わない。「which is」「who is」などを省略して文章を簡潔にする。',
    image: '長い説明を短縮するハサミ = 不要な部分（主語・be動詞）をカット',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'capable-of-structure-enhanced-1',
    en: 'capable of + 動名詞',
    jp: '～する能力がある（文法パターン）',
    category: '文法・構文',
    situation: ['Technical', 'Business'],
    form: ['capable of + doing', '形容詞 + of + 動名詞'],
    partOfSpeech: '形容詞句',
    simpleTranslation: '～できる（能力を強調）',
    usage: [
      'This system, capable of handling 1000 users, is reliable = このシステムは1000ユーザーを処理でき、信頼できる',
      'She is capable of solving complex problems = 彼女は複雑な問題を解決する能力がある',
      'The server capable of auto-scaling = 自動スケールできるサーバー'
    ],
    nuance: 'capable of の後は必ず動名詞（-ing）。canより能力・実力があることを強調。',
    image: '筋肉ムキムキの人 = capable of lifting heavy things',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'would-be-enhanced-1',
    en: 'would be',
    jp: '～だろう・～になるだろう（仮定・想像）',
    category: '文法・構文',
    situation: ['Business', 'Casual'],
    form: ['would + be', '仮定法'],
    partOfSpeech: '助動詞',
    simpleTranslation: '想像や提案を表す',
    usage: [
      'What would be the best way? = どれが最良だと思いますか？',
      'That would be great = それは素晴らしいでしょう',
      'It would be difficult = それは困難でしょう'
    ],
    nuance: 'is（断定）と違い、想像・仮定・丁寧な提案を表現。まだ決まっていない事柄について使用。',
    image: '雲の中のお城 = まだ現実ではない想像の話 = would be',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'traffic-web-enhanced-1',
    en: 'traffic (web)',
    jp: 'トラフィック・アクセス数',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['web traffic', 'traffic volume'],
    partOfSpeech: '名詞',
    simpleTranslation: 'ウェブサイトへのアクセス数',
    usage: [
      'Handle unlimited traffic = 無制限のアクセスに対応',
      'High traffic website = 高アクセスのウェブサイト',
      'Traffic spike during sales = セール中のアクセス急増'
    ],
    nuance: '道路の交通量のウェブ版。同時にサイトを見る人の数。サーバー負荷の原因。',
    image: '道路の車の量 = 交通量、ウェブサイトのアクセス数 = web traffic',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'comma-additional-info-enhanced-1',
    en: 'comma for additional info',
    jp: 'カンマ（追加情報用）',
    category: '文法・構文',
    situation: ['Technical', 'Formal Writing'],
    form: ['主文, 追加情報', '文, 修飾句'],
    partOfSpeech: '句読点',
    simpleTranslation: '追加説明を付ける印',
    usage: [
      'This solution, capable of handling traffic, is great = このソリューション（トラフィック処理可能）は素晴らしい',
      'The app, developed last year, won an award = そのアプリ（昨年開発）が受賞した',
      'My friend, living in Tokyo, visited me = 友人（東京在住）が訪問した'
    ],
    nuance: '突然現れるカンマは「ちなみに」「補足すると」の意味。追加情報の合図。',
    image: '会話の「ちなみに」= カンマで挟まれた追加情報',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'prompt-verb-enhanced-1',
    en: 'prompt (verb)',
    jp: '起こさせる・きっかけを与える',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['prompt + 目的語 + to動詞', 'prompt something'],
    partOfSpeech: '動詞',
    simpleTranslation: 'ボタンを押すとベルが鳴る的な「させる」',
    usage: [
      'Requests prompt S3 to serve files = リクエストがS3にファイル配信をさせる',
      'This action prompts the system to restart = この操作がシステム再起動のきっかけになる',
      'User input prompts the application to respond = ユーザー入力がアプリに反応させる'
    ],
    nuance: '人に促すではなく、物事を起こすきっかけ・引き金。機械的な因果関係を表現。',
    image: 'ドミノ倒しの最初の一押し = 連鎖反応のきっかけ = prompt',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'requests-to-url-enhanced-1',
    en: 'requests to URL',
    jp: 'URLへのリクエスト（名詞+前置詞句）',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['requests to + 場所', '名詞 + to + 名詞'],
    partOfSpeech: '名詞句',
    simpleTranslation: 'そのURLにアクセスする要求',
    usage: [
      'Requests to this URL prompt S3 = このURLへのリクエストがS3を起動',
      'All requests to the server are logged = サーバーへのリクエストは全て記録',
      'Handle requests to the API endpoint = APIエンドポイントへのリクエストを処理'
    ],
    nuance: 'requestは動詞ではなく名詞（複数形）。toは前置詞で「～への」方向を示す。',
    image: '郵便ポスト（URL）に手紙（request）を投函 = requests to URL',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'root-object-enhanced-1',
    en: 'root object',
    jp: 'ルートオブジェクト・メインファイル',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['名詞'],
    partOfSpeech: '名詞',
    simpleTranslation: 'ウェブサイトの最初に表示されるファイル',
    usage: [
      'Set index.html as root object = index.htmlをメインファイルに設定',
      'Change root object to waves.html = メインファイルをwaves.htmlに変更',
      'Root object loads first = 最初にメインファイルが読み込まれる'
    ],
    nuance: '人がウェブサイトのURLを打つと最初に表示されるファイル。通常はindex.html。',
    image: 'お店の入口ドア = 最初に通る場所 = root object',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'accordingly-enhanced-1',
    en: 'accordingly',
    jp: 'それに合わせて・適切に',
    category: 'AWS用語',
    situation: ['Technical', 'Business'],
    form: ['副詞'],
    partOfSpeech: '副詞',
    simpleTranslation: 'ちゃんと・適切に',
    usage: [
      'Settings updated accordingly = 設定をそれに合わせて更新',
      'Prices adjusted accordingly = 料金を適切に調整',
      'Configure accordingly = 適切に設定'
    ],
    nuance: '前の変更に連動して関連部分も合わせて調整すること。',
    image: 'ドミノ倒し = 最初の変更に連動して他も順番に調整',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'review-content-enhanced-1',
    en: 'review',
    jp: '内容を確認する・レビューする',
    category: 'ビジネス英語',
    situation: ['Business', 'Technical'],
    form: ['動詞', '名詞'],
    partOfSpeech: '動詞・名詞',
    simpleTranslation: '見直す・確認する',
    usage: [
      'Review the document = 文書の内容を確認する',
      'Code review process = コードレビュープロセス',
      'Let me review this = これを確認させてください'
    ],
    nuance: '単なる「見る」ではなく、内容をチェック・検討すること。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'lab-instructions-enhanced-1',
    en: 'lab instructions',
    jp: '演習の手順書・実習指示書',
    category: '学習用語',
    situation: ['Technical', 'Academic'],
    form: ['名詞'],
    partOfSpeech: '名詞',
    simpleTranslation: '練習用の手順書',
    usage: [
      'Follow the lab instructions carefully = 演習の手順書を注意深く従って',
      'Lab instructions provide step-by-step guidance = 実習指示書がステップごとの案内を提供',
      'Download lab instructions before starting = 開始前に演習手順書をダウンロード'
    ],
    nuance: 'laboratory（実験室）の略。学習コンテキストでは「演習・実習の練習場」の意味。',
    image: '学校の理科実験の手順書 = 順番通りに進める練習用ガイド',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'lab-practice-enhanced-1',
    en: 'lab',
    jp: '演習・実習・ラボ',
    category: '学習用語',
    situation: ['Technical', 'Academic'],
    form: ['名詞'],
    partOfSpeech: '名詞',
    simpleTranslation: '練習用の場所・演習',
    usage: [
      'Complete the hands-on lab = ハンズオン演習を完了する',
      'Lab environment for practice = 練習用のラボ環境',
      'Programming lab session = プログラミング演習セッション'
    ],
    nuance: '「実験室」だけでなく、オンライン学習では「演習・実習」の意味でよく使われる。',
    image: '学校のコンピューター室 = 実際に操作して学ぶ練習場所',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'not-used-modifier',
    en: 'not used (modifier)',
    jp: '使用されない（修飾語）',
    category: '文法・構文',
    situation: ['Technical', 'Formal'],
    form: ['過去分詞による修飾'],
    partOfSpeech: '修飾句',
    simpleTranslation: '使わない（修飾）',
    usage: [
      'Services not used in this lab = このラボで使用されないサービス',
      'Files not needed are deleted = 不要なファイルは削除される',
      'Features not available are hidden = 利用できない機能は非表示'
    ],
    nuance: '「which are not used」を省略した分詞による修飾。文章を簡潔にする技法。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'disabled-technical',
    en: 'disabled',
    jp: '無効化された・使用不可',
    category: 'AWS用語',
    situation: ['Technical'],
    form: ['過去分詞', '形容詞'],
    partOfSpeech: '形容詞・過去分詞',
    simpleTranslation: '使えない状態',
    usage: [
      'Services are disabled = サービスが無効化されている',
      'Disabled features cannot be accessed = 無効な機能はアクセス不可',
      'Keep unnecessary services disabled = 不要なサービスは無効のまま'
    ],
    nuance: 'enable（有効）の反対。意図的に使えない状態にすること。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'goes-placement-1',
    en: 'goes between',
    jp: '～の間に入る・配置される',
    category: '位置・配置',
    situation: ['Technical', 'Casual'],
    form: ['主語 + goes + between + A and B'],
    usage: [
      'The text goes between the opening and closing tags = テキストは開始タグと終了タグの間に入る',
      'This part goes between the header and footer = この部分はヘッダーとフッターの間に配置される',
      'The comma goes between the items in a list = カンマはリストの項目間に入る'
    ],
    nuance: 'プログラミングや説明書でよく使う表現。「配置される」「置かれる」のニュアンス',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  // あなたの既存コードに追加する新しい単語データ

  {
    id: 'condensed-enhanced-1',
    en: 'condensed',
    jp: '圧縮された・凝縮された・詰め込まれた',
    category: 'デザイン・レイアウト',
    situation: ['Programming', 'Design', 'UI'],
    form: ['形容詞', 'more condensed', 'condensed version'],
    usage: [
      'The layout is more condensed = レイアウトがより詰まっている',
      'We need a condensed version = 圧縮版が必要',
      'Keep the design condensed = デザインを凝縮して保つ'
    ],
    nuance: 'UI/デザインでスペースを効率的に使う、情報を詰め込むという意味でよく使われる。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'stuff-enhanced-1',
    en: 'stuff',
    jp: 'もの・内容・素材（カジュアル）',
    category: '超頻出表現',
    situation: ['Casual'],
    form: ['名詞', 'this stuff', 'the stuff'],
    usage: [
      'This is stuff we outline = これが私たちが概要を示す内容',
      'I need to learn this stuff = この内容を学ぶ必要がある',
      'Cool stuff! = すごいね！'
    ],
    nuance: '「thing」よりもっとカジュアル。何でも指せる便利な単語。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'outline-enhanced-1',
    en: 'outline',
    jp: '概要を示す・アウトラインを作る',
    category: 'ビジネス英語',
    situation: ['Business', 'Programming'],
    form: ['動詞', 'outline + 名詞'],
    usage: [
      'We outline the plan = 計画の概要を示す',
      'Let me outline the steps = ステップの概要を説明します',
      'She outlined the requirements = 彼女が要件の概要を示した'
    ],
    nuance: '詳細ではなく大枠・骨組みを示すという意味。プレゼンでよく使う。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'spread-apart-enhanced-1',
    en: 'spread apart',
    jp: '広がって離れている・散らばっている',
    category: 'デザイン・レイアウト',
    situation: ['Design', 'Programming'],
    form: ['句動詞', 'spread apart'],
    usage: [
      'All elements spread apart = 全ての要素が離れて配置されている',
      'The buttons are spread apart = ボタンが離れて配置されている',
      'Don\'t spread them too far apart = あまり離しすぎないで'
    ],
    nuance: 'UI/デザインで要素間のスペースが空いている状態。レイアウト調整でよく使う。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'in-depth-enhanced-1',
    en: 'in-depth',
    jp: '詳細な・深い・徹底的な',
    category: '学習・分析',
    situation: ['Business', 'Academic'],
    form: ['形容詞', 'in-depth + 名詞'],
    usage: [
      'Learn more in-depth = より詳しく学ぶ',
      'In-depth analysis = 詳細な分析',
      'We need an in-depth discussion = 徹底的な議論が必要'
    ],
    nuance: '表面的ではなく、深く掘り下げて詳しく調べる・学ぶという意味。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'full-blown-enhanced-1',
    en: 'full-blown',
    jp: '本格的な・完全な・全面的な',
    category: 'プログラミング・開発',
    situation: ['Programming', 'Business'],
    form: ['形容詞', 'full-blown + 名詞'],
    usage: [
      'A full-blown application = 本格的なアプリケーション',
      'Full-blown development = 全面的な開発',
      'This became a full-blown project = これは本格的なプロジェクトになった'
    ],
    nuance: '簡単なものではなく、本格的で完全に発展したもの。「ちゃんとした」「本物の」という感じ。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  // あなたの既存コードに追加する新しい単語データ

  {
    id: 'condensed-enhanced-1',
    en: 'condensed',
    jp: '圧縮された・凝縮された・詰め込まれた',
    category: 'デザイン・レイアウト',
    situation: ['Programming', 'Design', 'UI'],
    form: ['形容詞', 'more condensed', 'condensed version'],
    usage: [
      'The layout is more condensed = レイアウトがより詰まっている',
      'We need a condensed version = 圧縮版が必要',
      'Keep the design condensed = デザインを凝縮して保つ'
    ],
    nuance: 'UI/デザインでスペースを効率的に使う、情報を詰め込むという意味でよく使われる。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'stuff-enhanced-1',
    en: 'stuff',
    jp: 'もの・内容・素材（カジュアル）',
    category: '超頻出表現',
    situation: ['Casual'],
    form: ['名詞', 'this stuff', 'the stuff'],
    usage: [
      'This is stuff we outline = これが私たちが概要を示す内容',
      'I need to learn this stuff = この内容を学ぶ必要がある',
      'Cool stuff! = すごいね！'
    ],
    nuance: '「thing」よりもっとカジュアル。何でも指せる便利な単語。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'outline-enhanced-1',
    en: 'outline',
    jp: '概要を示す・アウトラインを作る',
    category: 'ビジネス英語',
    situation: ['Business', 'Programming'],
    form: ['動詞', 'outline + 名詞'],
    usage: [
      'We outline the plan = 計画の概要を示す',
      'Let me outline the steps = ステップの概要を説明します',
      'She outlined the requirements = 彼女が要件の概要を示した'
    ],
    nuance: '詳細ではなく大枠・骨組みを示すという意味。プレゼンでよく使う。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'spread-apart-enhanced-1',
    en: 'spread apart',
    jp: '広がって離れている・散らばっている',
    category: 'デザイン・レイアウト',
    situation: ['Design', 'Programming'],
    form: ['句動詞', 'spread apart'],
    usage: [
      'All elements spread apart = 全ての要素が離れて配置されている',
      'The buttons are spread apart = ボタンが離れて配置されている',
      'Don\'t spread them too far apart = あまり離しすぎないで'
    ],
    nuance: 'UI/デザインで要素間のスペースが空いている状態。レイアウト調整でよく使う。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'in-depth-enhanced-1',
    en: 'in-depth',
    jp: '詳細な・深い・徹底的な',
    category: '学習・分析',
    situation: ['Business', 'Academic'],
    form: ['形容詞', 'in-depth + 名詞'],
    usage: [
      'Learn more in-depth = より詳しく学ぶ',
      'In-depth analysis = 詳細な分析',
      'We need an in-depth discussion = 徹底的な議論が必要'
    ],
    nuance: '表面的ではなく、深く掘り下げて詳しく調べる・学ぶという意味。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'full-blown-enhanced-1',
    en: 'full-blown',
    jp: '本格的な・完全な・全面的な',
    category: 'プログラミング・開発',
    situation: ['Programming', 'Business'],
    form: ['形容詞', 'full-blown + 名詞'],
    usage: [
      'A full-blown application = 本格的なアプリケーション',
      'Full-blown development = 全面的な開発',
      'This became a full-blown project = これは本格的なプロジェクトになった'
    ],
    nuance: '簡単なものではなく、本格的で完全に発展したもの。「ちゃんとした」「本物の」という感じ。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'signify-enhanced-1',
    en: 'signify',
    jp: '示す・意味する・表す',
    category: 'プログラミング基礎',
    situation: ['Programming', 'Business', 'Academic'],
    form: ['動詞', 'signify + 名詞'],
    usage: [
      'Headings signify importance = 見出しが重要性を示す',
      'This color signifies error = この色はエラーを意味する',
      'The symbol signifies completion = そのシンボルは完了を表す'
    ],
    nuance: '「何かを表す・示す」という意味。HTMLやUI説明でよく使われる。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'further-to-enhanced-1',
    en: 'further to',
    jp: '〜の方向により遠く・さらに〜へ',
    category: 'デザイン・レイアウト',
    situation: ['Programming', 'Design'],
    form: ['前置詞句', 'further to the right/left'],
    usage: [
      'Two spaces further to the right = 2スペース分さらに右に',
      'Move it further to the left = もっと左に動かして',
      'Place it further to the bottom = もっと下に配置して'
    ],
    nuance: 'インデントやレイアウト調整の説明で使う。「より〜の方向に」という意味。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'attribute-enhanced-1',
    en: 'attribute',
    jp: '属性・特性・設定項目',
    category: 'プログラミング基礎',
    situation: ['Programming', 'Web'],
    form: ['名詞', 'HTML attributes', 'element attribute'],
    usage: [
      'HTML attributes control behavior = HTML属性が振る舞いを制御する',
      'Add an alt attribute = alt属性を追加する',
      'The src attribute specifies the image = src属性が画像を指定する'
    ],
    nuance: 'プログラミングでは「属性」。タグに付ける設定項目のこと。動詞「起因する」とは別物。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'whats-wrong-enhanced-1',
    en: "What's wrong with",
    jp: '〜のどこが問題？何が悪い？',
    category: 'デバッグ・質問',
    situation: ['Programming', 'Casual'],
    form: ['疑問文', "What's wrong with + 名詞"],
    usage: [
      "What's wrong with this code? = このコードのどこが問題？",
      "What's wrong with the following? = 以下のどこが悪い？",
      "What's wrong with my logic? = 私のロジックの何が間違ってる？"
    ],
    nuance: 'デバッグで最も使う表現。カジュアルで自然な聞き方。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'the-following-enhanced-1',
    en: 'the following',
    jp: '以下・次の',
    category: '説明・文書',
    situation: ['Business', 'Programming', 'Academic'],
    form: ['名詞句', 'the following + 名詞', '単独で使用'],
    usage: [
      'Check the following code = 以下のコードを確認して',
      'The following is important = 以下が重要です',
      'See the following example = 次の例を見て'
    ],
    nuance: 'フォーマル。文書やコードの説明でよく使う。「次に示すもの」という意味。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'where-is-the-problem-enhanced-1',
    en: 'Where is the problem',
    jp: '問題はどこ？どこがダメ？',
    category: 'デバッグ・質問',
    situation: ['Programming', 'Business'],
    form: ['疑問文', 'Where is the problem + in/with'],
    usage: [
      'Where is the problem in this code? = このコードの問題はどこ？',
      'Where is the problem? = どこが問題？',
      'Can you tell me where the problem is? = 問題箇所を教えてくれる？'
    ],
    nuance: '場所を特定したい時。"What\'s wrong"より具体的な箇所を聞いている感じ。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },
  {
    id: 'not-working-enhanced-1',
    en: 'not working',
    jp: '動いてない・機能していない',
    category: 'デバッグ・トラブル',
    situation: ['Programming', 'Casual'],
    form: ['進行形', 'is not working', "isn't working"],
    usage: [
      'Why is this code not working? = なぜこのコード動かない？',
      "My function isn't working = 私の関数が動いてない",
      'The button is not working = ボタンが機能してない'
    ],
    nuance: 'デバッグで最頻出。「壊れてる」ではなく「機能してない」という意味。',
    createdAt: new Date(),
    correctCount: 0,
    mistakeCount: 0,
    mastered: false
  },

{
  id: 'sort-of-1',
  en: 'sort of',
  jp: 'なんというか・まあ・ちょっと',
  category: '超頻出表現',
  situation: ['Casual'],
  form: ['副詞句'],
  usage: [
    'It\'s sort of complicated = なんというか複雑なんだよね',
    'I sort of understand = まあなんとなくわかる',
    'He\'s sort of my friend = 彼はまあ友達みたいなもん'
  ],
  nuance: '曖昧にぼかす表現。断定を避けたい時に使う。会話で超頻出。',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},

{
  id: 'adapting-1',
  en: 'adapting',
  jp: '適応する・合わせる',
  category: 'プログラミング',
  situation: ['Programming', 'Business'],
  form: ['動名詞', '現在分詞'],
  usage: [
    'The layout is adapting to screen size = レイアウトが画面サイズに合わせている',
    'We\'re adapting our strategy = 戦略を適応させている',
    'The code is adapting to user input = コードがユーザー入力に対応している'
  ],
  nuance: 'レスポンシブデザインやプログラムの動的変化でよく使う。',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},

{
  id: 'spilling-out-1',
  en: 'spilling out',
  jp: 'はみ出す・溢れ出る',
  category: 'CSS・デザイン',
  situation: ['Programming'],
  form: ['動詞句', '進行形'],
  usage: [
    'The content is spilling out of the container = コンテンツがコンテナからはみ出している',
    'Text is spilling out the bottom = テキストが下からはみ出ている',
    'The div is spilling out of its parent = divが親要素からはみ出している'
  ],
  nuance: 'CSS overflowの問題を説明する時の定番表現。液体が溢れるイメージ。',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},

{
  id: 'theres-exceptions-1',
  en: 'there\'s exceptions / there are exceptions',
  jp: '例外がある',
  category: '超頻出表現',
  situation: ['Casual', 'Business', 'Programming'],
  form: ['There is/are + 名詞'],
  usage: [
    'There are exceptions to this rule = このルールには例外がある',
    'But there\'s exceptions = でも例外がある',
    'There are always exceptions = いつも例外はある'
  ],
  nuance: '「基本的にはそうだけど、例外もあるよ」という時に使う。説明でよく出てくる。',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},

{
  id: 'margin-inline-1',
  en: 'margin-inline',
  jp: '左右のマージン（論理プロパティ）',
  category: 'CSS・技術用語',
  situation: ['Programming'],
  form: ['CSSプロパティ'],
  usage: [
    'margin-inline: 20px = 左右に20pxのマージン',
    'margin-inline: auto = 左右を自動調整（中央寄せ）',
    'Use margin-inline instead of margin-left/right = margin-left/rightの代わりにmargin-inlineを使う'
  ],
  nuance: '横書きなら左右、縦書きなら上下になる「論理プロパティ」。言語に依存しない書き方。',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},

{
  id: 'logical-property-1',
  en: 'logical property',
  jp: '論理プロパティ',
  category: 'CSS・技術用語',
  situation: ['Programming'],
  form: ['名詞'],
  usage: [
    'margin-inline is a logical property = margin-inlineは論理プロパティ',
    'Logical properties adapt to writing mode = 論理プロパティは書字方向に適応する',
    'Use logical properties for international sites = 国際対応サイトには論理プロパティを使う'
  ],
  nuance: '「左右」「上下」ではなく「inline」「block」で指定するCSS。多言語対応に便利。',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},

{
  id: 'inline-axis-1',
  en: 'inline axis',
  jp: 'inline軸（文字が並ぶ方向）',
  category: 'CSS・技術用語',
  situation: ['Programming'],
  form: ['名詞'],
  usage: [
    'The inline axis is left to right in English = 英語のinline軸は左から右',
    'In vertical writing, the inline axis is top to bottom = 縦書きでは、inline軸は上から下',
    'margin-inline works along the inline axis = margin-inlineはinline軸に沿って機能する'
  ],
  nuance: '横書きなら「←→」、縦書きなら「↑↓」。文字が流れる方向のこと。',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},

{
  id: 'vertical-writing-mode-1',
  en: 'vertical writing mode',
  jp: '縦書きモード',
  category: 'CSS・技術用語',
  situation: ['Programming'],
  form: ['名詞'],
  usage: [
    'Japanese uses vertical writing mode = 日本語は縦書きモードを使う',
    'CSS supports vertical writing mode = CSSは縦書きモードをサポートしている',
    'In vertical writing mode, inline becomes vertical = 縦書きモードでは、inlineが縦になる'
  ],
  nuance: '日本語・中国語などで使われる縦書き。CSSで writing-mode: vertical-rl で指定。',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},
{
  id: 'abide-1',
  en: 'abide',
  jp: '従う、守る（規則や法律を）',
  category: '英文法・ビジネス用語',
  situation: ['Business', 'Formal Writing'],
  form: ['動詞'],
  usage: [
    'Both have to abide by the rules of English grammar = 両方とも英文法のルールに従わなければならない',
    'We must abide by the company policy = 会社の方針に従わなければならない',
    'All citizens must abide by the law = すべての市民は法律を守らなければならない'
  ],
  nuance: 'abide by ~ の形で使うことが多い。フォーマルな表現で、ビジネスや法律文書でよく使用される。',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},

{
  id: 'awe-1',
  en: 'awe',
  jp: '畏敬の念、畏怖',
  category: '感情表現',
  situation: ['Reading', 'Writing'],
  form: ['名詞'],
  usage: [
    'people approach them with a sense of suspicion and awe = 人々は疑念と畏敬の念を持ってデータベースに接する',
    'I was in awe of his talent = 彼の才能に畏敬の念を抱いた',
    'The Grand Canyon inspires awe = グランドキャニオンは畏敬の念を抱かせる'
  ],
  nuance: '何か大きくて強力なものに対する、驚きと尊敬が混ざった感情。類義語：wonder, reverence',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},

{
  id: 'fret-1',
  en: 'fret',
  jp: '心配する、くよくよ悩む',
  category: '感情表現',
  situation: ['Daily Conversation'],
  form: ['動詞'],
  usage: [
    'do not fret or feel intimidated = 心配したり怖がったりしないで',
    'Don\'t fret about it! = くよくよするな！',
    'She was fretting about the exam = 彼女は試験のことで心配していた'
  ],
  nuance: '小さなことを繰り返し心配する状態。worryよりも「くよくよ」というニュアンスが強い。',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},

{
  id: 'intimidated-1',
  en: 'intimidated',
  jp: '怖気づいた、怖がった、威圧された',
  category: '感情表現',
  situation: ['Daily Conversation', 'Business'],
  form: ['形容詞'],
  usage: [
    'do not fret or feel intimidated = 心配したり怖がったりしないで',
    'I feel intimidated by my new boss = 新しい上司に威圧感を感じる',
    'Don\'t be intimidated by the challenge = その挑戦に怖気づくな'
  ],
  nuance: '誰かや何かに圧倒されて怖いと感じる状態。intimidate（動詞）= 脅す、威圧する',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},

{
  id: 'rest-assured-1',
  en: 'rest assured',
  jp: '安心してください、心配しないで',
  category: 'ビジネス表現',
  situation: ['Business', 'Formal Writing'],
  form: ['イディオム'],
  usage: [
    'Rest assured, by the end of this curriculum... = 安心してください、このカリキュラムの終わりには...',
    'Rest assured that I will help you = 必ず助けますから安心してください',
    'You can rest assured that we will deliver on time = 必ず期日通りに納品しますのでご安心ください'
  ],
  nuance: '相手に確信を持たせる表現。フォーマルで丁寧な言い方。ビジネスメールでよく使う。',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},

{
  id: 'teaser-1',
  en: 'teaser',
  jp: '予告、さわり、ちょっとした紹介',
  category: 'ビジネス・メディア用語',
  situation: ['Business', 'Media'],
  form: ['名詞'],
  usage: [
    'This lesson is a teaser for that = このレッスンはその予告編です',
    'The trailer is just a teaser = その予告編はほんのさわりです',
    'Here\'s a teaser for our new product = 新製品のちょっとした紹介です'
  ],
  nuance: '映画の予告編や、本編の興味を引くための短い紹介。興味を引くために少しだけ見せる手法。類義語：preview, sneak peek',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},
{
  id: 'query-1',
  en: 'query',
  jp: '問い合わせる、検索する、照会する（データベースに対して）',
  category: 'プログラミング・データベース用語',
  situation: ['Programming', 'Database'],
  form: ['動詞', '名詞'],
  usage: [
    'A bioinformatic scientist can query genome data = バイオインフォマティクスの科学者はゲノムデータを検索できる',
    'You can query the database for user information = データベースからユーザー情報を検索できる',
    'I need to query this table to find the records = このテーブルを検索してレコードを見つける必要がある'
  ],
  nuance: 'データベースやシステムに対して情報を要求すること。SQLの"SELECT"文を実行するようなイメージ。名詞では「クエリ、問い合わせ」の意味。プログラミングでは必須単語。',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},
{
  id: 'in-a-way-that-1',
  en: 'in a way that',
  jp: '~するような方法で、~できるように',
  category: '英文法・接続表現',
  situation: ['Reading', 'Writing', 'Business'],
  form: ['イディオム'],
  usage: [
    'Store data in a way that lends itself to studying = 研究しやすいような方法でデータを保存する',
    'Explain it in a way that beginners can understand = 初心者が理解できるような方法で説明する',
    'Design the UI in a way that feels intuitive = 直感的に感じるような方法でUIをデザインする'
  ],
  nuance: '「どんな方法で」を説明する時の定番表現。技術文書やビジネス文書でよく使う。',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},

{
  id: 'lend-itself-to-1',
  en: 'lend itself to',
  jp: '~に適している、~しやすい、~に向いている',
  category: 'ビジネス・学術表現',
  situation: ['Reading', 'Writing', 'Business'],
  form: ['イディオム'],
  usage: [
    'This data lends itself to studying = このデータは研究に適している',
    'The format lends itself to automation = この形式は自動化に向いている',
    'This design doesn\'t lend itself to mobile use = このデザインはモバイル使用に向いていない'
  ],
  nuance: '何かが特定の用途に「自然と適している」というニュアンス。フォーマルな表現。is suitable for よりも洗練された言い方。',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},
{
  id: 'aim-to-1',
  en: 'aim to',
  jp: '~することを目指す、~しようとする',
  category: 'ビジネス・目的表現',
  situation: ['Business', 'Writing'],
  form: ['動詞句'],
  usage: [
    'the problem that it aims to solve = それが解決しようとする問題',
    'We aim to improve user experience = 私たちはユーザー体験の改善を目指している',
    'This project aims to reduce costs = このプロジェクトはコスト削減を目指している'
  ],
  nuance: 'try to よりもフォーマル。目標や意図を表現する時に使う。ビジネス文書で頻出。',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},

{
  id: 'limitation-1',
  en: 'limitation',
  jp: '制限、限界、欠点',
  category: 'ビジネス・技術用語',
  situation: ['Business', 'Programming', 'Writing'],
  form: ['名詞'],
  usage: [
    'the limitations of unstructured data = 非構造化データの限界',
    'This approach has some limitations = このアプローチにはいくつかの限界がある',
    'We need to understand the limitations of this system = このシステムの制限を理解する必要がある'
  ],
  nuance: '何かができない範囲、制約、弱点を指す。技術文書やビジネスでよく使う。複数形（limitations）で使うことが多い。',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},
{
  id: 'unwieldy-1',
  en: 'unwieldy',
  jp: '扱いにくい、手に負えない、使いづらい',
  category: '形容詞・問題表現',
  situation: ['Business', 'Writing'],
  form: ['形容詞'],
  usage: [
    'it soon becomes unwieldy = すぐに扱いにくくなる',
    'The codebase became unwieldy = コードベースが手に負えなくなった',
    'This system is too unwieldy to maintain = このシステムは管理するには複雑すぎる'
  ],
  nuance: '大きすぎたり複雑すぎたりして管理しにくい状態。unmanageable（管理不能）に近い。技術文書でよく使う。',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},

{
  id: 'tabular-format-1',
  en: 'tabular format',
  jp: '表形式（行と列で整理されたデータ形式）',
  category: 'データベース・技術用語',
  situation: ['Programming', 'Database', 'Business'],
  form: ['名詞'],
  usage: [
    'store data in tabular format = データを表形式で保存する',
    'Spreadsheets use tabular format = スプレッドシートは表形式を使う',
    'Convert this data to tabular format = このデータを表形式に変換する'
  ],
  nuance: 'table（表）の形容詞形。rows（行）とcolumns（列）で構成されるデータ形式。Excel、CSV、データベーステーブルなどが該当。',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},
{
  id: 'suppose-1',
  en: 'suppose',
  jp: '仮に~だとしよう、~が必要だとしよう',
  category: '例示・仮定表現',
  situation: ['Writing', 'Teaching', 'Business'],
  form: ['動詞'],
  usage: [
    'Suppose we need to store names = 仮に名前を保存する必要があるとしよう',
    'Suppose you have $1000 = 仮にあなたが1000ドル持っているとしよう',
    'Suppose the server crashes = サーバーがクラッシュしたとしよう'
  ],
  nuance: '例を出す時や、シナリオを説明する時の定番表現。Let\'s say や Imagine と同じような使い方。教材や説明文でよく使う。',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},

{
  id: 'clutter-1',
  en: 'clutter',
  jp: '散らかす、ごちゃごちゃにする / 散らかったもの',
  category: '動詞・名詞',
  situation: ['Daily Conversation', 'Programming'],
  form: ['動詞', '名詞'],
  usage: [
    'We don\'t want to clutter the spreadsheet = スプレッドシートをごちゃごちゃさせたくない',
    'This code is cluttered with comments = このコードはコメントでごちゃごちゃしている',
    'Remove the clutter from your desk = 机の上の散らかったものを片付けて'
  ],
  nuance: '物や情報が多すぎて整理されていない状態。プログラミングでは「コードが読みにくい」という意味でもよく使う。反対語: organize（整理する）',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},
{
  id: 'review-multiple-meanings-1',
  en: 'review',
  jp: 'レビュー、評価、口コミ / 見直す、復習する',
  category: '多義語',
  situation: ['Business', 'Programming', 'Study'],
  form: ['名詞', '動詞'],
  usage: [
    'Reviews worksheet = レビューのワークシート（ユーザーの評価を保存）',
    'Read customer reviews = 顧客レビューを読む',
    'Review the code before merging = マージする前にコードを見直す',
    'Let\'s review what we learned = 学んだことを復習しよう'
  ],
  nuance: `
【名詞】
- レビュー、評価、口コミ（商品やサービスへの意見）
  例：Amazon reviews, app reviews
  
- 復習、見直し
  例：exam review（試験の復習）
  
- 批評、論評
  例：movie review（映画評）

【動詞】
- 見直す、レビューする
  例：review the document（文書を見直す）
  
- 復習する
  例：review for the test（テストのために復習する）

文脈で判断：
- Webサイト・商品 → レビュー（評価）
- コード・文書 → 見直す
- 勉強 → 復習
  `,
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},
{
  id: 'analogous-1',
  en: 'analogous',
  jp: '類似した、似ている、対応する',
  category: '形容詞・比較表現',
  situation: ['Writing', 'Business', 'Academic'],
  form: ['形容詞'],
  usage: [
    'can be seen as analogous to = ~に類似していると見なせる',
    'This is analogous to a real-world scenario = これは現実世界のシナリオに似ている',
    'The structure is analogous to a tree = その構造は木に似ている'
  ],
  nuance: '2つのものが「構造や機能が似ている」という意味。similar（似ている）よりもフォーマルで、特に「対応関係がある」というニュアンス。学術文書や技術文書でよく使う。前置詞は "to" を使う（analogous to ~）',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},
{
  id: 'represent-1',
  en: 'represent',
  jp: '表す、示す、代表する',
  category: '動詞・説明表現',
  situation: ['Writing', 'Business', 'Programming'],
  form: ['動詞'],
  usage: [
    'Each row represents a single user = 各行は1人のユーザーを表す',
    'This icon represents a folder = このアイコンはフォルダーを表す',
    'The variable represents the total cost = この変数は合計金額を表す'
  ],
  nuance: '何かが別の何かを「象徴する、示す、代表する」という意味。データやシンボルが何を意味するかを説明する時によく使う。',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},

{
  id: 'attribute-1',
  en: 'attribute',
  jp: '属性、項目、特性（データの種類）',
  category: 'プログラミング・データベース用語',
  situation: ['Programming', 'Database'],
  form: ['名詞'],
  usage: [
    'columns represent attributes = 列は属性を表す',
    'The username attribute stores the user\'s name = username属性はユーザーの名前を保存する',
    'HTML attributes like "class" and "id" = classやidのようなHTML属性'
  ],
  nuance: 'データベースやプログラミングでは「データの項目、種類」を指す。例: ユーザーの属性 = 名前、年齢、メールなど。HTMLでは「タグの属性」（例: <img src="...">のsrc）も指す。',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},

{
  id: 'standardized-1',
  en: 'standardized',
  jp: '標準化された、統一された、規格化された',
  category: '形容詞・技術用語',
  situation: ['Business', 'Programming'],
  form: ['形容詞'],
  usage: [
    'a standardized way to store data = データを保存する統一された方法',
    'Use standardized naming conventions = 統一された命名規則を使う',
    'This is a standardized format = これは標準化されたフォーマットです'
  ],
  nuance: 'ルールや形式が統一されている状態。バラバラではなく、みんなが同じ方法を使っている。プログラミングでは「コーディング規約」などでよく使う。動詞形: standardize（標準化する）',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},

{
  id: 'particular-1',
  en: 'particular',
  jp: '特定の、特別な、個々の',
  category: '形容詞・限定表現',
  situation: ['Writing', 'Business'],
  form: ['形容詞'],
  usage: [
    'that particular attribute = その特定の属性',
    'This particular case is different = この特定のケースは違う',
    'Do you have a particular preference? = 何か特別な好みはありますか？'
  ],
  nuance: '数ある中から「特定の1つ」を指す時に使う。specific（具体的な）に近いが、particularの方が「個々の、それぞれの」というニュアンスが強い。',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},
{
  id: 'over-time-1',
  en: 'over time',
  jp: '時間が経つにつれて、徐々に、だんだんと',
  category: '時間表現',
  situation: ['Writing', 'Business', 'Daily Conversation'],
  form: ['副詞句'],
  usage: [
    'Over time, the amount of information starts to increase = 時間が経つにつれて、情報量が増え始める',
    'Your skills will improve over time = あなたのスキルは時間とともに向上する',
    'The system became unstable over time = システムは徐々に不安定になった'
  ],
  nuance: '「すぐに」ではなく「ゆっくりと、少しずつ」変化していくニュアンス。ビジネス文書や説明文でよく使う。注意: overtime（残業）とは別の言葉！',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},

{
  id: 'unwieldy-review-1',
  en: 'unwieldy',
  jp: '扱いにくい、手に負えない、管理しづらい',
  category: '形容詞・問題表現',
  situation: ['Business', 'Writing', 'Programming'],
  form: ['形容詞'],
  usage: [
    'The simple spreadsheet now becomes unwieldy = シンプルなスプレッドシートが今や扱いにくくなる',
    'The database became unwieldy = データベースが手に負えなくなった',
    'This code is too unwieldy to maintain = このコードは管理するには複雑すぎる'
  ],
  nuance: '大きすぎる、複雑すぎる、重すぎるなどの理由で「使いにくい、管理できない」状態。反対語: manageable（管理可能な）、wieldy（扱いやすい：ほぼ使われない）',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},

{
  id: 'benefit-from-1',
  en: 'benefit from',
  jp: '~から恩恵を受ける、~の利点がある、~すると良い',
  category: '動詞句・提案表現',
  situation: ['Business', 'Writing'],
  form: ['動詞句'],
  usage: [
    'you would probably benefit from moving to a database = データベースに移行すると良いでしょう',
    'You could benefit from learning Python = Pythonを学ぶと役立つでしょう',
    'The team would benefit from better communication = チームはより良いコミュニケーションで恩恵を受けるだろう'
  ],
  nuance: '「~すると良い結果になる」という提案やアドバイスをする時の丁寧な表現。would benefit from = ~すると良いでしょう（提案）',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},
{
  id: 'in-simple-terms-1',
  en: 'in simple terms',
  jp: '簡単に言うと、わかりやすく言えば',
  category: '説明表現',
  situation: ['Writing', 'Teaching', 'Business'],
  form: ['イディオム'],
  usage: [
    'In simple terms, the relational model defines... = 簡単に言うと、リレーショナルモデルは...を定義する',
    'In simple terms, this means... = わかりやすく言うと、これは...という意味です',
    'Let me explain in simple terms = 簡単に説明させてください'
  ],
  nuance: '複雑な概念をわかりやすく説明する時の定番フレーズ。教える時や説明する時によく使う。類似表現: in other words（言い換えると）、simply put（簡潔に言うと）',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},

{
  id: 'relational-model-1',
  en: 'relational model',
  jp: 'リレーショナルモデル（関係モデル）',
  category: 'データベース・技術用語',
  situation: ['Programming', 'Database'],
  form: ['名詞'],
  usage: [
    'the relational model defines a set of relations = リレーショナルモデルは複数のリレーションを定義する',
    'The relational model uses tables = リレーショナルモデルはテーブルを使う',
    'This database follows the relational model = このデータベースはリレーショナルモデルに従っている'
  ],
  nuance: 'データベースの設計方法の1つ。複数のテーブルを作り、テーブル同士の「関係（リレーション）」を定義することでデータを管理する考え方。1970年代にE.F.Coddが提唱。',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},
{
  id: 'elevate-1',
  en: 'elevate',
  jp: '高める、向上させる、レベルアップさせる',
  category: '動詞・改善表現',
  situation: ['Business', 'Writing'],
  form: ['動詞'],
  usage: [
    'elevates our database from... to... = データベースを...から...にレベルアップさせる',
    'This will elevate your skills = これはあなたのスキルを向上させる',
    'Elevate the user experience = ユーザー体験を向上させる'
  ],
  nuance: 'improve（改善する）より洗練された表現。「より高いレベルに持ち上げる」イメージ。ビジネスや技術文書でよく使う。名詞形: elevation（向上、昇格）',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},

{
  id: 'dimensional-1',
  en: 'dimensional',
  jp: '次元の（2次元、3次元など）',
  category: '形容詞・技術用語',
  situation: ['Programming', 'Math'],
  form: ['形容詞'],
  usage: [
    'a flat, two-dimensional table = 平面的な2次元テーブル',
    '3-dimensional graphics = 3次元グラフィックス',
    'multi-dimensional array = 多次元配列'
  ],
  nuance: 'dimension（次元）の形容詞形。2D（two-dimensional）= 平面、3D（three-dimensional）= 立体。データ構造やグラフィックスの文脈でよく使う。',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},

{
  id: 'cut-down-on-1',
  en: 'cut down on',
  jp: '減らす、削減する、抑える',
  category: '動詞句・削減表現',
  situation: ['Business', 'Daily Conversation'],
  form: ['動詞句'],
  usage: [
    'cut down on duplicated data = 重複データを減らす',
    'We need to cut down on expenses = 経費を削減する必要がある',
    'I\'m trying to cut down on coffee = コーヒーを減らそうとしている'
  ],
  nuance: 'reduce（減らす）とほぼ同じだが、よりカジュアル。「無駄を省く」というニュアンス。ビジネスでも日常会話でもよく使う。on の後に減らしたいものを置く。',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},

{
  id: 'interact-with-1',
  en: 'interact with',
  jp: '相互作用する、やり取りする、操作する',
  category: '動詞句・操作表現',
  situation: ['Programming', 'Business'],
  form: ['動詞句'],
  usage: [
    'a data structure for us to interact with = 私たちが操作するためのデータ構造',
    'how the data can interact = データがどのように相互作用できるか',
    'Users interact with the interface = ユーザーはインターフェースと対話する'
  ],
  nuance: 'データやシステムに対して「操作する、やり取りする」という意味。プログラミングでは「APIとinteractする」「データベースとinteractする」のように使う。双方向のやり取りのイメージ。',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},
{
  id: 'conform-to-1',
  en: 'conform to',
  jp: '〜に従う、〜に準拠する',
  category: '動詞句・規則表現',
  situation: ['Business', 'Programming'],
  form: ['動詞句'],
  usage: [
    'syntax that conforms to certain conventions = 特定の規則に従う構文',
    'This code conforms to the style guide = このコードはスタイルガイドに従っている',
    'All products must conform to safety standards = すべての製品は安全基準に準拠しなければならない'
  ],
  nuance: 'ルールや基準に「合わせる、従う」という意味。abide by や follow と似ているが、より formal。技術文書やビジネスでよく使う。',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},

{
  id: 'convention-1',
  en: 'convention',
  jp: '規則、慣習、取り決め',
  category: 'プログラミング・ビジネス用語',
  situation: ['Programming', 'Business'],
  form: ['名詞'],
  usage: [
    'conforms to certain conventions = 特定の規則に従う',
    'naming conventions = 命名規則',
    'Follow the coding conventions = コーディング規則に従う'
  ],
  nuance: 'プログラミングでは「コーディング規則」「命名規則」などを指す。みんなが従う「暗黙のルール」や「標準的なやり方」。例: 変数名はcamelCaseで書く、など。',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},

{
  id: 'robust-1',
  en: 'robust',
  jp: '堅牢な、頑丈な、強力な',
  category: '形容詞・性能表現',
  situation: ['Programming', 'Business'],
  form: ['形容詞'],
  usage: [
    'robust and scalable databases = 堅牢でスケーラブルなデータベース',
    'This system is very robust = このシステムは非常に堅牢だ',
    'We need a robust solution = 強力な解決策が必要だ'
  ],
  nuance: 'エラーに強い、壊れにくい、信頼性が高いという意味。システムやアプリが「多少の問題があっても動き続ける」状態。プログラミングでよく使う褒め言葉。',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},

{
  id: 'scalable-1',
  en: 'scalable',
  jp: 'スケーラブルな、拡張可能な',
  category: '形容詞・性能表現',
  situation: ['Programming', 'Business'],
  form: ['形容詞'],
  usage: [
    'robust, scalable databases = 堅牢で拡張可能なデータベース',
    'This architecture is highly scalable = このアーキテクチャは非常にスケーラブルだ',
    'We need a scalable solution = 拡張可能な解決策が必要だ'
  ],
  nuance: 'ユーザー数やデータ量が増えても対応できる状態。「10人でも1000万人でも動く」システム。スタートアップやIT業界で頻出。名詞形: scalability（拡張性）',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},

{
  id: 'vary-in-1',
  en: 'vary in',
  jp: '〜において異なる、〜の点で違う',
  category: '動詞句・比較表現',
  situation: ['Writing', 'Business'],
  form: ['動詞句'],
  usage: [
    'RDBMSes may vary in certain ways = RDBMSは特定の点で異なる場合がある',
    'Products vary in quality = 製品は品質において異なる',
    'Prices vary in different regions = 価格は地域によって異なる'
  ],
  nuance: '「〜の部分で違いがある」という意味。vary = 変わる、異なる。in の後に「どの点で違うか」を置く。',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},

{
  id: 'certain-ways-1',
  en: 'certain ways',
  jp: '特定の点で、ある部分で',
  category: '表現・曖昧な言い方',
  situation: ['Writing', 'Business'],
  form: ['名詞句'],
  usage: [
    'vary in certain ways = 特定の点で異なる',
    'This is similar in certain ways = これはある部分で似ている',
    'They differ in certain ways = 彼らは特定の点で違う'
  ],
  nuance: '具体的に何かは言わないが「いくつかの点で」というニュアンス。曖昧な表現だが、詳細を省略したい時に便利。',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},

{
  id: 'syntactical-1',
  en: 'syntactical',
  jp: '構文の、文法の',
  category: 'プログラミング用語',
  situation: ['Programming'],
  form: ['形容詞'],
  usage: [
    'slight syntactical differences = わずかな構文の違い',
    'This is a syntactical error = これは構文エラーです',
    'Pay attention to syntactical rules = 構文規則に注意してください'
  ],
  nuance: 'syntax（構文）の形容詞形。プログラミングでは「コードの書き方のルール」を指す。例: Python の if文の書き方と JavaScript の if文の書き方の違い。',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},

{
  id: 'loosely-1',
  en: 'loosely',
  jp: 'ゆるく、大まかに、厳密でなく',
  category: '副詞',
  situation: ['Writing', 'Programming'],
  form: ['副詞'],
  usage: [
    'loosely grouped together = 大まかにまとめられている',
    'loosely coupled architecture = 疎結合アーキテクチャ',
    'This is loosely defined = これは大まかに定義されている'
  ],
  nuance: '「厳密ではない、ざっくりと」というニュアンス。反対語: tightly（厳密に、きっちりと）。プログラミングでは「loosely coupled（疎結合）」がよく使われる。',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},
{
  id: 'conform-vs-confirm-1',
  en: 'conform vs confirm',
  jp: 'conform = 従う / confirm = 確認する',
  category: '紛らわしい単語',
  situation: ['Business', 'Programming'],
  form: ['動詞'],
  usage: [
    'conform to rules = 規則に従う（ルールに合わせる）',
    'confirm the reservation = 予約を確認する（チェックする）',
    'Please confirm your email = メールを確認してください',
    'This code conforms to the style guide = このコードはスタイルガイドに従っている'
  ],
  nuance: '**conform（コンフォーム）** = ルールや基準に「合わせる、従う」/ **confirm（コンファーム）** = 正しいか「確認する、承認する」。スペルが似ているだけで意味は全然違う！',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},
{
  id: 'pedantic-1',
  en: 'pedantic',
  jp: '細かいことにこだわる、うるさい、学者ぶった',
  category: '形容詞・性格表現',
  situation: ['Daily Conversation', 'Writing'],
  form: ['形容詞'],
  usage: [
    'People can be quite pedantic about which is correct = どちらが正しいかについて、人々はかなり細かいことにこだわる',
    'Don\'t be so pedantic = そんなに細かいこと言うなよ',
    'He\'s pedantic about grammar = 彼は文法にうるさい'
  ],
  nuance: 'どうでもいい細かいことに異常にこだわる人。ちょっと**ネガティブ**なニュアンス。「めんどくさい人」「重箱の隅をつつく人」という感じ。',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},
{
  id: 'adopt-1',
  en: 'adopt',
  jp: '採用する、取り入れる、使う',
  category: '動詞・選択表現',
  situation: ['Business', 'Daily Conversation'],
  form: ['動詞'],
  usage: [
    'adopting the pronunciation of the people around you = 周りの人の発音を採用する',
    'We adopted a new strategy = 新しい戦略を採用した',
    'Many companies adopt this approach = 多くの会社がこのアプローチを採用している'
  ],
  nuance: '何かを「選んで使い始める」という意味。ビジネスでは「新しい方法を導入する」という意味でよく使う。別の意味: 養子にする（adopt a child）',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},
{
  id: 'crafting-1',
  en: 'crafting',
  jp: '作り上げる、丁寧に作る、デザインする',
  category: '動詞・制作表現',
  situation: ['Design', 'Writing', 'Business'],
  form: ['動名詞'],
  usage: [
    'crafting a user experience = ユーザー体験を作り上げる',
    'crafting a beautiful design = 美しいデザインを作り上げる',
    'crafting a message = メッセージを丁寧に作る'
  ],
  nuance: '単に「作る（make）」ではなく、「丁寧に、こだわって作る」というニュアンス。職人が手作業で作るようなイメージ。デザインや文章作成でよく使う。動詞形: craft',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},

{
  id: 'tidbit-1',
  en: 'tidbit',
  jp: 'ちょっとした情報、小ネタ、豆知識',
  category: '名詞',
  situation: ['Daily Conversation', 'Writing'],
  form: ['名詞'],
  usage: [
    'There might be some tidbits about that = それについてのちょっとした情報があるかもしれない',
    'interesting tidbits = 面白い豆知識',
    'Here\'s a tidbit for you = ちょっとした情報を教えるよ'
  ],
  nuance: '小さくて興味深い情報の断片。「おまけ情報」「トリビア」のような感じ。イギリス英語では "titbit" と書く。',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},

{
  id: 'sprinkled-throughout-1',
  en: 'sprinkled throughout',
  jp: '全体に散りばめられた、あちこちに点在する',
  category: 'イディオム',
  situation: ['Writing'],
  form: ['動詞句'],
  usage: [
    'tidbits sprinkled throughout these lessons = これらのレッスン全体に散りばめられた小ネタ',
    'Examples are sprinkled throughout the book = 例が本全体に散りばめられている',
    'Easter eggs sprinkled throughout the game = ゲーム全体に点在するイースターエッグ'
  ],
  nuance: 'sprinkle = ふりかける（塩や砂糖を）。throughout = 全体に。つまり「あちこちにパラパラと散らばっている」イメージ。集中してなく、ランダムに配置されている感じ。',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},
{
  id: 'adopted-meaning-2',
  en: 'adopted (in this context)',
  jp: '採用された、広く使われるようになった',
  category: '動詞・受動態',
  situation: ['Business', 'Writing'],
  form: ['過去分詞'],
  usage: [
    'this phrase has been universally adopted = このフレーズは広く採用された',
    'The term has been widely adopted = その用語は広く使われるようになった',
    'This approach was adopted by many companies = このアプローチは多くの会社に採用された'
  ],
  nuance: 'adopt（採用する）の受動態。「みんなが使うようになった」「標準になった」という意味。has been adopted = 現在完了の受動態 = 過去に採用されて、今も使われている状態。',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},

{
  id: 'pretty-much-1',
  en: 'pretty much',
  jp: 'ほぼ、だいたい、ほとんど',
  category: '副詞句',
  situation: ['Daily Conversation'],
  form: ['副詞句'],
  usage: [
    'pretty much universally = ほぼ普遍的に',
    'That\'s pretty much it = だいたいそれだけです',
    'I\'m pretty much done = ほぼ終わった'
  ],
  nuance: 'almost（ほとんど）と同じだが、よりカジュアル。会話でよく使う。',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},
{
  id: 'come-down-to-it-1',
  en: 'when it comes down to it',
  jp: '結局のところ、要するに、本質的には',
  category: 'イディオム',
  situation: ['Daily Conversation', 'Writing'],
  form: ['イディオム'],
  usage: [
    'when it comes down to it, "Responsive Web Design" is... = 結局のところ、「レスポンシブウェブデザイン」とは...',
    'When it comes down to it, price matters most = 結局のところ、価格が一番重要だ',
    'When it comes down to it, we need more time = 要するに、もっと時間が必要だ'
  ],
  nuance: '色々説明した後で「結局、本質は何か」を言う時に使う。長い話を要約する表現。類似表現: at the end of the day, essentially, basically',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},
{
  id: 'student-directed-1',
  en: 'student-directed',
  jp: '学生が監督した・学生主導の',
  category: 'TOEIC頻出語彙',
  situation: ['Business', 'Academic', 'TOEIC'],
  form: ['形容詞', 'student-directed + 名詞'],
  usage: [
    'student-directed projects = 学生が監督したプロジェクト・作品',
    'The film class is working on a student-directed film = その映画クラスは学生主導の映画に取り組んでいる',
    'We need volunteers for student-directed videos = 学生制作の動画のためにボランティアが必要です'
  ],
  nuance: 'ハイフンでつないで「〜によって〜された」という受け身の形容詞になる。TOEICでは company-sponsored や employee-owned と同じ構造で頻出。',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},
{
  id: 'sourcing-1',
  en: 'sourcing',
  jp: '調達すること・仕入れ',
  category: 'TOEIC頻出語彙',
  situation: ['Business', 'Procurement', 'TOEIC'],
  form: ['動名詞', 'sourcing + 名詞'],
  usage: [
    'sourcing materials = 材料を調達すること',
    'sourcing textiles = 生地の仕入れ',
    'He is responsible for sourcing suppliers = 彼は仕入れ先の調達を担当している'
  ],
  nuance: 'purchase よりもビジネス寄りで「仕入れ先を見つける＋買う」まで含む広いニュアンス。',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},
{
  id: 'selective-1',
  en: 'selective',
  jp: '厳選する・慎重に選ぶ',
  category: 'TOEIC頻出語彙',
  situation: ['Business', 'TOEIC'],
  form: ['be selective in/about + 名詞', 'selective + 名詞'],
  usage: [
    'be highly selective in hiring = 採用をとても厳選する',
    'He is selective about suppliers = 彼は仕入れ先を慎重に選ぶ',
    'The manager is very selective = 管理者は選りすぐりするタイプだ'
  ],
  nuance: '“好き嫌い” の意味ではなく「品質基準が高く慎重に選ぶ」というビジネス的な褒め言葉。',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},
{
  id: 'upholstery-1',
  en: 'upholstery',
  jp: '椅子やソファの布張り・クッション部分',
  category: 'TOEIC頻出語彙',
  situation: ['Business', 'Furniture', 'TOEIC'],
  form: ['upholstery', 'upholstered + 名詞'],
  usage: [
    'new upholstery for chairs = 椅子の新しい張り地',
    'upholstery cleaning = ソファの布張りのクリーニング',
    'upholstered furniture = 布張りの家具'
  ],
  nuance: '家具の「布やクッション部分」。家庭とビジネスどちらでも頻出の語。',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
},
{
  id: 'along-with-1',
  en: 'along with',
  jp: '〜に加えて／〜と共に（補足的に）',
  category: 'TOEIC頻出語彙',
  situation: ['Business', 'TOEIC'],
  form: ['A along with B', 'A（メイン） + along with + B（付け加え）'],
  usage: [
    'The CEO, along with the managers, attended the event = CEOに加えて、マネージャーも参加した',
    'Ms. Weaver usually attends the meetings along with other directors = ウィーバーさんは他のディレクターと共に会議に参加する',
    'Lunch is served along with drinks = 昼食に飲み物が付いてくる'
  ],
  nuance: 'with より「Aがメイン、Bは付け加え」のニュアンスがある。文の主語はAのまま。',
  createdAt: new Date(),
  correctCount: 0,
  mistakeCount: 0,
  mastered: false
}









];