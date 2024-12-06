import { CalendarDay, CyclePhase } from '../types';

export function calculateCycleDays(
  startDate: Date,
  cycleLength: number,
  periodLength: number
): CalendarDay[] {
  const days: CalendarDay[] = [];
  const currentDate = new Date();
  
  // 3ヶ月前から6ヶ月後までの期間を計算
  const startMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 3, 1);
  const endMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 6, 0);

  for (let d = new Date(startMonth); d <= endMonth; d.setDate(d.getDate() + 1)) {
    const currentDay = new Date(d);
    const daysSinceStart = Math.floor(
      (currentDay.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    const cycleDay = ((daysSinceStart % cycleLength) + cycleLength) % cycleLength;

    let phase: CyclePhase;
    let isOvulationDay = false;

    // 月経期（生理期間）
    if (cycleDay < periodLength) {
      phase = 'menstrual';
    }
    // 卵胞期（生理終了後から排卵まで）
    else if (cycleDay < cycleLength - 14) {
      phase = 'follicular';
    }
    // 排卵期（排卵日とその前後2日）
    else if (cycleDay >= cycleLength - 16 && cycleDay <= cycleLength - 12) {
      phase = 'ovulation';
      // 排卵日
      if (cycleDay === cycleLength - 14) {
        isOvulationDay = true;
      }
    }
    // 黄体期（排卵後から次の生理まで）
    else {
      phase = 'luteal';
    }

    days.push({
      date: new Date(currentDay),
      phase,
      isOvulationDay
    });
  }

  return days;
}