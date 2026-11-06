export interface ProgressPhoto {
  id: string;
  url: string;
  caption: string;
  narrative: string;
}

export type PipelineStage = 
  | 'workshop_depok'
  | 'qc_packing'
  | 'ekspedisi'
  | 'erection_palembang'
  | 'iot_bast';

export interface BiDailyReport {
  id: string;
  cycleNumber: number;
  dateStr: string; // YYYY-MM-DD
  displayDate: string; // e.g. "05 Nov 2026"
  shortDate: string; // e.g. "05 Nov"
  isCompleted: boolean;
  isLatestActive: boolean;
  location: string;
  pipelineStage: PipelineStage;
  pipelineStageLabel: string;
  cumulativeProgress: number; // e.g. 18.5
  progressDelta: number; // e.g. +6.5
  civilProgress: number; // e.g. 22.0
  iotProgress: number; // e.g. 15.0
  status: 'ON-SCHEDULE' | 'COMPLETED' | 'AHEAD' | 'DELAYED';
  executiveSummary: string;
  photos: ProgressPhoto[];
  nextSteps: string[];
}

export interface WorkPackageSubItem {
  id: string;
  no: string;
  description: string;
  volume: number;
  unit: string;
  weightPct: number; // Percentage relative to entire project or scope
  durationDays: number;
  startDay: number;
  endDay: number;
}

export interface WorkPackageCategory {
  id: string;
  categoryNo: number;
  name: string;
  scope: 'sipil' | 'iot_hidroponik';
  totalWeightPct: number; // Weight within its scope
  overallProjectWeightPct: number; // Weight in full project
  subItems: WorkPackageSubItem[];
}

export interface SCurveDataPoint {
  date: string;
  label: string;
  dayIndex: number;
  planCivilCumulative: number;
  actualCivilCumulative: number | null;
  planIotCumulative: number;
  actualIotCumulative: number | null;
  planCombinedCumulative: number;
  actualCombinedCumulative: number | null;
}
