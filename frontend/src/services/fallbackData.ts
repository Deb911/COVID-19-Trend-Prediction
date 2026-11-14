// Auto-generated empirical fallback data anchored in official COVID-19 history
// Used when backend serverless endpoint is cold-starting or unavailable
import {
  LatestSituation, PandemicPeaks, YearlyComparison,
  UnifiedChartResponse, DynamicInsight, OverviewMetrics,
  TimelinePoint, DistrictStat, RiskAnalysisMetric, InsightItem
} from '../types';

export const fallbackLatestSituation: LatestSituation = {
  "latest_date": "August 04, 2024",
  "latest_date_raw": "2024-08-04",
  "latest_cases": 313,
  "latest_deaths": 0,
  "total_confirmed_cases": 45041748,
  "total_reported_deaths": 533623,
  "cases_7d_avg": 44.7,
  "deaths_7d_avg": 0.0,
  "daily_case_change": 313,
  "percentage_change_7d": 28.0,
  "trend_direction": "Increasing Trend",
  "data_source": "Official WHO / MoHFW Pandemic Surveillance Archive (Consolidated National Registry)",
  "is_historical_archive": true,
  "archive_notice": "Latest available data: August 04, 2024"
};

export const fallbackPeaks: PandemicPeaks = {
  "highest_daily_cases": 2738957,
  "highest_cases_date": "May 09, 2021",
  "highest_cases_date_raw": "2021-05-09",
  "highest_daily_deaths": 28982,
  "highest_deaths_date": "May 23, 2021",
  "waves": [
    {
      "wave_name": "Wave 1 (Wild-Type Ancestral Strain)",
      "peak_date": "September 20, 2020",
      "peak_daily_cases": 646263,
      "peak_7d_avg": 92323.3,
      "period": "March 2020 \u2013 December 2020",
      "characteristics": "Initial nationwide containment, gradual community spread, cresting in mid-September 2020."
    },
    {
      "wave_name": "Wave 2 (Delta B.1.617.2 Variant)",
      "peak_date": "May 09, 2021",
      "peak_daily_cases": 2738957,
      "peak_7d_avg": 391279.6,
      "period": "March 2021 \u2013 July 2021",
      "characteristics": "Highest pandemic peak recorded in India; critical hospital bed and oxygen demand."
    },
    {
      "wave_name": "Wave 3 (Omicron BA.1 / BA.2 Variant)",
      "peak_date": "January 23, 2022",
      "peak_daily_cases": 2115100,
      "peak_7d_avg": 302157.1,
      "period": "December 2021 \u2013 March 2022",
      "characteristics": "Extremely rapid viral transmission with shorter incubation and lower relative hospitalization rate."
    },
    {
      "wave_name": "Wave 4 (Omicron XBB Sublineages)",
      "peak_date": "April 23, 2023",
      "peak_daily_cases": 73874,
      "peak_7d_avg": 10553.4,
      "period": "March 2023 \u2013 May 2023",
      "characteristics": "Localized mild resurgence with high community hybrid vaccination and convalescent immunity."
    }
  ]
};

export const fallbackYearly: YearlyComparison[] = [
  {
    "year": 2020,
    "total_cases": 10187850,
    "total_deaths": 147622,
    "average_daily_cases": 28143.2,
    "peak_daily_cases": 646263,
    "peak_date": "September 20, 2020",
    "peak_daily_deaths": 8166,
    "yoy_change_pct": null,
    "is_partial": false,
    "notes": "Full annual surveillance"
  },
  {
    "year": 2021,
    "total_cases": 24598952,
    "total_deaths": 332060,
    "average_daily_cases": 67394.4,
    "peak_daily_cases": 2738957,
    "peak_date": "May 09, 2021",
    "peak_daily_deaths": 28982,
    "yoy_change_pct": 141.5,
    "is_partial": false,
    "notes": "Full annual surveillance"
  },
  {
    "year": 2022,
    "total_cases": 9890304,
    "total_deaths": 51011,
    "average_daily_cases": 27096.7,
    "peak_daily_cases": 2115100,
    "peak_date": "January 23, 2022",
    "peak_daily_deaths": 7888,
    "yoy_change_pct": -59.8,
    "is_partial": false,
    "notes": "Full annual surveillance"
  },
  {
    "year": 2023,
    "total_cases": 336066,
    "total_deaths": 2668,
    "average_daily_cases": 920.7,
    "peak_daily_cases": 73874,
    "peak_date": "April 23, 2023",
    "peak_daily_deaths": 1254,
    "yoy_change_pct": -96.6,
    "is_partial": false,
    "notes": "Full annual surveillance"
  },
  {
    "year": 2024,
    "total_cases": 28576,
    "total_deaths": 262,
    "average_daily_cases": 131.7,
    "peak_daily_cases": 4962,
    "peak_date": "January 07, 2024",
    "peak_daily_deaths": 31,
    "yoy_change_pct": -91.5,
    "is_partial": true,
    "notes": "Partial year (Data through August 4, 2024)"
  },
  {
    "year": 2025,
    "total_cases": 0,
    "total_deaths": 0,
    "average_daily_cases": 0.0,
    "peak_daily_cases": 0,
    "peak_date": "Routine Public Health Surveillance",
    "peak_daily_deaths": 0,
    "yoy_change_pct": null,
    "is_partial": true,
    "notes": "Global emergency concluded by WHO; integrated into routine national respiratory pathogen surveillance."
  },
  {
    "year": 2026,
    "total_cases": 0,
    "total_deaths": 0,
    "average_daily_cases": 0.0,
    "peak_daily_cases": 0,
    "peak_date": "Routine Public Health Surveillance",
    "peak_daily_deaths": 0,
    "yoy_change_pct": null,
    "is_partial": true,
    "notes": "Ongoing endemic baseline monitoring. Latest active historical record: August 4, 2024."
  }
];

export const fallbackInsights: DynamicInsight[] = [
  {
    "id": "INS-PEAK",
    "category": "Historical Peak",
    "title": "Highest Pandemic Infection Peak (May 09, 2021)",
    "statement": "The highest recorded daily COVID-19 cases in the historical database occurred on May 09, 2021, with 2,738,957 reported cases during the Delta variant surge.",
    "type": "peak",
    "badge": "All-Time Record"
  },
  {
    "id": "INS-CURRENT",
    "category": "Latest Observation",
    "title": "Surveillance Status as of August 04, 2024",
    "statement": "The latest recorded surveillance report shows 313 daily cases and a 7-day average of 44.7 cases/day, representing a increasing trend.",
    "type": "trend",
    "badge": "Increasing Trend"
  },
  {
    "id": "INS-WAVES",
    "category": "Pandemic Waves",
    "title": "Major Historical Infection Waves Identified",
    "statement": "Statistical peak smoothing identifies major epidemic waves: Wave 1 peaked in September 2020 (~97k cases/day), Wave 2 reached the all-time peak in May 2021 (~414k cases/day), and Wave 3 Omicron peaked in January 2022 (~347k cases/day).",
    "type": "waves",
    "badge": "Wave Identification"
  },
  {
    "id": "INS-YOY",
    "category": "Yearly Evolution",
    "title": "Shift from Exponential Surge to Endemic Baseline",
    "statement": "Annual total infection load dropped by over 92% between the 2022 Omicron wave and the 2023 endemic surveillance period, reflecting widespread vaccination and community convalescent hybrid immunity.",
    "type": "comparison",
    "badge": "Multi-Year Analysis"
  },
  {
    "id": "INS-FORECAST",
    "category": "Predictive Outlook",
    "title": "30-Day Forward Forecast Projection",
    "statement": "The time-series forecasting model projects stable baseline transmission over the next 14 to 30 days, with 95% confidence bounds remaining well within routine healthcare capacity thresholds.",
    "type": "forecast",
    "badge": "AI Forecast"
  }
];

export const fallbackChart90d: UnifiedChartResponse = {
  "points": [
    {
      "date": "2024-05-06",
      "historical_cases": 0,
      "expected_trend": 117.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-05-07",
      "historical_cases": 0,
      "expected_trend": 117.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-05-08",
      "historical_cases": 0,
      "expected_trend": 117.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-05-09",
      "historical_cases": 0,
      "expected_trend": 117.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-05-10",
      "historical_cases": 0,
      "expected_trend": 117.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-05-11",
      "historical_cases": 0,
      "expected_trend": 117.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-05-12",
      "historical_cases": 742,
      "expected_trend": 106.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-05-13",
      "historical_cases": 0,
      "expected_trend": 106.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-05-14",
      "historical_cases": 0,
      "expected_trend": 106.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-05-15",
      "historical_cases": 0,
      "expected_trend": 106.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-05-16",
      "historical_cases": 0,
      "expected_trend": 106.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-05-17",
      "historical_cases": 0,
      "expected_trend": 106.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-05-18",
      "historical_cases": 0,
      "expected_trend": 106.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-05-19",
      "historical_cases": 622,
      "expected_trend": 88.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-05-20",
      "historical_cases": 0,
      "expected_trend": 88.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-05-21",
      "historical_cases": 0,
      "expected_trend": 88.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-05-22",
      "historical_cases": 0,
      "expected_trend": 88.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-05-23",
      "historical_cases": 0,
      "expected_trend": 88.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-05-24",
      "historical_cases": 0,
      "expected_trend": 88.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-05-25",
      "historical_cases": 0,
      "expected_trend": 88.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-05-26",
      "historical_cases": 370,
      "expected_trend": 52.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-05-27",
      "historical_cases": 0,
      "expected_trend": 52.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-05-28",
      "historical_cases": 0,
      "expected_trend": 52.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-05-29",
      "historical_cases": 0,
      "expected_trend": 52.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-05-30",
      "historical_cases": 0,
      "expected_trend": 52.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-05-31",
      "historical_cases": 0,
      "expected_trend": 52.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-06-01",
      "historical_cases": 0,
      "expected_trend": 52.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-06-02",
      "historical_cases": 362,
      "expected_trend": 51.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-06-03",
      "historical_cases": 0,
      "expected_trend": 51.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-06-04",
      "historical_cases": 0,
      "expected_trend": 51.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-06-05",
      "historical_cases": 0,
      "expected_trend": 51.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-06-06",
      "historical_cases": 0,
      "expected_trend": 51.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-06-07",
      "historical_cases": 0,
      "expected_trend": 51.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-06-08",
      "historical_cases": 0,
      "expected_trend": 51.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-06-09",
      "historical_cases": 164,
      "expected_trend": 23.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-06-10",
      "historical_cases": 0,
      "expected_trend": 23.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-06-11",
      "historical_cases": 0,
      "expected_trend": 23.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-06-12",
      "historical_cases": 0,
      "expected_trend": 23.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-06-13",
      "historical_cases": 0,
      "expected_trend": 23.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-06-14",
      "historical_cases": 0,
      "expected_trend": 23.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-06-15",
      "historical_cases": 0,
      "expected_trend": 23.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-06-16",
      "historical_cases": 38,
      "expected_trend": 5.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-06-17",
      "historical_cases": 0,
      "expected_trend": 5.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-06-18",
      "historical_cases": 0,
      "expected_trend": 5.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-06-19",
      "historical_cases": 0,
      "expected_trend": 5.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-06-20",
      "historical_cases": 0,
      "expected_trend": 5.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-06-21",
      "historical_cases": 0,
      "expected_trend": 5.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-06-22",
      "historical_cases": 0,
      "expected_trend": 5.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-06-23",
      "historical_cases": 210,
      "expected_trend": 30.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-06-24",
      "historical_cases": 0,
      "expected_trend": 30.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-06-25",
      "historical_cases": 0,
      "expected_trend": 30.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-06-26",
      "historical_cases": 0,
      "expected_trend": 30.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-06-27",
      "historical_cases": 0,
      "expected_trend": 30.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-06-28",
      "historical_cases": 0,
      "expected_trend": 30.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-06-29",
      "historical_cases": 0,
      "expected_trend": 30.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-06-30",
      "historical_cases": 334,
      "expected_trend": 47.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-07-01",
      "historical_cases": 0,
      "expected_trend": 47.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-07-02",
      "historical_cases": 0,
      "expected_trend": 47.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-07-03",
      "historical_cases": 0,
      "expected_trend": 47.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-07-04",
      "historical_cases": 0,
      "expected_trend": 47.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-07-05",
      "historical_cases": 0,
      "expected_trend": 47.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-07-06",
      "historical_cases": 0,
      "expected_trend": 47.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-07-07",
      "historical_cases": 134,
      "expected_trend": 19.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-07-08",
      "historical_cases": 0,
      "expected_trend": 19.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-07-09",
      "historical_cases": 0,
      "expected_trend": 19.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-07-10",
      "historical_cases": 0,
      "expected_trend": 19.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-07-11",
      "historical_cases": 0,
      "expected_trend": 19.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-07-12",
      "historical_cases": 0,
      "expected_trend": 19.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-07-13",
      "historical_cases": 0,
      "expected_trend": 19.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-07-14",
      "historical_cases": 0,
      "expected_trend": 0.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-07-15",
      "historical_cases": 0,
      "expected_trend": 0.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-07-16",
      "historical_cases": 0,
      "expected_trend": 0.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-07-17",
      "historical_cases": 0,
      "expected_trend": 0.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-07-18",
      "historical_cases": 0,
      "expected_trend": 0.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-07-19",
      "historical_cases": 0,
      "expected_trend": 0.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-07-20",
      "historical_cases": 0,
      "expected_trend": 0.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-07-21",
      "historical_cases": 440,
      "expected_trend": 62.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-07-22",
      "historical_cases": 0,
      "expected_trend": 62.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-07-23",
      "historical_cases": 0,
      "expected_trend": 62.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-07-24",
      "historical_cases": 0,
      "expected_trend": 62.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-07-25",
      "historical_cases": 0,
      "expected_trend": 62.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-07-26",
      "historical_cases": 0,
      "expected_trend": 62.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-07-27",
      "historical_cases": 0,
      "expected_trend": 62.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-07-28",
      "historical_cases": 243,
      "expected_trend": 34.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-07-29",
      "historical_cases": 0,
      "expected_trend": 34.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-07-30",
      "historical_cases": 0,
      "expected_trend": 34.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-07-31",
      "historical_cases": 0,
      "expected_trend": 34.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-08-01",
      "historical_cases": 0,
      "expected_trend": 34.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-08-02",
      "historical_cases": 0,
      "expected_trend": 34.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-08-03",
      "historical_cases": 0,
      "expected_trend": 34.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-08-04",
      "historical_cases": 313,
      "expected_trend": 44.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-08-05",
      "historical_cases": null,
      "expected_trend": 44.3,
      "forecasted_cases": 44.3,
      "lower_bound": 16.6,
      "upper_bound": 71.9,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-06",
      "historical_cases": null,
      "expected_trend": 43.8,
      "forecasted_cases": 43.8,
      "lower_bound": 15.1,
      "upper_bound": 72.5,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-07",
      "historical_cases": null,
      "expected_trend": 43.4,
      "forecasted_cases": 43.4,
      "lower_bound": 13.6,
      "upper_bound": 73.2,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-08",
      "historical_cases": null,
      "expected_trend": 42.9,
      "forecasted_cases": 42.9,
      "lower_bound": 12.1,
      "upper_bound": 73.8,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-09",
      "historical_cases": null,
      "expected_trend": 42.5,
      "forecasted_cases": 42.5,
      "lower_bound": 10.6,
      "upper_bound": 74.4,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-10",
      "historical_cases": null,
      "expected_trend": 42.1,
      "forecasted_cases": 42.1,
      "lower_bound": 9.1,
      "upper_bound": 75.1,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-11",
      "historical_cases": null,
      "expected_trend": 41.7,
      "forecasted_cases": 41.7,
      "lower_bound": 7.6,
      "upper_bound": 75.7,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-12",
      "historical_cases": null,
      "expected_trend": 41.2,
      "forecasted_cases": 41.2,
      "lower_bound": 6.1,
      "upper_bound": 76.4,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-13",
      "historical_cases": null,
      "expected_trend": 40.8,
      "forecasted_cases": 40.8,
      "lower_bound": 4.7,
      "upper_bound": 77.0,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-14",
      "historical_cases": null,
      "expected_trend": 40.4,
      "forecasted_cases": 40.4,
      "lower_bound": 3.2,
      "upper_bound": 77.7,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-15",
      "historical_cases": null,
      "expected_trend": 40.0,
      "forecasted_cases": 40.0,
      "lower_bound": 1.7,
      "upper_bound": 78.3,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-16",
      "historical_cases": null,
      "expected_trend": 39.6,
      "forecasted_cases": 39.6,
      "lower_bound": 0.3,
      "upper_bound": 79.0,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-17",
      "historical_cases": null,
      "expected_trend": 39.2,
      "forecasted_cases": 39.2,
      "lower_bound": 0.0,
      "upper_bound": 79.7,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-18",
      "historical_cases": null,
      "expected_trend": 38.8,
      "forecasted_cases": 38.8,
      "lower_bound": 0.0,
      "upper_bound": 80.3,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-19",
      "historical_cases": null,
      "expected_trend": 38.4,
      "forecasted_cases": 38.4,
      "lower_bound": 0.0,
      "upper_bound": 81.0,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-20",
      "historical_cases": null,
      "expected_trend": 38.1,
      "forecasted_cases": 38.1,
      "lower_bound": 0.0,
      "upper_bound": 81.7,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-21",
      "historical_cases": null,
      "expected_trend": 37.7,
      "forecasted_cases": 37.7,
      "lower_bound": 0.0,
      "upper_bound": 82.4,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-22",
      "historical_cases": null,
      "expected_trend": 37.3,
      "forecasted_cases": 37.3,
      "lower_bound": 0.0,
      "upper_bound": 83.0,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-23",
      "historical_cases": null,
      "expected_trend": 36.9,
      "forecasted_cases": 36.9,
      "lower_bound": 0.0,
      "upper_bound": 83.7,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-24",
      "historical_cases": null,
      "expected_trend": 36.6,
      "forecasted_cases": 36.6,
      "lower_bound": 0.0,
      "upper_bound": 84.4,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-25",
      "historical_cases": null,
      "expected_trend": 36.2,
      "forecasted_cases": 36.2,
      "lower_bound": 0.0,
      "upper_bound": 85.1,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-26",
      "historical_cases": null,
      "expected_trend": 35.8,
      "forecasted_cases": 35.8,
      "lower_bound": 0.0,
      "upper_bound": 85.8,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-27",
      "historical_cases": null,
      "expected_trend": 35.5,
      "forecasted_cases": 35.5,
      "lower_bound": 0.0,
      "upper_bound": 86.5,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-28",
      "historical_cases": null,
      "expected_trend": 35.1,
      "forecasted_cases": 35.1,
      "lower_bound": 0.0,
      "upper_bound": 87.2,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-29",
      "historical_cases": null,
      "expected_trend": 34.8,
      "forecasted_cases": 34.8,
      "lower_bound": 0.0,
      "upper_bound": 88.0,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-30",
      "historical_cases": null,
      "expected_trend": 34.4,
      "forecasted_cases": 34.4,
      "lower_bound": 0.0,
      "upper_bound": 88.7,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-31",
      "historical_cases": null,
      "expected_trend": 34.1,
      "forecasted_cases": 34.1,
      "lower_bound": 0.0,
      "upper_bound": 89.4,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-09-01",
      "historical_cases": null,
      "expected_trend": 33.7,
      "forecasted_cases": 33.7,
      "lower_bound": 0.0,
      "upper_bound": 90.1,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-09-02",
      "historical_cases": null,
      "expected_trend": 33.4,
      "forecasted_cases": 33.4,
      "lower_bound": 0.0,
      "upper_bound": 90.8,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-09-03",
      "historical_cases": null,
      "expected_trend": 33.1,
      "forecasted_cases": 33.1,
      "lower_bound": 0.0,
      "upper_bound": 91.6,
      "is_forecast": true,
      "is_peak": false
    }
  ],
  "peak_marker": {
    "date": "2021-05-09",
    "value": 2738957,
    "label": "All-Time Delta Peak: 2,738,957 cases"
  },
  "transition_date": "2024-08-04"
};

export const fallbackChartAll: UnifiedChartResponse = {
  "points": [
    {
      "date": "2020-01-05",
      "historical_cases": 0,
      "expected_trend": 0.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-01-07",
      "historical_cases": 0,
      "expected_trend": 0.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-01-09",
      "historical_cases": 0,
      "expected_trend": 0.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-01-11",
      "historical_cases": 0,
      "expected_trend": 0.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-01-13",
      "historical_cases": 0,
      "expected_trend": 0.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-01-15",
      "historical_cases": 0,
      "expected_trend": 0.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-01-17",
      "historical_cases": 0,
      "expected_trend": 0.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-01-19",
      "historical_cases": 0,
      "expected_trend": 0.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-01-21",
      "historical_cases": 0,
      "expected_trend": 0.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-01-23",
      "historical_cases": 0,
      "expected_trend": 0.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-01-25",
      "historical_cases": 0,
      "expected_trend": 0.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-01-27",
      "historical_cases": 0,
      "expected_trend": 0.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-01-29",
      "historical_cases": 0,
      "expected_trend": 0.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-01-31",
      "historical_cases": 0,
      "expected_trend": 0.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-02-02",
      "historical_cases": 2,
      "expected_trend": 0.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-02-04",
      "historical_cases": 0,
      "expected_trend": 0.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-02-06",
      "historical_cases": 0,
      "expected_trend": 0.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-02-08",
      "historical_cases": 0,
      "expected_trend": 0.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-02-10",
      "historical_cases": 0,
      "expected_trend": 0.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-02-12",
      "historical_cases": 0,
      "expected_trend": 0.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-02-14",
      "historical_cases": 0,
      "expected_trend": 0.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-02-16",
      "historical_cases": 0,
      "expected_trend": 0.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-02-18",
      "historical_cases": 0,
      "expected_trend": 0.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-02-20",
      "historical_cases": 0,
      "expected_trend": 0.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-02-22",
      "historical_cases": 0,
      "expected_trend": 0.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-02-24",
      "historical_cases": 0,
      "expected_trend": 0.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-02-26",
      "historical_cases": 0,
      "expected_trend": 0.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-02-28",
      "historical_cases": 0,
      "expected_trend": 0.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-03-01",
      "historical_cases": 0,
      "expected_trend": 0.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-03-03",
      "historical_cases": 0,
      "expected_trend": 0.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-03-05",
      "historical_cases": 0,
      "expected_trend": 0.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-03-07",
      "historical_cases": 0,
      "expected_trend": 0.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-03-09",
      "historical_cases": 0,
      "expected_trend": 4.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-03-11",
      "historical_cases": 0,
      "expected_trend": 4.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-03-13",
      "historical_cases": 0,
      "expected_trend": 4.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-03-15",
      "historical_cases": 68,
      "expected_trend": 9.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-03-17",
      "historical_cases": 0,
      "expected_trend": 9.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-03-19",
      "historical_cases": 0,
      "expected_trend": 9.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-03-21",
      "historical_cases": 0,
      "expected_trend": 9.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-03-23",
      "historical_cases": 0,
      "expected_trend": 36.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-03-25",
      "historical_cases": 0,
      "expected_trend": 36.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-03-27",
      "historical_cases": 0,
      "expected_trend": 36.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-03-29",
      "historical_cases": 619,
      "expected_trend": 88.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-03-31",
      "historical_cases": 0,
      "expected_trend": 88.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-04-02",
      "historical_cases": 0,
      "expected_trend": 88.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-04-04",
      "historical_cases": 0,
      "expected_trend": 88.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-04-06",
      "historical_cases": 0,
      "expected_trend": 342.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-04-08",
      "historical_cases": 0,
      "expected_trend": 342.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-04-10",
      "historical_cases": 0,
      "expected_trend": 342.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-04-12",
      "historical_cases": 4982,
      "expected_trend": 711.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-04-14",
      "historical_cases": 0,
      "expected_trend": 711.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-04-16",
      "historical_cases": 0,
      "expected_trend": 711.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-04-18",
      "historical_cases": 0,
      "expected_trend": 711.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-04-20",
      "historical_cases": 0,
      "expected_trend": 1050.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-04-22",
      "historical_cases": 0,
      "expected_trend": 1050.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-04-24",
      "historical_cases": 0,
      "expected_trend": 1050.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-04-26",
      "historical_cases": 10784,
      "expected_trend": 1540.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-04-28",
      "historical_cases": 0,
      "expected_trend": 1540.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-04-30",
      "historical_cases": 0,
      "expected_trend": 1540.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-05-02",
      "historical_cases": 0,
      "expected_trend": 1540.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-05-04",
      "historical_cases": 0,
      "expected_trend": 1926.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-05-06",
      "historical_cases": 0,
      "expected_trend": 1926.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-05-08",
      "historical_cases": 0,
      "expected_trend": 1926.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-05-10",
      "historical_cases": 22959,
      "expected_trend": 3279.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-05-12",
      "historical_cases": 0,
      "expected_trend": 3279.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-05-14",
      "historical_cases": 0,
      "expected_trend": 3279.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-05-16",
      "historical_cases": 0,
      "expected_trend": 3279.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-05-18",
      "historical_cases": 0,
      "expected_trend": 3998.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-05-20",
      "historical_cases": 0,
      "expected_trend": 3998.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-05-22",
      "historical_cases": 0,
      "expected_trend": 3998.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-05-24",
      "historical_cases": 40941,
      "expected_trend": 5848.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-05-26",
      "historical_cases": 0,
      "expected_trend": 5848.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-05-28",
      "historical_cases": 0,
      "expected_trend": 5848.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-05-30",
      "historical_cases": 0,
      "expected_trend": 5848.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-06-01",
      "historical_cases": 0,
      "expected_trend": 7182.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-06-03",
      "historical_cases": 0,
      "expected_trend": 7182.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-06-05",
      "historical_cases": 0,
      "expected_trend": 7182.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-06-07",
      "historical_cases": 64485,
      "expected_trend": 9212.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-06-09",
      "historical_cases": 0,
      "expected_trend": 9212.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-06-11",
      "historical_cases": 0,
      "expected_trend": 9212.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-06-13",
      "historical_cases": 0,
      "expected_trend": 9212.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-06-15",
      "historical_cases": 0,
      "expected_trend": 10613.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-06-17",
      "historical_cases": 0,
      "expected_trend": 10613.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-06-19",
      "historical_cases": 0,
      "expected_trend": 10613.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-06-21",
      "historical_cases": 89539,
      "expected_trend": 12791.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-06-23",
      "historical_cases": 0,
      "expected_trend": 12791.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-06-25",
      "historical_cases": 0,
      "expected_trend": 12791.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-06-27",
      "historical_cases": 0,
      "expected_trend": 12791.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-06-29",
      "historical_cases": 0,
      "expected_trend": 16914.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-07-01",
      "historical_cases": 0,
      "expected_trend": 16914.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-07-03",
      "historical_cases": 0,
      "expected_trend": 16914.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-07-05",
      "historical_cases": 144306,
      "expected_trend": 20615.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-07-07",
      "historical_cases": 0,
      "expected_trend": 20615.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-07-09",
      "historical_cases": 0,
      "expected_trend": 20615.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-07-11",
      "historical_cases": 0,
      "expected_trend": 20615.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-07-13",
      "historical_cases": 0,
      "expected_trend": 25198.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-07-15",
      "historical_cases": 0,
      "expected_trend": 25198.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-07-17",
      "historical_cases": 0,
      "expected_trend": 25198.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-07-19",
      "historical_cases": 228065,
      "expected_trend": 32580.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-07-21",
      "historical_cases": 0,
      "expected_trend": 32580.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-07-23",
      "historical_cases": 0,
      "expected_trend": 32580.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-07-25",
      "historical_cases": 0,
      "expected_trend": 32580.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-07-27",
      "historical_cases": 0,
      "expected_trend": 43986.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-07-29",
      "historical_cases": 0,
      "expected_trend": 43986.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-07-31",
      "historical_cases": 0,
      "expected_trend": 43986.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-08-02",
      "historical_cases": 365201,
      "expected_trend": 52171.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-08-04",
      "historical_cases": 0,
      "expected_trend": 52171.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-08-06",
      "historical_cases": 0,
      "expected_trend": 52171.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-08-08",
      "historical_cases": 0,
      "expected_trend": 52171.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-08-10",
      "historical_cases": 0,
      "expected_trend": 57469.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-08-12",
      "historical_cases": 0,
      "expected_trend": 57469.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-08-14",
      "historical_cases": 0,
      "expected_trend": 57469.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-08-16",
      "historical_cases": 436672,
      "expected_trend": 62381.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-08-18",
      "historical_cases": 0,
      "expected_trend": 62381.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-08-20",
      "historical_cases": 0,
      "expected_trend": 62381.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-08-22",
      "historical_cases": 0,
      "expected_trend": 62381.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-08-24",
      "historical_cases": 0,
      "expected_trend": 65036.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-08-26",
      "historical_cases": 0,
      "expected_trend": 65036.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-08-28",
      "historical_cases": 0,
      "expected_trend": 65036.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-08-30",
      "historical_cases": 497793,
      "expected_trend": 71113.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-09-01",
      "historical_cases": 0,
      "expected_trend": 71113.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-09-03",
      "historical_cases": 0,
      "expected_trend": 71113.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-09-05",
      "historical_cases": 0,
      "expected_trend": 71113.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-09-07",
      "historical_cases": 0,
      "expected_trend": 81582.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-09-09",
      "historical_cases": 0,
      "expected_trend": 81582.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-09-11",
      "historical_cases": 0,
      "expected_trend": 81582.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-09-13",
      "historical_cases": 640545,
      "expected_trend": 91506.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-09-15",
      "historical_cases": 0,
      "expected_trend": 91506.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-09-17",
      "historical_cases": 0,
      "expected_trend": 91506.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-09-19",
      "historical_cases": 0,
      "expected_trend": 91506.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-09-21",
      "historical_cases": 0,
      "expected_trend": 92323.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-09-23",
      "historical_cases": 0,
      "expected_trend": 92323.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-09-25",
      "historical_cases": 0,
      "expected_trend": 92323.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-09-27",
      "historical_cases": 591913,
      "expected_trend": 84559.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-09-29",
      "historical_cases": 0,
      "expected_trend": 84559.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-10-01",
      "historical_cases": 0,
      "expected_trend": 84559.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-10-03",
      "historical_cases": 0,
      "expected_trend": 84559.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-10-05",
      "historical_cases": 0,
      "expected_trend": 79548.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-10-07",
      "historical_cases": 0,
      "expected_trend": 79548.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-10-09",
      "historical_cases": 0,
      "expected_trend": 79548.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-10-11",
      "historical_cases": 504433,
      "expected_trend": 72061.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-10-13",
      "historical_cases": 0,
      "expected_trend": 72061.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-10-15",
      "historical_cases": 0,
      "expected_trend": 72061.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-10-17",
      "historical_cases": 0,
      "expected_trend": 72061.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-10-19",
      "historical_cases": 0,
      "expected_trend": 62963.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-10-21",
      "historical_cases": 0,
      "expected_trend": 62963.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-10-23",
      "historical_cases": 0,
      "expected_trend": 62963.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-10-25",
      "historical_cases": 370260,
      "expected_trend": 52894.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-10-27",
      "historical_cases": 0,
      "expected_trend": 52894.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-10-29",
      "historical_cases": 0,
      "expected_trend": 52894.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-10-31",
      "historical_cases": 0,
      "expected_trend": 52894.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-11-02",
      "historical_cases": 0,
      "expected_trend": 45610.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-11-04",
      "historical_cases": 0,
      "expected_trend": 45610.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-11-06",
      "historical_cases": 0,
      "expected_trend": 45610.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-11-08",
      "historical_cases": 323672,
      "expected_trend": 46238.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-11-10",
      "historical_cases": 0,
      "expected_trend": 46238.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-11-12",
      "historical_cases": 0,
      "expected_trend": 46238.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-11-14",
      "historical_cases": 0,
      "expected_trend": 46238.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-11-16",
      "historical_cases": 0,
      "expected_trend": 43832.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-11-18",
      "historical_cases": 0,
      "expected_trend": 43832.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-11-20",
      "historical_cases": 0,
      "expected_trend": 43832.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-11-22",
      "historical_cases": 281227,
      "expected_trend": 40175.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-11-24",
      "historical_cases": 0,
      "expected_trend": 40175.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-11-26",
      "historical_cases": 0,
      "expected_trend": 40175.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-11-28",
      "historical_cases": 0,
      "expected_trend": 40175.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-11-30",
      "historical_cases": 0,
      "expected_trend": 42444.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-12-02",
      "historical_cases": 0,
      "expected_trend": 42444.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-12-04",
      "historical_cases": 0,
      "expected_trend": 42444.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-12-06",
      "historical_cases": 251303,
      "expected_trend": 35900.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-12-08",
      "historical_cases": 0,
      "expected_trend": 35900.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-12-10",
      "historical_cases": 0,
      "expected_trend": 35900.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-12-12",
      "historical_cases": 0,
      "expected_trend": 35900.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-12-14",
      "historical_cases": 0,
      "expected_trend": 30401.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-12-16",
      "historical_cases": 0,
      "expected_trend": 30401.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-12-18",
      "historical_cases": 0,
      "expected_trend": 30401.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-12-20",
      "historical_cases": 174194,
      "expected_trend": 24884.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-12-22",
      "historical_cases": 0,
      "expected_trend": 24884.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-12-24",
      "historical_cases": 0,
      "expected_trend": 24884.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-12-26",
      "historical_cases": 0,
      "expected_trend": 24884.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-12-28",
      "historical_cases": 0,
      "expected_trend": 22375.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2020-12-30",
      "historical_cases": 0,
      "expected_trend": 22375.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-01-01",
      "historical_cases": 0,
      "expected_trend": 22375.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-01-03",
      "historical_cases": 136115,
      "expected_trend": 19445.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-01-05",
      "historical_cases": 0,
      "expected_trend": 19445.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-01-07",
      "historical_cases": 0,
      "expected_trend": 19445.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-01-09",
      "historical_cases": 0,
      "expected_trend": 19445.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-01-11",
      "historical_cases": 0,
      "expected_trend": 18045.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-01-13",
      "historical_cases": 0,
      "expected_trend": 18045.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-01-15",
      "historical_cases": 0,
      "expected_trend": 18045.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-01-17",
      "historical_cases": 107701,
      "expected_trend": 15385.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-01-19",
      "historical_cases": 0,
      "expected_trend": 15385.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-01-21",
      "historical_cases": 0,
      "expected_trend": 15385.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-01-23",
      "historical_cases": 0,
      "expected_trend": 15385.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-01-25",
      "historical_cases": 0,
      "expected_trend": 13792.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-01-27",
      "historical_cases": 0,
      "expected_trend": 13792.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-01-29",
      "historical_cases": 0,
      "expected_trend": 13792.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-01-31",
      "historical_cases": 91650,
      "expected_trend": 13092.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-02-02",
      "historical_cases": 0,
      "expected_trend": 13092.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-02-04",
      "historical_cases": 0,
      "expected_trend": 13092.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-02-06",
      "historical_cases": 0,
      "expected_trend": 13092.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-02-08",
      "historical_cases": 0,
      "expected_trend": 11454.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-02-10",
      "historical_cases": 0,
      "expected_trend": 11454.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-02-12",
      "historical_cases": 0,
      "expected_trend": 11454.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-02-14",
      "historical_cases": 78577,
      "expected_trend": 11225.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-02-16",
      "historical_cases": 0,
      "expected_trend": 11225.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-02-18",
      "historical_cases": 0,
      "expected_trend": 11225.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-02-20",
      "historical_cases": 0,
      "expected_trend": 11225.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-02-22",
      "historical_cases": 0,
      "expected_trend": 12387.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-02-24",
      "historical_cases": 0,
      "expected_trend": 12387.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-02-26",
      "historical_cases": 0,
      "expected_trend": 12387.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-02-28",
      "historical_cases": 105080,
      "expected_trend": 15011.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-03-02",
      "historical_cases": 0,
      "expected_trend": 15011.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-03-04",
      "historical_cases": 0,
      "expected_trend": 15011.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-03-06",
      "historical_cases": 0,
      "expected_trend": 15011.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-03-08",
      "historical_cases": 0,
      "expected_trend": 16295.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-03-10",
      "historical_cases": 0,
      "expected_trend": 16295.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-03-12",
      "historical_cases": 0,
      "expected_trend": 16295.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-03-14",
      "historical_cases": 148249,
      "expected_trend": 21178.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-03-16",
      "historical_cases": 0,
      "expected_trend": 21178.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-03-18",
      "historical_cases": 0,
      "expected_trend": 21178.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-03-20",
      "historical_cases": 0,
      "expected_trend": 21178.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-03-22",
      "historical_cases": 0,
      "expected_trend": 34297.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-03-24",
      "historical_cases": 0,
      "expected_trend": 34297.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-03-26",
      "historical_cases": 0,
      "expected_trend": 34297.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-03-28",
      "historical_cases": 372494,
      "expected_trend": 53213.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-03-30",
      "historical_cases": 0,
      "expected_trend": 53213.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-04-01",
      "historical_cases": 0,
      "expected_trend": 53213.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-04-03",
      "historical_cases": 0,
      "expected_trend": 53213.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-04-05",
      "historical_cases": 0,
      "expected_trend": 73412.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-04-07",
      "historical_cases": 0,
      "expected_trend": 73412.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-04-09",
      "historical_cases": 0,
      "expected_trend": 73412.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-04-11",
      "historical_cases": 873296,
      "expected_trend": 124756.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-04-13",
      "historical_cases": 0,
      "expected_trend": 124756.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-04-15",
      "historical_cases": 0,
      "expected_trend": 124756.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-04-17",
      "historical_cases": 0,
      "expected_trend": 124756.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-04-19",
      "historical_cases": 0,
      "expected_trend": 204186.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-04-21",
      "historical_cases": 0,
      "expected_trend": 204186.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-04-23",
      "historical_cases": 0,
      "expected_trend": 204186.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-04-25",
      "historical_cases": 2172063,
      "expected_trend": 310294.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-04-27",
      "historical_cases": 0,
      "expected_trend": 310294.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-04-29",
      "historical_cases": 0,
      "expected_trend": 310294.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-05-01",
      "historical_cases": 0,
      "expected_trend": 310294.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-05-03",
      "historical_cases": 0,
      "expected_trend": 371040.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-05-05",
      "historical_cases": 0,
      "expected_trend": 371040.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-05-07",
      "historical_cases": 0,
      "expected_trend": 371040.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-05-09",
      "historical_cases": 2738957,
      "expected_trend": 391279.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": true
    },
    {
      "date": "2021-05-11",
      "historical_cases": 0,
      "expected_trend": 391279.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-05-13",
      "historical_cases": 0,
      "expected_trend": 391279.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-05-15",
      "historical_cases": 0,
      "expected_trend": 391279.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-05-17",
      "historical_cases": 0,
      "expected_trend": 341094.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-05-19",
      "historical_cases": 0,
      "expected_trend": 341094.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-05-21",
      "historical_cases": 0,
      "expected_trend": 341094.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-05-23",
      "historical_cases": 1846055,
      "expected_trend": 263722.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-05-25",
      "historical_cases": 0,
      "expected_trend": 263722.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-05-27",
      "historical_cases": 0,
      "expected_trend": 263722.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-05-29",
      "historical_cases": 0,
      "expected_trend": 263722.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-05-31",
      "historical_cases": 0,
      "expected_trend": 194952.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-06-02",
      "historical_cases": 0,
      "expected_trend": 194952.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-06-04",
      "historical_cases": 0,
      "expected_trend": 194952.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-06-06",
      "historical_cases": 914539,
      "expected_trend": 130648.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-06-08",
      "historical_cases": 0,
      "expected_trend": 130648.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-06-10",
      "historical_cases": 0,
      "expected_trend": 130648.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-06-12",
      "historical_cases": 0,
      "expected_trend": 130648.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-06-14",
      "historical_cases": 0,
      "expected_trend": 90092.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-06-16",
      "historical_cases": 0,
      "expected_trend": 90092.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-06-18",
      "historical_cases": 0,
      "expected_trend": 90092.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-06-20",
      "historical_cases": 441976,
      "expected_trend": 63139.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-06-22",
      "historical_cases": 0,
      "expected_trend": 63139.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-06-24",
      "historical_cases": 0,
      "expected_trend": 63139.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-06-26",
      "historical_cases": 0,
      "expected_trend": 63139.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-06-28",
      "historical_cases": 0,
      "expected_trend": 50174.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-06-30",
      "historical_cases": 0,
      "expected_trend": 50174.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-07-02",
      "historical_cases": 0,
      "expected_trend": 50174.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-07-04",
      "historical_cases": 312250,
      "expected_trend": 44607.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-07-06",
      "historical_cases": 0,
      "expected_trend": 44607.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-07-08",
      "historical_cases": 0,
      "expected_trend": 44607.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-07-10",
      "historical_cases": 0,
      "expected_trend": 44607.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-07-12",
      "historical_cases": 0,
      "expected_trend": 41684.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-07-14",
      "historical_cases": 0,
      "expected_trend": 41684.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-07-16",
      "historical_cases": 0,
      "expected_trend": 41684.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-07-18",
      "historical_cases": 268843,
      "expected_trend": 38406.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-07-20",
      "historical_cases": 0,
      "expected_trend": 38406.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-07-22",
      "historical_cases": 0,
      "expected_trend": 38406.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-07-24",
      "historical_cases": 0,
      "expected_trend": 38406.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-07-26",
      "historical_cases": 0,
      "expected_trend": 37976.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-07-28",
      "historical_cases": 0,
      "expected_trend": 37976.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-07-30",
      "historical_cases": 0,
      "expected_trend": 37976.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-08-01",
      "historical_cases": 283923,
      "expected_trend": 40560.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-08-03",
      "historical_cases": 0,
      "expected_trend": 40560.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-08-05",
      "historical_cases": 0,
      "expected_trend": 40560.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-08-07",
      "historical_cases": 0,
      "expected_trend": 40560.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-08-09",
      "historical_cases": 0,
      "expected_trend": 39804.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-08-11",
      "historical_cases": 0,
      "expected_trend": 39804.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-08-13",
      "historical_cases": 0,
      "expected_trend": 39804.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-08-15",
      "historical_cases": 258121,
      "expected_trend": 36874.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-08-17",
      "historical_cases": 0,
      "expected_trend": 36874.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-08-19",
      "historical_cases": 0,
      "expected_trend": 36874.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-08-21",
      "historical_cases": 0,
      "expected_trend": 36874.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-08-23",
      "historical_cases": 0,
      "expected_trend": 33094.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-08-25",
      "historical_cases": 0,
      "expected_trend": 33094.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-08-27",
      "historical_cases": 0,
      "expected_trend": 33094.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-08-29",
      "historical_cases": 270796,
      "expected_trend": 38685.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-08-31",
      "historical_cases": 0,
      "expected_trend": 38685.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-09-02",
      "historical_cases": 0,
      "expected_trend": 38685.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-09-04",
      "historical_cases": 0,
      "expected_trend": 38685.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-09-06",
      "historical_cases": 0,
      "expected_trend": 41949.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-09-08",
      "historical_cases": 0,
      "expected_trend": 41949.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-09-10",
      "historical_cases": 0,
      "expected_trend": 41949.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-09-12",
      "historical_cases": 248248,
      "expected_trend": 35464.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-09-14",
      "historical_cases": 0,
      "expected_trend": 35464.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-09-16",
      "historical_cases": 0,
      "expected_trend": 35464.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-09-18",
      "historical_cases": 0,
      "expected_trend": 35464.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-09-20",
      "historical_cases": 0,
      "expected_trend": 30177.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-09-22",
      "historical_cases": 0,
      "expected_trend": 30177.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-09-24",
      "historical_cases": 0,
      "expected_trend": 30177.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-09-26",
      "historical_cases": 204582,
      "expected_trend": 29226.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-09-28",
      "historical_cases": 0,
      "expected_trend": 29226.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-09-30",
      "historical_cases": 0,
      "expected_trend": 29226.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-10-02",
      "historical_cases": 0,
      "expected_trend": 29226.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-10-04",
      "historical_cases": 0,
      "expected_trend": 23022.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-10-06",
      "historical_cases": 0,
      "expected_trend": 23022.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-10-08",
      "historical_cases": 0,
      "expected_trend": 23022.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-10-10",
      "historical_cases": 139572,
      "expected_trend": 19938.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-10-12",
      "historical_cases": 0,
      "expected_trend": 19938.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-10-14",
      "historical_cases": 0,
      "expected_trend": 19938.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-10-16",
      "historical_cases": 0,
      "expected_trend": 19938.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-10-18",
      "historical_cases": 0,
      "expected_trend": 16320.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-10-20",
      "historical_cases": 0,
      "expected_trend": 16320.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-10-22",
      "historical_cases": 0,
      "expected_trend": 16320.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-10-24",
      "historical_cases": 107749,
      "expected_trend": 15392.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-10-26",
      "historical_cases": 0,
      "expected_trend": 15392.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-10-28",
      "historical_cases": 0,
      "expected_trend": 15392.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-10-30",
      "historical_cases": 0,
      "expected_trend": 15392.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-11-01",
      "historical_cases": 0,
      "expected_trend": 13976.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-11-03",
      "historical_cases": 0,
      "expected_trend": 13976.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-11-05",
      "historical_cases": 0,
      "expected_trend": 13976.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-11-07",
      "historical_cases": 82236,
      "expected_trend": 11748.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-11-09",
      "historical_cases": 0,
      "expected_trend": 11748.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-11-11",
      "historical_cases": 0,
      "expected_trend": 11748.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-11-13",
      "historical_cases": 0,
      "expected_trend": 11748.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-11-15",
      "historical_cases": 0,
      "expected_trend": 11681.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-11-17",
      "historical_cases": 0,
      "expected_trend": 11681.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-11-19",
      "historical_cases": 0,
      "expected_trend": 11681.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-11-21",
      "historical_cases": 73106,
      "expected_trend": 10443.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-11-23",
      "historical_cases": 0,
      "expected_trend": 10443.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-11-25",
      "historical_cases": 0,
      "expected_trend": 10443.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-11-27",
      "historical_cases": 0,
      "expected_trend": 10443.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-11-29",
      "historical_cases": 0,
      "expected_trend": 8872.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-12-01",
      "historical_cases": 0,
      "expected_trend": 8872.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-12-03",
      "historical_cases": 0,
      "expected_trend": 8872.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-12-05",
      "historical_cases": 60732,
      "expected_trend": 8676.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-12-07",
      "historical_cases": 0,
      "expected_trend": 8676.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-12-09",
      "historical_cases": 0,
      "expected_trend": 8676.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-12-11",
      "historical_cases": 0,
      "expected_trend": 8676.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-12-13",
      "historical_cases": 0,
      "expected_trend": 8179.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-12-15",
      "historical_cases": 0,
      "expected_trend": 8179.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-12-17",
      "historical_cases": 0,
      "expected_trend": 8179.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-12-19",
      "historical_cases": 49765,
      "expected_trend": 7109.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-12-21",
      "historical_cases": 0,
      "expected_trend": 7109.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-12-23",
      "historical_cases": 0,
      "expected_trend": 7109.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-12-25",
      "historical_cases": 0,
      "expected_trend": 7109.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-12-27",
      "historical_cases": 0,
      "expected_trend": 6646.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-12-29",
      "historical_cases": 0,
      "expected_trend": 6646.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2021-12-31",
      "historical_cases": 0,
      "expected_trend": 6646.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-01-02",
      "historical_cases": 102330,
      "expected_trend": 14618.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-01-04",
      "historical_cases": 0,
      "expected_trend": 14618.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-01-06",
      "historical_cases": 0,
      "expected_trend": 14618.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-01-08",
      "historical_cases": 0,
      "expected_trend": 14618.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-01-10",
      "historical_cases": 0,
      "expected_trend": 91267.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-01-12",
      "historical_cases": 0,
      "expected_trend": 91267.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-01-14",
      "historical_cases": 0,
      "expected_trend": 91267.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-01-16",
      "historical_cases": 1594160,
      "expected_trend": 227737.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-01-18",
      "historical_cases": 0,
      "expected_trend": 227737.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-01-20",
      "historical_cases": 0,
      "expected_trend": 227737.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-01-22",
      "historical_cases": 0,
      "expected_trend": 227737.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-01-24",
      "historical_cases": 0,
      "expected_trend": 302157.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-01-26",
      "historical_cases": 0,
      "expected_trend": 302157.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-01-28",
      "historical_cases": 0,
      "expected_trend": 302157.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-01-30",
      "historical_cases": 1855258,
      "expected_trend": 265036.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-02-01",
      "historical_cases": 0,
      "expected_trend": 265036.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-02-03",
      "historical_cases": 0,
      "expected_trend": 265036.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-02-05",
      "historical_cases": 0,
      "expected_trend": 265036.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-02-07",
      "historical_cases": 0,
      "expected_trend": 156516.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-02-09",
      "historical_cases": 0,
      "expected_trend": 156516.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-02-11",
      "historical_cases": 0,
      "expected_trend": 156516.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-02-13",
      "historical_cases": 443283,
      "expected_trend": 63326.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-02-15",
      "historical_cases": 0,
      "expected_trend": 63326.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-02-17",
      "historical_cases": 0,
      "expected_trend": 63326.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-02-19",
      "historical_cases": 0,
      "expected_trend": 63326.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-02-21",
      "historical_cases": 0,
      "expected_trend": 27293.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-02-23",
      "historical_cases": 0,
      "expected_trend": 27293.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-02-25",
      "historical_cases": 0,
      "expected_trend": 27293.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-02-27",
      "historical_cases": 93644,
      "expected_trend": 13377.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-03-01",
      "historical_cases": 0,
      "expected_trend": 13377.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-03-03",
      "historical_cases": 0,
      "expected_trend": 13377.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-03-05",
      "historical_cases": 0,
      "expected_trend": 13377.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-03-07",
      "historical_cases": 0,
      "expected_trend": 6690.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-03-09",
      "historical_cases": 0,
      "expected_trend": 6690.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-03-11",
      "historical_cases": 0,
      "expected_trend": 6690.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-03-13",
      "historical_cases": 28038,
      "expected_trend": 4005.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-03-15",
      "historical_cases": 0,
      "expected_trend": 4005.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-03-17",
      "historical_cases": 0,
      "expected_trend": 4005.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-03-19",
      "historical_cases": 0,
      "expected_trend": 4005.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-03-21",
      "historical_cases": 0,
      "expected_trend": 2407.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-03-23",
      "historical_cases": 0,
      "expected_trend": 2407.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-03-25",
      "historical_cases": 0,
      "expected_trend": 2407.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-03-27",
      "historical_cases": 11612,
      "expected_trend": 1658.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-03-29",
      "historical_cases": 0,
      "expected_trend": 1658.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-03-31",
      "historical_cases": 0,
      "expected_trend": 1658.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-04-02",
      "historical_cases": 0,
      "expected_trend": 1658.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-04-04",
      "historical_cases": 0,
      "expected_trend": 1239.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-04-06",
      "historical_cases": 0,
      "expected_trend": 1239.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-04-08",
      "historical_cases": 0,
      "expected_trend": 1239.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-04-10",
      "historical_cases": 7140,
      "expected_trend": 1020.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-04-12",
      "historical_cases": 0,
      "expected_trend": 1020.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-04-14",
      "historical_cases": 0,
      "expected_trend": 1020.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-04-16",
      "historical_cases": 0,
      "expected_trend": 1020.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-04-18",
      "historical_cases": 0,
      "expected_trend": 975.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-04-20",
      "historical_cases": 0,
      "expected_trend": 975.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-04-22",
      "historical_cases": 0,
      "expected_trend": 975.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-04-24",
      "historical_cases": 15448,
      "expected_trend": 2206.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-04-26",
      "historical_cases": 0,
      "expected_trend": 2206.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-04-28",
      "historical_cases": 0,
      "expected_trend": 2206.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-04-30",
      "historical_cases": 0,
      "expected_trend": 2206.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-05-02",
      "historical_cases": 0,
      "expected_trend": 3091.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-05-04",
      "historical_cases": 0,
      "expected_trend": 3091.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-05-06",
      "historical_cases": 0,
      "expected_trend": 3091.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-05-08",
      "historical_cases": 23006,
      "expected_trend": 3286.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-05-10",
      "historical_cases": 0,
      "expected_trend": 3286.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-05-12",
      "historical_cases": 0,
      "expected_trend": 3286.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-05-14",
      "historical_cases": 0,
      "expected_trend": 3286.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-05-16",
      "historical_cases": 0,
      "expected_trend": 2772.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-05-18",
      "historical_cases": 0,
      "expected_trend": 2772.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-05-20",
      "historical_cases": 0,
      "expected_trend": 2772.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-05-22",
      "historical_cases": 14772,
      "expected_trend": 2110.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-05-24",
      "historical_cases": 0,
      "expected_trend": 2110.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-05-26",
      "historical_cases": 0,
      "expected_trend": 2110.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-05-28",
      "historical_cases": 0,
      "expected_trend": 2110.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-05-30",
      "historical_cases": 0,
      "expected_trend": 2381.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-06-01",
      "historical_cases": 0,
      "expected_trend": 2381.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-06-03",
      "historical_cases": 0,
      "expected_trend": 2381.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-06-05",
      "historical_cases": 23774,
      "expected_trend": 3396.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-06-07",
      "historical_cases": 0,
      "expected_trend": 3396.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-06-09",
      "historical_cases": 0,
      "expected_trend": 3396.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-06-11",
      "historical_cases": 0,
      "expected_trend": 3396.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-06-13",
      "historical_cases": 0,
      "expected_trend": 6457.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-06-15",
      "historical_cases": 0,
      "expected_trend": 6457.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-06-17",
      "historical_cases": 0,
      "expected_trend": 6457.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-06-19",
      "historical_cases": 74675,
      "expected_trend": 10667.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-06-21",
      "historical_cases": 0,
      "expected_trend": 10667.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-06-23",
      "historical_cases": 0,
      "expected_trend": 10667.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-06-25",
      "historical_cases": 0,
      "expected_trend": 10667.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-06-27",
      "historical_cases": 0,
      "expected_trend": 13325.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-06-29",
      "historical_cases": 0,
      "expected_trend": 13325.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-07-01",
      "historical_cases": 0,
      "expected_trend": 13325.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-07-03",
      "historical_cases": 112456,
      "expected_trend": 16065.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-07-05",
      "historical_cases": 0,
      "expected_trend": 16065.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-07-07",
      "historical_cases": 0,
      "expected_trend": 16065.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-07-09",
      "historical_cases": 0,
      "expected_trend": 16065.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-07-11",
      "historical_cases": 0,
      "expected_trend": 17174.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-07-13",
      "historical_cases": 0,
      "expected_trend": 17174.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-07-15",
      "historical_cases": 0,
      "expected_trend": 17174.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-07-17",
      "historical_cases": 127948,
      "expected_trend": 18278.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-07-19",
      "historical_cases": 0,
      "expected_trend": 18278.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-07-21",
      "historical_cases": 0,
      "expected_trend": 18278.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-07-23",
      "historical_cases": 0,
      "expected_trend": 18278.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-07-25",
      "historical_cases": 0,
      "expected_trend": 19736.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-07-27",
      "historical_cases": 0,
      "expected_trend": 19736.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-07-29",
      "historical_cases": 0,
      "expected_trend": 19736.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-07-31",
      "historical_cases": 131056,
      "expected_trend": 18722.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-08-02",
      "historical_cases": 0,
      "expected_trend": 18722.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-08-04",
      "historical_cases": 0,
      "expected_trend": 18722.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-08-06",
      "historical_cases": 0,
      "expected_trend": 18722.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-08-08",
      "historical_cases": 0,
      "expected_trend": 17988.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-08-10",
      "historical_cases": 0,
      "expected_trend": 17988.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-08-12",
      "historical_cases": 0,
      "expected_trend": 17988.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-08-14",
      "historical_cases": 107732,
      "expected_trend": 15390.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-08-16",
      "historical_cases": 0,
      "expected_trend": 15390.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-08-18",
      "historical_cases": 0,
      "expected_trend": 15390.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-08-20",
      "historical_cases": 0,
      "expected_trend": 15390.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-08-22",
      "historical_cases": 0,
      "expected_trend": 12280.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-08-24",
      "historical_cases": 0,
      "expected_trend": 12280.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-08-26",
      "historical_cases": 0,
      "expected_trend": 12280.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-08-28",
      "historical_cases": 68703,
      "expected_trend": 9814.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-08-30",
      "historical_cases": 0,
      "expected_trend": 9814.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-09-01",
      "historical_cases": 0,
      "expected_trend": 9814.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-09-03",
      "historical_cases": 0,
      "expected_trend": 9814.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-09-05",
      "historical_cases": 0,
      "expected_trend": 6914.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-09-07",
      "historical_cases": 0,
      "expected_trend": 6914.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-09-09",
      "historical_cases": 0,
      "expected_trend": 6914.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-09-11",
      "historical_cases": 38824,
      "expected_trend": 5546.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-09-13",
      "historical_cases": 0,
      "expected_trend": 5546.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-09-15",
      "historical_cases": 0,
      "expected_trend": 5546.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-09-17",
      "historical_cases": 0,
      "expected_trend": 5546.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-09-19",
      "historical_cases": 0,
      "expected_trend": 5547.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-09-21",
      "historical_cases": 0,
      "expected_trend": 5547.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-09-23",
      "historical_cases": 0,
      "expected_trend": 5547.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-09-25",
      "historical_cases": 33926,
      "expected_trend": 4846.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-09-27",
      "historical_cases": 0,
      "expected_trend": 4846.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-09-29",
      "historical_cases": 0,
      "expected_trend": 4846.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-10-01",
      "historical_cases": 0,
      "expected_trend": 4846.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-10-03",
      "historical_cases": 0,
      "expected_trend": 3767.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-10-05",
      "historical_cases": 0,
      "expected_trend": 3767.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-10-07",
      "historical_cases": 0,
      "expected_trend": 3767.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-10-09",
      "historical_cases": 17526,
      "expected_trend": 2503.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-10-11",
      "historical_cases": 0,
      "expected_trend": 2503.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-10-13",
      "historical_cases": 0,
      "expected_trend": 2503.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-10-15",
      "historical_cases": 0,
      "expected_trend": 2503.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-10-17",
      "historical_cases": 0,
      "expected_trend": 2402.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-10-19",
      "historical_cases": 0,
      "expected_trend": 2402.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-10-21",
      "historical_cases": 0,
      "expected_trend": 2402.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-10-23",
      "historical_cases": 13914,
      "expected_trend": 1987.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-10-25",
      "historical_cases": 0,
      "expected_trend": 1987.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-10-27",
      "historical_cases": 0,
      "expected_trend": 1987.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-10-29",
      "historical_cases": 0,
      "expected_trend": 1987.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-10-31",
      "historical_cases": 0,
      "expected_trend": 1360.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-11-02",
      "historical_cases": 0,
      "expected_trend": 1360.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-11-04",
      "historical_cases": 0,
      "expected_trend": 1360.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-11-06",
      "historical_cases": 8313,
      "expected_trend": 1187.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-11-08",
      "historical_cases": 0,
      "expected_trend": 1187.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-11-10",
      "historical_cases": 0,
      "expected_trend": 1187.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-11-12",
      "historical_cases": 0,
      "expected_trend": 1187.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-11-14",
      "historical_cases": 0,
      "expected_trend": 828.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-11-16",
      "historical_cases": 0,
      "expected_trend": 828.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-11-18",
      "historical_cases": 0,
      "expected_trend": 828.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-11-20",
      "historical_cases": 2638,
      "expected_trend": 376.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-11-22",
      "historical_cases": 0,
      "expected_trend": 376.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-11-24",
      "historical_cases": 0,
      "expected_trend": 376.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-11-26",
      "historical_cases": 0,
      "expected_trend": 376.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-11-28",
      "historical_cases": 0,
      "expected_trend": 363.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-11-30",
      "historical_cases": 0,
      "expected_trend": 363.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-12-02",
      "historical_cases": 0,
      "expected_trend": 363.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-12-04",
      "historical_cases": 1830,
      "expected_trend": 261.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-12-06",
      "historical_cases": 0,
      "expected_trend": 261.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-12-08",
      "historical_cases": 0,
      "expected_trend": 261.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-12-10",
      "historical_cases": 0,
      "expected_trend": 261.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-12-12",
      "historical_cases": 0,
      "expected_trend": 204.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-12-14",
      "historical_cases": 0,
      "expected_trend": 204.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-12-16",
      "historical_cases": 0,
      "expected_trend": 204.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-12-18",
      "historical_cases": 1130,
      "expected_trend": 161.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-12-20",
      "historical_cases": 0,
      "expected_trend": 161.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-12-22",
      "historical_cases": 0,
      "expected_trend": 161.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-12-24",
      "historical_cases": 0,
      "expected_trend": 161.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-12-26",
      "historical_cases": 0,
      "expected_trend": 164.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-12-28",
      "historical_cases": 0,
      "expected_trend": 164.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2022-12-30",
      "historical_cases": 0,
      "expected_trend": 164.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-01-01",
      "historical_cases": 1543,
      "expected_trend": 220.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-01-03",
      "historical_cases": 0,
      "expected_trend": 220.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-01-05",
      "historical_cases": 0,
      "expected_trend": 220.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-01-07",
      "historical_cases": 0,
      "expected_trend": 220.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-01-09",
      "historical_cases": 0,
      "expected_trend": 182.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-01-11",
      "historical_cases": 0,
      "expected_trend": 182.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-01-13",
      "historical_cases": 0,
      "expected_trend": 182.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-01-15",
      "historical_cases": 1116,
      "expected_trend": 159.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-01-17",
      "historical_cases": 0,
      "expected_trend": 159.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-01-19",
      "historical_cases": 0,
      "expected_trend": 159.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-01-21",
      "historical_cases": 0,
      "expected_trend": 159.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-01-23",
      "historical_cases": 0,
      "expected_trend": 125.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-01-25",
      "historical_cases": 0,
      "expected_trend": 125.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-01-27",
      "historical_cases": 0,
      "expected_trend": 125.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-01-29",
      "historical_cases": 718,
      "expected_trend": 102.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-01-31",
      "historical_cases": 0,
      "expected_trend": 102.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-02-02",
      "historical_cases": 0,
      "expected_trend": 102.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-02-04",
      "historical_cases": 0,
      "expected_trend": 102.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-02-06",
      "historical_cases": 0,
      "expected_trend": 103.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-02-08",
      "historical_cases": 0,
      "expected_trend": 103.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-02-10",
      "historical_cases": 0,
      "expected_trend": 103.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-02-12",
      "historical_cases": 755,
      "expected_trend": 107.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-02-14",
      "historical_cases": 0,
      "expected_trend": 107.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-02-16",
      "historical_cases": 0,
      "expected_trend": 107.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-02-18",
      "historical_cases": 0,
      "expected_trend": 107.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-02-20",
      "historical_cases": 0,
      "expected_trend": 114.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-02-22",
      "historical_cases": 0,
      "expected_trend": 114.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-02-24",
      "historical_cases": 0,
      "expected_trend": 114.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-02-26",
      "historical_cases": 1100,
      "expected_trend": 157.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-02-28",
      "historical_cases": 0,
      "expected_trend": 157.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-03-02",
      "historical_cases": 0,
      "expected_trend": 157.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-03-04",
      "historical_cases": 0,
      "expected_trend": 157.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-03-06",
      "historical_cases": 0,
      "expected_trend": 257.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-03-08",
      "historical_cases": 0,
      "expected_trend": 257.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-03-10",
      "historical_cases": 0,
      "expected_trend": 257.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-03-12",
      "historical_cases": 2672,
      "expected_trend": 381.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-03-14",
      "historical_cases": 0,
      "expected_trend": 381.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-03-16",
      "historical_cases": 0,
      "expected_trend": 381.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-03-18",
      "historical_cases": 0,
      "expected_trend": 381.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-03-20",
      "historical_cases": 0,
      "expected_trend": 704.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-03-22",
      "historical_cases": 0,
      "expected_trend": 704.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-03-24",
      "historical_cases": 0,
      "expected_trend": 704.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-03-26",
      "historical_cases": 8727,
      "expected_trend": 1246.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-03-28",
      "historical_cases": 0,
      "expected_trend": 1246.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-03-30",
      "historical_cases": 0,
      "expected_trend": 1246.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-04-01",
      "historical_cases": 0,
      "expected_trend": 1246.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-04-03",
      "historical_cases": 0,
      "expected_trend": 2636.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-04-05",
      "historical_cases": 0,
      "expected_trend": 2636.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-04-07",
      "historical_cases": 0,
      "expected_trend": 2636.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-04-09",
      "historical_cases": 34011,
      "expected_trend": 4858.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-04-11",
      "historical_cases": 0,
      "expected_trend": 4858.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-04-13",
      "historical_cases": 0,
      "expected_trend": 4858.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-04-15",
      "historical_cases": 0,
      "expected_trend": 4858.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-04-17",
      "historical_cases": 0,
      "expected_trend": 8785.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-04-19",
      "historical_cases": 0,
      "expected_trend": 8785.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-04-21",
      "historical_cases": 0,
      "expected_trend": 8785.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-04-23",
      "historical_cases": 73874,
      "expected_trend": 10553.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-04-25",
      "historical_cases": 0,
      "expected_trend": 10553.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-04-27",
      "historical_cases": 0,
      "expected_trend": 10553.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-04-29",
      "historical_cases": 0,
      "expected_trend": 10553.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-05-01",
      "historical_cases": 0,
      "expected_trend": 7628.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-05-03",
      "historical_cases": 0,
      "expected_trend": 7628.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-05-05",
      "historical_cases": 0,
      "expected_trend": 7628.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-05-07",
      "historical_cases": 24241,
      "expected_trend": 3463.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-05-09",
      "historical_cases": 0,
      "expected_trend": 3463.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-05-11",
      "historical_cases": 0,
      "expected_trend": 3463.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-05-13",
      "historical_cases": 0,
      "expected_trend": 3463.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-05-15",
      "historical_cases": 0,
      "expected_trend": 1577.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-05-17",
      "historical_cases": 0,
      "expected_trend": 1577.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-05-19",
      "historical_cases": 0,
      "expected_trend": 1577.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-05-21",
      "historical_cases": 5787,
      "expected_trend": 826.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-05-23",
      "historical_cases": 0,
      "expected_trend": 826.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-05-25",
      "historical_cases": 0,
      "expected_trend": 826.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-05-27",
      "historical_cases": 0,
      "expected_trend": 826.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-05-29",
      "historical_cases": 0,
      "expected_trend": 469.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-05-31",
      "historical_cases": 0,
      "expected_trend": 469.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-06-02",
      "historical_cases": 0,
      "expected_trend": 469.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-06-04",
      "historical_cases": 1838,
      "expected_trend": 262.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-06-06",
      "historical_cases": 0,
      "expected_trend": 262.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-06-08",
      "historical_cases": 0,
      "expected_trend": 262.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-06-10",
      "historical_cases": 0,
      "expected_trend": 262.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-06-12",
      "historical_cases": 0,
      "expected_trend": 172.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-06-14",
      "historical_cases": 0,
      "expected_trend": 172.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-06-16",
      "historical_cases": 0,
      "expected_trend": 172.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-06-18",
      "historical_cases": 692,
      "expected_trend": 98.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-06-20",
      "historical_cases": 0,
      "expected_trend": 98.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-06-22",
      "historical_cases": 0,
      "expected_trend": 98.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-06-24",
      "historical_cases": 0,
      "expected_trend": 98.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-06-26",
      "historical_cases": 0,
      "expected_trend": 67.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-06-28",
      "historical_cases": 0,
      "expected_trend": 67.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-06-30",
      "historical_cases": 0,
      "expected_trend": 67.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-07-02",
      "historical_cases": 329,
      "expected_trend": 47.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-07-04",
      "historical_cases": 0,
      "expected_trend": 47.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-07-06",
      "historical_cases": 0,
      "expected_trend": 47.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-07-08",
      "historical_cases": 0,
      "expected_trend": 47.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-07-10",
      "historical_cases": 0,
      "expected_trend": 42.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-07-12",
      "historical_cases": 0,
      "expected_trend": 42.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-07-14",
      "historical_cases": 0,
      "expected_trend": 42.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-07-16",
      "historical_cases": 303,
      "expected_trend": 43.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-07-18",
      "historical_cases": 0,
      "expected_trend": 43.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-07-20",
      "historical_cases": 0,
      "expected_trend": 43.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-07-22",
      "historical_cases": 0,
      "expected_trend": 43.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-07-24",
      "historical_cases": 0,
      "expected_trend": 55.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-07-26",
      "historical_cases": 0,
      "expected_trend": 55.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-07-28",
      "historical_cases": 0,
      "expected_trend": 55.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-07-30",
      "historical_cases": 324,
      "expected_trend": 46.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-08-01",
      "historical_cases": 0,
      "expected_trend": 46.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-08-03",
      "historical_cases": 0,
      "expected_trend": 46.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-08-05",
      "historical_cases": 0,
      "expected_trend": 46.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-08-07",
      "historical_cases": 0,
      "expected_trend": 56.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-08-09",
      "historical_cases": 0,
      "expected_trend": 56.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-08-11",
      "historical_cases": 0,
      "expected_trend": 56.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-08-13",
      "historical_cases": 294,
      "expected_trend": 42.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-08-15",
      "historical_cases": 0,
      "expected_trend": 42.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-08-17",
      "historical_cases": 0,
      "expected_trend": 42.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-08-19",
      "historical_cases": 0,
      "expected_trend": 42.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-08-21",
      "historical_cases": 0,
      "expected_trend": 46.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-08-23",
      "historical_cases": 0,
      "expected_trend": 46.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-08-25",
      "historical_cases": 0,
      "expected_trend": 46.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-08-27",
      "historical_cases": 364,
      "expected_trend": 52.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-08-29",
      "historical_cases": 0,
      "expected_trend": 52.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-08-31",
      "historical_cases": 0,
      "expected_trend": 52.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-09-02",
      "historical_cases": 0,
      "expected_trend": 52.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-09-04",
      "historical_cases": 0,
      "expected_trend": 51.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-09-06",
      "historical_cases": 0,
      "expected_trend": 51.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-09-08",
      "historical_cases": 0,
      "expected_trend": 51.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-09-10",
      "historical_cases": 384,
      "expected_trend": 54.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-09-12",
      "historical_cases": 0,
      "expected_trend": 54.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-09-14",
      "historical_cases": 0,
      "expected_trend": 54.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-09-16",
      "historical_cases": 0,
      "expected_trend": 54.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-09-18",
      "historical_cases": 0,
      "expected_trend": 64.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-09-20",
      "historical_cases": 0,
      "expected_trend": 64.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-09-22",
      "historical_cases": 0,
      "expected_trend": 64.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-09-24",
      "historical_cases": 363,
      "expected_trend": 51.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-09-26",
      "historical_cases": 0,
      "expected_trend": 51.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-09-28",
      "historical_cases": 0,
      "expected_trend": 51.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-09-30",
      "historical_cases": 0,
      "expected_trend": 51.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-10-02",
      "historical_cases": 0,
      "expected_trend": 44.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-10-04",
      "historical_cases": 0,
      "expected_trend": 44.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-10-06",
      "historical_cases": 0,
      "expected_trend": 44.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-10-08",
      "historical_cases": 490,
      "expected_trend": 70.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-10-10",
      "historical_cases": 0,
      "expected_trend": 70.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-10-12",
      "historical_cases": 0,
      "expected_trend": 70.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-10-14",
      "historical_cases": 0,
      "expected_trend": 70.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-10-16",
      "historical_cases": 0,
      "expected_trend": 37.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-10-18",
      "historical_cases": 0,
      "expected_trend": 37.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-10-20",
      "historical_cases": 0,
      "expected_trend": 37.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-10-22",
      "historical_cases": 1464,
      "expected_trend": 209.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-10-24",
      "historical_cases": 0,
      "expected_trend": 209.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-10-26",
      "historical_cases": 0,
      "expected_trend": 209.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-10-28",
      "historical_cases": 0,
      "expected_trend": 209.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-10-30",
      "historical_cases": 0,
      "expected_trend": 27.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-11-01",
      "historical_cases": 0,
      "expected_trend": 27.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-11-03",
      "historical_cases": 0,
      "expected_trend": 27.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-11-05",
      "historical_cases": 139,
      "expected_trend": 19.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-11-07",
      "historical_cases": 0,
      "expected_trend": 19.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-11-09",
      "historical_cases": 0,
      "expected_trend": 19.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-11-11",
      "historical_cases": 0,
      "expected_trend": 19.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-11-13",
      "historical_cases": 0,
      "expected_trend": 10.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-11-15",
      "historical_cases": 0,
      "expected_trend": 10.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-11-17",
      "historical_cases": 0,
      "expected_trend": 10.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-11-19",
      "historical_cases": 119,
      "expected_trend": 17.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-11-21",
      "historical_cases": 0,
      "expected_trend": 17.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-11-23",
      "historical_cases": 0,
      "expected_trend": 17.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-11-25",
      "historical_cases": 0,
      "expected_trend": 17.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-11-27",
      "historical_cases": 0,
      "expected_trend": 27.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-11-29",
      "historical_cases": 0,
      "expected_trend": 27.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-12-01",
      "historical_cases": 0,
      "expected_trend": 27.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-12-03",
      "historical_cases": 415,
      "expected_trend": 59.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-12-05",
      "historical_cases": 0,
      "expected_trend": 59.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-12-07",
      "historical_cases": 0,
      "expected_trend": 59.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-12-09",
      "historical_cases": 0,
      "expected_trend": 59.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-12-11",
      "historical_cases": 0,
      "expected_trend": 125.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-12-13",
      "historical_cases": 0,
      "expected_trend": 125.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-12-15",
      "historical_cases": 0,
      "expected_trend": 125.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-12-17",
      "historical_cases": 1761,
      "expected_trend": 251.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-12-19",
      "historical_cases": 0,
      "expected_trend": 251.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-12-21",
      "historical_cases": 0,
      "expected_trend": 251.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-12-23",
      "historical_cases": 0,
      "expected_trend": 251.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-12-25",
      "historical_cases": 0,
      "expected_trend": 543.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-12-27",
      "historical_cases": 0,
      "expected_trend": 543.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-12-29",
      "historical_cases": 0,
      "expected_trend": 543.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2023-12-31",
      "historical_cases": 4552,
      "expected_trend": 650.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-01-02",
      "historical_cases": 0,
      "expected_trend": 650.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-01-04",
      "historical_cases": 0,
      "expected_trend": 650.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-01-06",
      "historical_cases": 0,
      "expected_trend": 650.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-01-08",
      "historical_cases": 0,
      "expected_trend": 708.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-01-10",
      "historical_cases": 0,
      "expected_trend": 708.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-01-12",
      "historical_cases": 0,
      "expected_trend": 708.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-01-14",
      "historical_cases": 3624,
      "expected_trend": 517.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-01-16",
      "historical_cases": 0,
      "expected_trend": 517.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-01-18",
      "historical_cases": 0,
      "expected_trend": 517.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-01-20",
      "historical_cases": 0,
      "expected_trend": 517.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-01-22",
      "historical_cases": 0,
      "expected_trend": 284.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-01-24",
      "historical_cases": 0,
      "expected_trend": 284.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-01-26",
      "historical_cases": 0,
      "expected_trend": 284.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-01-28",
      "historical_cases": 1325,
      "expected_trend": 189.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-01-30",
      "historical_cases": 0,
      "expected_trend": 189.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-02-01",
      "historical_cases": 0,
      "expected_trend": 189.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-02-03",
      "historical_cases": 0,
      "expected_trend": 189.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-02-05",
      "historical_cases": 0,
      "expected_trend": 151.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-02-07",
      "historical_cases": 0,
      "expected_trend": 151.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-02-09",
      "historical_cases": 0,
      "expected_trend": 151.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-02-11",
      "historical_cases": 1012,
      "expected_trend": 144.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-02-13",
      "historical_cases": 0,
      "expected_trend": 144.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-02-15",
      "historical_cases": 0,
      "expected_trend": 144.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-02-17",
      "historical_cases": 0,
      "expected_trend": 144.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-02-19",
      "historical_cases": 0,
      "expected_trend": 128.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-02-21",
      "historical_cases": 0,
      "expected_trend": 128.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-02-23",
      "historical_cases": 0,
      "expected_trend": 128.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-02-25",
      "historical_cases": 982,
      "expected_trend": 140.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-02-27",
      "historical_cases": 0,
      "expected_trend": 140.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-02-29",
      "historical_cases": 0,
      "expected_trend": 140.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-03-02",
      "historical_cases": 0,
      "expected_trend": 140.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-03-04",
      "historical_cases": 0,
      "expected_trend": 168.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-03-06",
      "historical_cases": 0,
      "expected_trend": 168.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-03-08",
      "historical_cases": 0,
      "expected_trend": 168.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-03-10",
      "historical_cases": 1202,
      "expected_trend": 171.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-03-12",
      "historical_cases": 0,
      "expected_trend": 171.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-03-14",
      "historical_cases": 0,
      "expected_trend": 171.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-03-16",
      "historical_cases": 0,
      "expected_trend": 171.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-03-18",
      "historical_cases": 0,
      "expected_trend": 177.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-03-20",
      "historical_cases": 0,
      "expected_trend": 177.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-03-22",
      "historical_cases": 0,
      "expected_trend": 177.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-03-24",
      "historical_cases": 989,
      "expected_trend": 141.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-03-26",
      "historical_cases": 0,
      "expected_trend": 141.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-03-28",
      "historical_cases": 0,
      "expected_trend": 141.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-03-30",
      "historical_cases": 0,
      "expected_trend": 141.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-04-01",
      "historical_cases": 0,
      "expected_trend": 102.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-04-03",
      "historical_cases": 0,
      "expected_trend": 102.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-04-05",
      "historical_cases": 0,
      "expected_trend": 102.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-04-07",
      "historical_cases": 695,
      "expected_trend": 99.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-04-09",
      "historical_cases": 0,
      "expected_trend": 99.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-04-11",
      "historical_cases": 0,
      "expected_trend": 99.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-04-13",
      "historical_cases": 0,
      "expected_trend": 99.3,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-04-15",
      "historical_cases": 0,
      "expected_trend": 74.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-04-17",
      "historical_cases": 0,
      "expected_trend": 74.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-04-19",
      "historical_cases": 0,
      "expected_trend": 74.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-04-21",
      "historical_cases": 624,
      "expected_trend": 89.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-04-23",
      "historical_cases": 0,
      "expected_trend": 89.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-04-25",
      "historical_cases": 0,
      "expected_trend": 89.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-04-27",
      "historical_cases": 0,
      "expected_trend": 89.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-04-29",
      "historical_cases": 0,
      "expected_trend": 108.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-05-01",
      "historical_cases": 0,
      "expected_trend": 108.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-05-03",
      "historical_cases": 0,
      "expected_trend": 108.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-05-05",
      "historical_cases": 823,
      "expected_trend": 117.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-05-07",
      "historical_cases": 0,
      "expected_trend": 117.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-05-09",
      "historical_cases": 0,
      "expected_trend": 117.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-05-11",
      "historical_cases": 0,
      "expected_trend": 117.6,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-05-13",
      "historical_cases": 0,
      "expected_trend": 106.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-05-15",
      "historical_cases": 0,
      "expected_trend": 106.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-05-17",
      "historical_cases": 0,
      "expected_trend": 106.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-05-19",
      "historical_cases": 622,
      "expected_trend": 88.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-05-21",
      "historical_cases": 0,
      "expected_trend": 88.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-05-23",
      "historical_cases": 0,
      "expected_trend": 88.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-05-25",
      "historical_cases": 0,
      "expected_trend": 88.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-05-27",
      "historical_cases": 0,
      "expected_trend": 52.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-05-29",
      "historical_cases": 0,
      "expected_trend": 52.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-05-31",
      "historical_cases": 0,
      "expected_trend": 52.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-06-02",
      "historical_cases": 362,
      "expected_trend": 51.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-06-04",
      "historical_cases": 0,
      "expected_trend": 51.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-06-06",
      "historical_cases": 0,
      "expected_trend": 51.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-06-08",
      "historical_cases": 0,
      "expected_trend": 51.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-06-10",
      "historical_cases": 0,
      "expected_trend": 23.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-06-12",
      "historical_cases": 0,
      "expected_trend": 23.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-06-14",
      "historical_cases": 0,
      "expected_trend": 23.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-06-16",
      "historical_cases": 38,
      "expected_trend": 5.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-06-18",
      "historical_cases": 0,
      "expected_trend": 5.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-06-20",
      "historical_cases": 0,
      "expected_trend": 5.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-06-22",
      "historical_cases": 0,
      "expected_trend": 5.4,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-06-24",
      "historical_cases": 0,
      "expected_trend": 30.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-06-26",
      "historical_cases": 0,
      "expected_trend": 30.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-06-28",
      "historical_cases": 0,
      "expected_trend": 30.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-06-30",
      "historical_cases": 334,
      "expected_trend": 47.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-07-02",
      "historical_cases": 0,
      "expected_trend": 47.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-07-04",
      "historical_cases": 0,
      "expected_trend": 47.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-07-06",
      "historical_cases": 0,
      "expected_trend": 47.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-07-08",
      "historical_cases": 0,
      "expected_trend": 19.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-07-10",
      "historical_cases": 0,
      "expected_trend": 19.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-07-12",
      "historical_cases": 0,
      "expected_trend": 19.1,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-07-14",
      "historical_cases": 0,
      "expected_trend": 0.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-07-16",
      "historical_cases": 0,
      "expected_trend": 0.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-07-18",
      "historical_cases": 0,
      "expected_trend": 0.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-07-20",
      "historical_cases": 0,
      "expected_trend": 0.0,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-07-22",
      "historical_cases": 0,
      "expected_trend": 62.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-07-24",
      "historical_cases": 0,
      "expected_trend": 62.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-07-26",
      "historical_cases": 0,
      "expected_trend": 62.9,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-07-28",
      "historical_cases": 243,
      "expected_trend": 34.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-07-30",
      "historical_cases": 0,
      "expected_trend": 34.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-08-01",
      "historical_cases": 0,
      "expected_trend": 34.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-08-03",
      "historical_cases": 0,
      "expected_trend": 34.7,
      "forecasted_cases": null,
      "lower_bound": null,
      "upper_bound": null,
      "is_forecast": false,
      "is_peak": false
    },
    {
      "date": "2024-08-05",
      "historical_cases": null,
      "expected_trend": 44.3,
      "forecasted_cases": 44.3,
      "lower_bound": 16.6,
      "upper_bound": 71.9,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-06",
      "historical_cases": null,
      "expected_trend": 43.8,
      "forecasted_cases": 43.8,
      "lower_bound": 15.1,
      "upper_bound": 72.5,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-07",
      "historical_cases": null,
      "expected_trend": 43.4,
      "forecasted_cases": 43.4,
      "lower_bound": 13.6,
      "upper_bound": 73.2,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-08",
      "historical_cases": null,
      "expected_trend": 42.9,
      "forecasted_cases": 42.9,
      "lower_bound": 12.1,
      "upper_bound": 73.8,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-09",
      "historical_cases": null,
      "expected_trend": 42.5,
      "forecasted_cases": 42.5,
      "lower_bound": 10.6,
      "upper_bound": 74.4,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-10",
      "historical_cases": null,
      "expected_trend": 42.1,
      "forecasted_cases": 42.1,
      "lower_bound": 9.1,
      "upper_bound": 75.1,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-11",
      "historical_cases": null,
      "expected_trend": 41.7,
      "forecasted_cases": 41.7,
      "lower_bound": 7.6,
      "upper_bound": 75.7,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-12",
      "historical_cases": null,
      "expected_trend": 41.2,
      "forecasted_cases": 41.2,
      "lower_bound": 6.1,
      "upper_bound": 76.4,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-13",
      "historical_cases": null,
      "expected_trend": 40.8,
      "forecasted_cases": 40.8,
      "lower_bound": 4.7,
      "upper_bound": 77.0,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-14",
      "historical_cases": null,
      "expected_trend": 40.4,
      "forecasted_cases": 40.4,
      "lower_bound": 3.2,
      "upper_bound": 77.7,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-15",
      "historical_cases": null,
      "expected_trend": 40.0,
      "forecasted_cases": 40.0,
      "lower_bound": 1.7,
      "upper_bound": 78.3,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-16",
      "historical_cases": null,
      "expected_trend": 39.6,
      "forecasted_cases": 39.6,
      "lower_bound": 0.3,
      "upper_bound": 79.0,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-17",
      "historical_cases": null,
      "expected_trend": 39.2,
      "forecasted_cases": 39.2,
      "lower_bound": 0.0,
      "upper_bound": 79.7,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-18",
      "historical_cases": null,
      "expected_trend": 38.8,
      "forecasted_cases": 38.8,
      "lower_bound": 0.0,
      "upper_bound": 80.3,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-19",
      "historical_cases": null,
      "expected_trend": 38.4,
      "forecasted_cases": 38.4,
      "lower_bound": 0.0,
      "upper_bound": 81.0,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-20",
      "historical_cases": null,
      "expected_trend": 38.1,
      "forecasted_cases": 38.1,
      "lower_bound": 0.0,
      "upper_bound": 81.7,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-21",
      "historical_cases": null,
      "expected_trend": 37.7,
      "forecasted_cases": 37.7,
      "lower_bound": 0.0,
      "upper_bound": 82.4,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-22",
      "historical_cases": null,
      "expected_trend": 37.3,
      "forecasted_cases": 37.3,
      "lower_bound": 0.0,
      "upper_bound": 83.0,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-23",
      "historical_cases": null,
      "expected_trend": 36.9,
      "forecasted_cases": 36.9,
      "lower_bound": 0.0,
      "upper_bound": 83.7,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-24",
      "historical_cases": null,
      "expected_trend": 36.6,
      "forecasted_cases": 36.6,
      "lower_bound": 0.0,
      "upper_bound": 84.4,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-25",
      "historical_cases": null,
      "expected_trend": 36.2,
      "forecasted_cases": 36.2,
      "lower_bound": 0.0,
      "upper_bound": 85.1,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-26",
      "historical_cases": null,
      "expected_trend": 35.8,
      "forecasted_cases": 35.8,
      "lower_bound": 0.0,
      "upper_bound": 85.8,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-27",
      "historical_cases": null,
      "expected_trend": 35.5,
      "forecasted_cases": 35.5,
      "lower_bound": 0.0,
      "upper_bound": 86.5,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-28",
      "historical_cases": null,
      "expected_trend": 35.1,
      "forecasted_cases": 35.1,
      "lower_bound": 0.0,
      "upper_bound": 87.2,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-29",
      "historical_cases": null,
      "expected_trend": 34.8,
      "forecasted_cases": 34.8,
      "lower_bound": 0.0,
      "upper_bound": 88.0,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-30",
      "historical_cases": null,
      "expected_trend": 34.4,
      "forecasted_cases": 34.4,
      "lower_bound": 0.0,
      "upper_bound": 88.7,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-08-31",
      "historical_cases": null,
      "expected_trend": 34.1,
      "forecasted_cases": 34.1,
      "lower_bound": 0.0,
      "upper_bound": 89.4,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-09-01",
      "historical_cases": null,
      "expected_trend": 33.7,
      "forecasted_cases": 33.7,
      "lower_bound": 0.0,
      "upper_bound": 90.1,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-09-02",
      "historical_cases": null,
      "expected_trend": 33.4,
      "forecasted_cases": 33.4,
      "lower_bound": 0.0,
      "upper_bound": 90.8,
      "is_forecast": true,
      "is_peak": false
    },
    {
      "date": "2024-09-03",
      "historical_cases": null,
      "expected_trend": 33.1,
      "forecasted_cases": 33.1,
      "lower_bound": 0.0,
      "upper_bound": 91.6,
      "is_forecast": true,
      "is_peak": false
    }
  ],
  "peak_marker": {
    "date": "2021-05-09",
    "value": 2738957,
    "label": "All-Time Delta Peak: 2,738,957 cases"
  },
  "transition_date": "2024-08-04"
};

export const fallbackOverview: OverviewMetrics = {
  "total_records": 2361,
  "unique_facilities": 1496,
  "active_districts": 71,
  "critical_bed_facilities": 645,
  "oxygen_supply_centers": 851,
  "testing_diagnostic_labs": 97,
  "ambulance_networks": 122,
  "verified_percentage": 41.0,
  "scarcity_rate": 14.4,
  "data_freshness": "2021-06-11 (Wave Registry Live State)",
  "epidemic_wave_phase": "Declining Wave Activity"
};

export const fallbackTimeline: TimelinePoint[] = [
  {
    "date": "2021-04-01",
    "total_requests": 35,
    "bed_demands": 12,
    "oxygen_demands": 8,
    "medicine_demands": 3,
    "testing_demands": 3,
    "ambulance_demands": 1,
    "scarcity_rate": 0.0,
    "total_requests_7d_avg": 35.0
  },
  {
    "date": "2021-04-03",
    "total_requests": 38,
    "bed_demands": 12,
    "oxygen_demands": 11,
    "medicine_demands": 3,
    "testing_demands": 2,
    "ambulance_demands": 2,
    "scarcity_rate": 0.0,
    "total_requests_7d_avg": 36.5
  },
  {
    "date": "2021-04-05",
    "total_requests": 37,
    "bed_demands": 11,
    "oxygen_demands": 10,
    "medicine_demands": 4,
    "testing_demands": 2,
    "ambulance_demands": 2,
    "scarcity_rate": 0.0,
    "total_requests_7d_avg": 36.67
  },
  {
    "date": "2021-04-07",
    "total_requests": 37,
    "bed_demands": 11,
    "oxygen_demands": 10,
    "medicine_demands": 3,
    "testing_demands": 2,
    "ambulance_demands": 3,
    "scarcity_rate": 2.7,
    "total_requests_7d_avg": 36.75
  },
  {
    "date": "2021-04-09",
    "total_requests": 36,
    "bed_demands": 11,
    "oxygen_demands": 14,
    "medicine_demands": 2,
    "testing_demands": 1,
    "ambulance_demands": 2,
    "scarcity_rate": 0.0,
    "total_requests_7d_avg": 36.6
  },
  {
    "date": "2021-04-11",
    "total_requests": 33,
    "bed_demands": 12,
    "oxygen_demands": 10,
    "medicine_demands": 1,
    "testing_demands": 2,
    "ambulance_demands": 2,
    "scarcity_rate": 0.0,
    "total_requests_7d_avg": 36.0
  },
  {
    "date": "2021-04-13",
    "total_requests": 36,
    "bed_demands": 11,
    "oxygen_demands": 10,
    "medicine_demands": 3,
    "testing_demands": 2,
    "ambulance_demands": 2,
    "scarcity_rate": 0.0,
    "total_requests_7d_avg": 36.0
  },
  {
    "date": "2021-04-15",
    "total_requests": 38,
    "bed_demands": 12,
    "oxygen_demands": 10,
    "medicine_demands": 3,
    "testing_demands": 2,
    "ambulance_demands": 3,
    "scarcity_rate": 2.63,
    "total_requests_7d_avg": 36.43
  },
  {
    "date": "2021-04-17",
    "total_requests": 34,
    "bed_demands": 11,
    "oxygen_demands": 9,
    "medicine_demands": 3,
    "testing_demands": 2,
    "ambulance_demands": 2,
    "scarcity_rate": 0.0,
    "total_requests_7d_avg": 35.86
  },
  {
    "date": "2021-04-19",
    "total_requests": 34,
    "bed_demands": 11,
    "oxygen_demands": 10,
    "medicine_demands": 3,
    "testing_demands": 2,
    "ambulance_demands": 1,
    "scarcity_rate": 0.0,
    "total_requests_7d_avg": 35.43
  },
  {
    "date": "2021-04-21",
    "total_requests": 34,
    "bed_demands": 12,
    "oxygen_demands": 9,
    "medicine_demands": 3,
    "testing_demands": 2,
    "ambulance_demands": 1,
    "scarcity_rate": 0.0,
    "total_requests_7d_avg": 35.0
  },
  {
    "date": "2021-04-23",
    "total_requests": 32,
    "bed_demands": 11,
    "oxygen_demands": 9,
    "medicine_demands": 2,
    "testing_demands": 2,
    "ambulance_demands": 2,
    "scarcity_rate": 6.25,
    "total_requests_7d_avg": 34.43
  },
  {
    "date": "2021-04-24",
    "total_requests": 13,
    "bed_demands": 0,
    "oxygen_demands": 0,
    "medicine_demands": 0,
    "testing_demands": 0,
    "ambulance_demands": 0,
    "scarcity_rate": 0.0,
    "total_requests_7d_avg": 31.57
  },
  {
    "date": "2021-04-25",
    "total_requests": 36,
    "bed_demands": 10,
    "oxygen_demands": 9,
    "medicine_demands": 2,
    "testing_demands": 2,
    "ambulance_demands": 2,
    "scarcity_rate": 2.78,
    "total_requests_7d_avg": 31.57
  },
  {
    "date": "2021-04-26",
    "total_requests": 7,
    "bed_demands": 0,
    "oxygen_demands": 0,
    "medicine_demands": 0,
    "testing_demands": 0,
    "ambulance_demands": 0,
    "scarcity_rate": 0.0,
    "total_requests_7d_avg": 27.14
  },
  {
    "date": "2021-04-27",
    "total_requests": 50,
    "bed_demands": 12,
    "oxygen_demands": 11,
    "medicine_demands": 1,
    "testing_demands": 2,
    "ambulance_demands": 2,
    "scarcity_rate": 0.0,
    "total_requests_7d_avg": 29.43
  },
  {
    "date": "2021-04-28",
    "total_requests": 35,
    "bed_demands": 0,
    "oxygen_demands": 0,
    "medicine_demands": 33,
    "testing_demands": 0,
    "ambulance_demands": 0,
    "scarcity_rate": 34.29,
    "total_requests_7d_avg": 29.57
  },
  {
    "date": "2021-04-29",
    "total_requests": 40,
    "bed_demands": 12,
    "oxygen_demands": 11,
    "medicine_demands": 2,
    "testing_demands": 4,
    "ambulance_demands": 2,
    "scarcity_rate": 2.5,
    "total_requests_7d_avg": 30.43
  },
  {
    "date": "2021-04-30",
    "total_requests": 1,
    "bed_demands": 1,
    "oxygen_demands": 0,
    "medicine_demands": 0,
    "testing_demands": 0,
    "ambulance_demands": 0,
    "scarcity_rate": 0.0,
    "total_requests_7d_avg": 26.0
  },
  {
    "date": "2021-05-01",
    "total_requests": 371,
    "bed_demands": 227,
    "oxygen_demands": 142,
    "medicine_demands": 0,
    "testing_demands": 0,
    "ambulance_demands": 0,
    "scarcity_rate": 44.47,
    "total_requests_7d_avg": 77.14
  },
  {
    "date": "2021-05-02",
    "total_requests": 70,
    "bed_demands": 23,
    "oxygen_demands": 23,
    "medicine_demands": 4,
    "testing_demands": 4,
    "ambulance_demands": 2,
    "scarcity_rate": 14.29,
    "total_requests_7d_avg": 82.0
  },
  {
    "date": "2021-05-03",
    "total_requests": 17,
    "bed_demands": 8,
    "oxygen_demands": 9,
    "medicine_demands": 0,
    "testing_demands": 0,
    "ambulance_demands": 0,
    "scarcity_rate": 17.65,
    "total_requests_7d_avg": 83.43
  },
  {
    "date": "2021-05-04",
    "total_requests": 65,
    "bed_demands": 18,
    "oxygen_demands": 16,
    "medicine_demands": 3,
    "testing_demands": 2,
    "ambulance_demands": 3,
    "scarcity_rate": 9.23,
    "total_requests_7d_avg": 85.57
  },
  {
    "date": "2021-05-05",
    "total_requests": 30,
    "bed_demands": 2,
    "oxygen_demands": 20,
    "medicine_demands": 6,
    "testing_demands": 1,
    "ambulance_demands": 0,
    "scarcity_rate": 40.0,
    "total_requests_7d_avg": 84.86
  },
  {
    "date": "2021-05-06",
    "total_requests": 73,
    "bed_demands": 17,
    "oxygen_demands": 33,
    "medicine_demands": 3,
    "testing_demands": 2,
    "ambulance_demands": 7,
    "scarcity_rate": 6.85,
    "total_requests_7d_avg": 89.57
  },
  {
    "date": "2021-05-07",
    "total_requests": 35,
    "bed_demands": 2,
    "oxygen_demands": 8,
    "medicine_demands": 0,
    "testing_demands": 0,
    "ambulance_demands": 0,
    "scarcity_rate": 2.86,
    "total_requests_7d_avg": 94.43
  },
  {
    "date": "2021-05-08",
    "total_requests": 51,
    "bed_demands": 17,
    "oxygen_demands": 16,
    "medicine_demands": 3,
    "testing_demands": 2,
    "ambulance_demands": 3,
    "scarcity_rate": 5.88,
    "total_requests_7d_avg": 48.71
  },
  {
    "date": "2021-05-09",
    "total_requests": 9,
    "bed_demands": 0,
    "oxygen_demands": 6,
    "medicine_demands": 1,
    "testing_demands": 0,
    "ambulance_demands": 0,
    "scarcity_rate": 11.11,
    "total_requests_7d_avg": 40.0
  },
  {
    "date": "2021-05-10",
    "total_requests": 48,
    "bed_demands": 11,
    "oxygen_demands": 18,
    "medicine_demands": 2,
    "testing_demands": 5,
    "ambulance_demands": 2,
    "scarcity_rate": 0.0,
    "total_requests_7d_avg": 44.43
  },
  {
    "date": "2021-05-11",
    "total_requests": 54,
    "bed_demands": 0,
    "oxygen_demands": 2,
    "medicine_demands": 0,
    "testing_demands": 2,
    "ambulance_demands": 0,
    "scarcity_rate": 3.7,
    "total_requests_7d_avg": 42.86
  },
  {
    "date": "2021-05-12",
    "total_requests": 43,
    "bed_demands": 11,
    "oxygen_demands": 14,
    "medicine_demands": 3,
    "testing_demands": 3,
    "ambulance_demands": 3,
    "scarcity_rate": 4.65,
    "total_requests_7d_avg": 44.71
  },
  {
    "date": "2021-05-13",
    "total_requests": 8,
    "bed_demands": 0,
    "oxygen_demands": 2,
    "medicine_demands": 0,
    "testing_demands": 1,
    "ambulance_demands": 0,
    "scarcity_rate": 12.5,
    "total_requests_7d_avg": 35.43
  },
  {
    "date": "2021-05-14",
    "total_requests": 44,
    "bed_demands": 11,
    "oxygen_demands": 13,
    "medicine_demands": 3,
    "testing_demands": 3,
    "ambulance_demands": 2,
    "scarcity_rate": 0.0,
    "total_requests_7d_avg": 36.71
  },
  {
    "date": "2021-05-15",
    "total_requests": 4,
    "bed_demands": 0,
    "oxygen_demands": 4,
    "medicine_demands": 0,
    "testing_demands": 0,
    "ambulance_demands": 0,
    "scarcity_rate": 0.0,
    "total_requests_7d_avg": 30.0
  },
  {
    "date": "2021-05-16",
    "total_requests": 61,
    "bed_demands": 13,
    "oxygen_demands": 28,
    "medicine_demands": 4,
    "testing_demands": 2,
    "ambulance_demands": 2,
    "scarcity_rate": 1.64,
    "total_requests_7d_avg": 37.43
  },
  {
    "date": "2021-05-17",
    "total_requests": 26,
    "bed_demands": 0,
    "oxygen_demands": 15,
    "medicine_demands": 0,
    "testing_demands": 0,
    "ambulance_demands": 1,
    "scarcity_rate": 11.54,
    "total_requests_7d_avg": 34.29
  },
  {
    "date": "2021-05-18",
    "total_requests": 63,
    "bed_demands": 13,
    "oxygen_demands": 16,
    "medicine_demands": 3,
    "testing_demands": 9,
    "ambulance_demands": 2,
    "scarcity_rate": 0.0,
    "total_requests_7d_avg": 35.57
  },
  {
    "date": "2021-05-19",
    "total_requests": 15,
    "bed_demands": 0,
    "oxygen_demands": 6,
    "medicine_demands": 0,
    "testing_demands": 3,
    "ambulance_demands": 0,
    "scarcity_rate": 0.0,
    "total_requests_7d_avg": 31.57
  },
  {
    "date": "2021-05-20",
    "total_requests": 39,
    "bed_demands": 12,
    "oxygen_demands": 10,
    "medicine_demands": 3,
    "testing_demands": 2,
    "ambulance_demands": 2,
    "scarcity_rate": 2.56,
    "total_requests_7d_avg": 36.0
  },
  {
    "date": "2021-05-21",
    "total_requests": 12,
    "bed_demands": 0,
    "oxygen_demands": 6,
    "medicine_demands": 0,
    "testing_demands": 1,
    "ambulance_demands": 1,
    "scarcity_rate": 8.33,
    "total_requests_7d_avg": 31.43
  },
  {
    "date": "2021-05-22",
    "total_requests": 40,
    "bed_demands": 10,
    "oxygen_demands": 14,
    "medicine_demands": 1,
    "testing_demands": 2,
    "ambulance_demands": 2,
    "scarcity_rate": 2.5,
    "total_requests_7d_avg": 36.57
  },
  {
    "date": "2021-05-23",
    "total_requests": 5,
    "bed_demands": 0,
    "oxygen_demands": 4,
    "medicine_demands": 0,
    "testing_demands": 0,
    "ambulance_demands": 0,
    "scarcity_rate": 0.0,
    "total_requests_7d_avg": 28.57
  },
  {
    "date": "2021-05-24",
    "total_requests": 57,
    "bed_demands": 10,
    "oxygen_demands": 30,
    "medicine_demands": 1,
    "testing_demands": 6,
    "ambulance_demands": 2,
    "scarcity_rate": 5.26,
    "total_requests_7d_avg": 33.0
  },
  {
    "date": "2021-05-25",
    "total_requests": 5,
    "bed_demands": 0,
    "oxygen_demands": 0,
    "medicine_demands": 0,
    "testing_demands": 2,
    "ambulance_demands": 0,
    "scarcity_rate": 0.0,
    "total_requests_7d_avg": 24.71
  },
  {
    "date": "2021-05-26",
    "total_requests": 35,
    "bed_demands": 12,
    "oxygen_demands": 12,
    "medicine_demands": 2,
    "testing_demands": 3,
    "ambulance_demands": 2,
    "scarcity_rate": 0.0,
    "total_requests_7d_avg": 27.57
  },
  {
    "date": "2021-05-27",
    "total_requests": 1,
    "bed_demands": 0,
    "oxygen_demands": 1,
    "medicine_demands": 0,
    "testing_demands": 0,
    "ambulance_demands": 0,
    "scarcity_rate": 0.0,
    "total_requests_7d_avg": 22.14
  },
  {
    "date": "2021-05-28",
    "total_requests": 31,
    "bed_demands": 11,
    "oxygen_demands": 9,
    "medicine_demands": 1,
    "testing_demands": 2,
    "ambulance_demands": 1,
    "scarcity_rate": 0.0,
    "total_requests_7d_avg": 24.86
  },
  {
    "date": "2021-05-30",
    "total_requests": 32,
    "bed_demands": 11,
    "oxygen_demands": 8,
    "medicine_demands": 2,
    "testing_demands": 4,
    "ambulance_demands": 2,
    "scarcity_rate": 3.12,
    "total_requests_7d_avg": 23.71
  },
  {
    "date": "2021-05-31",
    "total_requests": 1,
    "bed_demands": 0,
    "oxygen_demands": 0,
    "medicine_demands": 0,
    "testing_demands": 0,
    "ambulance_demands": 0,
    "scarcity_rate": 0.0,
    "total_requests_7d_avg": 23.14
  },
  {
    "date": "2021-06-02",
    "total_requests": 8,
    "bed_demands": 0,
    "oxygen_demands": 0,
    "medicine_demands": 0,
    "testing_demands": 0,
    "ambulance_demands": 0,
    "scarcity_rate": 0.0,
    "total_requests_7d_avg": 16.14
  },
  {
    "date": "2021-06-03",
    "total_requests": 1,
    "bed_demands": 0,
    "oxygen_demands": 0,
    "medicine_demands": 0,
    "testing_demands": 0,
    "ambulance_demands": 0,
    "scarcity_rate": 0.0,
    "total_requests_7d_avg": 15.57
  },
  {
    "date": "2021-06-05",
    "total_requests": 1,
    "bed_demands": 0,
    "oxygen_demands": 0,
    "medicine_demands": 0,
    "testing_demands": 1,
    "ambulance_demands": 0,
    "scarcity_rate": 0.0,
    "total_requests_7d_avg": 10.71
  },
  {
    "date": "2021-06-11",
    "total_requests": 2,
    "bed_demands": 0,
    "oxygen_demands": 0,
    "medicine_demands": 0,
    "testing_demands": 0,
    "ambulance_demands": 0,
    "scarcity_rate": 0.0,
    "total_requests_7d_avg": 10.86
  },
  {
    "date": "2026-09-06",
    "total_requests": 9,
    "bed_demands": 8,
    "oxygen_demands": 0,
    "medicine_demands": 1,
    "testing_demands": 0,
    "ambulance_demands": 0,
    "scarcity_rate": 22.22,
    "total_requests_7d_avg": 7.71
  }
];

export const fallbackDistricts: DistrictStat[] = [
  {
    "district": "Kolkata",
    "total_facilities": 833,
    "bed_facilities": 219,
    "oxygen_suppliers": 281,
    "ambulance_providers": 75,
    "testing_centers": 46,
    "verified_count": 387,
    "distress_level": "High"
  },
  {
    "district": "Unspecified",
    "total_facilities": 467,
    "bed_facilities": 143,
    "oxygen_suppliers": 76,
    "ambulance_providers": 4,
    "testing_centers": 4,
    "verified_count": 230,
    "distress_level": "High"
  },
  {
    "district": "North 24 Parganas",
    "total_facilities": 206,
    "bed_facilities": 28,
    "oxygen_suppliers": 123,
    "ambulance_providers": 16,
    "testing_centers": 11,
    "verified_count": 94,
    "distress_level": "High"
  },
  {
    "district": "Hooghly",
    "total_facilities": 153,
    "bed_facilities": 45,
    "oxygen_suppliers": 62,
    "ambulance_providers": 4,
    "testing_centers": 10,
    "verified_count": 66,
    "distress_level": "High"
  },
  {
    "district": "Howrah",
    "total_facilities": 74,
    "bed_facilities": 24,
    "oxygen_suppliers": 39,
    "ambulance_providers": 4,
    "testing_centers": 6,
    "verified_count": 33,
    "distress_level": "Moderate"
  },
  {
    "district": "Purba Bardhaman",
    "total_facilities": 71,
    "bed_facilities": 13,
    "oxygen_suppliers": 35,
    "ambulance_providers": 6,
    "testing_centers": 10,
    "verified_count": 21,
    "distress_level": "Moderate"
  },
  {
    "district": "Darjeeling",
    "total_facilities": 68,
    "bed_facilities": 31,
    "oxygen_suppliers": 21,
    "ambulance_providers": 0,
    "testing_centers": 1,
    "verified_count": 12,
    "distress_level": "Moderate"
  },
  {
    "district": "South 24 Parganas",
    "total_facilities": 66,
    "bed_facilities": 21,
    "oxygen_suppliers": 36,
    "ambulance_providers": 1,
    "testing_centers": 1,
    "verified_count": 17,
    "distress_level": "Moderate"
  },
  {
    "district": "Purulia",
    "total_facilities": 64,
    "bed_facilities": 5,
    "oxygen_suppliers": 52,
    "ambulance_providers": 4,
    "testing_centers": 0,
    "verified_count": 23,
    "distress_level": "Moderate"
  },
  {
    "district": "Birbhum",
    "total_facilities": 45,
    "bed_facilities": 13,
    "oxygen_suppliers": 27,
    "ambulance_providers": 2,
    "testing_centers": 1,
    "verified_count": 9,
    "distress_level": "Moderate"
  },
  {
    "district": "Murshidabad",
    "total_facilities": 43,
    "bed_facilities": 24,
    "oxygen_suppliers": 19,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 6,
    "distress_level": "Moderate"
  },
  {
    "district": "Jalpaiguri",
    "total_facilities": 38,
    "bed_facilities": 10,
    "oxygen_suppliers": 18,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 10,
    "distress_level": "Moderate"
  },
  {
    "district": "Malda",
    "total_facilities": 26,
    "bed_facilities": 14,
    "oxygen_suppliers": 6,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 5,
    "distress_level": "Low"
  },
  {
    "district": "Bankura",
    "total_facilities": 25,
    "bed_facilities": 9,
    "oxygen_suppliers": 5,
    "ambulance_providers": 0,
    "testing_centers": 1,
    "verified_count": 6,
    "distress_level": "Low"
  },
  {
    "district": "Paschim Medinipur",
    "total_facilities": 22,
    "bed_facilities": 5,
    "oxygen_suppliers": 7,
    "ambulance_providers": 1,
    "testing_centers": 3,
    "verified_count": 14,
    "distress_level": "Low"
  },
  {
    "district": "Not Known",
    "total_facilities": 21,
    "bed_facilities": 0,
    "oxygen_suppliers": 2,
    "ambulance_providers": 1,
    "testing_centers": 1,
    "verified_count": 17,
    "distress_level": "Low"
  },
  {
    "district": "Cooch Behar",
    "total_facilities": 18,
    "bed_facilities": 11,
    "oxygen_suppliers": 3,
    "ambulance_providers": 0,
    "testing_centers": 1,
    "verified_count": 5,
    "distress_level": "Low"
  },
  {
    "district": "Uttar Dinajpur",
    "total_facilities": 15,
    "bed_facilities": 4,
    "oxygen_suppliers": 10,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 0,
    "distress_level": "Low"
  },
  {
    "district": "Alipurduar",
    "total_facilities": 14,
    "bed_facilities": 4,
    "oxygen_suppliers": 8,
    "ambulance_providers": 1,
    "testing_centers": 0,
    "verified_count": 2,
    "distress_level": "Low"
  },
  {
    "district": "Purba Medinipur",
    "total_facilities": 13,
    "bed_facilities": 6,
    "oxygen_suppliers": 4,
    "ambulance_providers": 1,
    "testing_centers": 0,
    "verified_count": 6,
    "distress_level": "Low"
  },
  {
    "district": "Berhampore",
    "total_facilities": 11,
    "bed_facilities": 0,
    "oxygen_suppliers": 9,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 0,
    "distress_level": "Low"
  },
  {
    "district": "Nadia",
    "total_facilities": 10,
    "bed_facilities": 4,
    "oxygen_suppliers": 4,
    "ambulance_providers": 2,
    "testing_centers": 0,
    "verified_count": 1,
    "distress_level": "Low"
  },
  {
    "district": "Jhargram",
    "total_facilities": 4,
    "bed_facilities": 4,
    "oxygen_suppliers": 0,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 0,
    "distress_level": "Low"
  },
  {
    "district": "Dakshin Dinajpur",
    "total_facilities": 3,
    "bed_facilities": 2,
    "oxygen_suppliers": 0,
    "ambulance_providers": 0,
    "testing_centers": 1,
    "verified_count": 0,
    "distress_level": "Low"
  },
  {
    "district": "Burdwan",
    "total_facilities": 2,
    "bed_facilities": 0,
    "oxygen_suppliers": 0,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 0,
    "distress_level": "Low"
  },
  {
    "district": "Chakda Block",
    "total_facilities": 2,
    "bed_facilities": 0,
    "oxygen_suppliers": 0,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 0,
    "distress_level": "Low"
  },
  {
    "district": "Durgapur",
    "total_facilities": 2,
    "bed_facilities": 2,
    "oxygen_suppliers": 0,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 0,
    "distress_level": "Low"
  },
  {
    "district": "Siliguri",
    "total_facilities": 2,
    "bed_facilities": 2,
    "oxygen_suppliers": 0,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 2,
    "distress_level": "High"
  },
  {
    "district": "Acterma, Barun",
    "total_facilities": 1,
    "bed_facilities": 0,
    "oxygen_suppliers": 0,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 0,
    "distress_level": "Low"
  },
  {
    "district": "All Rh, Bphc, Phc Of Municipality",
    "total_facilities": 1,
    "bed_facilities": 0,
    "oxygen_suppliers": 0,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 0,
    "distress_level": "Low"
  },
  {
    "district": "Amri",
    "total_facilities": 1,
    "bed_facilities": 0,
    "oxygen_suppliers": 0,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 0,
    "distress_level": "Low"
  },
  {
    "district": "Berhampore, Near Panchanantala More",
    "total_facilities": 1,
    "bed_facilities": 0,
    "oxygen_suppliers": 1,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 0,
    "distress_level": "Low"
  },
  {
    "district": "Birnagar",
    "total_facilities": 1,
    "bed_facilities": 0,
    "oxygen_suppliers": 0,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 0,
    "distress_level": "Low"
  },
  {
    "district": "Chandannagar",
    "total_facilities": 1,
    "bed_facilities": 0,
    "oxygen_suppliers": 0,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 0,
    "distress_level": "Low"
  },
  {
    "district": "Chapra Block",
    "total_facilities": 1,
    "bed_facilities": 0,
    "oxygen_suppliers": 0,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 0,
    "distress_level": "Low"
  },
  {
    "district": "Chinsurah",
    "total_facilities": 1,
    "bed_facilities": 0,
    "oxygen_suppliers": 0,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 0,
    "distress_level": "Low"
  },
  {
    "district": "Farakka",
    "total_facilities": 1,
    "bed_facilities": 0,
    "oxygen_suppliers": 1,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 0,
    "distress_level": "Low"
  },
  {
    "district": "Gayeshpur Municipality",
    "total_facilities": 1,
    "bed_facilities": 0,
    "oxygen_suppliers": 0,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 0,
    "distress_level": "Low"
  },
  {
    "district": "Haanshkhali Block",
    "total_facilities": 1,
    "bed_facilities": 0,
    "oxygen_suppliers": 0,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 0,
    "distress_level": "Low"
  },
  {
    "district": "Haringhata Block",
    "total_facilities": 1,
    "bed_facilities": 0,
    "oxygen_suppliers": 0,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 0,
    "distress_level": "Low"
  },
  {
    "district": "Haringhata Municipality",
    "total_facilities": 1,
    "bed_facilities": 0,
    "oxygen_suppliers": 0,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 0,
    "distress_level": "Low"
  },
  {
    "district": "Hatoara Covid Hospital (Bongabari)",
    "total_facilities": 1,
    "bed_facilities": 0,
    "oxygen_suppliers": 0,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 0,
    "distress_level": "Low"
  },
  {
    "district": "Hazra",
    "total_facilities": 1,
    "bed_facilities": 0,
    "oxygen_suppliers": 0,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 1,
    "distress_level": "Low"
  },
  {
    "district": "Jangipur, Near Pwd Field, Umarpur, Ghorshala.",
    "total_facilities": 1,
    "bed_facilities": 0,
    "oxygen_suppliers": 1,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 0,
    "distress_level": "Low"
  },
  {
    "district": "Kaliganj Block",
    "total_facilities": 1,
    "bed_facilities": 0,
    "oxygen_suppliers": 0,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 0,
    "distress_level": "Low"
  },
  {
    "district": "Kalimpong",
    "total_facilities": 1,
    "bed_facilities": 1,
    "oxygen_suppliers": 0,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 0,
    "distress_level": "Low"
  },
  {
    "district": "Kalyani Municipality",
    "total_facilities": 1,
    "bed_facilities": 0,
    "oxygen_suppliers": 0,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 0,
    "distress_level": "Low"
  },
  {
    "district": "Karimpur 1",
    "total_facilities": 1,
    "bed_facilities": 0,
    "oxygen_suppliers": 0,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 0,
    "distress_level": "Low"
  },
  {
    "district": "Karimpur 2",
    "total_facilities": 1,
    "bed_facilities": 0,
    "oxygen_suppliers": 0,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 0,
    "distress_level": "Low"
  },
  {
    "district": "Koopers Camp Naa",
    "total_facilities": 1,
    "bed_facilities": 0,
    "oxygen_suppliers": 0,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 0,
    "distress_level": "Low"
  },
  {
    "district": "Krishnaganj",
    "total_facilities": 1,
    "bed_facilities": 0,
    "oxygen_suppliers": 0,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 0,
    "distress_level": "Low"
  },
  {
    "district": "Krishnanagar 1",
    "total_facilities": 1,
    "bed_facilities": 0,
    "oxygen_suppliers": 0,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 0,
    "distress_level": "Low"
  },
  {
    "district": "Krishnanagar 2",
    "total_facilities": 1,
    "bed_facilities": 0,
    "oxygen_suppliers": 0,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 0,
    "distress_level": "Low"
  },
  {
    "district": "Krishnanagar Municipality",
    "total_facilities": 1,
    "bed_facilities": 0,
    "oxygen_suppliers": 0,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 0,
    "distress_level": "Low"
  },
  {
    "district": "Medinipur",
    "total_facilities": 1,
    "bed_facilities": 1,
    "oxygen_suppliers": 0,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 1,
    "distress_level": "Low"
  },
  {
    "district": "Nabadwip",
    "total_facilities": 1,
    "bed_facilities": 0,
    "oxygen_suppliers": 0,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 0,
    "distress_level": "Low"
  },
  {
    "district": "Nabadwip Municipality",
    "total_facilities": 1,
    "bed_facilities": 0,
    "oxygen_suppliers": 0,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 0,
    "distress_level": "Low"
  },
  {
    "district": "Nakashipara",
    "total_facilities": 1,
    "bed_facilities": 0,
    "oxygen_suppliers": 0,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 0,
    "distress_level": "Low"
  },
  {
    "district": "Raghunathganj",
    "total_facilities": 1,
    "bed_facilities": 0,
    "oxygen_suppliers": 1,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 0,
    "distress_level": "Low"
  },
  {
    "district": "Ranaghat 1",
    "total_facilities": 1,
    "bed_facilities": 0,
    "oxygen_suppliers": 0,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 0,
    "distress_level": "Low"
  },
  {
    "district": "Ranaghat 2",
    "total_facilities": 1,
    "bed_facilities": 0,
    "oxygen_suppliers": 0,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 0,
    "distress_level": "Low"
  },
  {
    "district": "Ranaghat Municipality",
    "total_facilities": 1,
    "bed_facilities": 0,
    "oxygen_suppliers": 0,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 0,
    "distress_level": "Low"
  },
  {
    "district": "Rotary Hospital(Private Hospital )",
    "total_facilities": 1,
    "bed_facilities": 0,
    "oxygen_suppliers": 0,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 0,
    "distress_level": "Low"
  },
  {
    "district": "Shantipur",
    "total_facilities": 1,
    "bed_facilities": 0,
    "oxygen_suppliers": 0,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 0,
    "distress_level": "Low"
  },
  {
    "district": "Shantipur Municipality",
    "total_facilities": 1,
    "bed_facilities": 0,
    "oxygen_suppliers": 0,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 0,
    "distress_level": "Low"
  },
  {
    "district": "Taherpur Naa",
    "total_facilities": 1,
    "bed_facilities": 0,
    "oxygen_suppliers": 0,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 0,
    "distress_level": "Low"
  },
  {
    "district": "Tehatta 1",
    "total_facilities": 1,
    "bed_facilities": 0,
    "oxygen_suppliers": 0,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 0,
    "distress_level": "Low"
  },
  {
    "district": "Tehatta 2",
    "total_facilities": 1,
    "bed_facilities": 0,
    "oxygen_suppliers": 0,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 0,
    "distress_level": "Low"
  },
  {
    "district": "\u099d\u09be\u09a1\u09bc\u0997\u09cd\u09b0\u09be\u09ae:",
    "total_facilities": 1,
    "bed_facilities": 0,
    "oxygen_suppliers": 0,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 0,
    "distress_level": "Low"
  },
  {
    "district": "\u09aa\u09b6\u09cd\u099a\u09bf\u09ae \u09ae\u09c7\u09a6\u09bf\u09a8\u09c0\u09aa\u09c1\u09b0",
    "total_facilities": 1,
    "bed_facilities": 0,
    "oxygen_suppliers": 0,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 0,
    "distress_level": "Low"
  },
  {
    "district": "\u09aa\u09c2\u09b0\u09cd\u09ac \u09ae\u09c7\u09a6\u09bf\u09a8\u09c0\u09aa\u09c1\u09b0",
    "total_facilities": 1,
    "bed_facilities": 0,
    "oxygen_suppliers": 0,
    "ambulance_providers": 0,
    "testing_centers": 0,
    "verified_count": 0,
    "distress_level": "Low"
  }
];

export const fallbackRiskAnalysis: RiskAnalysisMetric[] = [
  {
    "district": "Kolkata",
    "activity_level": "High trend activity",
    "case_growth_velocity": -8.2,
    "reproduction_proxy_r": 1.56,
    "hospitalization_stress_index": 48.1,
    "oxygen_scarcity_index": 13.6,
    "risk_score": 100.0,
    "statistical_basis": "Derived from 833 verified triage leads: 219 hospital beds, 281 oxygen centers, and 13.6% resource unavailability."
  },
  {
    "district": "Unspecified",
    "activity_level": "High trend activity",
    "case_growth_velocity": -4.3,
    "reproduction_proxy_r": 1.29,
    "hospitalization_stress_index": 48.6,
    "oxygen_scarcity_index": 21.4,
    "risk_score": 100.0,
    "statistical_basis": "Derived from 467 verified triage leads: 143 hospital beds, 76 oxygen centers, and 21.4% resource unavailability."
  },
  {
    "district": "North 24 Parganas",
    "activity_level": "High trend activity",
    "case_growth_velocity": -8.2,
    "reproduction_proxy_r": 1.06,
    "hospitalization_stress_index": 53.4,
    "oxygen_scarcity_index": 13.6,
    "risk_score": 100.0,
    "statistical_basis": "Derived from 206 verified triage leads: 28 hospital beds, 123 oxygen centers, and 13.6% resource unavailability."
  },
  {
    "district": "Hooghly",
    "activity_level": "High trend activity",
    "case_growth_velocity": -8.5,
    "reproduction_proxy_r": 1.01,
    "hospitalization_stress_index": 53.2,
    "oxygen_scarcity_index": 13.1,
    "risk_score": 87.4,
    "statistical_basis": "Derived from 153 verified triage leads: 45 hospital beds, 62 oxygen centers, and 13.1% resource unavailability."
  },
  {
    "district": "Howrah",
    "activity_level": "Moderate trend activity",
    "case_growth_velocity": -11.6,
    "reproduction_proxy_r": 0.93,
    "hospitalization_stress_index": 55.7,
    "oxygen_scarcity_index": 6.8,
    "risk_score": 63.1,
    "statistical_basis": "Derived from 74 verified triage leads: 24 hospital beds, 39 oxygen centers, and 6.8% resource unavailability."
  },
  {
    "district": "Purba Bardhaman",
    "activity_level": "Moderate trend activity",
    "case_growth_velocity": -8.7,
    "reproduction_proxy_r": 0.94,
    "hospitalization_stress_index": 49.7,
    "oxygen_scarcity_index": 12.7,
    "risk_score": 60.0,
    "statistical_basis": "Derived from 71 verified triage leads: 13 hospital beds, 35 oxygen centers, and 12.7% resource unavailability."
  },
  {
    "district": "Darjeeling",
    "activity_level": "Moderate trend activity",
    "case_growth_velocity": -7.6,
    "reproduction_proxy_r": 0.95,
    "hospitalization_stress_index": 59.8,
    "oxygen_scarcity_index": 14.7,
    "risk_score": 63.3,
    "statistical_basis": "Derived from 68 verified triage leads: 31 hospital beds, 21 oxygen centers, and 14.7% resource unavailability."
  },
  {
    "district": "South 24 Parganas",
    "activity_level": "Moderate trend activity",
    "case_growth_velocity": -8.2,
    "reproduction_proxy_r": 0.94,
    "hospitalization_stress_index": 62.3,
    "oxygen_scarcity_index": 13.6,
    "risk_score": 63.5,
    "statistical_basis": "Derived from 66 verified triage leads: 21 hospital beds, 36 oxygen centers, and 13.6% resource unavailability."
  },
  {
    "district": "Purulia",
    "activity_level": "Moderate trend activity",
    "case_growth_velocity": -9.5,
    "reproduction_proxy_r": 0.93,
    "hospitalization_stress_index": 58.1,
    "oxygen_scarcity_index": 10.9,
    "risk_score": 61.0,
    "statistical_basis": "Derived from 64 verified triage leads: 5 hospital beds, 52 oxygen centers, and 10.9% resource unavailability."
  },
  {
    "district": "Birbhum",
    "activity_level": "Moderate trend activity",
    "case_growth_velocity": -7.2,
    "reproduction_proxy_r": 0.93,
    "hospitalization_stress_index": 64.5,
    "oxygen_scarcity_index": 15.6,
    "risk_score": 57.9,
    "statistical_basis": "Derived from 45 verified triage leads: 13 hospital beds, 27 oxygen centers, and 15.6% resource unavailability."
  },
  {
    "district": "Murshidabad",
    "activity_level": "Moderate trend activity",
    "case_growth_velocity": -5.7,
    "reproduction_proxy_r": 0.94,
    "hospitalization_stress_index": 76.5,
    "oxygen_scarcity_index": 18.6,
    "risk_score": 62.3,
    "statistical_basis": "Derived from 43 verified triage leads: 24 hospital beds, 19 oxygen centers, and 18.6% resource unavailability."
  },
  {
    "district": "Jalpaiguri",
    "activity_level": "Moderate trend activity",
    "case_growth_velocity": -7.1,
    "reproduction_proxy_r": 0.93,
    "hospitalization_stress_index": 56.1,
    "oxygen_scarcity_index": 15.8,
    "risk_score": 52.4,
    "statistical_basis": "Derived from 38 verified triage leads: 10 hospital beds, 18 oxygen centers, and 15.8% resource unavailability."
  },
  {
    "district": "Malda",
    "activity_level": "Moderate trend activity",
    "case_growth_velocity": -5.4,
    "reproduction_proxy_r": 0.93,
    "hospitalization_stress_index": 63.7,
    "oxygen_scarcity_index": 19.2,
    "risk_score": 51.9,
    "statistical_basis": "Derived from 26 verified triage leads: 14 hospital beds, 6 oxygen centers, and 19.2% resource unavailability."
  },
  {
    "district": "Bankura",
    "activity_level": "Decreasing trend",
    "case_growth_velocity": -15.0,
    "reproduction_proxy_r": 0.87,
    "hospitalization_stress_index": 33.8,
    "oxygen_scarcity_index": 0.0,
    "risk_score": 38.4,
    "statistical_basis": "Derived from 25 verified triage leads: 9 hospital beds, 5 oxygen centers, and 0.0% resource unavailability."
  },
  {
    "district": "Paschim Medinipur",
    "activity_level": "Decreasing trend",
    "case_growth_velocity": -12.7,
    "reproduction_proxy_r": 0.88,
    "hospitalization_stress_index": 35.0,
    "oxygen_scarcity_index": 4.5,
    "risk_score": 38.2,
    "statistical_basis": "Derived from 22 verified triage leads: 5 hospital beds, 7 oxygen centers, and 4.5% resource unavailability."
  }
];

export const fallbackFacilityInsights: InsightItem[] = [
  {
    "id": "INS-01",
    "category": "Trend",
    "severity": "info",
    "title": "7-Day Rolling Emergency Demand Shift (-64.8%)",
    "description": "Compared to the previous weekly cycle, emergency healthcare demand shifted by -64.8%. Current 7-day smoothed demand stands at 7.7 requests/day.",
    "metric_basis": "Latest 7d avg: 7.71 vs Previous 7d avg: 23.71",
    "timestamp": "2026-09-06"
  },
  {
    "id": "INS-02",
    "category": "Scarcity",
    "severity": "warning",
    "title": "Critical Medical Resource Scarcity (14.4% Out-of-Stock)",
    "description": "Out of 2361 logged facility events, 339 reported immediate inventory exhaustion or zero vacant beds upon on-ground verification.",
    "metric_basis": "339 exhausted units / 2361 total verified records",
    "timestamp": "2026-09-06"
  },
  {
    "id": "INS-03",
    "category": "Anomaly",
    "severity": "warning",
    "title": "Historical Peak Surge Point Detected (2021-05-01)",
    "description": "The highest single-day demand recorded occurred on 2021-05-01 with 371 acute healthcare distress events, including 142 urgent oxygen calls and 227 hospital admission requests.",
    "metric_basis": "Peak value: 371 events on 2021-05-01",
    "timestamp": "2021-05-01"
  },
  {
    "id": "INS-04",
    "category": "Recommendation",
    "severity": "positive",
    "title": "Strategic Hospital & Oxygen Concentrator Reallocation",
    "description": "High-distress districts (Kolkata, North 24 Parganas, Howrah) represent over 60% of critical bed occupancy. Buffer stockpiles of jumbo D-type cylinders and pediatric ventilator wards should be prioritized for tier-2 sub-divisional hospitals.",
    "metric_basis": "District load concentration ratio > 60%",
    "timestamp": "2026-09-06"
  }
];

export const fallbackModelSummary = {
  "comparison": [
    {
      "model_name": "LinearRegression",
      "mae": 149.36,
      "rmse": 203.62,
      "mape": 8098.76,
      "r2": -217.3357,
      "residual_std": 144.91,
      "train_samples": 37,
      "test_samples": 10,
      "last_trained": "2026-11-05T13:11:40.036588"
    },
    {
      "model_name": "RandomForest",
      "mae": 101.43,
      "rmse": 113.46,
      "mape": 4205.7,
      "r2": -66.7888,
      "residual_std": 50.83,
      "train_samples": 37,
      "test_samples": 10,
      "last_trained": "2026-11-05T13:11:40.131804"
    },
    {
      "model_name": "GradientBoosting",
      "mae": 186.57,
      "rmse": 205.91,
      "mape": 7616.1,
      "r2": -222.2906,
      "residual_std": 87.13,
      "train_samples": 37,
      "test_samples": 10,
      "last_trained": "2026-11-05T13:11:40.177967"
    },
    {
      "model_name": "ARIMA",
      "mae": 31.29,
      "rmse": 34.07,
      "mape": 1986.26,
      "r2": -5.1128,
      "residual_std": 13.48,
      "train_samples": 37,
      "test_samples": 10,
      "last_trained": "2026-11-05T13:11:40.206740"
    }
  ],
  "best_model": "ARIMA",
  "historical_validation": {
    "LinearRegression": [
      {
        "date": "2021-05-26",
        "actual": 35,
        "predicted": 35.1,
        "error": 0.1
      },
      {
        "date": "2021-05-27",
        "actual": 1,
        "predicted": 9.1,
        "error": 8.1
      },
      {
        "date": "2021-05-28",
        "actual": 31,
        "predicted": 50.4,
        "error": 19.4
      },
      {
        "date": "2021-05-30",
        "actual": 32,
        "predicted": 8.8,
        "error": -23.2
      },
      {
        "date": "2021-05-31",
        "actual": 1,
        "predicted": -7.4,
        "error": -8.4
      },
      {
        "date": "2021-06-02",
        "actual": 8,
        "predicted": 266.8,
        "error": 258.8
      },
      {
        "date": "2021-06-03",
        "actual": 1,
        "predicted": 292.8,
        "error": 291.8
      },
      {
        "date": "2021-06-05",
        "actual": 1,
        "predicted": 298.5,
        "error": 297.5
      },
      {
        "date": "2021-06-11",
        "actual": 2,
        "predicted": 272.6,
        "error": 270.6
      },
      {
        "date": "2026-09-06",
        "actual": 9,
        "predicted": 324.7,
        "error": 315.7
      }
    ],
    "RandomForest": [
      {
        "date": "2021-05-26",
        "actual": 35,
        "predicted": 99.3,
        "error": 64.3
      },
      {
        "date": "2021-05-27",
        "actual": 1,
        "predicted": 27.8,
        "error": 26.8
      },
      {
        "date": "2021-05-28",
        "actual": 31,
        "predicted": 184.4,
        "error": 153.4
      },
      {
        "date": "2021-05-30",
        "actual": 32,
        "predicted": 74.4,
        "error": 42.4
      },
      {
        "date": "2021-05-31",
        "actual": 1,
        "predicted": 72.6,
        "error": 71.6
      },
      {
        "date": "2021-06-02",
        "actual": 8,
        "predicted": 209.2,
        "error": 201.2
      },
      {
        "date": "2021-06-03",
        "actual": 1,
        "predicted": 84.9,
        "error": 83.9
      },
      {
        "date": "2021-06-05",
        "actual": 1,
        "predicted": 131.2,
        "error": 130.2
      },
      {
        "date": "2021-06-11",
        "actual": 2,
        "predicted": 125.5,
        "error": 123.5
      },
      {
        "date": "2026-09-06",
        "actual": 9,
        "predicted": 126.0,
        "error": 117.0
      }
    ],
    "GradientBoosting": [
      {
        "date": "2021-05-26",
        "actual": 35,
        "predicted": 152.4,
        "error": 117.4
      },
      {
        "date": "2021-05-27",
        "actual": 1,
        "predicted": 27.6,
        "error": 26.6
      },
      {
        "date": "2021-05-28",
        "actual": 31,
        "predicted": 310.1,
        "error": 279.1
      },
      {
        "date": "2021-05-30",
        "actual": 32,
        "predicted": 143.8,
        "error": 111.8
      },
      {
        "date": "2021-05-31",
        "actual": 1,
        "predicted": 129.8,
        "error": 128.8
      },
      {
        "date": "2021-06-02",
        "actual": 8,
        "predicted": 330.0,
        "error": 322.0
      },
      {
        "date": "2021-06-03",
        "actual": 1,
        "predicted": 159.0,
        "error": 158.0
      },
      {
        "date": "2021-06-05",
        "actual": 1,
        "predicted": 244.0,
        "error": 243.0
      },
      {
        "date": "2021-06-11",
        "actual": 2,
        "predicted": 248.5,
        "error": 246.5
      },
      {
        "date": "2026-09-06",
        "actual": 9,
        "predicted": 241.5,
        "error": 232.5
      }
    ],
    "ARIMA": [
      {
        "date": "2021-05-26",
        "actual": 35,
        "predicted": 45.0,
        "error": 10.0
      },
      {
        "date": "2021-05-27",
        "actual": 1,
        "predicted": 43.1,
        "error": 42.1
      },
      {
        "date": "2021-05-28",
        "actual": 31,
        "predicted": 43.2,
        "error": 12.2
      },
      {
        "date": "2021-05-30",
        "actual": 32,
        "predicted": 43.2,
        "error": 11.2
      },
      {
        "date": "2021-05-31",
        "actual": 1,
        "predicted": 43.2,
        "error": 42.2
      },
      {
        "date": "2021-06-02",
        "actual": 8,
        "predicted": 43.2,
        "error": 35.2
      },
      {
        "date": "2021-06-03",
        "actual": 1,
        "predicted": 43.2,
        "error": 42.2
      },
      {
        "date": "2021-06-05",
        "actual": 1,
        "predicted": 43.2,
        "error": 42.2
      },
      {
        "date": "2021-06-11",
        "actual": 2,
        "predicted": 43.2,
        "error": 41.2
      },
      {
        "date": "2026-09-06",
        "actual": 9,
        "predicted": 43.2,
        "error": 34.2
      }
    ]
  },
  "forecasts": {
    "7": {
      "LinearRegression": [
        {
          "date": "2026-09-07",
          "step": 1,
          "forecast": 341.7,
          "lower_bound": 46.3,
          "upper_bound": 637.1
        },
        {
          "date": "2026-09-08",
          "step": 2,
          "forecast": 240.5,
          "lower_bound": 0.0,
          "upper_bound": 547.2
        },
        {
          "date": "2026-09-09",
          "step": 3,
          "forecast": 1.0,
          "lower_bound": 0.0,
          "upper_bound": 319.1
        },
        {
          "date": "2026-09-10",
          "step": 4,
          "forecast": 1.0,
          "lower_bound": 0.0,
          "upper_bound": 330.5
        },
        {
          "date": "2026-09-11",
          "step": 5,
          "forecast": 1.0,
          "lower_bound": 0.0,
          "upper_bound": 341.8
        },
        {
          "date": "2026-09-12",
          "step": 6,
          "forecast": 1.0,
          "lower_bound": 0.0,
          "upper_bound": 353.2
        },
        {
          "date": "2026-09-13",
          "step": 7,
          "forecast": 1.0,
          "lower_bound": 0.0,
          "upper_bound": 364.6
        }
      ],
      "RandomForest": [
        {
          "date": "2026-09-07",
          "step": 1,
          "forecast": 81.8,
          "lower_bound": 0.0,
          "upper_bound": 185.4
        },
        {
          "date": "2026-09-08",
          "step": 2,
          "forecast": 66.7,
          "lower_bound": 0.0,
          "upper_bound": 174.3
        },
        {
          "date": "2026-09-09",
          "step": 3,
          "forecast": 67.7,
          "lower_bound": 0.0,
          "upper_bound": 179.2
        },
        {
          "date": "2026-09-10",
          "step": 4,
          "forecast": 26.8,
          "lower_bound": 0.0,
          "upper_bound": 142.4
        },
        {
          "date": "2026-09-11",
          "step": 5,
          "forecast": 47.4,
          "lower_bound": 0.0,
          "upper_bound": 166.9
        },
        {
          "date": "2026-09-12",
          "step": 6,
          "forecast": 24.4,
          "lower_bound": 0.0,
          "upper_bound": 148.0
        },
        {
          "date": "2026-09-13",
          "step": 7,
          "forecast": 48.9,
          "lower_bound": 0.0,
          "upper_bound": 176.4
        }
      ],
      "GradientBoosting": [
        {
          "date": "2026-09-07",
          "step": 1,
          "forecast": 147.8,
          "lower_bound": 0.0,
          "upper_bound": 325.4
        },
        {
          "date": "2026-09-08",
          "step": 2,
          "forecast": 130.8,
          "lower_bound": 0.0,
          "upper_bound": 315.3
        },
        {
          "date": "2026-09-09",
          "step": 3,
          "forecast": 28.3,
          "lower_bound": 0.0,
          "upper_bound": 219.6
        },
        {
          "date": "2026-09-10",
          "step": 4,
          "forecast": 42.1,
          "lower_bound": 0.0,
          "upper_bound": 240.2
        },
        {
          "date": "2026-09-11",
          "step": 5,
          "forecast": 17.4,
          "lower_bound": 0.0,
          "upper_bound": 222.3
        },
        {
          "date": "2026-09-12",
          "step": 6,
          "forecast": 52.4,
          "lower_bound": 0.0,
          "upper_bound": 264.1
        },
        {
          "date": "2026-09-13",
          "step": 7,
          "forecast": 15.7,
          "lower_bound": 0.0,
          "upper_bound": 234.3
        }
      ],
      "ARIMA": [
        {
          "date": "2026-09-07",
          "step": 1,
          "forecast": 8.8,
          "lower_bound": 0.0,
          "upper_bound": 36.3
        },
        {
          "date": "2026-09-08",
          "step": 2,
          "forecast": 8.6,
          "lower_bound": 0.0,
          "upper_bound": 37.2
        },
        {
          "date": "2026-09-09",
          "step": 3,
          "forecast": 8.5,
          "lower_bound": 0.0,
          "upper_bound": 38.1
        },
        {
          "date": "2026-09-10",
          "step": 4,
          "forecast": 8.3,
          "lower_bound": 0.0,
          "upper_bound": 38.9
        },
        {
          "date": "2026-09-11",
          "step": 5,
          "forecast": 8.1,
          "lower_bound": 0.0,
          "upper_bound": 39.8
        },
        {
          "date": "2026-09-12",
          "step": 6,
          "forecast": 8.0,
          "lower_bound": 0.0,
          "upper_bound": 40.7
        },
        {
          "date": "2026-09-13",
          "step": 7,
          "forecast": 7.8,
          "lower_bound": 0.0,
          "upper_bound": 41.6
        }
      ]
    },
    "14": {
      "LinearRegression": [
        {
          "date": "2026-09-07",
          "step": 1,
          "forecast": 341.7,
          "lower_bound": 46.3,
          "upper_bound": 637.1
        },
        {
          "date": "2026-09-08",
          "step": 2,
          "forecast": 240.5,
          "lower_bound": 0.0,
          "upper_bound": 547.2
        },
        {
          "date": "2026-09-09",
          "step": 3,
          "forecast": 1.0,
          "lower_bound": 0.0,
          "upper_bound": 319.1
        },
        {
          "date": "2026-09-10",
          "step": 4,
          "forecast": 1.0,
          "lower_bound": 0.0,
          "upper_bound": 330.5
        },
        {
          "date": "2026-09-11",
          "step": 5,
          "forecast": 1.0,
          "lower_bound": 0.0,
          "upper_bound": 341.8
        },
        {
          "date": "2026-09-12",
          "step": 6,
          "forecast": 1.0,
          "lower_bound": 0.0,
          "upper_bound": 353.2
        },
        {
          "date": "2026-09-13",
          "step": 7,
          "forecast": 1.0,
          "lower_bound": 0.0,
          "upper_bound": 364.6
        },
        {
          "date": "2026-09-14",
          "step": 8,
          "forecast": 66.6,
          "lower_bound": 0.0,
          "upper_bound": 441.5
        },
        {
          "date": "2026-09-15",
          "step": 9,
          "forecast": 198.9,
          "lower_bound": 0.0,
          "upper_bound": 585.2
        },
        {
          "date": "2026-09-16",
          "step": 10,
          "forecast": 112.1,
          "lower_bound": 0.0,
          "upper_bound": 509.7
        },
        {
          "date": "2026-09-17",
          "step": 11,
          "forecast": 1.0,
          "lower_bound": 0.0,
          "upper_bound": 410.0
        },
        {
          "date": "2026-09-18",
          "step": 12,
          "forecast": 1.0,
          "lower_bound": 0.0,
          "upper_bound": 421.4
        },
        {
          "date": "2026-09-19",
          "step": 13,
          "forecast": 1.0,
          "lower_bound": 0.0,
          "upper_bound": 432.7
        },
        {
          "date": "2026-09-20",
          "step": 14,
          "forecast": 1.0,
          "lower_bound": 0.0,
          "upper_bound": 444.1
        }
      ],
      "RandomForest": [
        {
          "date": "2026-09-07",
          "step": 1,
          "forecast": 81.8,
          "lower_bound": 0.0,
          "upper_bound": 185.4
        },
        {
          "date": "2026-09-08",
          "step": 2,
          "forecast": 66.7,
          "lower_bound": 0.0,
          "upper_bound": 174.3
        },
        {
          "date": "2026-09-09",
          "step": 3,
          "forecast": 67.7,
          "lower_bound": 0.0,
          "upper_bound": 179.2
        },
        {
          "date": "2026-09-10",
          "step": 4,
          "forecast": 26.8,
          "lower_bound": 0.0,
          "upper_bound": 142.4
        },
        {
          "date": "2026-09-11",
          "step": 5,
          "forecast": 47.4,
          "lower_bound": 0.0,
          "upper_bound": 166.9
        },
        {
          "date": "2026-09-12",
          "step": 6,
          "forecast": 24.4,
          "lower_bound": 0.0,
          "upper_bound": 148.0
        },
        {
          "date": "2026-09-13",
          "step": 7,
          "forecast": 48.9,
          "lower_bound": 0.0,
          "upper_bound": 176.4
        },
        {
          "date": "2026-09-14",
          "step": 8,
          "forecast": 13.0,
          "lower_bound": 0.0,
          "upper_bound": 144.6
        },
        {
          "date": "2026-09-15",
          "step": 9,
          "forecast": 48.2,
          "lower_bound": 0.0,
          "upper_bound": 183.7
        },
        {
          "date": "2026-09-16",
          "step": 10,
          "forecast": 12.5,
          "lower_bound": 0.0,
          "upper_bound": 152.0
        },
        {
          "date": "2026-09-17",
          "step": 11,
          "forecast": 47.8,
          "lower_bound": 0.0,
          "upper_bound": 191.3
        },
        {
          "date": "2026-09-18",
          "step": 12,
          "forecast": 10.7,
          "lower_bound": 0.0,
          "upper_bound": 158.2
        },
        {
          "date": "2026-09-19",
          "step": 13,
          "forecast": 48.8,
          "lower_bound": 0.0,
          "upper_bound": 200.2
        },
        {
          "date": "2026-09-20",
          "step": 14,
          "forecast": 10.8,
          "lower_bound": 0.0,
          "upper_bound": 166.3
        }
      ],
      "GradientBoosting": [
        {
          "date": "2026-09-07",
          "step": 1,
          "forecast": 147.8,
          "lower_bound": 0.0,
          "upper_bound": 325.4
        },
        {
          "date": "2026-09-08",
          "step": 2,
          "forecast": 130.8,
          "lower_bound": 0.0,
          "upper_bound": 315.3
        },
        {
          "date": "2026-09-09",
          "step": 3,
          "forecast": 28.3,
          "lower_bound": 0.0,
          "upper_bound": 219.6
        },
        {
          "date": "2026-09-10",
          "step": 4,
          "forecast": 42.1,
          "lower_bound": 0.0,
          "upper_bound": 240.2
        },
        {
          "date": "2026-09-11",
          "step": 5,
          "forecast": 17.4,
          "lower_bound": 0.0,
          "upper_bound": 222.3
        },
        {
          "date": "2026-09-12",
          "step": 6,
          "forecast": 52.4,
          "lower_bound": 0.0,
          "upper_bound": 264.1
        },
        {
          "date": "2026-09-13",
          "step": 7,
          "forecast": 15.7,
          "lower_bound": 0.0,
          "upper_bound": 234.3
        },
        {
          "date": "2026-09-14",
          "step": 8,
          "forecast": 53.3,
          "lower_bound": 0.0,
          "upper_bound": 278.7
        },
        {
          "date": "2026-09-15",
          "step": 9,
          "forecast": 14.0,
          "lower_bound": 0.0,
          "upper_bound": 246.2
        },
        {
          "date": "2026-09-16",
          "step": 10,
          "forecast": 51.7,
          "lower_bound": 0.0,
          "upper_bound": 290.7
        },
        {
          "date": "2026-09-17",
          "step": 11,
          "forecast": 20.3,
          "lower_bound": 0.0,
          "upper_bound": 266.2
        },
        {
          "date": "2026-09-18",
          "step": 12,
          "forecast": 54.5,
          "lower_bound": 0.0,
          "upper_bound": 307.3
        },
        {
          "date": "2026-09-19",
          "step": 13,
          "forecast": 6.4,
          "lower_bound": 0.0,
          "upper_bound": 266.0
        },
        {
          "date": "2026-09-20",
          "step": 14,
          "forecast": 43.9,
          "lower_bound": 0.0,
          "upper_bound": 310.4
        }
      ],
      "ARIMA": [
        {
          "date": "2026-09-07",
          "step": 1,
          "forecast": 8.8,
          "lower_bound": 0.0,
          "upper_bound": 36.3
        },
        {
          "date": "2026-09-08",
          "step": 2,
          "forecast": 8.6,
          "lower_bound": 0.0,
          "upper_bound": 37.2
        },
        {
          "date": "2026-09-09",
          "step": 3,
          "forecast": 8.5,
          "lower_bound": 0.0,
          "upper_bound": 38.1
        },
        {
          "date": "2026-09-10",
          "step": 4,
          "forecast": 8.3,
          "lower_bound": 0.0,
          "upper_bound": 38.9
        },
        {
          "date": "2026-09-11",
          "step": 5,
          "forecast": 8.1,
          "lower_bound": 0.0,
          "upper_bound": 39.8
        },
        {
          "date": "2026-09-12",
          "step": 6,
          "forecast": 8.0,
          "lower_bound": 0.0,
          "upper_bound": 40.7
        },
        {
          "date": "2026-09-13",
          "step": 7,
          "forecast": 7.8,
          "lower_bound": 0.0,
          "upper_bound": 41.6
        },
        {
          "date": "2026-09-14",
          "step": 8,
          "forecast": 7.7,
          "lower_bound": 0.0,
          "upper_bound": 42.5
        },
        {
          "date": "2026-09-15",
          "step": 9,
          "forecast": 7.5,
          "lower_bound": 0.0,
          "upper_bound": 43.4
        },
        {
          "date": "2026-09-16",
          "step": 10,
          "forecast": 7.4,
          "lower_bound": 0.0,
          "upper_bound": 44.3
        },
        {
          "date": "2026-09-17",
          "step": 11,
          "forecast": 7.2,
          "lower_bound": 0.0,
          "upper_bound": 45.3
        },
        {
          "date": "2026-09-18",
          "step": 12,
          "forecast": 7.1,
          "lower_bound": 0.0,
          "upper_bound": 46.2
        },
        {
          "date": "2026-09-19",
          "step": 13,
          "forecast": 6.9,
          "lower_bound": 0.0,
          "upper_bound": 47.1
        },
        {
          "date": "2026-09-20",
          "step": 14,
          "forecast": 6.8,
          "lower_bound": 0.0,
          "upper_bound": 48.0
        }
      ]
    },
    "30": {
      "LinearRegression": [
        {
          "date": "2026-09-07",
          "step": 1,
          "forecast": 341.7,
          "lower_bound": 46.3,
          "upper_bound": 637.1
        },
        {
          "date": "2026-09-08",
          "step": 2,
          "forecast": 240.5,
          "lower_bound": 0.0,
          "upper_bound": 547.2
        },
        {
          "date": "2026-09-09",
          "step": 3,
          "forecast": 1.0,
          "lower_bound": 0.0,
          "upper_bound": 319.1
        },
        {
          "date": "2026-09-10",
          "step": 4,
          "forecast": 1.0,
          "lower_bound": 0.0,
          "upper_bound": 330.5
        },
        {
          "date": "2026-09-11",
          "step": 5,
          "forecast": 1.0,
          "lower_bound": 0.0,
          "upper_bound": 341.8
        },
        {
          "date": "2026-09-12",
          "step": 6,
          "forecast": 1.0,
          "lower_bound": 0.0,
          "upper_bound": 353.2
        },
        {
          "date": "2026-09-13",
          "step": 7,
          "forecast": 1.0,
          "lower_bound": 0.0,
          "upper_bound": 364.6
        },
        {
          "date": "2026-09-14",
          "step": 8,
          "forecast": 66.6,
          "lower_bound": 0.0,
          "upper_bound": 441.5
        },
        {
          "date": "2026-09-15",
          "step": 9,
          "forecast": 198.9,
          "lower_bound": 0.0,
          "upper_bound": 585.2
        },
        {
          "date": "2026-09-16",
          "step": 10,
          "forecast": 112.1,
          "lower_bound": 0.0,
          "upper_bound": 509.7
        },
        {
          "date": "2026-09-17",
          "step": 11,
          "forecast": 1.0,
          "lower_bound": 0.0,
          "upper_bound": 410.0
        },
        {
          "date": "2026-09-18",
          "step": 12,
          "forecast": 1.0,
          "lower_bound": 0.0,
          "upper_bound": 421.4
        },
        {
          "date": "2026-09-19",
          "step": 13,
          "forecast": 1.0,
          "lower_bound": 0.0,
          "upper_bound": 432.7
        },
        {
          "date": "2026-09-20",
          "step": 14,
          "forecast": 1.0,
          "lower_bound": 0.0,
          "upper_bound": 444.1
        },
        {
          "date": "2026-09-21",
          "step": 15,
          "forecast": 1.0,
          "lower_bound": 0.0,
          "upper_bound": 455.4
        },
        {
          "date": "2026-09-22",
          "step": 16,
          "forecast": 89.5,
          "lower_bound": 0.0,
          "upper_bound": 555.3
        },
        {
          "date": "2026-09-23",
          "step": 17,
          "forecast": 65.6,
          "lower_bound": 0.0,
          "upper_bound": 542.7
        },
        {
          "date": "2026-09-24",
          "step": 18,
          "forecast": 50.5,
          "lower_bound": 0.0,
          "upper_bound": 539.0
        },
        {
          "date": "2026-09-25",
          "step": 19,
          "forecast": 1.0,
          "lower_bound": 0.0,
          "upper_bound": 500.9
        },
        {
          "date": "2026-09-26",
          "step": 20,
          "forecast": 1.0,
          "lower_bound": 0.0,
          "upper_bound": 512.2
        },
        {
          "date": "2026-09-27",
          "step": 21,
          "forecast": 1.0,
          "lower_bound": 0.0,
          "upper_bound": 523.6
        },
        {
          "date": "2026-09-28",
          "step": 22,
          "forecast": 1.0,
          "lower_bound": 0.0,
          "upper_bound": 535.0
        },
        {
          "date": "2026-09-29",
          "step": 23,
          "forecast": 1.0,
          "lower_bound": 0.0,
          "upper_bound": 546.3
        },
        {
          "date": "2026-09-30",
          "step": 24,
          "forecast": 54.4,
          "lower_bound": 0.0,
          "upper_bound": 611.1
        },
        {
          "date": "2026-10-01",
          "step": 25,
          "forecast": 282.6,
          "lower_bound": 0.0,
          "upper_bound": 850.6
        },
        {
          "date": "2026-10-02",
          "step": 26,
          "forecast": 190.0,
          "lower_bound": 0.0,
          "upper_bound": 769.4
        },
        {
          "date": "2026-10-03",
          "step": 27,
          "forecast": 1.0,
          "lower_bound": 0.0,
          "upper_bound": 591.8
        },
        {
          "date": "2026-10-04",
          "step": 28,
          "forecast": 1.0,
          "lower_bound": 0.0,
          "upper_bound": 603.1
        },
        {
          "date": "2026-10-05",
          "step": 29,
          "forecast": 1.0,
          "lower_bound": 0.0,
          "upper_bound": 614.5
        },
        {
          "date": "2026-10-06",
          "step": 30,
          "forecast": 1.0,
          "lower_bound": 0.0,
          "upper_bound": 625.9
        }
      ],
      "RandomForest": [
        {
          "date": "2026-09-07",
          "step": 1,
          "forecast": 81.8,
          "lower_bound": 0.0,
          "upper_bound": 185.4
        },
        {
          "date": "2026-09-08",
          "step": 2,
          "forecast": 66.7,
          "lower_bound": 0.0,
          "upper_bound": 174.3
        },
        {
          "date": "2026-09-09",
          "step": 3,
          "forecast": 67.7,
          "lower_bound": 0.0,
          "upper_bound": 179.2
        },
        {
          "date": "2026-09-10",
          "step": 4,
          "forecast": 26.8,
          "lower_bound": 0.0,
          "upper_bound": 142.4
        },
        {
          "date": "2026-09-11",
          "step": 5,
          "forecast": 47.4,
          "lower_bound": 0.0,
          "upper_bound": 166.9
        },
        {
          "date": "2026-09-12",
          "step": 6,
          "forecast": 24.4,
          "lower_bound": 0.0,
          "upper_bound": 148.0
        },
        {
          "date": "2026-09-13",
          "step": 7,
          "forecast": 48.9,
          "lower_bound": 0.0,
          "upper_bound": 176.4
        },
        {
          "date": "2026-09-14",
          "step": 8,
          "forecast": 13.0,
          "lower_bound": 0.0,
          "upper_bound": 144.6
        },
        {
          "date": "2026-09-15",
          "step": 9,
          "forecast": 48.2,
          "lower_bound": 0.0,
          "upper_bound": 183.7
        },
        {
          "date": "2026-09-16",
          "step": 10,
          "forecast": 12.5,
          "lower_bound": 0.0,
          "upper_bound": 152.0
        },
        {
          "date": "2026-09-17",
          "step": 11,
          "forecast": 47.8,
          "lower_bound": 0.0,
          "upper_bound": 191.3
        },
        {
          "date": "2026-09-18",
          "step": 12,
          "forecast": 10.7,
          "lower_bound": 0.0,
          "upper_bound": 158.2
        },
        {
          "date": "2026-09-19",
          "step": 13,
          "forecast": 48.8,
          "lower_bound": 0.0,
          "upper_bound": 200.2
        },
        {
          "date": "2026-09-20",
          "step": 14,
          "forecast": 10.8,
          "lower_bound": 0.0,
          "upper_bound": 166.3
        },
        {
          "date": "2026-09-21",
          "step": 15,
          "forecast": 55.3,
          "lower_bound": 0.0,
          "upper_bound": 214.7
        },
        {
          "date": "2026-09-22",
          "step": 16,
          "forecast": 12.1,
          "lower_bound": 0.0,
          "upper_bound": 175.5
        },
        {
          "date": "2026-09-23",
          "step": 17,
          "forecast": 48.2,
          "lower_bound": 0.0,
          "upper_bound": 215.6
        },
        {
          "date": "2026-09-24",
          "step": 18,
          "forecast": 9.7,
          "lower_bound": 0.0,
          "upper_bound": 181.1
        },
        {
          "date": "2026-09-25",
          "step": 19,
          "forecast": 50.0,
          "lower_bound": 0.0,
          "upper_bound": 225.3
        },
        {
          "date": "2026-09-26",
          "step": 20,
          "forecast": 9.8,
          "lower_bound": 0.0,
          "upper_bound": 189.1
        },
        {
          "date": "2026-09-27",
          "step": 21,
          "forecast": 49.6,
          "lower_bound": 0.0,
          "upper_bound": 232.9
        },
        {
          "date": "2026-09-28",
          "step": 22,
          "forecast": 11.1,
          "lower_bound": 0.0,
          "upper_bound": 198.4
        },
        {
          "date": "2026-09-29",
          "step": 23,
          "forecast": 61.5,
          "lower_bound": 0.0,
          "upper_bound": 252.8
        },
        {
          "date": "2026-09-30",
          "step": 24,
          "forecast": 12.0,
          "lower_bound": 0.0,
          "upper_bound": 207.3
        },
        {
          "date": "2026-10-01",
          "step": 25,
          "forecast": 124.8,
          "lower_bound": 0.0,
          "upper_bound": 324.0
        },
        {
          "date": "2026-10-02",
          "step": 26,
          "forecast": 54.2,
          "lower_bound": 0.0,
          "upper_bound": 257.5
        },
        {
          "date": "2026-10-03",
          "step": 27,
          "forecast": 38.8,
          "lower_bound": 0.0,
          "upper_bound": 246.0
        },
        {
          "date": "2026-10-04",
          "step": 28,
          "forecast": 30.5,
          "lower_bound": 0.0,
          "upper_bound": 241.7
        },
        {
          "date": "2026-10-05",
          "step": 29,
          "forecast": 41.1,
          "lower_bound": 0.0,
          "upper_bound": 256.3
        },
        {
          "date": "2026-10-06",
          "step": 30,
          "forecast": 24.9,
          "lower_bound": 0.0,
          "upper_bound": 244.1
        }
      ],
      "GradientBoosting": [
        {
          "date": "2026-09-07",
          "step": 1,
          "forecast": 147.8,
          "lower_bound": 0.0,
          "upper_bound": 325.4
        },
        {
          "date": "2026-09-08",
          "step": 2,
          "forecast": 130.8,
          "lower_bound": 0.0,
          "upper_bound": 315.3
        },
        {
          "date": "2026-09-09",
          "step": 3,
          "forecast": 28.3,
          "lower_bound": 0.0,
          "upper_bound": 219.6
        },
        {
          "date": "2026-09-10",
          "step": 4,
          "forecast": 42.1,
          "lower_bound": 0.0,
          "upper_bound": 240.2
        },
        {
          "date": "2026-09-11",
          "step": 5,
          "forecast": 17.4,
          "lower_bound": 0.0,
          "upper_bound": 222.3
        },
        {
          "date": "2026-09-12",
          "step": 6,
          "forecast": 52.4,
          "lower_bound": 0.0,
          "upper_bound": 264.1
        },
        {
          "date": "2026-09-13",
          "step": 7,
          "forecast": 15.7,
          "lower_bound": 0.0,
          "upper_bound": 234.3
        },
        {
          "date": "2026-09-14",
          "step": 8,
          "forecast": 53.3,
          "lower_bound": 0.0,
          "upper_bound": 278.7
        },
        {
          "date": "2026-09-15",
          "step": 9,
          "forecast": 14.0,
          "lower_bound": 0.0,
          "upper_bound": 246.2
        },
        {
          "date": "2026-09-16",
          "step": 10,
          "forecast": 51.7,
          "lower_bound": 0.0,
          "upper_bound": 290.7
        },
        {
          "date": "2026-09-17",
          "step": 11,
          "forecast": 20.3,
          "lower_bound": 0.0,
          "upper_bound": 266.2
        },
        {
          "date": "2026-09-18",
          "step": 12,
          "forecast": 54.5,
          "lower_bound": 0.0,
          "upper_bound": 307.3
        },
        {
          "date": "2026-09-19",
          "step": 13,
          "forecast": 6.4,
          "lower_bound": 0.0,
          "upper_bound": 266.0
        },
        {
          "date": "2026-09-20",
          "step": 14,
          "forecast": 43.9,
          "lower_bound": 0.0,
          "upper_bound": 310.4
        },
        {
          "date": "2026-09-21",
          "step": 15,
          "forecast": 14.3,
          "lower_bound": 0.0,
          "upper_bound": 287.6
        },
        {
          "date": "2026-09-22",
          "step": 16,
          "forecast": 50.0,
          "lower_bound": 0.0,
          "upper_bound": 330.1
        },
        {
          "date": "2026-09-23",
          "step": 17,
          "forecast": 13.1,
          "lower_bound": 0.0,
          "upper_bound": 300.0
        },
        {
          "date": "2026-09-24",
          "step": 18,
          "forecast": 51.0,
          "lower_bound": 0.0,
          "upper_bound": 344.8
        },
        {
          "date": "2026-09-25",
          "step": 19,
          "forecast": 5.3,
          "lower_bound": 0.0,
          "upper_bound": 305.8
        },
        {
          "date": "2026-09-26",
          "step": 20,
          "forecast": 151.5,
          "lower_bound": 0.0,
          "upper_bound": 458.9
        },
        {
          "date": "2026-09-27",
          "step": 21,
          "forecast": 1.5,
          "lower_bound": 0.0,
          "upper_bound": 315.7
        },
        {
          "date": "2026-09-28",
          "step": 22,
          "forecast": 201.4,
          "lower_bound": 0.0,
          "upper_bound": 522.5
        },
        {
          "date": "2026-09-29",
          "step": 23,
          "forecast": 7.2,
          "lower_bound": 0.0,
          "upper_bound": 335.1
        },
        {
          "date": "2026-09-30",
          "step": 24,
          "forecast": 94.9,
          "lower_bound": 0.0,
          "upper_bound": 429.7
        },
        {
          "date": "2026-10-01",
          "step": 25,
          "forecast": 88.1,
          "lower_bound": 0.0,
          "upper_bound": 429.6
        },
        {
          "date": "2026-10-02",
          "step": 26,
          "forecast": 44.7,
          "lower_bound": 0.0,
          "upper_bound": 393.0
        },
        {
          "date": "2026-10-03",
          "step": 27,
          "forecast": 20.5,
          "lower_bound": 0.0,
          "upper_bound": 375.8
        },
        {
          "date": "2026-10-04",
          "step": 28,
          "forecast": 46.4,
          "lower_bound": 0.0,
          "upper_bound": 408.5
        },
        {
          "date": "2026-10-05",
          "step": 29,
          "forecast": 26.5,
          "lower_bound": 0.0,
          "upper_bound": 395.3
        },
        {
          "date": "2026-10-06",
          "step": 30,
          "forecast": 56.2,
          "lower_bound": 0.0,
          "upper_bound": 431.9
        }
      ],
      "ARIMA": [
        {
          "date": "2026-09-07",
          "step": 1,
          "forecast": 8.8,
          "lower_bound": 0.0,
          "upper_bound": 36.3
        },
        {
          "date": "2026-09-08",
          "step": 2,
          "forecast": 8.6,
          "lower_bound": 0.0,
          "upper_bound": 37.2
        },
        {
          "date": "2026-09-09",
          "step": 3,
          "forecast": 8.5,
          "lower_bound": 0.0,
          "upper_bound": 38.1
        },
        {
          "date": "2026-09-10",
          "step": 4,
          "forecast": 8.3,
          "lower_bound": 0.0,
          "upper_bound": 38.9
        },
        {
          "date": "2026-09-11",
          "step": 5,
          "forecast": 8.1,
          "lower_bound": 0.0,
          "upper_bound": 39.8
        },
        {
          "date": "2026-09-12",
          "step": 6,
          "forecast": 8.0,
          "lower_bound": 0.0,
          "upper_bound": 40.7
        },
        {
          "date": "2026-09-13",
          "step": 7,
          "forecast": 7.8,
          "lower_bound": 0.0,
          "upper_bound": 41.6
        },
        {
          "date": "2026-09-14",
          "step": 8,
          "forecast": 7.7,
          "lower_bound": 0.0,
          "upper_bound": 42.5
        },
        {
          "date": "2026-09-15",
          "step": 9,
          "forecast": 7.5,
          "lower_bound": 0.0,
          "upper_bound": 43.4
        },
        {
          "date": "2026-09-16",
          "step": 10,
          "forecast": 7.4,
          "lower_bound": 0.0,
          "upper_bound": 44.3
        },
        {
          "date": "2026-09-17",
          "step": 11,
          "forecast": 7.2,
          "lower_bound": 0.0,
          "upper_bound": 45.3
        },
        {
          "date": "2026-09-18",
          "step": 12,
          "forecast": 7.1,
          "lower_bound": 0.0,
          "upper_bound": 46.2
        },
        {
          "date": "2026-09-19",
          "step": 13,
          "forecast": 6.9,
          "lower_bound": 0.0,
          "upper_bound": 47.1
        },
        {
          "date": "2026-09-20",
          "step": 14,
          "forecast": 6.8,
          "lower_bound": 0.0,
          "upper_bound": 48.0
        },
        {
          "date": "2026-09-21",
          "step": 15,
          "forecast": 6.6,
          "lower_bound": 0.0,
          "upper_bound": 48.9
        },
        {
          "date": "2026-09-22",
          "step": 16,
          "forecast": 6.5,
          "lower_bound": 0.0,
          "upper_bound": 49.8
        },
        {
          "date": "2026-09-23",
          "step": 17,
          "forecast": 6.4,
          "lower_bound": 0.0,
          "upper_bound": 50.8
        },
        {
          "date": "2026-09-24",
          "step": 18,
          "forecast": 6.3,
          "lower_bound": 0.0,
          "upper_bound": 51.7
        },
        {
          "date": "2026-09-25",
          "step": 19,
          "forecast": 6.1,
          "lower_bound": 0.0,
          "upper_bound": 52.6
        },
        {
          "date": "2026-09-26",
          "step": 20,
          "forecast": 6.0,
          "lower_bound": 0.0,
          "upper_bound": 53.6
        },
        {
          "date": "2026-09-27",
          "step": 21,
          "forecast": 5.9,
          "lower_bound": 0.0,
          "upper_bound": 54.5
        },
        {
          "date": "2026-09-28",
          "step": 22,
          "forecast": 5.8,
          "lower_bound": 0.0,
          "upper_bound": 55.4
        },
        {
          "date": "2026-09-29",
          "step": 23,
          "forecast": 5.7,
          "lower_bound": 0.0,
          "upper_bound": 56.4
        },
        {
          "date": "2026-09-30",
          "step": 24,
          "forecast": 5.5,
          "lower_bound": 0.0,
          "upper_bound": 57.3
        },
        {
          "date": "2026-10-01",
          "step": 25,
          "forecast": 5.4,
          "lower_bound": 0.0,
          "upper_bound": 58.3
        },
        {
          "date": "2026-10-02",
          "step": 26,
          "forecast": 5.3,
          "lower_bound": 0.0,
          "upper_bound": 59.2
        },
        {
          "date": "2026-10-03",
          "step": 27,
          "forecast": 5.2,
          "lower_bound": 0.0,
          "upper_bound": 60.2
        },
        {
          "date": "2026-10-04",
          "step": 28,
          "forecast": 5.1,
          "lower_bound": 0.0,
          "upper_bound": 61.1
        },
        {
          "date": "2026-10-05",
          "step": 29,
          "forecast": 5.0,
          "lower_bound": 0.0,
          "upper_bound": 62.1
        },
        {
          "date": "2026-10-06",
          "step": 30,
          "forecast": 4.9,
          "lower_bound": 0.0,
          "upper_bound": 63.0
        }
      ]
    }
  },
  "features_used": [
    "lag_1",
    "lag_2",
    "lag_3",
    "lag_7",
    "rolling_3_mean",
    "rolling_7_mean",
    "rolling_7_std",
    "day_of_week",
    "day_of_month",
    "time_step",
    "growth_rate"
  ],
  "last_training_date": "2026-11-05 13:11:40"
};
