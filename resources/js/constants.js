import { Dimension } from "./enums";
export const SESSION_REFRESH_AFTER_MINUTES = 15;

const APEXCHART_LOCALES = [
  {
    name: "de",
    options: {
      months: [
        "Januar",
        "Februar",
        "März",
        "April",
        "Mai",
        "Juni",
        "Juli",
        "August",
        "September",
        "Oktober",
        "November",
        "Dezember",
      ],
      shortMonths: [
        "Jan",
        "Feb",
        "Mär",
        "Apr",
        "Mai",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Okt",
        "Nov",
        "Dez",
      ],
      days: [
        "Sonntag",
        "Montag",
        "Dienstag",
        "Mittwoch",
        "Donnerstag",
        "Freitag",
        "Samstag",
      ],
      shortDays: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
      toolbar: {
        exportToSVG: "SVG speichern",
        exportToPNG: "PNG speichern",
        exportToCSV: "CSV speichern",
        menu: "Menü",
        selection: "Auswahl",
        selectionZoom: "Auswahl vergrößern",
        zoomIn: "Vergrößern",
        zoomOut: "Verkleinern",
        pan: "Verschieben",
        reset: "Zoom zurücksetzen",
      },
    },
  },
];

const BASIC_APEXCHART_OPTIONS = {
  chart: {
    toolbar: false,

    defaultLocale: "de",
    locales: APEXCHART_LOCALES,
  },
  animations: {
    enabled: true,
    easing: "linear",
    dynamicAnimation: {
      speed: 1000,
    },
  },
};

export const COIN_CARD_APEXCHART_OPTIONS = {
  ...BASIC_APEXCHART_OPTIONS,
  chart: {
    type: "area",
    sparkline: {
      enabled: true,
    },
  },
  stroke: {
    curve: "smooth",
    width: 0,
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 0,
      opacityFrom: 0.9,
      opacityTo: 0.6,
      stops: [0, 100],
    },
  },
  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    marker: {
      show: false,
    },
  },
};

export const APEXCHART_OPTIONS = {
  ...BASIC_APEXCHART_OPTIONS,

  chart: {
    type: "",
    height: 250,
    toolbar: "false",

    toolbar: false,

    defaultLocale: "de",
    locales: APEXCHART_LOCALES,
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  colors: ["#f1b44c"],

  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 0,
    style: "hollow",
  },
  xaxis: {
    type: "datetime",
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 100],
    },
  },
};

export const DIMENSION_MAP = {
  [Dimension.ONE_DAY]: {
    'interval': '30m',
    'limit': 48,
  },
  [Dimension.ONE_WEEK]: {
    'interval': '4h',
    'limit': 42,
  },
  [Dimension.ONE_MONTH]: {
    'interval': '12h',
    'limit': 62,
  },
  [Dimension.ONE_YEAR]: {
    'interval': '1w',
    'limit': 52,
  },
  [Dimension.ALL]: {
    'interval': '1w',
  },
}

export const DIMENSION_MAP_LOW_RES = {
  [Dimension.ONE_DAY]: {
    'interval': '1h',
    'limit': 24,
  },
}

export const DIMENSION_TIMEFRAME_MTS_MAP = {
  [Dimension.ONE_DAY]: 1_800_000,
  [Dimension.ONE_WEEK]: 604_800_000,
  [Dimension.ONE_MONTH]: 14_400_000,
  [Dimension.ONE_YEAR]: 201_600_000,
  [Dimension.ALL]: 201_600_000,
}
