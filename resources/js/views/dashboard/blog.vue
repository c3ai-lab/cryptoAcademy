<script>
import simplebar from "simplebar-vue";

import Layout from "../../layouts/main";
import PageHeader from "../../components/page-header";

export default {
  components: {
    Layout,
    PageHeader,
    simplebar,
  },
  data() {
    return {
      title: "Blog",
      items: [
        {
          text: "Dashboards",
          href: "javascript:void(0)",
        },
        {
          text: "Blog",
          active: true,
        },
      ],
      chartData: {
        series: [
          {
            name: "Current",
            data: [18, 21, 45, 36, 65, 47, 51, 32, 40, 28, 31, 26],
          },
          {
            name: "Previous",
            data: [30, 11, 22, 18, 32, 23, 58, 45, 30, 36, 15, 34],
          },
        ],
        chartoptions: {
          chart: {
            height: 350,
            type: "area",
            toolbar: {
              show: false,
            },
          },
          colors: ["#556ee6", "#f1b44c"],
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
            width: 2,
          },
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              inverseColors: false,
              opacityFrom: 0.45,
              opacityTo: 0.05,
              stops: [20, 100, 100, 100],
            },
          },
          xaxis: {
            categories: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
          },
          markers: {
            size: 3,
            strokeWidth: 3,

            hover: {
              size: 4,
              sizeOffset: 2,
            },
          },
          legend: {
            position: "top",
            horizontalAlign: "right",
          },
        },
      },
      postData: [
        {
          image: "/images/small/img-2.jpg",
          title: "Beautiful Day with Friends",
          date: "10 Nov, 2020",
        },
        {
          image: "/images/small/img-6.jpg",
          title: "Drawing a sketch",
          date: "02 Nov, 2020",
        },
        {
          image: "/images/small/img-2.jpg",
          title: "Project discussion with team",
          date: "24 Oct, 2020",
        },
        {
          image: "/images/small/img-1.jpg",
          title: "Riding bike on road",
          date: "20 Oct, 2020",
        },
      ],
      selection: "all",
    };
  },
  methods: {
    updateData: function(timeline) {
 this.selection = timeline;
      switch (timeline) {
        case "one_month":
          this.chartData.series = [
            {
              name: "Current",
              data: [12, 22, 38, 42, 32, 40, 51, 36, 51, 29, 38, 36],
            },
            {
              name: "Previous",
              data: [22, 31, 36, 26, 47, 56, 42, 64, 61, 52, 42, 31],
            },
          ];
          break;
        case "six_months":
          this.chartData.series = [
            {
              name: "Current",
              data: [31, 40, 28, 51, 42, 40, 51, 36, 40, 39, 31, 36],
            },
            {
              name: "Previous",
              data: [11, 32, 45, 32, 34, 22, 51, 60, 51, 52, 40, 31],
            },
          ];
          break;
        case "one_year":
          this.chartData.series = [
            {
              name: "Current",
              data: [28, 22, 38, 42, 32, 40, 51, 36, 51, 29, 38, 36],
            },
            {
              name: "Previous",
              data: [22, 31, 36, 26, 47, 56, 42, 64, 61, 52, 42, 31],
            },
          ];
          break;
        case "all":
          this.chartData.series = [
            {
              name: "Current",
              data: [18, 21, 45, 36, 65, 47, 51, 32, 40, 28, 31, 26],
            },
            {
              name: "Previous",
              data: [30, 11, 22, 18, 32, 23, 58, 45, 30, 36, 15, 34],
            },
          ];
          break;
        default:
      }
    }
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div>
      <div class="row">
        <div class="col-xl-8">
          <div class="row">
            <div class="col-lg-4">
              <div class="card mini-stats-wid">
                <div class="card-body">
                  <div class="d-flex flex-wrap">
                    <div class="me-3">
                      <p class="text-muted mb-2">Total Post</p>
                      <h5 class="mb-0">120</h5>
                    </div>

                    <div class="avatar-sm ms-auto">
                      <div
                        class="avatar-title bg-light rounded-circle text-primary font-size-20"
                      >
                        <i class="bx bxs-book-bookmark"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="card blog-stats-wid">
                <div class="card-body">
                  <div class="d-flex flex-wrap">
                    <div class="me-3">
                      <p class="text-muted mb-2">Pages</p>
                      <h5 class="mb-0">86</h5>
                    </div>

                    <div class="avatar-sm ms-auto">
                      <div
                        class="avatar-title bg-light rounded-circle text-primary font-size-20"
                      >
                        <i class="bx bxs-note"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card blog-stats-wid">
                <div class="card-body">
                  <div class="d-flex flex-wrap">
                    <div class="me-3">
                      <p class="text-muted mb-2">Comments</p>
                      <h5 class="mb-0">4,235</h5>
                    </div>

                    <div class="avatar-sm ms-auto">
                      <div
                        class="avatar-title bg-light rounded-circle text-primary font-size-20"
                      >
                        <i class="bx bxs-message-square-dots"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end row -->

          <div class="card">
            <div class="card-body">
              <div class="d-flex flex-wrap">
                <h5 class="card-title me-2">Visitors</h5>
                <div class="ms-auto">
                  <div class="toolbar button-items text-end">
                    <button
            type="button"
            class="btn btn-light btn-sm"
            @click="updateData('all')"
            :class="{ active: selection === 'all' }"
          >
            ALL
          </button>
          <button
            type="button"
            class="btn btn-light btn-sm"
            @click="updateData('one_month')"
            :class="{ active: selection === 'one_month' }"
          >
            1M
          </button>
          <button
            type="button"
            class="btn btn-light btn-sm"
            @click="updateData('six_months')"
            :class="{ active: selection === 'six_months' }"
          >
            6M
          </button>
          <button
            type="button"
            class="btn btn-light btn-sm active"
            @click="updateData('one_year')"
            :class="{ active: selection === 'one_year' }"
          >
            1Y
          </button>
                  </div>
                </div>
              </div>

              <div class="row text-center">
                <div class="col-lg-4">
                  <div class="mt-4">
                    <p class="text-muted mb-1">Today</p>
                    <h5>1024</h5>
                  </div>
                </div>

                <div class="col-lg-4">
                  <div class="mt-4">
                    <p class="text-muted mb-1">This Month</p>
                    <h5>
                      12356
                      <span class="text-success font-size-13"
                        >0.2 % <i class="mdi mdi-arrow-up ms-1"></i
                      ></span>
                    </h5>
                  </div>
                </div>

                <div class="col-lg-4">
                  <div class="mt-4">
                    <p class="text-muted mb-1">This Year</p>
                    <h5>
                      102354
                      <span class="text-success font-size-13"
                        >0.1 % <i class="mdi mdi-arrow-up ms-1"></i
                      ></span>
                    </h5>
                  </div>
                </div>
              </div>

              <hr class="mb-4" />

              <apexchart
                class="apex-charts"
                dir="ltr"
                height="350"
                :series="chartData.series"
                :options="chartData.chartoptions"
              ></apexchart>
            </div>
          </div>
        </div>
        <!-- end col -->

        <div class="col-xl-4">
          <div class="card">
            <div class="card-body">
              <div class="media">
                <div class="me-3">
                  <img
                    src="/images/users/avatar-1.jpg"
                    alt=""
                    class="avatar-sm rounded-circle img-thumbnail"
                  />
                </div>
                <div class="media-body">
                  <div class="media">
                    <div class="media-body">
                      <div class="text-muted">
                        <h5 class="mb-1">Henry wells</h5>
                        <p class="mb-0">UI / UX Designer</p>
                      </div>
                    </div>

                    <b-dropdown
                      toggle-class="btn-sm"
                      variant="light"
                      menu-class="dropdown-menu-end"
                      right
                      class="ms-2"
                    >
                      <template #button-content>
                        <i class="bx bxs-cog align-middle me-1"></i> Setting
                      </template>
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <a class="dropdown-item" href="#">Something else</a>
                    </b-dropdown>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-4">
                      <div>
                        <p class="text-muted text-truncate mb-2">Total Post</p>
                        <h5 class="mb-0">32</h5>
                      </div>
                    </div>
                    <div class="col-4">
                      <div>
                        <p class="text-muted text-truncate mb-2">Subscribes</p>
                        <h5 class="mb-0">10k</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <div class="d-flex flex-wrap">
                <h5 class="card-title mb-3 me-2">Subscribes</h5>
                <b-dropdown
                  toggle-class="text-muted font-size-16 p-0"
                  menu-class="dropdown-menu-end"
                  variant="white"
                  right
                  class="ms-auto"
                >
                  <template #button-content>
                    <i class="mdi mdi-dots-horizontal"></i>
                  </template>
                  <b-dropdown-item href="#">Action</b-dropdown-item>
                  <b-dropdown-item href="#">Another action</b-dropdown-item>
                  <b-dropdown-item href="#"
                    >Something else here</b-dropdown-item
                  >
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item href="#">Separated link</b-dropdown-item>
                </b-dropdown>
              </div>

              <div class="d-flex flex-wrap">
                <div>
                  <p class="text-muted mb-1">Total Subscribe</p>
                  <h4 class="mb-3">10,512</h4>
                  <p class="text-success mb-0">
                    <span
                      >0.6 % <i class="mdi mdi-arrow-top-right ms-1"></i
                    ></span>
                  </p>
                </div>
                <div class="ms-auto align-self-end">
                  <i class="bx bx-group display-4 text-light"></i>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-body p-4">
              <div class="text-center">
                <div class="avatar-md mx-auto mb-4">
                  <div
                    class="avatar-title bg-light rounded-circle text-primary h1"
                  >
                    <i class="mdi mdi-email-open"></i>
                  </div>
                </div>

                <div class="row justify-content-center">
                  <div class="col-xl-10">
                    <h4 class="text-primary">Subscribe !</h4>
                    <p class="text-muted font-size-14 mb-4">
                      Subscribe our newletter and get notification to stay
                      update.
                    </p>

                    <div class="input-group bg-light rounded">
                      <input
                        type="email"
                        class="form-control bg-transparent border-0"
                        placeholder="Enter Email address"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                      />
                      <div class="input-group-append">
                        <button
                          class="btn btn-primary rounded"
                          type="button"
                          id="button-addon2"
                        >
                          <i class="bx bxs-paper-plane"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->

      <div class="row">
        <div class="col-xl-4 col-lg-6">
          <div class="card">
            <div class="card-header bg-transparent border-bottom">
              <div class="d-flex flex-wrap blog-card">
                <h5 class="card-title mt-2">Posts</h5>
                <b-tabs
                  nav-class="nav-tabs-custom card-header-tabs ms-auto"
                  nav-wrapper-class="nav-item"
                  align="right"
                >
                  <b-tab title="Recent" active>
                    <div class="card-body mb-3 mt-2">
                      <simplebar style="max-height: 295px">
                        <ul class="list-group list-group-flush">
                          <li
                            class="list-group-item py-3"
                            v-for="data of postData"
                            :key="data.title"
                          >
                            <div class="d-flex">
                              <div class="me-3">
                                <img
                                  :src="data.image"
                                  alt=""
                                  class="avatar-md h-auto d-block rounded"
                                />
                              </div>

                              <div
                                class="align-self-center overflow-hidden me-auto"
                              >
                                <div>
                                  <h5 class="font-size-14 text-truncate">
                                    <a href="#" class="text-dark">{{
                                      data.title
                                    }}</a>
                                  </h5>
                                  <p class="text-muted mb-0">{{ data.date }}</p>
                                </div>
                              </div>

                              <b-dropdown
                                class="ms-2"
                                toggle-class="text-muted font-size-14 p-0"
                                menu-class="dropdown-menu-end"
                                variant="white"
                                right
                              >
                                <template #button-content>
                                  <i class="mdi mdi-dots-horizontal"></i>
                                </template>
                                <b-dropdown-item>Action</b-dropdown-item>
                                <b-dropdown-item
                                  >Another Action</b-dropdown-item
                                >
                                <b-dropdown-item>Third Action</b-dropdown-item>
                                <b-dropdown-item
                                  >Something else here</b-dropdown-item
                                >
                              </b-dropdown>
                            </div>
                          </li>
                        </ul>
                      </simplebar>
                    </div>
                  </b-tab>
                  <b-tab title="Popular">
                    <div class="card-body mb-3 mt-2">
                      <div data-simplebar style="max-height: 295px">
                        <ul class="list-group list-group-flush">
                          <li
                            class="list-group-item py-3"
                            v-for="data of postData"
                            :key="data.title"
                          >
                            <div class="d-flex">
                              <div class="me-3">
                                <img
                                  :src="data.image"
                                  alt=""
                                  class="avatar-md h-auto d-block rounded"
                                />
                              </div>

                              <div
                                class="align-self-center overflow-hidden me-auto"
                              >
                                <div>
                                  <h5 class="font-size-14 text-truncate">
                                    <a href="#" class="text-dark">{{
                                      data.title
                                    }}</a>
                                  </h5>
                                  <p class="text-muted mb-0">{{ data.date }}</p>
                                </div>
                              </div>

                              <b-dropdown
                                class="ms-2"
                                toggle-class="text-muted font-size-14 p-0"
                                variant="white"
                                right
                                menu-class="dropdown-menu-end"
                              >
                                <template #button-content>
                                  <i class="mdi mdi-dots-horizontal"></i>
                                </template>
                                <b-dropdown-item>Action</b-dropdown-item>
                                <b-dropdown-item
                                  >Another Action</b-dropdown-item
                                >
                                <b-dropdown-item>Third Action</b-dropdown-item>
                                <b-dropdown-item
                                  >Something else here</b-dropdown-item
                                >
                              </b-dropdown>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </b-tab>
                </b-tabs>
              </div>
            </div>
          </div>
        </div>
        <!-- end col -->

        <div class="col-xl-4 col-lg-6">
          <div class="card">
            <div class="card-body">
              <div class="d-flex flex-wrap">
                <div class="me-2">
                  <h5 class="card-title mb-3">Comments</h5>
                </div>
                <b-dropdown
                  text="Button text via Prop"
                  class="ms-auto"
                  variant="white"
                  toggle-class="p-0 font-size-16 text-muted"
                  menu-class="dropdown-menu-end"
                  right
                >
                  <template #button-content>
                    <i class="mdi mdi-dots-horizontal"></i>
                  </template>
                  <b-dropdown-item href="#">Action</b-dropdown-item>
                  <b-dropdown-item href="#">Another action</b-dropdown-item>
                  <b-dropdown-item href="#"
                    >Something else here</b-dropdown-item
                  >
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item href="#">Separated link</b-dropdown-item>
                </b-dropdown>
              </div>

              <div data-simplebar style="max-height: 310px">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item py-3">
                    <div class="media">
                      <div class="avatar-xs me-3">
                        <div
                          class="avatar-title rounded-circle bg-light text-primary"
                        >
                          <i class="bx bxs-user"></i>
                        </div>
                      </div>
                      <div class="media-body">
                        <h5 class="font-size-14 mb-1">
                          Delores Williams
                          <small class="text-muted float-end">1 hr Ago</small>
                        </h5>
                        <p class="text-muted">
                          If several languages coalesce, the grammar of the
                          resulting of the individual
                        </p>
                        <div>
                          <a href="javascript: void(0);" class="text-success"
                            ><i class="mdi mdi-reply me-1"></i> Reply</a
                          >
                        </div>
                      </div>
                    </div>
                  </li>

                  <li class="list-group-item py-3">
                    <div class="media">
                      <div class="avatar-xs me-3">
                        <img
                          src="/images/users/avatar-2.jpg"
                          alt=""
                          class="img-fluid d-block rounded-circle"
                        />
                      </div>
                      <div class="media-body">
                        <h5 class="font-size-14 mb-1">
                          Clarence Smith
                          <small class="text-muted float-end">2 hrs Ago</small>
                        </h5>
                        <p class="text-muted">
                          Neque porro quisquam est, qui dolorem ipsum quia dolor
                          sit amet
                        </p>
                        <div>
                          <a href="javascript: void(0);" class="text-success"
                            ><i class="mdi mdi-reply"></i> Reply</a
                          >
                        </div>

                        <div class="media pt-3">
                          <div class="avatar-xs me-3">
                            <div
                              class="avatar-title rounded-circle bg-light text-primary"
                            >
                              <i class="bx bxs-user"></i>
                            </div>
                          </div>
                          <div class="media-body">
                            <h5 class="font-size-14 mb-1">
                              Silvia Martinez
                              <small class="text-muted float-end"
                                >2 hrs Ago</small
                              >
                            </h5>
                            <p class="text-muted">
                              To take a trivial example, which of us ever
                              undertakes
                            </p>
                            <div>
                              <a
                                href="javascript: void(0);"
                                class="text-success"
                                ><i class="mdi mdi-reply"></i> Reply</a
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li class="list-group-item py-3">
                    <div class="media">
                      <div class="avatar-xs me-3">
                        <div
                          class="avatar-title rounded-circle bg-light text-primary"
                        >
                          <i class="bx bxs-user"></i>
                        </div>
                      </div>
                      <div class="media-body">
                        <h5 class="font-size-14 mb-1">
                          Keith McCoy
                          <small class="text-muted float-end">12 Aug</small>
                        </h5>
                        <p class="text-muted">
                          Donec posuere vulputate arcu. phasellus accumsan
                          cursus velit
                        </p>
                        <div>
                          <a href="javascript: void(0);" class="text-success"
                            ><i class="mdi mdi-reply"></i> Reply</a
                          >
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- end col -->

        <div class="col-xl-4">
          <div class="card">
            <div class="card-body">
              <div class="d-flex flex-wrap">
                <div class="me-2">
                  <h5 class="card-title mb-3">Top Visitors</h5>
                </div>
                <b-dropdown
                  text="Button text via Prop"
                  class="ms-auto"
                  variant="white"
                  toggle-class="p-0 font-size-16 text-muted"
                  menu-class="dropdown-menu-end"
                  right
                >
                  <template #button-content>
                    <i class="mdi mdi-dots-horizontal"></i>
                  </template>
                  <b-dropdown-item href="#">Action</b-dropdown-item>
                  <b-dropdown-item href="#">Another action</b-dropdown-item>
                  <b-dropdown-item href="#"
                    >Something else here</b-dropdown-item
                  >
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item href="#">Separated link</b-dropdown-item>
                </b-dropdown>
              </div>
              <div class="row text-center">
                <div class="col-6">
                  <div class="mt-3">
                    <p class="text-muted mb-1">Today</p>
                    <h5>1024</h5>
                  </div>
                </div>

                <div class="col-6">
                  <div class="mt-3">
                    <p class="text-muted mb-1">This Month</p>
                    <h5>
                      12356
                      <span class="text-success font-size-13"
                        >0.2 % <i class="mdi mdi-arrow-up ms-1"></i
                      ></span>
                    </h5>
                  </div>
                </div>
              </div>

              <hr />

              <div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <div class="py-2">
                      <h5 class="font-size-14">
                        California <span class="float-end">78%</span>
                      </h5>
                      <div class="progress animated-progess progress-sm">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style="width: 78%"
                          aria-valuenow="78"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="py-2">
                      <h5 class="font-size-14">
                        Nevada <span class="float-end">69%</span>
                      </h5>
                      <div class="progress animated-progess progress-sm">
                        <div
                          class="progress-bar bg-warning"
                          role="progressbar"
                          style="width: 69%"
                          aria-valuenow="69"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="py-2">
                      <h5 class="font-size-14">
                        Texas <span class="float-end">61%</span>
                      </h5>
                      <div class="progress animated-progess progress-sm">
                        <div
                          class="progress-bar bg-success"
                          role="progressbar"
                          style="width: 61%"
                          aria-valuenow="61"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->

      <div class="row">
        <div class="col-xl-4">
          <div class="card">
            <div class="card-body">
              <div class="d-flex">
                <div class="me-2">
                  <h5 class="card-title mb-4">Activity</h5>
                </div>
                <b-dropdown
                  text="Button text via Prop"
                  toggle-class="text-muted font-size-16 p-0"
                  variant="white"
                  right
                  class="ms-auto"
                  menu-class="dropdown-menu-end"
                >
                  <template #button-content>
                    <i class="mdi mdi-dots-horizontal"></i>
                  </template>
                  <b-dropdown-item href="#">Action</b-dropdown-item>
                  <b-dropdown-item href="#">Another action</b-dropdown-item>
                  <b-dropdown-item href="#"
                    >Something else here</b-dropdown-item
                  >
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item href="#">Separated link</b-dropdown-item>
                </b-dropdown>
              </div>
              <div data-simplebar class="mt-2" style="max-height: 280px">
                <ul class="verti-timeline list-unstyled">
                  <li class="event-list active">
                    <div class="event-timeline-dot">
                      <i
                        class="bx bxs-right-arrow-circle font-size-18 bx-fade-right"
                      ></i>
                    </div>
                    <div class="media">
                      <div class="me-3">
                        <h5 class="font-size-14">
                          10 Nov
                          <i
                            class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"
                          ></i>
                        </h5>
                      </div>
                      <div class="media-body">
                        <div>
                          Posted
                          <span class="fw-semibold"
                            >Beautiful Day with Friends</span
                          >
                          blog... <a href="#">View</a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="event-list">
                    <div class="event-timeline-dot">
                      <i class="bx bx-right-arrow-circle font-size-18"></i>
                    </div>
                    <div class="media">
                      <div class="me-3">
                        <h5 class="font-size-14">
                          08 Nov
                          <i
                            class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"
                          ></i>
                        </h5>
                      </div>
                      <div class="media-body">
                        <div>
                          If several languages coalesce, the grammar of the
                          resulting...
                          <a href="#">Read</a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="event-list">
                    <div class="event-timeline-dot">
                      <i class="bx bx-right-arrow-circle font-size-18"></i>
                    </div>
                    <div class="media">
                      <div class="me-3">
                        <h5 class="font-size-14">
                          02 Nov
                          <i
                            class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"
                          ></i>
                        </h5>
                      </div>
                      <div class="media-body">
                        <div>
                          Create
                          <span class="fw-semibold">Drawing a sketch blog</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="event-list">
                    <div class="event-timeline-dot">
                      <i class="bx bx-right-arrow-circle font-size-18"></i>
                    </div>
                    <div class="media">
                      <div class="me-3">
                        <h5 class="font-size-14">
                          24 Oct
                          <i
                            class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"
                          ></i>
                        </h5>
                      </div>
                      <div class="media-body">
                        <div>
                          In enim justo, rhoncus ut, imperdiet a venenatis vitae
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="event-list">
                    <div class="event-timeline-dot">
                      <i class="bx bx-right-arrow-circle font-size-18"></i>
                    </div>
                    <div class="media">
                      <div class="me-3">
                        <h5 class="font-size-14">
                          21 Oct
                          <i
                            class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"
                          ></i>
                        </h5>
                      </div>
                      <div class="media-body">
                        <div>
                          Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="text-center mt-4">
                <a
                  href=""
                  class="btn btn-primary waves-effect waves-light btn-sm"
                  >View More <i class="mdi mdi-arrow-right ms-1"></i
                ></a>
              </div>
            </div>
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->
        <div class="col-xl-8">
          <div class="card">
            <div class="card-body">
              <div class="d-flex">
                <div class="me-2">
                  <h5 class="card-title mb-4">Popular post</h5>
                </div>
                <b-dropdown
                  text="Button text via Prop"
                  class="ms-auto"
                  variant="white"
                  menu-class="dropdown-menu-end"
                  right
                >
                  <template #button-content>
                    <i class="mdi mdi-dots-horizontal"></i>
                  </template>
                  <b-dropdown-item href="#">Action</b-dropdown-item>
                  <b-dropdown-item href="#">Another action</b-dropdown-item>
                  <b-dropdown-item href="#"
                    >Something else here</b-dropdown-item
                  >
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item href="#">Separated link</b-dropdown-item>
                </b-dropdown>
              </div>

              <div class="table-responsive mb-0">
                <table class="table table-centered table-nowrap mb-0">
                  <tbody>
                    <tr>
                      <th scope="col" colspan="2">Post</th>
                      <th scope="col">Likes</th>
                      <th scope="col">Comments</th>
                      <th scope="col">Action</th>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td style="width: 100px">
                        <img
                          src="/images/small/img-2.jpg"
                          alt=""
                          class="avatar-md h-auto d-block rounded"
                        />
                      </td>
                      <td>
                        <h5 class="font-size-13 text-truncate mb-1">
                          <a href="#" class="text-dark"
                            >Beautiful Day with Friends</a
                          >
                        </h5>
                        <p class="text-muted mb-0">10 Nov, 2020</p>
                      </td>
                      <td><i class="bx bx-like align-middle me-1"></i> 125</td>
                      <td>
                        <i class="bx bx-comment-dots align-middle me-1"></i> 68
                      </td>
                      <td>
                        <b-dropdown
                          text="Button text via Prop"
                          toggle-class="text-muted font-size-16 p-0"
                          menu-class="dropdown-menu-end"
                          variant="white"
                          right
                        >
                          <template #button-content>
                            <i class="mdi mdi-dots-horizontal"></i>
                          </template>
                          <b-dropdown-item href="#">Action</b-dropdown-item>
                          <b-dropdown-item href="#"
                            >Another action</b-dropdown-item
                          >
                          <b-dropdown-item href="#"
                            >Something else here</b-dropdown-item
                          >
                          <b-dropdown-divider></b-dropdown-divider>
                          <b-dropdown-item href="#"
                            >Separated link</b-dropdown-item
                          >
                        </b-dropdown>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <img
                          src="/images/small/img-6.jpg"
                          alt=""
                          class="avatar-md h-auto d-block rounded"
                        />
                      </td>
                      <td>
                        <h5 class="font-size-13 text-truncate mb-1">
                          <a href="#" class="text-dark">Drawing a sketch</a>
                        </h5>
                        <p class="text-muted mb-0">02 Nov, 2020</p>
                      </td>
                      <td><i class="bx bx-like align-middle me-1"></i> 102</td>
                      <td>
                        <i class="bx bx-comment-dots align-middle me-1"></i> 48
                      </td>
                      <td>
                        <b-dropdown
                          text="Button text via Prop"
                          toggle-class="text-muted font-size-16 p-0"
                          menu-class="dropdown-menu-end"
                          variant="white"
                          right
                        >
                          <template #button-content>
                            <i class="mdi mdi-dots-horizontal"></i>
                          </template>
                          <b-dropdown-item href="#">Action</b-dropdown-item>
                          <b-dropdown-item href="#"
                            >Another action</b-dropdown-item
                          >
                          <b-dropdown-item href="#"
                            >Something else here</b-dropdown-item
                          >
                          <b-dropdown-divider></b-dropdown-divider>
                          <b-dropdown-item href="#"
                            >Separated link</b-dropdown-item
                          >
                        </b-dropdown>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <img
                          src="/images/small/img-1.jpg"
                          alt=""
                          class="avatar-md h-auto d-block rounded"
                        />
                      </td>
                      <td>
                        <h5 class="font-size-13 text-truncate mb-1">
                          <a href="#" class="text-dark">Riding bike on road</a>
                        </h5>
                        <p class="text-muted mb-0">24 Oct, 2020</p>
                      </td>
                      <td><i class="bx bx-like align-middle me-1"></i> 98</td>
                      <td>
                        <i class="bx bx-comment-dots align-middle me-1"></i> 35
                      </td>
                      <td>
                        <b-dropdown
                          text="Button text via Prop"
                          toggle-class="text-muted font-size-16 p-0"
                          menu-class="dropdown-menu-end"
                          variant="white"
                          right
                        >
                          <template #button-content>
                            <i class="mdi mdi-dots-horizontal"></i>
                          </template>
                          <b-dropdown-item href="#">Action</b-dropdown-item>
                          <b-dropdown-item href="#"
                            >Another action</b-dropdown-item
                          >
                          <b-dropdown-item href="#"
                            >Something else here</b-dropdown-item
                          >
                          <b-dropdown-divider></b-dropdown-divider>
                          <b-dropdown-item href="#"
                            >Separated link</b-dropdown-item
                          >
                        </b-dropdown>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <img
                          src="/images/small/img-2.jpg"
                          alt=""
                          class="avatar-md h-auto d-block rounded"
                        />
                      </td>
                      <td>
                        <h5 class="font-size-13 text-truncate mb-1">
                          <a href="#" class="text-dark"
                            >Project discussion with team</a
                          >
                        </h5>
                        <p class="text-muted mb-0">15 Oct, 2020</p>
                      </td>
                      <td><i class="bx bx-like align-middle me-1"></i> 92</td>
                      <td>
                        <i class="bx bx-comment-dots align-middle me-1"></i> 22
                      </td>
                      <td>
                        <b-dropdown
                          text="Button text via Prop"
                          toggle-class="text-muted font-size-16 p-0"
                          menu-class="dropdown-menu-end"
                          variant="white"
                          right
                        >
                          <template #button-content>
                            <i class="mdi mdi-dots-horizontal"></i>
                          </template>
                          <b-dropdown-item href="#">Action</b-dropdown-item>
                          <b-dropdown-item href="#"
                            >Another action</b-dropdown-item
                          >
                          <b-dropdown-item href="#"
                            >Something else here</b-dropdown-item
                          >
                          <b-dropdown-divider></b-dropdown-divider>
                          <b-dropdown-item href="#"
                            >Separated link</b-dropdown-item
                          >
                        </b-dropdown>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->
    </div>
  </Layout>
</template>