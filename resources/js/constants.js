export const APEXCHART_OPTIONS = {
  chart: {
    type: "",
    height: 0,
    toolbar: "false",

    defaultLocale: "de",
    locales: [
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
    ],
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
    min: new Date("01 Mar 2012").getTime(),
    tickAmount: 6,
  },
  tooltip: {
    x: {
      format: "dd MMM yyyy",
    },
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