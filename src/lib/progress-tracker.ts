// This is a simple client-side progress tracker that uses localStorage.
// It is not a robust solution for production apps but is suitable for this example.

const PROGRESS_KEY = 'tantra-vigyan-progress';

type ChartData = {
  month: string;
  ಮಂತ್ರಗಳು: number;
  ಚಟುವಟಿಕೆಗಳು: number;
};

export type ProgressData = {
  mantrasPracticed: number;
  activitiesCompleted: number;
  dailyStreak: number;
  lastPracticedDate: string | null;
  chartData: ChartData[];
};

export const INITIAL_PROGRESS_DATA: ProgressData = {
  mantrasPracticed: 0,
  activitiesCompleted: 0,
  dailyStreak: 0,
  lastPracticedDate: null,
  chartData: [
    { month: 'ಜನವರಿ', 'ಮಂತ್ರಗಳು': 0, 'ಚಟುವಟಿಕೆಗಳು': 0 },
    { month: 'ಫೆಬ್ರವರಿ', 'ಮಂತ್ರಗಳು': 0, 'ಚಟುವಟಿಕೆಗಳು': 0 },
    { month: 'ಮಾರ್ಚ್', 'ಮಂತ್ರಗಳು': 0, 'ಚಟುವಟಿಕೆಗಳು': 0 },
    { month: 'ಏಪ್ರಿಲ್', 'ಮಂತ್ರಗಳು': 0, 'ಚಟುವಟಿಕೆಗಳು': 0 },
    { month: 'ಮೇ', 'ಮಂತ್ರಗಳು': 0, 'ಚಟುವಟಿಕೆಗಳು': 0 },
    { month: 'ಜೂನ್', 'ಮಂತ್ರಗಳು': 0, 'ಚಟುವಟಿಕೆಗಳು': 0 },
  ],
};

const KANNADA_MONTHS = [
  'ಜನವರಿ', 'ಫೆಬ್ರವರಿ', 'ಮಾರ್ಚ್', 'ಏಪ್ರಿಲ್', 'ಮೇ', 'ಜೂನ್',
  'ಜುಲೈ', 'ಆಗಸ್ಟ್', 'ಸೆಪ್ಟೆಂಬರ್', 'ಅಕ್ಟೋಬರ್', 'ನವೆಂಬರ್', 'ಡಿಸೆಂಬರ್'
];

function getKannadaMonth(date: Date): string {
  return KANNADA_MONTHS[date.getMonth()];
}

// Function to get progress data from localStorage
export function getProgressData(): ProgressData {
  if (typeof window === 'undefined') {
    return INITIAL_PROGRESS_DATA;
  }
  const data = window.localStorage.getItem(PROGRESS_KEY);
  return data ? JSON.parse(data) : INITIAL_PROGRESS_DATA;
}

// Function to save progress data to localStorage
function saveProgressData(data: ProgressData) {
  if (typeof window === 'undefined') {
    return;
  }
  window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(data));
}

// Function to update daily streak
function updateDailyStreak(data: ProgressData): ProgressData {
  const today = new Date();
  const todayStr = today.toISOString().split('T')[0];

  if (data.lastPracticedDate === todayStr) {
    // Already practiced today
    return data;
  }

  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().split('T')[0];

  if (data.lastPracticedDate === yesterdayStr) {
    // Continued the streak
    data.dailyStreak += 1;
  } else {
    // Streak is broken
    data.dailyStreak = 1;
  }
  data.lastPracticedDate = todayStr;
  return data;
}

// Function to record a mantra practice event
export function recordMantraPracticed() {
  let data = getProgressData();
  data.mantrasPracticed += 1;

  const today = new Date();
  const currentMonth = getKannadaMonth(today);
  const monthData = data.chartData.find((d) => d.month === currentMonth);
  if (monthData) {
    monthData['ಮಂತ್ರಗಳು'] += 1;
  }

  data = updateDailyStreak(data);
  saveProgressData(data);
}

// Function to record an activity completion event
export function recordActivityCompleted() {
  let data = getProgressData();
  data.activitiesCompleted += 1;
  
  const today = new Date();
  const currentMonth = getKannadaMonth(today);
  const monthData = data.chartData.find((d) => d.month === currentMonth);
  if (monthData) {
    monthData['ಚಟುವಟಿಕೆಗಳು'] += 1;
  }

  data = updateDailyStreak(data);
  saveProgressData(data);
}
