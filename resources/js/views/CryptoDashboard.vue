<script>
import simplebar from "simplebar-vue";

import ChartData from "./data-crypto";

export default {
  name: "CryptoDashboard",
  components: {
    simplebar,
  },
  data() {
    return {
      title: "Crypto",
      items: [
        {
          text: "Dashboards",
          href: "javascript:void(0)",
        },
        {
          text: "Crypto",
          active: true,
        },
      ],
      ChartData,
      walletData: [
        {
          title: "Wallet Balance",
          text: "Available Balance",
          amount: "$ 6134.39",
          subamount: "+ 0.0012.23 ( 0.2 % )",
          income: "$ 2632.46",
          expense: "$ 924.38",
          chartSeries: [76, 67, 61],
          balancelist: [
            {
              text: "Ethereum",
              coin: "4.5701 ETH",
              amount: "$ 1123.64",
            },
            {
              text: "Bitcoin",
              coin: "0.4412 BTC",
              amount: "$ 4025.32",
            },
            {
              text: "Litecoin",
              coin: "35.3811 LTC",
              amount: "$ 2263.09",
            },
          ],
        },
      ],
      chartOptions: {
        chart: {
          height: 300,
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 270,
            hollow: {
              margin: 5,
              size: "35%",
              background: "transparent",
              image: undefined,
            },
            track: {
              show: true,
              startAngle: undefined,
              endAngle: undefined,
              background: "#f2f2f2",
              strokeWidth: "97%",
              opacity: 1,
              margin: 12,
              dropShadow: {
                enabled: false,
                top: 0,
                left: 0,
                blur: 3,
                opacity: 0.5,
              },
            },
            dataLabels: {
              name: {
                show: true,
                fontSize: "16px",
                fontWeight: 600,
                offsetY: -10,
              },
              value: {
                show: true,
                fontSize: "14px",
                offsetY: 4,
                formatter: function (val) {
                  return val + "%";
                },
              },
              total: {
                show: true,
                label: "Total",
                color: "#373d3f",
                fontSize: "16px",
                fontFamily: undefined,
                fontWeight: 600,
                formatter: function (w) {
                  return (
                    w.globals.seriesTotals.reduce(function (a, b) {
                      return a + b;
                    }, 0) + "%"
                  );
                },
              },
            },
          },
        },
        stroke: {
          lineCap: "round",
        },
        colors: ["#3452e1", "#f1b44c", "#50a5f1"],
        labels: ["Ethereum", "Bitcoin", "Ethereum"],
        legend: {
          show: false,
        },
      },
      series: [
        {
          data: [
            [1327359600000, 30.95],
            [1327446000000, 31.34],
            [1327532400000, 31.18],
            [1327618800000, 31.05],
            [1327878000000, 31.0],
            [1327964400000, 30.95],
            [1328050800000, 31.24],
            [1328137200000, 31.29],
            [1328223600000, 31.85],
            [1328482800000, 31.86],
            [1328569200000, 32.28],
            [1328655600000, 32.1],
            [1328742000000, 32.65],
            [1328828400000, 32.21],
            [1329087600000, 32.35],
            [1329174000000, 32.44],
            [1329260400000, 32.46],
            [1329346800000, 32.86],
            [1329433200000, 32.75],
            [1329778800000, 32.54],
            [1329865200000, 32.33],
            [1329951600000, 32.97],
            [1330038000000, 33.41],
            [1330297200000, 33.27],
            [1330383600000, 33.27],
            [1330470000000, 32.89],
            [1330556400000, 33.1],
            [1330642800000, 33.73],
            [1330902000000, 33.22],
            [1330988400000, 31.99],
            [1331074800000, 32.41],
            [1331161200000, 33.05],
            [1331247600000, 33.64],
            [1331506800000, 33.56],
            [1331593200000, 34.22],
            [1331679600000, 33.77],
            [1331766000000, 34.17],
            [1331852400000, 33.82],
            [1332111600000, 34.51],
            [1332198000000, 33.16],
            [1332284400000, 33.56],
            [1332370800000, 33.71],
            [1332457200000, 33.81],
            [1332712800000, 34.4],
            [1332799200000, 34.63],
            [1332885600000, 34.46],
            [1332972000000, 34.48],
            [1333058400000, 34.31],
            [1333317600000, 34.7],
            [1333404000000, 34.31],
            [1333490400000, 33.46],
            [1333576800000, 33.59],
            [1333922400000, 33.22],
            [1334008800000, 32.61],
            [1334095200000, 33.01],
            [1334181600000, 33.55],
            [1334268000000, 33.18],
            [1334527200000, 32.84],
            [1334613600000, 33.84],
            [1334700000000, 33.39],
            [1334786400000, 32.91],
            [1334872800000, 33.06],
            [1335132000000, 32.62],
            [1335218400000, 32.4],
            [1335304800000, 33.13],
            [1335391200000, 33.26],
            [1335477600000, 33.58],
            [1335736800000, 33.55],
            [1335823200000, 33.77],
            [1335909600000, 33.76],
            [1335996000000, 33.32],
            [1336082400000, 32.61],
            [1336341600000, 32.52],
            [1336428000000, 32.67],
            [1336514400000, 32.52],
            [1336600800000, 31.92],
            [1336687200000, 32.2],
            [1336946400000, 32.23],
            [1337032800000, 32.33],
            [1337119200000, 32.36],
            [1337205600000, 32.01],
            [1337292000000, 31.31],
            [1337551200000, 32.01],
            [1337637600000, 32.01],
            [1337724000000, 32.18],
            [1337810400000, 31.54],
            [1337896800000, 31.6],
            [1338242400000, 32.05],
            [1338328800000, 31.29],
            [1338415200000, 31.05],
            [1338501600000, 29.82],
            [1338760800000, 30.31],
            [1338847200000, 30.7],
            [1338933600000, 31.69],
            [1339020000000, 31.32],
            [1339106400000, 31.65],
            [1339365600000, 31.13],
            [1339452000000, 31.77],
            [1339538400000, 31.79],
            [1339624800000, 31.67],
            [1339711200000, 32.39],
            [1339970400000, 32.63],
            [1340056800000, 32.89],
            [1340143200000, 31.99],
            [1340229600000, 31.23],
            [1340316000000, 31.57],
            [1340575200000, 30.84],
            [1340661600000, 31.07],
            [1340748000000, 31.41],
            [1340834400000, 31.17],
            [1340920800000, 32.37],
            [1341180000000, 32.19],
            [1341266400000, 32.51],
            [1341439200000, 32.53],
            [1341525600000, 31.37],
            [1341784800000, 30.43],
            [1341871200000, 30.44],
            [1341957600000, 30.2],
            [1342044000000, 30.14],
            [1342130400000, 30.65],
            [1342389600000, 30.4],
            [1342476000000, 30.65],
            [1342562400000, 31.43],
            [1342648800000, 31.89],
            [1342735200000, 31.38],
            [1342994400000, 30.64],
            [1343080800000, 30.02],
            [1343167200000, 30.33],
            [1343253600000, 30.95],
            [1343340000000, 31.89],
            [1343599200000, 31.01],
            [1343685600000, 30.88],
            [1343772000000, 30.69],
            [1343858400000, 30.58],
            [1343944800000, 32.02],
            [1344204000000, 32.14],
            [1344290400000, 32.37],
            [1344376800000, 32.51],
            [1344463200000, 32.65],
            [1344549600000, 32.64],
            [1344808800000, 32.27],
            [1344895200000, 32.1],
            [1344981600000, 32.91],
            [1345068000000, 33.65],
            [1345154400000, 33.8],
            [1345413600000, 33.92],
            [1345500000000, 33.75],
            [1345586400000, 33.84],
            [1345672800000, 33.5],
            [1345759200000, 32.26],
            [1346018400000, 32.32],
            [1346104800000, 32.06],
            [1346191200000, 31.96],
            [1346277600000, 31.46],
            [1346364000000, 31.27],
            [1346709600000, 31.43],
            [1346796000000, 32.26],
            [1346882400000, 32.79],
            [1346968800000, 32.46],
            [1347228000000, 32.13],
            [1347314400000, 32.43],
            [1347400800000, 32.42],
            [1347487200000, 32.81],
            [1347573600000, 33.34],
            [1347832800000, 33.41],
            [1347919200000, 32.57],
            [1348005600000, 33.12],
            [1348092000000, 34.53],
            [1348178400000, 33.83],
            [1348437600000, 33.41],
            [1348524000000, 32.9],
            [1348610400000, 32.53],
            [1348696800000, 32.8],
            [1348783200000, 32.44],
            [1349042400000, 32.62],
            [1349128800000, 32.57],
            [1349215200000, 32.6],
            [1349301600000, 32.68],
            [1349388000000, 32.47],
            [1349647200000, 32.23],
            [1349733600000, 31.68],
            [1349820000000, 31.51],
            [1349906400000, 31.78],
            [1349992800000, 31.94],
            [1350252000000, 32.33],
            [1350338400000, 33.24],
            [1350424800000, 33.44],
            [1350511200000, 33.48],
            [1350597600000, 33.24],
            [1350856800000, 33.49],
            [1350943200000, 33.31],
            [1351029600000, 33.36],
            [1351116000000, 33.4],
            [1351202400000, 34.01],
            [1351638000000, 34.02],
            [1351724400000, 34.36],
            [1351810800000, 34.39],
            [1352070000000, 34.24],
            [1352156400000, 34.39],
            [1352242800000, 33.47],
            [1352329200000, 32.98],
            [1352415600000, 32.9],
            [1352674800000, 32.7],
            [1352761200000, 32.54],
            [1352847600000, 32.23],
            [1352934000000, 32.64],
            [1353020400000, 32.65],
            [1353279600000, 32.92],
            [1353366000000, 32.64],
            [1353452400000, 32.84],
            [1353625200000, 33.4],
            [1353884400000, 33.3],
            [1353970800000, 33.18],
            [1354057200000, 33.88],
            [1354143600000, 34.09],
            [1354230000000, 34.61],
            [1354489200000, 34.7],
            [1354575600000, 35.3],
            [1354662000000, 35.4],
            [1354748400000, 35.14],
            [1354834800000, 35.48],
            [1355094000000, 35.75],
            [1355180400000, 35.54],
            [1355266800000, 35.96],
            [1355353200000, 35.53],
            [1355439600000, 37.56],
            [1355698800000, 37.42],
            [1355785200000, 37.49],
            [1355871600000, 38.09],
            [1355958000000, 37.87],
            [1356044400000, 37.71],
            [1356303600000, 37.53],
            [1356476400000, 37.55],
            [1356562800000, 37.3],
            [1356649200000, 36.9],
            [1356908400000, 37.68],
            [1357081200000, 38.34],
            [1357167600000, 37.75],
            [1357254000000, 38.13],
            [1357513200000, 37.94],
            [1357599600000, 38.14],
            [1357686000000, 38.66],
            [1357772400000, 38.62],
            [1357858800000, 38.09],
            [1358118000000, 38.16],
            [1358204400000, 38.15],
            [1358290800000, 37.88],
            [1358377200000, 37.73],
            [1358463600000, 37.98],
            [1358809200000, 37.95],
            [1358895600000, 38.25],
            [1358982000000, 38.1],
            [1359068400000, 38.32],
            [1359327600000, 38.24],
            [1359414000000, 38.52],
            [1359500400000, 37.94],
            [1359586800000, 37.83],
            [1359673200000, 38.34],
            [1359932400000, 38.1],
            [1360018800000, 38.51],
            [1360105200000, 38.4],
            [1360191600000, 38.07],
            [1360278000000, 39.12],
            [1360537200000, 38.64],
            [1360623600000, 38.89],
            [1360710000000, 38.81],
            [1360796400000, 38.61],
            [1360882800000, 38.63],
            [1361228400000, 38.99],
            [1361314800000, 38.77],
            [1361401200000, 38.34],
            [1361487600000, 38.55],
            [1361746800000, 38.11],
            [1361833200000, 38.59],
            [1361919600000, 39.6],
          ],
        },
      ],
      overviewchartOptions: {
        chart: {
          type: "area",
          height: 240,
          toolbar: "false",
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
      },
      selection: "one_year",
    };
  },
  methods: {
    onChange(event) {
      switch (event.target.value) {
        case "february":
          this.walletData = [
            {
              title: "Wallet Balance",
              text: "Available Balance",
              amount: "$ 2111.39",
              subamount: "+ 0.0014.23 ( 0.2 % )",
              income: "$ 2168.46",
              expense: "$ 927.38",
              chartSeries: [32, 22, 38],
              balancelist: [
                {
                  text: "Ethereum",
                  coin: "2.5701 ETH",
                  amount: "$ 1123.64",
                },
                {
                  text: "Bitcoin",
                  coin: "0.8552 BTC",
                  amount: "$ 4025.32",
                },
                {
                  text: "Litecoin",
                  coin: "35.7411 LTC",
                  amount: "$ 2263.09",
                },
              ],
            },
          ];
          break;

        case "january":
          this.walletData = [
            {
              title: "Wallet Balance",
              text: "Available Balance",
              amount: "$ 1211.39",
              subamount: "+ 0.0014.23 ( 0.2 % )",
              income: "$ 468.46",
              expense: "$ 127.38",
              chartSeries: [47, 68, 49],
              balancelist: [
                {
                  text: "Ethereum",
                  coin: "2.5701 ETH",
                  amount: "$ 723.64",
                },
                {
                  text: "Bitcoin",
                  coin: "0.8552 BTC",
                  amount: "$ 1225.32",
                },
                {
                  text: "Litecoin",
                  coin: "35.7411 LTC",
                  amount: "$ 4563.09",
                },
              ],
            },
          ];
          break;

        case "december":
          this.walletData = [
            {
              title: "Wallet Balance",
              text: "Available Balance",
              amount: "$ 1011.39",
              subamount: "+ 0.0014.23 ( 0.2 % )",
              income: "$ 668.46",
              expense: "$ 427.38",
              chartSeries: [36, 58, 78],
              balancelist: [
                {
                  text: "Ethereum",
                  coin: "2.5701 ETH",
                  amount: "$ 523.64",
                },
                {
                  text: "Bitcoin",
                  coin: "0.8552 BTC",
                  amount: "$ 1025.32",
                },
                {
                  text: "Litecoin",
                  coin: "14.7411 LTC",
                  amount: "$ 6563.09",
                },
              ],
            },
          ];
          break;

        case "march":
          this.walletData = [
            {
              title: "Wallet Balance",
              text: "Available Balance",
              amount: "$ 2111.39",
              subamount: "+ 0.0014.23 ( 0.2 % )",
              income: "$ 2168.46",
              expense: "$ 927.38",
              chartSeries: [38, 78, 48],
              balancelist: [
                {
                  text: "Ethereum",
                  coin: "2.5701 ETH",
                  amount: "$ 1123.64",
                },
                {
                  text: "Bitcoin",
                  coin: "0.8552 BTC",
                  amount: "$ 4025.32",
                },
                {
                  text: "Litecoin",
                  coin: "35.7411 LTC",
                  amount: "$ 2263.09",
                },
              ],
            },
          ];
          break;
        default:
          this.walletData = [
            {
              title: "Wallet Balance",
              text: "Available Balance",
              amount: "$ 1011.39",
              subamount: "+ 0.0014.23 ( 0.2 % )",
              income: "$ 668.46",
              expense: "$ 427.38",
              chartSeries: [25, 58, 47],
              balancelist: [
                {
                  text: "Ethereum",
                  coin: "2.5701 ETH",
                  amount: "$ 523.64",
                },
                {
                  text: "Bitcoin",
                  coin: "0.8552 BTC",
                  amount: "$ 1025.32",
                },
                {
                  text: "Litecoin",
                  coin: "14.7411 LTC",
                  amount: "$ 6563.09",
                },
              ],
            },
          ];
          break;
      }
    },
    updateData: function (timeline) {
      this.selection = timeline;
      switch (timeline) {
        case "one_month":
          this.$refs.chart.zoomX(
            new Date("28 Jan 2013").getTime(),
            new Date("27 Feb 2013").getTime()
          );
          break;
        case "six_months":
          this.$refs.chart.zoomX(
            new Date("27 Sep 2012").getTime(),
            new Date("27 Feb 2013").getTime()
          );
          break;
        case "one_year":
          this.$refs.chart.zoomX(
            new Date("27 Feb 2012").getTime(),
            new Date("27 Feb 2013").getTime()
          );
          break;
        case "all":
          this.$refs.chart.zoomX(
            new Date("23 Jan 2012").getTime(),
            new Date("27 Feb 2013").getTime()
          );
          break;
        default:
      }
    },
  },
};
</script>
<template>
    <div>
        <div class="row">
            <div class="col-xl-4">
                <div class="card">
                    <div class="card-body">
                        <b-dropdown
                            class="float-end ms-2"
                            variant="white"
                            right
                            toggle-class="text-muted p-0"
                            menu-class="dropdown-menu-end"
                            >
                            <template v-slot:button-content>
                                <i class="mdi mdi-dots-horizontal font-size-18"></i>
                            </template>
                            <b-dropdown-item>Action</b-dropdown-item>
                            <b-dropdown-item>Another action</b-dropdown-item>
                            <b-dropdown-item>Something else here</b-dropdown-item>
                        </b-dropdown>
                        <div>
                            <div class="mb-4 me-3">
                                <i
                                    class="mdi mdi-account-circle text-primary h1"
                                ></i>
                            </div>

                            <div>
                                <h5>Henry Wells</h5>
                                <p class="text-muted mb-1">
                                    henrywells@abc.com
                                </p>
                                <p class="text-muted mb-0">Id no: #SK0234</p>
                            </div>
                        </div>
                    </div>

                    <div class="card-body border-top">
                        <div class="row">
                            <div class="col-sm-6">
                                <div>
                                    <p class="fw-medium mb-2">Balance :</p>
                                    <h4>$ 6134.39</h4>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="mt-4 mt-sm-0">
                                    <p class="fw-medium mb-2">Coin :</p>
                                    <div
                                        class="d-inline-flex align-items-center mt-1"
                                    >
                                        <a
                                            href="javascript: void(0);"
                                            class="m-1"
                                            data-toggle="tooltip"
                                            data-placement="top"
                                            title="Bitcoin"
                                        >
                                            <div class="avatar-xs">
                                                <span
                                                    class="avatar-title rounded-circle bg-soft bg-warning text-warning font-size-18"
                                                >
                                                    <i
                                                        class="mdi mdi-bitcoin"
                                                    ></i>
                                                </span>
                                            </div>
                                        </a>
                                        <a
                                            href="javascript: void(0);"
                                            class="m-1"
                                            data-toggle="tooltip"
                                            data-placement="top"
                                            title="Ethereum"
                                        >
                                            <div class="avatar-xs">
                                                <span
                                                    class="avatar-title rounded-circle bg-soft bg-primary text-primary font-size-18"
                                                >
                                                    <i
                                                        class="mdi mdi-ethereum"
                                                    ></i>
                                                </span>
                                            </div>
                                        </a>
                                        <a
                                            href="javascript: void(0);"
                                            class="m-1"
                                            data-toggle="tooltip"
                                            data-placement="top"
                                            title="Litecoin"
                                        >
                                            <div class="avatar-xs">
                                                <span
                                                    class="avatar-title rounded-circle bg-soft bg-info text-info font-size-18"
                                                >
                                                    <i
                                                        class="mdi mdi-litecoin"
                                                    ></i>
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card-footer bg-transparent border-top">
                        <div class="text-center">
                            <a href="#" class="btn btn-outline-light me-2 w-md"
                                >Deposit</a
                            >
                            <a href="#" class="btn btn-primary me-2 w-md"
                                >Buy / Sell</a
                            >
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xl-8">
                <div class="card">
                    <div>
                        <div class="row">
                            <div class="col-lg-9 col-sm-8">
                                <div class="p-4">
                                    <h5 class="text-primary">Welcome Back !</h5>
                                    <p>Skote Crypto Dashboard</p>

                                    <div class="text-muted">
                                        <p class="mb-1">
                                            <i
                                                class="mdi mdi-circle-medium align-middle text-primary me-1"
                                            ></i>
                                            If several languages coalesce
                                        </p>
                                        <p class="mb-1">
                                            <i
                                                class="mdi mdi-circle-medium align-middle text-primary me-1"
                                            ></i>
                                            Sed ut perspiciatis unde
                                        </p>
                                        <p class="mb-0">
                                            <i
                                                class="mdi mdi-circle-medium align-middle text-primary me-1"
                                            ></i>
                                            It would be necessary
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-4 align-self-center">
                                <div>
                                    <img
                                        src="/images/crypto/features-img/img-1.png"
                                        alt=""
                                        class="img-fluid d-block"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-4">
                        <div class="card">
                            <div class="card-body">
                                <p class="text-muted mb-4">
                                    <i
                                        class="mdi mdi-bitcoin h2 text-warning align-middle mb-0 me-3"
                                    ></i>
                                    Bitcoin
                                </p>

                                <div class="row">
                                    <div class="col-6">
                                        <div>
                                            <h5>$ 9134.39</h5>
                                            <p
                                                class="text-muted text-truncate mb-0"
                                            >
                                                + 0.0012 ( 0.2 % )
                                                <i
                                                    class="mdi mdi-arrow-up ml-1 text-success"
                                                ></i>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div>
                                            <apexchart
                                                class="apex-charts"
                                                :height="50"
                                                :options="
                                                    ChartData.SparklineChart1
                                                        .chartOptions
                                                "
                                                :series="
                                                    ChartData.SparklineChart1
                                                        .series
                                                "
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card">
                            <div class="card-body">
                                <p class="text-muted mb-4">
                                    <i
                                        class="mdi mdi-ethereum h2 text-primary align-middle mb-0 me-3"
                                    ></i>
                                    Ethereum
                                </p>

                                <div class="row">
                                    <div class="col-6">
                                        <div>
                                            <h5>$ 245.44</h5>
                                            <p
                                                class="text-muted text-truncate mb-0"
                                            >
                                                - 4.102 ( 0.1 % )
                                                <i
                                                    class="mdi mdi-arrow-down ml-1 text-danger"
                                                ></i>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div>
                                            <apexchart
                                                class="apex-charts"
                                                :height="50"
                                                :options="
                                                    ChartData.SparklineChart2
                                                        .chartOptions
                                                "
                                                :series="
                                                    ChartData.SparklineChart2
                                                        .series
                                                "
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card">
                            <div class="card-body">
                                <p class="text-muted mb-4">
                                    <i
                                        class="mdi mdi-litecoin h2 text-info align-middle mb-0 me-3"
                                    ></i>
                                    litecoin
                                </p>

                                <div class="row">
                                    <div class="col-6">
                                        <div>
                                            <h5>$ 63.61</h5>
                                            <p
                                                class="text-muted text-truncate mb-0"
                                            >
                                                + 1.792 ( 0.1 % )
                                                <i
                                                    class="mdi mdi-arrow-up ml-1 text-success"
                                                ></i>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div>
                                            <apexchart
                                                class="apex-charts"
                                                :height="50"
                                                :options="
                                                    ChartData.SparklineChart3
                                                        .chartOptions
                                                "
                                                :series="
                                                    ChartData.SparklineChart3
                                                        .series
                                                "
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end row -->

        <div class="row">
            <div class="col-xl-8">
                <div
                    class="card"
                    v-for="(data, index) of walletData"
                    :key="index"
                >
                    <div class="card-body">
                        <div class="float-end">
                            <select
                                class="form-select form-select-sm ms-2"
                                @change="onChange($event)"
                            >
                                <option value="march" selected>March</option>
                                <option value="february">February</option>
                                <option value="january">January</option>
                                <option value="december">December</option>
                            </select>
                        </div>
                        <h4 class="card-title mb-3">{{ data.title }}</h4>

                        <div class="row">
                            <div class="col-lg-4">
                                <div class="mt-4">
                                    <p>{{ data.text }}</p>
                                    <h4>{{ data.amount }}</h4>

                                    <p class="text-muted mb-4">
                                        {{ data.subamount }}
                                        <i
                                            class="mdi mdi-arrow-up ms-1 text-success"
                                        ></i>
                                    </p>

                                    <div class="row">
                                        <div class="col-6">
                                            <div>
                                                <p class="mb-2">Income</p>
                                                <h5>{{ data.income }}</h5>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div>
                                                <p class="mb-2">Expense</p>
                                                <h5>{{ data.expense }}</h5>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="mt-4">
                                        <a
                                            href="#"
                                            class="btn btn-primary btn-sm"
                                            >View more
                                            <i
                                                class="mdi mdi-arrow-right ms-1"
                                            ></i
                                        ></a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-sm-6">
                                <div>
                                    <apexchart
                                        class="apex-charts"
                                        dir="ltr"
                                        type="radialBar"
                                        height="300"
                                        :series="data.chartSeries"
                                        :options="chartOptions"
                                    ></apexchart>
                                </div>
                            </div>

                            <div class="col-lg-4 col-sm-6 align-self-center">
                                <div
                                    v-for="(data, i) of data.balancelist"
                                    :key="i"
                                    class="mt-4 pt-2"
                                >
                                    <p class="mb-2">
                                        <i
                                            class="
                    mdi mdi-circle
                    align-middle
                    font-size-10
                    me-2
                    text-primary
                  "
                                        ></i>
                                        {{ data.text }}
                                    </p>
                                    <h5>
                                        {{ data.coin }} =
                                        <span class="text-muted font-size-14">{{
                                            data.amount
                                        }}</span>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xl-4">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title mb-3">Overview</h4>

                        <div>
                            <div
                                id="overview-chart"
                                class="apex-charts"
                                dir="ltr"
                            >
                                <div class="toolbar button-items text-center">
                                    <button
                                        id="one_month"
                                        class="btn btn-light btn-sm"
                                        @click="updateData('one_month')"
                                        :class="{
                                            active: selection === 'one_month'
                                        }"
                                    >
                                        1M
                                    </button>

                                    <button
                                        id="six_months"
                                        class="btn btn-light btn-sm"
                                        @click="updateData('six_months')"
                                        :class="{
                                            active: selection === 'six_months'
                                        }"
                                    >
                                        6M
                                    </button>

                                    <button
                                        id="one_year"
                                        class="btn btn-light btn-sm"
                                        @click="updateData('one_year')"
                                        :class="{
                                            active: selection === 'one_year'
                                        }"
                                    >
                                        1Y
                                    </button>

                                    <button
                                        id="all"
                                        class="btn btn-light btn-sm"
                                        @click="updateData('all')"
                                        :class="{ active: selection === 'all' }"
                                    >
                                        ALL
                                    </button>
                                </div>
                                <apexchart
                                    ref="chart"
                                    type="area"
                                    :height="240"
                                    class="apex-charts"
                                    :options="overviewchartOptions"
                                    :series="series"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end row -->

        <div class="row">
            <div class="col-xl-4">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title mb-4">Transactions</h4>

                        <b-tabs
                            pills
                            nav-class="bg-light rounded"
                            content-class="mt-4"
                        >
                            <b-tab title="All" active>
                                <b-card-text>
                                    <simplebar style="max-height: 330px">
                                        <table
                                            class="table table-centered table-nowrap align-middle"
                                        >
                                            <tbody>
                                                <tr
                                                    v-for="data of ChartData.transactionsData"
                                                    :key="data.icon"
                                                >
                                                    <td style="width: 50px">
                                                        <div
                                                            :class="
                                                                `font-size-22 text-${data.color}`
                                                            "
                                                        >
                                                            <i
                                                                :class="{
                                                                    'bx bx-down-arrow-circle':
                                                                        `${data.color}` ===
                                                                        'primary',
                                                                    'bx bx-up-arrow-circle':
                                                                        `${data.color}` ===
                                                                        'danger'
                                                                }"
                                                            ></i>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <h5
                                                                class="font-size-14 mb-1"
                                                            >
                                                                {{ data.name }}
                                                            </h5>
                                                            <p
                                                                class="text-muted mb-0"
                                                            >
                                                                {{ data.date }}
                                                            </p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="text-end">
                                                            <h5
                                                                class="font-size-14 mb-0"
                                                            >
                                                                {{ data.text }}
                                                            </h5>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="text-end">
                                                            <h5
                                                                class="font-size-14 text-muted mb-0"
                                                            >
                                                                {{ data.price }}
                                                            </h5>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </simplebar>
                                </b-card-text>
                            </b-tab>
                            <b-tab title="Buy">
                                <b-card-text>
                                    <simplebar style="max-height: 330px">
                                        <table
                                            class="table table-centered table-nowrap align-middle"
                                        >
                                            <tbody>
                                                <tr
                                                    v-for="data of ChartData.transactionsData"
                                                    :key="data.id"
                                                >
                                                    <td style="width: 50px">
                                                        <div
                                                            :class="
                                                                `font-size-22 text-${data.color}`
                                                            "
                                                        >
                                                            <i
                                                                :class="{
                                                                    'bx bx-down-arrow-circle':
                                                                        `${data.color}` ===
                                                                        'primary',
                                                                    'bx bx-up-arrow-circle':
                                                                        `${data.color}` ===
                                                                        'danger'
                                                                }"
                                                            ></i>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <h5
                                                                class="font-size-14 mb-1"
                                                            >
                                                                {{ data.name }}
                                                            </h5>
                                                            <p
                                                                class="text-muted mb-0"
                                                            >
                                                                {{ data.date }}
                                                            </p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="text-end">
                                                            <h5
                                                                class="font-size-14 mb-0"
                                                            >
                                                                {{ data.text }}
                                                            </h5>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="text-end">
                                                            <h5
                                                                class="font-size-14 text-muted mb-0"
                                                            >
                                                                {{ data.price }}
                                                            </h5>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </simplebar>
                                </b-card-text>
                            </b-tab>
                            <b-tab title="Sell">
                                <b-card-text>
                                    <simplebar style="max-height: 330px">
                                        <table
                                            class="table table-centered table-nowrap align-middle"
                                        >
                                            <tbody>
                                                <tr
                                                    v-for="data of ChartData.transactionsData"
                                                    :key="data.id"
                                                >
                                                    <td style="width: 50px">
                                                        <div
                                                            :class="
                                                                `font-size-22 text-${data.color}`
                                                            "
                                                        >
                                                            <i
                                                                :class="{
                                                                    'bx bx-down-arrow-circle':
                                                                        `${data.color}` ===
                                                                        'primary',
                                                                    'bx bx-up-arrow-circle':
                                                                        `${data.color}` ===
                                                                        'danger'
                                                                }"
                                                            ></i>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <h5
                                                                class="font-size-14 mb-1"
                                                            >
                                                                {{ data.name }}
                                                            </h5>
                                                            <p
                                                                class="text-muted mb-0"
                                                            >
                                                                {{ data.date }}
                                                            </p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="text-end">
                                                            <h5
                                                                class="font-size-14 mb-0"
                                                            >
                                                                {{ data.text }}
                                                            </h5>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="text-end">
                                                            <h5
                                                                class="font-size-14 text-muted mb-0"
                                                            >
                                                                {{ data.price }}
                                                            </h5>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </simplebar>
                                </b-card-text>
                            </b-tab>
                        </b-tabs>
                    </div>
                </div>
            </div>

            <div class="col-xl-4">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title mb-4">Notifications</h4>

                        <ul
                            class="list-group"
                            data-simplebar
                            style="max-height: 390px"
                        >
                            <li class="list-group-item">
                                <div class="media">
                                    <div class="avatar-xs me-3">
                                        <span
                                            class="avatar-title rounded-circle bg-light"
                                        >
                                            <img
                                                src="/images/companies/img-1.png"
                                                alt=""
                                                height="18"
                                            />
                                        </span>
                                    </div>
                                    <div class="media-body">
                                        <h5 class="font-size-14">
                                            Donec vitae sapien ut
                                        </h5>
                                        <p class="text-muted">
                                            If several languages coalesce, the
                                            grammar of the resulting language
                                        </p>

                                        <div class="float-end">
                                            <p class="text-muted mb-0">
                                                <i
                                                    class="mdi mdi-account me-1"
                                                ></i>
                                                Joseph
                                            </p>
                                        </div>
                                        <p class="text-muted mb-0">
                                            12 Mar, 2020
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="media">
                                    <div class="avatar-xs me-3">
                                        <span
                                            class="avatar-title rounded-circle bg-light"
                                        >
                                            <img
                                                src="/images/companies/img-2.png"
                                                alt=""
                                                height="18"
                                            />
                                        </span>
                                    </div>
                                    <div class="media-body">
                                        <h5 class="font-size-14">
                                            Cras ultricies mi eu turpis
                                        </h5>
                                        <p class="text-muted">
                                            To an English person, it will seem
                                            like simplified English, as a
                                            skeptical cambridge
                                        </p>

                                        <div class="float-end">
                                            <p class="text-muted mb-0">
                                                <i
                                                    class="mdi mdi-account me-1"
                                                ></i>
                                                Jerry
                                            </p>
                                        </div>
                                        <p class="text-muted mb-0">
                                            13 Mar, 2020
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="media">
                                    <div class="avatar-xs me-3">
                                        <span
                                            class="avatar-title rounded-circle bg-light"
                                        >
                                            <img
                                                src="/images/companies/img-3.png"
                                                alt=""
                                                height="18"
                                            />
                                        </span>
                                    </div>
                                    <div class="media-body">
                                        <h5 class="font-size-14">
                                            Duis arcu tortor suscipit
                                        </h5>
                                        <p class="text-muted">
                                            It va esser tam simplic quam
                                            occidental in fact, it va esser
                                            occidental.
                                        </p>

                                        <div class="float-end">
                                            <p class="text-muted mb-0">
                                                <i
                                                    class="mdi mdi-account me-1"
                                                ></i>
                                                Calvin
                                            </p>
                                        </div>
                                        <p class="text-muted mb-0">
                                            14 Mar, 2020
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="media">
                                    <div class="avatar-xs me-3">
                                        <span
                                            class="avatar-title rounded-circle bg-light"
                                        >
                                            <img
                                                src="/images/companies/img-1.png"
                                                alt=""
                                                height="18"
                                            />
                                        </span>
                                    </div>
                                    <div class="media-body">
                                        <h5 class="font-size-14">
                                            Donec vitae sapien ut
                                        </h5>
                                        <p class="text-muted">
                                            If several languages coalesce, the
                                            grammar of the resulting language
                                        </p>

                                        <div class="float-end">
                                            <p class="text-muted mb-0">
                                                <i
                                                    class="mdi mdi-account me-1"
                                                ></i>
                                                Joseph
                                            </p>
                                        </div>
                                        <p class="text-muted mb-0">
                                            12 Mar, 2020
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="col-xl-4">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title mb-4">Buy / Sell</h4>

                        <b-tabs
                            pills
                            nav-class="bg-light rounded"
                            content-class="mt-4"
                        >
                            <b-tab title="Buy" active>
                                <b-card-text>
                                    <div class="float-end ms-2">
                                        <h5 class="font-size-14">
                                            <i
                                                class="bx bx-wallet text-primary font-size-16 align-middle me-1"
                                            ></i>
                                            $4235.23
                                        </h5>
                                    </div>
                                    <h5 class="font-size-14 mb-4">Buy Coin</h5>

                                    <div>
                                        <div class="form-group mb-3">
                                            <label>Payment method :</label>
                                            <select class="form-select">
                                                <option
                                                    >Credit / Debit Card</option
                                                >
                                                <option>Paypal</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label>Add Amount :</label>
                                            <div class="input-group mb-3">
                                                <label class="input-group-text"
                                                    >Amount</label
                                                >
                                                <select
                                                    class="form-select"
                                                    style="max-width: 90px"
                                                >
                                                    <option value="BT" selected
                                                        >BTC</option
                                                    >
                                                    <option value="ET"
                                                        >ETH</option
                                                    >
                                                    <option value="LT"
                                                        >LTC</option
                                                    >
                                                </select>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                />
                                            </div>

                                            <div class="input-group mb-3">
                                                <div
                                                    class="input-group-prepend"
                                                >
                                                    <label
                                                        class="input-group-text"
                                                        >Price</label
                                                    >
                                                </div>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                />
                                                <div class="input-group-append">
                                                    <label
                                                        class="input-group-text"
                                                        >$</label
                                                    >
                                                </div>
                                            </div>

                                            <div class="input-group mb-3">
                                                <div
                                                    class="input-group-prepend"
                                                >
                                                    <label
                                                        class="input-group-text"
                                                        >Total</label
                                                    >
                                                </div>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                />
                                            </div>
                                        </div>

                                        <div class="text-center">
                                            <button
                                                type="button"
                                                class="btn btn-success w-md"
                                            >
                                                Buy Coin
                                            </button>
                                        </div>
                                    </div>
                                </b-card-text>
                            </b-tab>
                            <b-tab title="Sell">
                                <b-card-text>
                                    <div class="float-end ms-2">
                                        <h5 class="font-size-14">
                                            <i
                                                class="bx bx-wallet text-primary font-size-16 align-middle me-1"
                                            ></i>
                                            $4235.23
                                        </h5>
                                    </div>
                                    <h5 class="font-size-14 mb-4">Sell Coin</h5>

                                    <div>
                                        <div class="form-group mb-3">
                                            <label>Email :</label>
                                            <input
                                                type="email"
                                                class="form-control"
                                            />
                                        </div>
                                        <div>
                                            <label>Add Amount :</label>
                                            <div class="input-group mb-3">
                                                <label class="input-group-text"
                                                    >Amount</label
                                                >

                                                <select
                                                    class="form-select"
                                                    style="max-width: 90px"
                                                >
                                                    <option value="BT" selected
                                                        >BTC</option
                                                    >
                                                    <option value="ET"
                                                        >ETH</option
                                                    >
                                                    <option value="LT"
                                                        >LTC</option
                                                    >
                                                </select>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                />
                                            </div>

                                            <div class="input-group mb-3">
                                                <div
                                                    class="input-group-prepend"
                                                >
                                                    <label
                                                        class="input-group-text"
                                                        >Price</label
                                                    >
                                                </div>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                />
                                                <div class="input-group-append">
                                                    <label
                                                        class="input-group-text"
                                                        >$</label
                                                    >
                                                </div>
                                            </div>

                                            <div class="input-group mb-3">
                                                <div
                                                    class="input-group-prepend"
                                                >
                                                    <label
                                                        class="input-group-text"
                                                        >Total</label
                                                    >
                                                </div>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                />
                                            </div>
                                        </div>

                                        <div class="text-center">
                                            <button
                                                type="button"
                                                class="btn btn-danger w-md"
                                            >
                                                Sell Coin
                                            </button>
                                        </div>
                                    </div>
                                </b-card-text>
                            </b-tab>
                        </b-tabs>
                    </div>
                </div>
            </div>
        </div>
        <!-- end row -->
    </div>
</template>
