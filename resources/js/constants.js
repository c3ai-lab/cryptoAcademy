import { AcademyCategory, AcademyTopic, Dimension } from "./enums";

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
  [Dimension.ONE_HOUR]: {
    interval: "1m",
    limit: 60,
  },
  [Dimension.ONE_DAY]: {
    interval: "30m",
    limit: 48,
  },
  [Dimension.ONE_WEEK]: {
    interval: "4h",
    limit: 42,
  },
  [Dimension.ONE_MONTH]: {
    interval: "12h",
    limit: 62,
  },
  [Dimension.ONE_YEAR]: {
    interval: "1w",
    limit: 52,
  },
  [Dimension.ALL]: {
    interval: "1w",
    limit: 100,
  },
};

export const DIMENSION_MAP_LOW_RES = {
  [Dimension.ONE_DAY]: {
    interval: "1h",
    limit: 24,
  },
};

export const DIMENSION_TIMEFRAME_MTS_MAP = {
  [Dimension.ONE_DAY]: 1_800_000,
  [Dimension.ONE_WEEK]: 604_800_000,
  [Dimension.ONE_MONTH]: 14_400_000,
  [Dimension.ONE_YEAR]: 201_600_000,
  [Dimension.ALL]: 201_600_000,
};

/**
 * ACADEMY = {
 *    "KATEGORIE": {
 *      "TOPIC": [
 *        "SUB_TOPIC1",
 *        "SUB_TOPIC1",
 *      ]
 *    }
 * }
 *
 * WICHTIG! Wenn man auf der linken Seite eines Doppelpunktes einen Wert
 * von "AcademyCategory" oder "AcademyTopic" verwenden möchte, muss man
 * diesen in eckige Klammern setzen!
 *
 * ACADEMY = {
 *    [AcademyCategory.KATEGORIE]: {
 *      [AcademyTopic.TOPIC]": [
 *        AcademyTopic.TOPIC__SUB_TOPIC1,
 *        AcademyTopic.TOPIC__SUB_TOPIC2,
 *      ]
 *    }
 * }
 */

export const ACADEMY = {
  [AcademyCategory.CRYPTO]: {
    [AcademyTopic.CRYPTO__INTRO]: [
      AcademyTopic.CRYPTO__INTRO__WALLETS,
      AcademyTopic.CRYPTO__INTRO__SMART_CONTRACTS,
    ],
    [AcademyTopic.CRYPTO__BLOCKCHAIN]: [
      AcademyTopic.CRYPTO__BLOCKCHAIN__TRANSACTIONS,
      AcademyTopic.CRYPTO__BLOCKCHAIN__FEES,
    ],
    [AcademyTopic.CRYPTO__ADVANCED]: [
      AcademyTopic.CRYPTO__ADVANCED__TRANSACTIONS,
      AcademyTopic.CRYPTO__ADVANCED__MERKLETREE,
      AcademyTopic.CRYPTO__ADVANCED__CONSENSUS,
      AcademyTopic.CRYPTO__ADVANCED__PROOF_OF_WORK,
      AcademyTopic.CRYPTO__ADVANCED__PROOF_OF_STAKE,
    ],
  },
  [AcademyCategory.TRADING]: {
    [AcademyTopic.TRADING__MARKET_ORDER]: [],
    [AcademyTopic.TRADING__LIMIT_ORDER]: [],
    [AcademyTopic.TRADING__PRICE]: [],
    [AcademyTopic.TRADING__AMM]: [],
    [AcademyTopic.TRADING__SLIPPAGE]: [],
    [AcademyTopic.TRADING__TAXES]: [],
  },
  [AcademyCategory.TOP_FIVE_COINS]: {
    [AcademyTopic.TOP_FIVE_COINS__BTC]: [],
    [AcademyTopic.TOP_FIVE_COINS__ETH]: [],
    [AcademyTopic.TOP_FIVE_COINS__BNB]: [],
    [AcademyTopic.TOP_FIVE_COINS__USDT]: [],
    [AcademyTopic.TOP_FIVE_COINS__SOL]: [],
  },
  [AcademyCategory.FIFTY_COINS__LIST]: {},
  [AcademyCategory.GLOSSAR__LIST]: {},
};
