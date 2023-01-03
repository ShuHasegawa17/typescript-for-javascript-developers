export {};
// Record<K, T>
type Prefectures = 'TOKYO' | 'CHIBA' | 'TOTTORI' | 'SHIGA';
type Covid19InfectionInfo = {
  kanji_name: string;
  confirmed_cases: number;
};

const covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
  TOKYO: { kanji_name: '東京', confirmed_cases: 1960 },
  CHIBA: { kanji_name: '千葉', confirmed_cases: 250 },
  TOTTORI: { kanji_name: '鳥取', confirmed_cases: 19 },
  SHIGA: { kanji_name: '滋賀', confirmed_cases: 10 },
};
