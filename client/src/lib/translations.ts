export type LangCode =
  | "en" | "en-us" | "es" | "fr" | "de" | "pt"
  | "ar" | "ja" | "zh" | "hi" | "ru"
  | "ko" | "it" | "tr";

export interface Language {
  code: LangCode;
  name: string;
  flag: string;
  rtl?: boolean;
}

export const LANGUAGES: Language[] = [
  { code: "en",    name: "English",        flag: "🇬🇧" },
  { code: "en-us", name: "English (US)",   flag: "🇺🇸" },
  { code: "es", name: "Español",    flag: "🇪🇸" },
  { code: "fr", name: "Français",   flag: "🇫🇷" },
  { code: "de", name: "Deutsch",    flag: "🇩🇪" },
  { code: "pt", name: "Português",  flag: "🇧🇷" },
  { code: "it", name: "Italiano",   flag: "🇮🇹" },
  { code: "ru", name: "Русский",    flag: "🇷🇺" },
  { code: "ar", name: "العربية",    flag: "🇸🇦", rtl: true },
  { code: "hi", name: "हिंदी",      flag: "🇮🇳" },
  { code: "zh", name: "中文",        flag: "🇨🇳" },
  { code: "ja", name: "日本語",      flag: "🇯🇵" },
  { code: "ko", name: "한국어",      flag: "🇰🇷" },
  { code: "tr", name: "Türkçe",     flag: "🇹🇷" },
];

type T = Record<LangCode, string>;

export const translations = {
  // ── Page ─────────────────────────────────────────────────────────────────
  pageTitle: {
    en: "Global News, Local Focus",
    es: "Noticias Globales, Enfoque Local",
    fr: "Actualité Mondiale, Regard Local",
    de: "Globale Nachrichten, Lokaler Fokus",
    pt: "Notícias Globais, Foco Local",
    it: "Notizie Globali, Focus Locale",
    ru: "Мировые новости, местный фокус",
    ar: "أخبار عالمية، تركيز محلي",
    hi: "वैश्विक समाचार, स्थानीय फ़ोकस",
    zh: "全球新闻，本地视角",
    ja: "グローバルニュース、ローカルフォーカス",
    ko: "글로벌 뉴스, 로컬 초점",
    tr: "Küresel Haberler, Yerel Odak",
  } as T,

  pageSubtitle: {
    en: "Enter any city to discover what's happening around the world.",
    es: "Ingresa cualquier ciudad para descubrir qué pasa en el mundo.",
    fr: "Entrez n'importe quelle ville pour découvrir ce qui s'y passe.",
    de: "Geben Sie eine Stadt ein, um zu entdecken, was auf der Welt passiert.",
    pt: "Digite qualquer cidade para descobrir o que está acontecendo no mundo.",
    it: "Inserisci qualsiasi città per scoprire cosa sta succedendo nel mondo.",
    ru: "Введите любой город, чтобы узнать, что происходит в мире.",
    ar: "أدخل أي مدينة لاكتشاف ما يحدث حول العالم.",
    hi: "दुनिया भर में क्या हो रहा है, यह जानने के लिए कोई भी शहर दर्ज करें।",
    zh: "输入任意城市，发现世界各地正在发生的事情。",
    ja: "都市名を入力して、世界中で何が起きているかを発見しましょう。",
    ko: "전 세계에서 일어나는 일을 알아보려면 도시를 입력하세요.",
    tr: "Dünyada neler olduğunu keşfetmek için herhangi bir şehir girin.",
  } as T,

  tagline: {
    en: "Your window to global news",
    es: "Tu ventana a las noticias globales",
    fr: "Votre fenêtre sur l'actualité mondiale",
    de: "Ihr Fenster zur Weltnachrichten",
    pt: "Sua janela para as notícias globais",
    it: "La tua finestra sulle notizie globali",
    ru: "Ваше окно в мировые новости",
    ar: "نافذتك على الأخبار العالمية",
    hi: "वैश्विक समाचारों की आपकी खिड़की",
    zh: "您通往全球新闻的窗口",
    ja: "世界のニュースへの窓口",
    ko: "글로벌 뉴스로의 창문",
    tr: "Küresel haberlere pencereniz",
  } as T,

  chooseLanguage: {
    en: "Choose language",
    es: "Elegir idioma",
    fr: "Choisir la langue",
    de: "Sprache wählen",
    pt: "Escolher idioma",
    it: "Scegli lingua",
    ru: "Выбрать язык",
    ar: "اختر اللغة",
    hi: "भाषा चुनें",
    zh: "选择语言",
    ja: "言語を選択",
    ko: "언어 선택",
    tr: "Dil seçin",
  } as T,

  // ── Search ────────────────────────────────────────────────────────────────
  searchPlaceholder: {
    en: "Enter a city (e.g., New York, Tokyo)",
    es: "Ingresa una ciudad (ej., Nueva York, Tokio)",
    fr: "Entrez une ville (ex. New York, Tokyo)",
    de: "Stadt eingeben (z.B. Berlin, Tokio)",
    pt: "Digite uma cidade (ex., Nova York, Tóquio)",
    it: "Inserisci una città (es., New York, Tokyo)",
    ru: "Введите город (напр., Москва, Токио)",
    ar: "أدخل مدينة (مثال: نيويورك، طوكيو)",
    hi: "शहर दर्ज करें (जैसे, न्यू यॉर्क, टोक्यो)",
    zh: "输入城市名称（例如：纽约、东京）",
    ja: "都市を入力してください（例：東京、ニューヨーク）",
    ko: "도시를 입력하세요 (예: 뉴욕, 도쿄)",
    tr: "Şehir girin (örn., İstanbul, Tokyo)",
  } as T,

  searchButton: {
    en: "Search", es: "Buscar", fr: "Rechercher", de: "Suchen", pt: "Buscar",
    it: "Cerca", ru: "Поиск", ar: "بحث", hi: "खोजें", zh: "搜索", ja: "検索", ko: "검색", tr: "Ara",
  } as T,

  popularLabel: {
    en: "Try popular:", es: "Ciudades populares:", fr: "Essayez :", de: "Beliebte Städte:",
    pt: "Cidades populares:", it: "Città popolari:", ru: "Популярные города:", ar: "مدن مشهورة:",
    hi: "लोकप्रिय शहर:", zh: "热门城市：", ja: "人気の都市：", ko: "인기 도시:", tr: "Popüler şehirler:",
  } as T,

  // ── Weather ───────────────────────────────────────────────────────────────
  weatherLive: {
    en: "Live Weather", es: "Clima en Vivo", fr: "Météo en Direct", de: "Live-Wetter",
    pt: "Clima ao Vivo", it: "Meteo in Diretta", ru: "Погода в реальном времени",
    ar: "الطقس المباشر", hi: "लाइव मौसम", zh: "实时天气", ja: "リアルタイム天気",
    ko: "실시간 날씨", tr: "Canlı Hava Durumu",
  } as T,

  weatherForecast: {
    en: "Forecast", es: "Pronóstico", fr: "Prévisions", de: "Vorhersage", pt: "Previsão",
    it: "Previsioni", ru: "Прогноз погоды", ar: "التوقعات", hi: "मौसम पूर्वानुमान",
    zh: "天气预报", ja: "天気予報", ko: "일기예보", tr: "Tahmin",
  } as T,

  feelsLike: {
    en: "Feels like", es: "Sensación térmica", fr: "Ressenti", de: "Gefühlt", pt: "Sensação",
    it: "Percepita", ru: "Ощущается как", ar: "الإحساس", hi: "महसूस होता है",
    zh: "体感温度", ja: "体感温度", ko: "체감온도", tr: "Hissedilen",
  } as T,

  humidity: {
    en: "Humidity", es: "Humedad", fr: "Humidité", de: "Luftfeuchtigkeit", pt: "Umidade",
    it: "Umidità", ru: "Влажность", ar: "الرطوبة", hi: "नमी",
    zh: "湿度", ja: "湿度", ko: "습도", tr: "Nem",
  } as T,

  wind: {
    en: "Wind", es: "Viento", fr: "Vent", de: "Wind", pt: "Vento",
    it: "Vento", ru: "Ветер", ar: "الريح", hi: "हवा",
    zh: "风速", ja: "風速", ko: "바람", tr: "Rüzgar",
  } as T,

  visibility: {
    en: "Visibility", es: "Visibilidad", fr: "Visibilité", de: "Sichtweite", pt: "Visibilidade",
    it: "Visibilità", ru: "Видимость", ar: "الرؤية", hi: "दृश्यता",
    zh: "能见度", ja: "視程", ko: "가시거리", tr: "Görüş",
  } as T,

  precipitation: {
    en: "Precipitation", es: "Precipitación", fr: "Précipitations", de: "Niederschlag", pt: "Precipitação",
    it: "Precipitazioni", ru: "Осадки", ar: "هطول الأمطار", hi: "वर्षा",
    zh: "降水量", ja: "降水量", ko: "강수량", tr: "Yağış",
  } as T,

  high: {
    en: "High", es: "Máx", fr: "Max", de: "Max", pt: "Máx",
    it: "Mas", ru: "Макс", ar: "الأعلى", hi: "अधिकतम",
    zh: "最高", ja: "最高", ko: "최고", tr: "Maks",
  } as T,

  low: {
    en: "Low", es: "Mín", fr: "Min", de: "Min", pt: "Mín",
    it: "Min", ru: "Мин", ar: "الأدنى", hi: "न्यूनतम",
    zh: "最低", ja: "最低", ko: "최저", tr: "Min",
  } as T,

  highLow: {
    en: "High / Low", es: "Máx / Mín", fr: "Max / Min", de: "Max / Min", pt: "Máx / Mín",
    it: "Mas / Min", ru: "Макс / Мин", ar: "الأعلى / الأدنى", hi: "अधिकतम / न्यूनतम",
    zh: "最高 / 最低", ja: "最高 / 最低", ko: "최고 / 최저", tr: "Maks / Min",
  } as T,

  avgHumidity: {
    en: "Avg. Humidity", es: "Humedad Media", fr: "Humidité moy.", de: "Durchschn. Feuchte",
    pt: "Umidade Média", it: "Umidità Media", ru: "Средняя влажность", ar: "متوسط الرطوبة",
    hi: "औसत नमी", zh: "平均湿度", ja: "平均湿度", ko: "평균 습도", tr: "Ort. Nem",
  } as T,

  maxWind: {
    en: "Max Wind", es: "Viento Máx", fr: "Vent max", de: "Windspitze",
    pt: "Vento Máx", it: "Vento Massimo", ru: "Макс. ветер", ar: "أقصى سرعة للريح",
    hi: "अधिकतम हवा", zh: "最大风速", ja: "最大風速", ko: "최대 풍속", tr: "Maks. Rüzgar",
  } as T,

  weatherSource: {
    en: "Source: Open-Meteo · Refreshes every 5 min · Click ↻ to refresh now",
    es: "Fuente: Open-Meteo · Se actualiza cada 5 min · Haz clic en ↻ para actualizar",
    fr: "Source : Open-Meteo · Actualisé toutes les 5 min · Cliquez sur ↻ pour rafraîchir",
    de: "Quelle: Open-Meteo · Aktualisiert alle 5 Min · ↻ zum Aktualisieren",
    pt: "Fonte: Open-Meteo · Atualiza a cada 5 min · Clique em ↻ para atualizar",
    it: "Fonte: Open-Meteo · Aggiornato ogni 5 min · Clicca ↻ per aggiornare",
    ru: "Источник: Open-Meteo · Обновляется каждые 5 мин · Нажмите ↻",
    ar: "المصدر: Open-Meteo · يُحدَّث كل 5 دقائق · انقر ↻ للتحديث",
    hi: "स्रोत: Open-Meteo · हर 5 मिनट में रिफ्रेश · ↻ क्लिक करें",
    zh: "来源：Open-Meteo · 每5分钟刷新 · 点击 ↻ 立即刷新",
    ja: "出典：Open-Meteo · 5分ごとに更新 · ↻ をクリックして今すぐ更新",
    ko: "출처: Open-Meteo · 5분마다 갱신 · ↻ 클릭하여 지금 갱신",
    tr: "Kaynak: Open-Meteo · Her 5 dakikada güncellenir · ↻ tıkla",
  } as T,

  forecastSource: {
    en: "Forecast from Open-Meteo · Select a different day above · Click ↻ to return to today",
    es: "Pronóstico de Open-Meteo · Selecciona otro día arriba · ↻ para volver a hoy",
    fr: "Prévisions Open-Meteo · Sélectionnez un autre jour ci-dessus · ↻ pour revenir à aujourd'hui",
    de: "Vorhersage von Open-Meteo · Anderen Tag oben wählen · ↻ um zu Heute zurückzukehren",
    pt: "Previsão do Open-Meteo · Selecione outro dia acima · ↻ para voltar a hoje",
    it: "Previsioni Open-Meteo · Seleziona un altro giorno sopra · ↻ per tornare ad oggi",
    ru: "Прогноз Open-Meteo · Выберите другой день выше · ↻ вернуться к сегодня",
    ar: "توقعات Open-Meteo · اختر يومًا آخر أعلاه · انقر ↻ للعودة إلى اليوم",
    hi: "Open-Meteo का पूर्वानुमान · ऊपर कोई अन्य दिन चुनें · आज पर वापस जाने के लिए ↻",
    zh: "Open-Meteo预报 · 在上方选择其他日期 · 点击 ↻ 返回今天",
    ja: "Open-Meteoの予報 · 上で別の日を選択 · ↻ で今日に戻る",
    ko: "Open-Meteo 예보 · 위에서 다른 날 선택 · ↻ 클릭하여 오늘로 돌아가기",
    tr: "Open-Meteo tahmini · Yukarıda farklı bir gün seçin · ↻ bugüne dön",
  } as T,

  today: {
    en: "Today", es: "Hoy", fr: "Aujourd'hui", de: "Heute", pt: "Hoje",
    it: "Oggi", ru: "Сегодня", ar: "اليوم", hi: "आज",
    zh: "今天", ja: "今日", ko: "오늘", tr: "Bugün",
  } as T,

  tomorrow: {
    en: "Tomorrow", es: "Mañana", fr: "Demain", de: "Morgen", pt: "Amanhã",
    it: "Domani", ru: "Завтра", ar: "غداً", hi: "कल",
    zh: "明天", ja: "明日", ko: "내일", tr: "Yarın",
  } as T,

  // ── Emergency Alerts ──────────────────────────────────────────────────────
  alertsTitle: {
    en: "Active Alerts & Warnings",
    es: "Alertas y Avisos Activos",
    fr: "Alertes et Avertissements",
    de: "Aktive Warnungen",
    pt: "Alertas e Avisos Ativos",
    it: "Allerte e Avvisi Attivi",
    ru: "Активные предупреждения",
    ar: "التحذيرات والتنبيهات النشطة",
    hi: "सक्रिय चेतावनियाँ",
    zh: "当前预警与警告",
    ja: "警報・注意報",
    ko: "현재 경보 및 주의보",
    tr: "Aktif Uyarılar ve İkazlar",
  } as T,

  validUntil: {
    en: "Valid until:", es: "Válido hasta:", fr: "Valable jusqu'au :", de: "Gültig bis:",
    pt: "Válido até:", it: "Valido fino al:", ru: "Действительно до:", ar: "صالح حتى:",
    hi: "तक मान्य:", zh: "有效期至：", ja: "有効期限：", ko: "유효 기간:", tr: "Geçerlilik süresi:",
  } as T,

  // ── City Facts ────────────────────────────────────────────────────────────
  cityFactsTitle: {
    en: "City Facts", es: "Datos de la Ciudad", fr: "Infos sur la Ville", de: "Stadtinfos",
    pt: "Dados da Cidade", it: "Informazioni sulla Città", ru: "О городе",
    ar: "حقائق المدينة", hi: "शहर की जानकारी", zh: "城市资讯", ja: "都市情報",
    ko: "도시 정보", tr: "Şehir Bilgisi",
  } as T,

  population: {
    en: "Population", es: "Población", fr: "Population", de: "Bevölkerung", pt: "População",
    it: "Popolazione", ru: "Население", ar: "السكان", hi: "जनसंख्या",
    zh: "人口", ja: "人口", ko: "인구", tr: "Nüfus",
  } as T,

  famousPeople: {
    en: "Famous People", es: "Personas Famosas", fr: "Personnalités", de: "Berühmte Persönlichkeiten",
    pt: "Pessoas Famosas", it: "Personaggi Famosi", ru: "Известные люди",
    ar: "مشاهير", hi: "प्रसिद्ध लोग", zh: "名人", ja: "有名人",
    ko: "유명 인사", tr: "Ünlü Kişiler",
  } as T,

  currentMayor: {
    en: "Current Mayor", es: "Alcalde Actual", fr: "Maire Actuel", de: "Aktueller Bürgermeister",
    pt: "Prefeito Atual", it: "Sindaco Attuale", ru: "Текущий мэр",
    ar: "العمدة الحالي", hi: "वर्तमान महापौर", zh: "现任市长", ja: "現市長",
    ko: "현 시장", tr: "Mevcut Belediye Başkanı",
  } as T,

  founded: {
    en: "Founded", es: "Fundada", fr: "Fondée", de: "Gegründet", pt: "Fundada",
    it: "Fondata", ru: "Основан", ar: "تأسست", hi: "स्थापित",
    zh: "建立年份", ja: "設立年", ko: "설립", tr: "Kuruluş",
  } as T,

  nickname: {
    en: "Nickname", es: "Apodo", fr: "Surnom", de: "Spitzname", pt: "Apelido",
    it: "Soprannome", ru: "Прозвище", ar: "اللقب", hi: "उपनाम",
    zh: "别称", ja: "愛称", ko: "별명", tr: "Lakap",
  } as T,

  // ── What's New ────────────────────────────────────────────────────────────
  whatsNewIn: {
    en: "What's New in", es: "Novedades en", fr: "Nouveautés à", de: "Neuigkeiten in",
    pt: "O que há de Novo em", it: "Novità a", ru: "Новости города:",
    ar: "الجديد في", hi: "क्या है नया:", zh: "最新动态：",
    ja: "新着情報：", ko: "새로운 소식:", tr: "Yenilikler:",
  } as T,

  opened: {
    en: "Opened:", es: "Abierto:", fr: "Ouvert :", de: "Eröffnet:", pt: "Aberto:",
    it: "Aperto:", ru: "Открыто:", ar: "افتُتح:", hi: "खुला:",
    zh: "开业：", ja: "開業：", ko: "개업:", tr: "Açıldı:",
  } as T,

  // ── Popular Places ────────────────────────────────────────────────────────
  popularPlacesIn: {
    en: "Popular Places in", es: "Lugares Populares en", fr: "Lieux Populaires à", de: "Beliebte Orte in",
    pt: "Lugares Populares em", it: "Luoghi Popolari a", ru: "Популярные места:",
    ar: "الأماكن الشعبية في", hi: "लोकप्रिय स्थान:", zh: "热门地点：",
    ja: "人気スポット：", ko: "인기 장소:", tr: "Popüler Yerler:",
  } as T,

  popularPlacesSubtitle: {
    en: "Color-coded by visitor popularity",
    es: "Codificado por popularidad de visitantes",
    fr: "Codé par couleur selon la popularité",
    de: "Farbkodiert nach Besucherbeliebtheit",
    pt: "Codificado por popularidade de visitantes",
    it: "Codice colore per popolarità",
    ru: "Цветовая кодировка по популярности",
    ar: "مرمّز بالألوان حسب الشعبية",
    hi: "आगंतुक लोकप्रियता के अनुसार",
    zh: "按游客热度标色",
    ja: "訪問者人気度で色分け",
    ko: "방문자 인기도 색상 코딩",
    tr: "Ziyaretçi popülaritesine göre renklendirilmiş",
  } as T,

  visitors: {
    en: "visitors", es: "visitantes", fr: "visiteurs", de: "Besucher", pt: "visitantes",
    it: "visitatori", ru: "посетителей", ar: "زائر", hi: "आगंतुक",
    zh: "游客", ja: "訪問者", ko: "방문자", tr: "ziyaretçi",
  } as T,

  popularityLegend: {
    en: "Popularity:", es: "Popularidad:", fr: "Popularité :", de: "Beliebtheit:",
    pt: "Popularidade:", it: "Popolarità:", ru: "Популярность:", ar: "الشعبية:",
    hi: "लोकप्रियता:", zh: "热度：", ja: "人気度：", ko: "인기도:", tr: "Popülerlik:",
  } as T,

  // ── City Problems ─────────────────────────────────────────────────────────
  problemsIn: {
    en: "Current Issues in", es: "Problemas Actuales en", fr: "Problèmes Actuels à",
    de: "Aktuelle Probleme in", pt: "Problemas Atuais em", it: "Problemi Attuali a",
    ru: "Актуальные проблемы:", ar: "المشكلات الحالية في", hi: "वर्तमान समस्याएँ:",
    zh: "当前问题：", ja: "現在の問題：", ko: "현재 문제:", tr: "Güncel Sorunlar:",
  } as T,

  lastUpdated: {
    en: "Last updated:", es: "Última actualización:", fr: "Dernière mise à jour :",
    de: "Zuletzt aktualisiert:", pt: "Última atualização:", it: "Ultimo aggiornamento:",
    ru: "Последнее обновление:", ar: "آخر تحديث:", hi: "अंतिम अपडेट:",
    zh: "最后更新：", ja: "最終更新：", ko: "최종 업데이트:", tr: "Son güncelleme:",
  } as T,

  severity: {
    en: "Severity:", es: "Gravedad:", fr: "Gravité :", de: "Schweregrad:",
    pt: "Gravidade:", it: "Gravità:", ru: "Серьёзность:", ar: "الخطورة:",
    hi: "गंभीरता:", zh: "严重程度：", ja: "深刻度：", ko: "심각도:", tr: "Şiddet:",
  } as T,

  // ── Local Jobs ────────────────────────────────────────────────────────────
  jobsIn: {
    en: "Local Jobs in", es: "Empleos Locales en", fr: "Emplois Locaux à",
    de: "Lokale Stellen in", pt: "Empregos Locais em", it: "Lavori Locali a",
    ru: "Вакансии:", ar: "الوظائف المحلية في", hi: "स्थानीय नौकरियाँ:",
    zh: "当地招聘：", ja: "地元の求人：", ko: "지역 일자리:", tr: "Yerel İşler:",
  } as T,

  jobsSubtitle: {
    en: "Recent openings in the area",
    es: "Vacantes recientes en la zona",
    fr: "Offres récentes dans la zone",
    de: "Aktuelle Stellenangebote",
    pt: "Vagas recentes na área",
    it: "Opportunità recenti nell'area",
    ru: "Актуальные вакансии в регионе",
    ar: "فرص العمل الأخيرة في المنطقة",
    hi: "क्षेत्र में हालिया रिक्तियाँ",
    zh: "该地区近期职位",
    ja: "地域の最新求人",
    ko: "지역 최근 채용 공고",
    tr: "Bölgedeki son iş ilanları",
  } as T,

  salary: {
    en: "Salary", es: "Salario", fr: "Salaire", de: "Gehalt", pt: "Salário",
    it: "Stipendio", ru: "Зарплата", ar: "الراتب", hi: "वेतन",
    zh: "薪资", ja: "給与", ko: "급여", tr: "Maaş",
  } as T,

  posted: {
    en: "Posted:", es: "Publicado:", fr: "Publié :", de: "Veröffentlicht:", pt: "Publicado:",
    it: "Pubblicato:", ru: "Опубликовано:", ar: "نُشر:", hi: "पोस्ट किया:",
    zh: "发布时间：", ja: "掲載日：", ko: "게재:", tr: "Yayınlandı:",
  } as T,

  applyNow: {
    en: "Apply Now", es: "Postúlate Ahora", fr: "Postuler", de: "Jetzt bewerben", pt: "Candidatar-se",
    it: "Candidati Ora", ru: "Откликнуться", ar: "تقدم الآن", hi: "अभी आवेदन करें",
    zh: "立即申请", ja: "今すぐ応募", ko: "지금 지원", tr: "Şimdi Başvur",
  } as T,

  // ── News ──────────────────────────────────────────────────────────────────
  newsTitle: {
    en: "Latest News", es: "Últimas Noticias", fr: "Dernières Nouvelles", de: "Aktuelle Nachrichten",
    pt: "Últimas Notícias", it: "Ultime Notizie", ru: "Последние новости",
    ar: "آخر الأخبار", hi: "ताज़ा समाचार", zh: "最新新闻", ja: "最新ニュース",
    ko: "최신 뉴스", tr: "Son Haberler",
  } as T,

  noNewsFound: {
    en: "No news found for this city. Try another city or check back later.",
    es: "No se encontraron noticias para esta ciudad. Prueba con otra ciudad.",
    fr: "Aucune actualité trouvée pour cette ville. Essayez une autre ville.",
    de: "Keine Nachrichten für diese Stadt. Versuchen Sie eine andere Stadt.",
    pt: "Nenhuma notícia encontrada para esta cidade. Tente outra cidade.",
    it: "Nessuna notizia trovata per questa città. Prova con un'altra città.",
    ru: "Новости по данному городу не найдены. Попробуйте другой город.",
    ar: "لم يتم العثور على أخبار لهذه المدينة. جرب مدينة أخرى.",
    hi: "इस शहर के लिए कोई समाचार नहीं मिला। कोई अन्य शहर आज़माएं।",
    zh: "未找到该城市的新闻，请尝试其他城市。",
    ja: "この都市のニュースが見つかりませんでした。別の都市をお試しください。",
    ko: "이 도시의 뉴스를 찾을 수 없습니다. 다른 도시를 시도해 보세요.",
    tr: "Bu şehir için haber bulunamadı. Başka bir şehir deneyin.",
  } as T,

  // ── Footer ────────────────────────────────────────────────────────────────
  footerRights: {
    en: "All rights reserved. Powered by News API.",
    es: "Todos los derechos reservados. Con tecnología de News API.",
    fr: "Tous droits réservés. Propulsé par News API.",
    de: "Alle Rechte vorbehalten. Unterstützt durch News API.",
    pt: "Todos os direitos reservados. Com tecnologia do News API.",
    it: "Tutti i diritti riservati. Powered by News API.",
    ru: "Все права защищены. На основе News API.",
    ar: "جميع الحقوق محفوظة. مدعوم بواسطة News API.",
    hi: "सर्वाधिकार सुरक्षित। News API द्वारा संचालित।",
    zh: "保留所有权利。由 News API 提供支持。",
    ja: "全著作権所有。News API を使用しています。",
    ko: "모든 권리 보유. News API 제공.",
    tr: "Tüm hakları saklıdır. News API tarafından desteklenmektedir.",
  } as T,
} as const;

export type TranslationKey = keyof typeof translations;
