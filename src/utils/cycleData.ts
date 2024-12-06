import { CyclePhase, CycleInfo } from '../types';

export const cycleInfo: Record<CyclePhase, CycleInfo> = {
  menstrual: {
    phase: 'menstrual',
    mood: [
      '疲れやすい',
      '眠気を感じやすい',
      'ゆっくり休息を取りたい気分'
    ],
    foods: [
      '鉄分が豊富な食事',
      '温かいスープ',
      'ナッツ類',
      '葉物野菜'
    ],
    partnerAdvice: 'この時期は特に休息を必要としています。温かい飲み物を用意したり、ゆっくり休める環境を整えてあげてください。',
    dateRecommendations: {
      foodTypes: [
        '温かい食事',
        'あっさりした和食',
        '消化の良い食事'
      ],
      restaurants: [
        '和食店',
        'オーガニックカフェ',
        '薬膳料理店'
      ],
      activities: [
        'カフェでゆっくり過ごす',
        '軽いウォーキング',
        'スパや温泉'
      ]
    },
    fertilityInfo: {
      probability: '極めて低い',
      description: '月経期間中は妊娠の可能性が最も低い時期です。'
    }
  },
  follicular: {
    phase: 'follicular',
    mood: [
      'エネルギッシュ',
      '前向きな気分',
      'クリエイティブ'
    ],
    foods: [
      '新鮮な野菜',
      '魚介類',
      '発酵食品',
      '豆類'
    ],
    partnerAdvice: 'この時期は活動的で意欲的です。新しいことにチャレンジする際のサポートや、アクティブな活動を一緒に楽しむのに適しています。',
    dateRecommendations: {
      foodTypes: [
        'ヘルシーな食事',
        'エスニック料理',
        '新鮮な魚介類'
      ],
      restaurants: [
        'オシャレなカフェ',
        'イタリアン',
        'シーフードレストラン'
      ],
      activities: [
        'アウトドア活動',
        'アクティブなデートスポット',
        '新しいレストランの開拓'
      ]
    },
    fertilityInfo: {
      probability: '低い',
      description: '卵胞が発育する時期で、まだ妊娠の可能性は低いです。'
    }
  },
  ovulation: {
    phase: 'ovulation',
    mood: [
      '社交的',
      '自信に満ちている',
      '魅力的に感じる'
    ],
    foods: [
      '軽い食事',
      'アスパラガス',
      'アボカド',
      'ベリー類'
    ],
    partnerAdvice: 'コミュニケーション能力が高まる時期です。深い会話や一緒に過ごす時間を大切にしてください。',
    dateRecommendations: {
      foodTypes: [
        'おしゃれな創作料理',
        'タパス風の小皿料理',
        'ワインに合う料理'
      ],
      restaurants: [
        'ワインバー',
        'モダンな和食店',
        'テラスのあるレストラン'
      ],
      activities: [
        'お洒落なバーでの食事',
        'アート展や美術館',
        '音楽ライブ'
      ]
    },
    fertilityInfo: {
      probability: '最も高い',
      description: '排卵日を含む前後数日間は、妊娠の可能性が最も高い時期です。'
    }
  },
  luteal: {
    phase: 'luteal',
    mood: [
      '感情の起伏が大きい',
      '集中力が低下',
      'イライラしやすい'
    ],
    foods: [
      'マグネシウムが豊富な食品',
      'バナナ',
      'ダークチョコレート',
      'カボチャの種'
    ],
    partnerAdvice: '感情の変化が大きい時期です。理解を示し、優しく接することを心がけてください。必要に応じて適度な距離を保つことも大切です。',
    dateRecommendations: {
      foodTypes: [
        '甘いデザート',
        '炭水化物が豊富な食事',
        '温かい家庭料理'
      ],
      restaurants: [
        'カフェ',
        'デザート専門店',
        '落ち着いた雰囲気のレストラン'
      ],
      activities: [
        '映画鑑賞',
        'のんびりしたピクニック',
        'カフェ巡り'
      ]
    },
    fertilityInfo: {
      probability: '低い',
      description: '黄体期は妊娠の可能性が低く、次の周期に向けて体が準備を始める時期です。'
    }
  }
};