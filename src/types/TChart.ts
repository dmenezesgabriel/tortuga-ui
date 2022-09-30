import { Chart as ChartJS } from "chart.js";
import type {
  ChartType,
  ChartData,
  ChartOptions,
  DefaultDataPoint,
  Plugin,
} from "chart.js";

// https://www.chartjs.org/docs/latest/api/interfaces/ChartData.html
export type TChartData<
  TType extends ChartType = ChartType,
  TData = DefaultDataPoint<TType>,
  TLabel = unknown
> = ChartData<TType, TData, TLabel>;

export type TChartOPtions<TType extends ChartType> = ChartOptions<TType>;

export interface IChartProps<
  TType extends ChartType,
  TData = DefaultDataPoint<TType>,
  TLabel = unknown
> {
  type: String;
  data: TChartData<TType, TData, TLabel>;
  options: TChartOPtions<TType>;
}
