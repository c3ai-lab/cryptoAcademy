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
      title: "Chat",
      items: [
        {
          text: "Skote",
          href: "javascript:void(0)",
        },
        {
          text: "Chat",
          active: true,
        },
      ],
    };
  },
  mounted() {
    var container = document.querySelector(
      "#my-element .simplebar-content-wrapper"
    );
    container.scrollTo({ top: 500, behavior: "smooth" });

    var container2 = document.querySelector(
      "#containerElement .simplebar-content-wrapper"
    );
    container2.scrollTo({ top: 500, behavior: "smooth" });
  },
};
</script>
<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="d-lg-flex">
      <div class="chat-leftsidebar me-lg-4">
        <div class="">
          <div class="py-4 border-bottom">
            <div class="media">
              <div class="align-self-center me-3">
                <img
                  src="/images/users/avatar-1.jpg"
                  class="avatar-xs rounded-circle"
                  alt=""
                />
              </div>
              <div class="media-body">
                <h5 class="font-size-15 mt-0 mb-1">Henry Wells</h5>
                <p class="text-muted mb-0">
                  <i class="mdi mdi-circle text-success align-middle me-1"></i>
                  Active
                </p>
              </div>

              <div>
                <b-dropdown
                  menu-class="dropdown-menu-end"
                  class="chat-noti-dropdown active"
                  right
                  variant="white"
                >
                  <template v-slot:button-content>
                    <i class="bx bx-bell bx-tada"></i>
                  </template>
                  <b-dropdown-item>Action</b-dropdown-item>
                  <b-dropdown-item>Another action</b-dropdown-item>
                  <b-dropdown-item>Something else here</b-dropdown-item>
                </b-dropdown>
              </div>
            </div>
          </div>

          <div class="search-box chat-search-box py-4">
            <div class="position-relative">
              <input type="text" class="form-control" placeholder="Search..." />
              <i class="bx bx-search-alt search-icon"></i>
            </div>
          </div>

          <div class="chat-leftsidebar-nav">
<b-tabs pills fill content-class="py-4">
            <b-tab title="Tab 1" active>
              <template v-slot:title>
                <i class="bx bx-chat font-size-20 d-sm-none"></i>
                <span class="d-none d-sm-block">Chat</span>
              </template>
              <b-card-text>
              <div>
                  <h5 class="font-size-14 mb-3">Recent</h5>
                  <simplebar style="max-height: 410px" id="my-element">
                    <ul class="list-unstyled chat-list">
                      <li class="active">
                        <a href="#">
                          <div class="media">
                            <div class="align-self-center me-3">
                              <i class="mdi mdi-circle font-size-10"></i>
                            </div>
                            <div class="align-self-center me-3">
                              <img
                                src="/images/users/avatar-2.jpg"
                                class="rounded-circle avatar-xs"
                                alt=""
                              />
                            </div>

                            <div class="media-body overflow-hidden">
                              <h5 class="text-truncate font-size-14 mb-1">
                                Steven Franklin
                              </h5>
                              <p class="text-truncate mb-0">
                                Hey! there I'm available
                              </p>
                            </div>
                            <div class="font-size-11">05 min</div>
                          </div>
                        </a>
                      </li>

                      <li>
                        <a href="#">
                          <div class="media">
                            <div class="align-self-center me-3">
                              <i
                                class="mdi mdi-circle text-success font-size-10"
                              ></i>
                            </div>
                            <div class="align-self-center me-3">
                              <img
                                src="/images/users/avatar-3.jpg"
                                class="rounded-circle avatar-xs"
                                alt=""
                              />
                            </div>
                            <div class="media-body overflow-hidden">
                              <h5 class="text-truncate font-size-14 mb-1">
                                Adam Miller
                              </h5>
                              <p class="text-truncate mb-0">
                                I've finished it! See you so
                              </p>
                            </div>
                            <div class="font-size-11">12 min</div>
                          </div>
                        </a>
                      </li>

                      <li>
                        <a href="#">
                          <div class="media">
                            <div class="align-self-center me-3">
                              <i
                                class="mdi mdi-circle text-success font-size-10"
                              ></i>
                            </div>
                            <div class="avatar-xs align-self-center me-3">
                              <span
                                class="avatar-title rounded-circle bg-soft bg-primary text-primary"
                              >
                                K
                              </span>
                            </div>
                            <div class="media-body overflow-hidden">
                              <h5 class="text-truncate font-size-14 mb-1">
                                Keith Gonzales
                              </h5>
                              <p class="text-truncate mb-0">
                                This theme is awesome!
                              </p>
                            </div>
                            <div class="font-size-11">24 min</div>
                          </div>
                        </a>
                      </li>

                      <li>
                        <a href="#">
                          <div class="media">
                            <div class="align-self-center me-3">
                              <i
                                class="mdi mdi-circle text-warning font-size-10"
                              ></i>
                            </div>
                            <div class="align-self-center me-3">
                              <img
                                src="/images/users/avatar-4.jpg"
                                class="rounded-circle avatar-xs"
                                alt=""
                              />
                            </div>
                            <div class="media-body overflow-hidden">
                              <h5 class="text-truncate font-size-14 mb-1">
                                Jose Vickery
                              </h5>
                              <p class="text-truncate mb-0">Nice to meet you</p>
                            </div>
                            <div class="font-size-11">1 hr</div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div class="media">
                            <div class="align-self-center me-3">
                              <i class="mdi mdi-circle font-size-10"></i>
                            </div>

                            <div class="avatar-xs align-self-center me-3">
                              <span
                                class="avatar-title rounded-circle bg-soft bg-primary text-primary"
                              >
                                M
                              </span>
                            </div>
                            <div class="media-body overflow-hidden">
                              <h5 class="text-truncate font-size-14 mb-1">
                                Mitchel Givens
                              </h5>
                              <p class="text-truncate mb-0">
                                Hey! there I'm available
                              </p>
                            </div>
                            <div class="font-size-11">3 hrs</div>
                          </div>
                        </a>
                      </li>

                      <li>
                        <a href="#">
                          <div class="media">
                            <div class="align-self-center me-3">
                              <i
                                class="mdi mdi-circle text-success font-size-10"
                              ></i>
                            </div>
                            <div class="align-self-center me-3">
                              <img
                                src="/images/users/avatar-6.jpg"
                                class="rounded-circle avatar-xs"
                                alt=""
                              />
                            </div>
                            <div class="media-body overflow-hidden">
                              <h5 class="text-truncate font-size-14 mb-1">
                                Stephen Hadley
                              </h5>
                              <p class="text-truncate mb-0">
                                I've finished it! See you so
                              </p>
                            </div>
                            <div class="font-size-11">5hrs</div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div class="media">
                            <div class="align-self-center me-3">
                              <i
                                class="mdi mdi-circle text-success font-size-10"
                              ></i>
                            </div>
                            <div class="avatar-xs align-self-center me-3">
                              <span
                                class="avatar-title rounded-circle bg-soft bg-primary text-primary"
                              >
                                K
                              </span>
                            </div>
                            <div class="media-body overflow-hidden">
                              <h5 class="text-truncate font-size-14 mb-1">
                                Keith Gonzales
                              </h5>
                              <p class="text-truncate mb-0">
                                This theme is awesome!
                              </p>
                            </div>
                            <div class="font-size-11">24 min</div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </simplebar>
                </div>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template v-slot:title>
                <i class="bx bx-group font-size-20 d-sm-none"></i>
                <span class="d-none d-sm-block">Groups</span>
              </template>
              <b-card-text>
                <h5 class="font-size-14 mb-3">Groups</h5>
                <ul class="list-unstyled chat-list">
                  <li>
                    <a href="#">
                      <div class="media align-items-center">
                        <div class="avatar-xs me-3">
                          <span
                            class="avatar-title rounded-circle bg-soft bg-primary text-primary"
                            >G</span
                          >
                        </div>

                        <div class="media-body">
                          <h5 class="font-size-14 mb-0">General</h5>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <div class="media align-items-center">
                        <div class="avatar-xs me-3">
                          <span
                            class="avatar-title rounded-circle bg-soft bg-primary text-primary"
                            >R</span
                          >
                        </div>

                        <div class="media-body">
                          <h5 class="font-size-14 mb-0">Reporting</h5>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <div class="media align-items-center">
                        <div class="avatar-xs me-3">
                          <span
                            class="avatar-title rounded-circle bg-soft bg-primary text-primary"
                            >M</span
                          >
                        </div>

                        <div class="media-body">
                          <h5 class="font-size-14 mb-0">Meeting</h5>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <div class="media align-items-center">
                        <div class="avatar-xs me-3">
                          <span
                            class="avatar-title rounded-circle bg-soft bg-primary text-primary"
                            >A</span
                          >
                        </div>

                        <div class="media-body">
                          <h5 class="font-size-14 mb-0">Project A</h5>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <div class="media align-items-center">
                        <div class="avatar-xs me-3">
                          <span
                            class="avatar-title rounded-circle bg-soft bg-primary text-primary"
                            >B</span
                          >
                        </div>

                        <div class="media-body">
                          <h5 class="font-size-14 mb-0">Project B</h5>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template v-slot:title>
                <i class="bx bx-book-content font-size-20 d-sm-none"></i>
                <span class="d-none d-sm-block">Contacts</span>
              </template>
              <b-card-text>
                <h5 class="font-size-14 mb-3">Contacts</h5>
                <simplebar style="height: 410px">
                  <div>
                    <div class="avatar-xs mb-3">
                      <span
                        class="avatar-title rounded-circle bg-soft bg-primary text-primary"
                        >A</span
                      >
                    </div>

                    <ul class="list-unstyled chat-list">
                      <li>
                        <a href="#">
                          <h5 class="font-size-14 mb-0">Adam Miller</h5>
                        </a>
                      </li>

                      <li>
                        <a href="#">
                          <h5 class="font-size-14 mb-0">Alfonso Fisher</h5>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="mt-4">
                    <div class="avatar-xs mb-3">
                      <span
                        class="avatar-title rounded-circle bg-soft bg-primary text-primary"
                        >B</span
                      >
                    </div>

                    <ul class="list-unstyled chat-list">
                      <li>
                        <a href="#">
                          <h5 class="font-size-14 mb-0">Bonnie Harney</h5>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="mt-4">
                    <div class="avatar-xs mb-3">
                      <span
                        class="avatar-title rounded-circle bg-soft bg-primary text-primary"
                        >C</span
                      >
                    </div>

                    <ul class="list-unstyled chat-list">
                      <li>
                        <a href="#">
                          <h5 class="font-size-14 mb-0">Charles Brown</h5>
                        </a>
                        <a href="#">
                          <h5 class="font-size-14 mb-0">Carmella Jones</h5>
                        </a>
                        <a href="#">
                          <h5 class="font-size-14 mb-0">Carrie Williams</h5>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="mt-4">
                    <div class="avatar-xs mb-3">
                      <span
                        class="avatar-title rounded-circle bg-soft bg-primary text-primary"
                        >D</span
                      >
                    </div>

                    <ul class="list-unstyled chat-list">
                      <li>
                        <a href="#">
                          <h5 class="font-size-14 mb-0">Dolores Minter</h5>
                        </a>
                      </li>
                    </ul>
                  </div>
                </simplebar>
              </b-card-text>
            </b-tab>
          </b-tabs>

            
          </div>
        </div>
      </div>
      <div class="w-100 user-chat">
        <div class="card">
          <div class="p-4 border-bottom">
            <div class="row">
              <div class="col-md-4 col-9">
                <h5 class="font-size-15 mb-1">Steven Franklin</h5>
                <p class="text-muted mb-0">
                  <i class="mdi mdi-circle text-success align-middle me-1"></i>
                  Active now
                </p>
              </div>
              <div class="col-md-8 col-3">
                <ul class="list-inline user-chat-nav text-end mb-0">
                  <li class="list-inline-item d-none d-sm-inline-block">
                 <b-dropdown
                      menu-class="dropdown-menu-md dropdown-menu-end"
                      variant="white"
                      right
                      toggle-class="nav-btn"
                    >
                      <template v-slot:button-content>
                        <i class="bx bx-search-alt-2"></i>
                      </template>
                      <form class="p-3">
                        <div class="form-group m-0">
                          <div class="input-group">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Search ..."
                              aria-label="Recipient's username"
                            />
                            <div class="input-group-append">
                              <button class="btn btn-primary" type="submit">
                                <i class="mdi mdi-magnify"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </b-dropdown>
                  </li>
                  <li class="list-inline-item d-none d-sm-inline-block">
                      <b-dropdown
                      toggle-class="nav-btn"
                      menu-class="dropdown-menu-end"
                      right
                      variant="white"
                    >
                      <template v-slot:button-content>
                        <i class="bx bx-cog"></i>
                      </template>
                      <b-dropdown-item>View Profile</b-dropdown-item>
                      <b-dropdown-item>Clear chat</b-dropdown-item>
                      <b-dropdown-item>Muted</b-dropdown-item>
                      <b-dropdown-item>Delete</b-dropdown-item>
                    </b-dropdown>
                  </li>

                  <li class="list-inline-item">
                    <b-dropdown
                      toggle-class="nav-btn"
                      menu-class="dropdown-menu-end"
                      right
                      variant="white"
                    >
                      <template v-slot:button-content>
                        <i class="bx bx-dots-horizontal-rounded"></i>
                      </template>
                      <b-dropdown-item>Action</b-dropdown-item>
                      <b-dropdown-item>Another action</b-dropdown-item>
                      <b-dropdown-item>Something else</b-dropdown-item>
                    </b-dropdown>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div class="chat-conversation p-3">
              <simplebar
                style="max-height: 470px"
                id="containerElement"
                ref="current"
              >
                <ul class="list-unstyled">
                  <li>
                    <div class="chat-day-title">
                      <span class="title">Today</span>
                    </div>
                  </li>
                  <li>
                    <div class="conversation-list">
                     <b-dropdown
                        variant="white"
                        menu-class="dropdown-menu-end"
                      >
                        <template v-slot:button-content>
                          <i class="bx bx-dots-vertical-rounded"></i>
                        </template>
                        <b-dropdown-item>Copy</b-dropdown-item>
                        <b-dropdown-item>Save</b-dropdown-item>
                        <b-dropdown-item>Forward</b-dropdown-item>
                        <b-dropdown-item>Delete</b-dropdown-item>
                      </b-dropdown>
                      <div class="ctext-wrap">
                        <div class="conversation-name">Steven Franklin</div>
                        <p>Hello!</p>
                        <p class="chat-time mb-0">
                          <i class="bx bx-time-five align-middle me-1"></i>
                          10:00
                        </p>
                      </div>
                    </div>
                  </li>

                  <li class="right">
                    <div class="conversation-list">
                      <b-dropdown
                        variant="white"
                        menu-class="dropdown-menu-end"
                      >
                        <template v-slot:button-content>
                          <i class="bx bx-dots-vertical-rounded"></i>
                        </template>
                        <b-dropdown-item>Copy</b-dropdown-item>
                        <b-dropdown-item>Save</b-dropdown-item>
                        <b-dropdown-item>Forward</b-dropdown-item>
                        <b-dropdown-item>Delete</b-dropdown-item>
                      </b-dropdown>
                      <div class="ctext-wrap">
                        <div class="conversation-name">Henry Wells</div>
                        <p>Hi, How are you? What about our next meeting?</p>

                        <p class="chat-time mb-0">
                          <i class="bx bx-time-five align-middle me-1"></i>
                          10:02
                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="conversation-list">
                     <b-dropdown
                        variant="white"
                        menu-class="dropdown-menu-end"
                      >
                        <template v-slot:button-content>
                          <i class="bx bx-dots-vertical-rounded"></i>
                        </template>
                        <b-dropdown-item>Copy</b-dropdown-item>
                        <b-dropdown-item>Save</b-dropdown-item>
                        <b-dropdown-item>Forward</b-dropdown-item>
                        <b-dropdown-item>Delete</b-dropdown-item>
                      </b-dropdown>
                      <div class="ctext-wrap">
                        <div class="conversation-name">Steven Franklin</div>
                        <p>Yeah everything is fine</p>

                        <p class="chat-time mb-0">
                          <i class="bx bx-time-five align-middle me-1"></i>
                          10:06
                        </p>
                      </div>
                    </div>
                  </li>

                  <li class="last-chat">
                    <div class="conversation-list">
                     <b-dropdown
                        variant="white"
                        menu-class="dropdown-menu-end"
                      >
                        <template v-slot:button-content>
                          <i class="bx bx-dots-vertical-rounded"></i>
                        </template>
                        <b-dropdown-item>Copy</b-dropdown-item>
                        <b-dropdown-item>Save</b-dropdown-item>
                        <b-dropdown-item>Forward</b-dropdown-item>
                        <b-dropdown-item>Delete</b-dropdown-item>
                      </b-dropdown>
                      <div class="ctext-wrap">
                        <div class="conversation-name">Steven Franklin</div>
                        <p>& Next meeting tomorrow 10.00AM</p>
                        <p class="chat-time mb-0">
                          <i class="bx bx-time-five align-middle me-1"></i>
                          10:06
                        </p>
                      </div>
                    </div>
                  </li>

                  <li class="right">
                    <div class="conversation-list">
                      <b-dropdown
                        variant="white"
                        menu-class="dropdown-menu-end"
                      >
                        <template v-slot:button-content>
                          <i class="bx bx-dots-vertical-rounded"></i>
                        </template>
                        <b-dropdown-item>Copy</b-dropdown-item>
                        <b-dropdown-item>Save</b-dropdown-item>
                        <b-dropdown-item>Forward</b-dropdown-item>
                        <b-dropdown-item>Delete</b-dropdown-item>
                      </b-dropdown>
                      <div class="ctext-wrap">
                        <div class="conversation-name">Henry Wells</div>
                        <p>Wow that's great</p>

                        <p class="chat-time mb-0">
                          <i class="bx bx-time-five align-middle me-1"></i>
                          10:07
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </simplebar>
            </div>
            <div class="p-3 chat-input-section">
              <div class="row">
                <div class="col">
                  <div class="position-relative">
                    <input
                      type="text"
                      class="form-control chat-input"
                      placeholder="Enter Message..."
                    />
                    <div class="chat-input-links">
                      <ul class="list-inline mb-0">
                        <li class="list-inline-item">
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Emoji"
                            ><i class="mdi mdi-emoticon-happy-outline"></i
                          ></a>
                        </li>
                        <li class="list-inline-item">
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Images"
                            ><i class="mdi mdi-file-image-outline"></i
                          ></a>
                        </li>
                        <li class="list-inline-item">
                          <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add Files"
                            ><i class="mdi mdi-file-document-outline"></i
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-auto">
                  <button
                    type="submit"
                    class="btn btn-primary btn-rounded chat-send w-md waves-effect waves-light"
                  >
                    <span class="d-none d-sm-inline-block me-2">Send</span>
                    <i class="mdi mdi-send"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
