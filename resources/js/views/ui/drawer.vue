<script>
import Drawer from "vue-simple-drawer";

import Layout from "../../layouts/main";
import PageHeader from "../../components/page-header";

/**
 * Drawer component
 */
export default {
  components: {
    Drawer,
    Layout,
    PageHeader,
  },
  data() {
    return {
      open: false,
      openRightDrawer: false,
      isUpDrawer: false,
      isDownDrawer: false,
      title: "Drawer",
      items: [
        {
          text: "UI Elements",
          href: "/",
        },
        {
          text: "Drawer",
          active: true,
        },
      ],
    };
  },
  methods: {
    handleToggleDrawer() {
      this.$refs.drawerLayout.toggle();
    },
    toggle() {
      this.open = !this.open;
    },
    rightDrawer() {
      this.openRightDrawer = !this.openRightDrawer;
    },
    upDrawer() {
      this.isUpDrawer = !this.isUpDrawer;
    },
    downDrawer() {
      this.isDownDrawer = !this.isDownDrawer;
    },
  },
};
</script>

<template>
  <div>
    <Layout>
      <PageHeader :title="title" :items="items" />
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Direction</h5>
              <p class="card-title-desc">Navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily above all other content until a section is selected.</p>
              <button @click="toggle" class="btn btn-primary">Left</button>
              <button @click="rightDrawer" class="btn btn-primary ms-1">
                Right
              </button>
              <button @click="upDrawer" class="btn btn-primary ms-1">Top</button>
              <button @click="downDrawer" class="btn btn-primary ms-1">
                Bottom
              </button>
            </div>
          </div>
        </div>
      </div>
      <Drawer
        @close="toggle"
        :align="'left'"
        :closeable="true"
        :maskClosable="true"
        :zIndex="1002"
      >
        <div v-if="open">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">
              Drawer Left
            </h5>
          </div>
          <div class="offcanvas-body">
            <div>
              Some text as placeholder. In real life you can have the
              <br />elements you have chosen. Like, text, images, lists, etc.
            </div>
          </div>
        </div>
      </Drawer>

      <Drawer
        @close="rightDrawer"
        :align="'right'"
        :closeable="true"
        :maskClosable="true"
        :zIndex="1002"
      >
        <div v-if="openRightDrawer">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">
              Drawer Right
            </h5>
          </div>
          <div class="offcanvas-body">
            <div>
              Some text as placeholder. In real life you can have the
              <br />elements you have chosen. Like, text, images, lists, etc.
            </div>
          </div>
        </div>
      </Drawer>

      <Drawer
        @close="upDrawer"
        :align="'up'"
        :closeable="true"
        :maskClosable="true"
        :zIndex="1002"
      >
        <div v-if="isUpDrawer">
          <div class="offcanvas-header">
            <h5 id="offcanvasBottomLabel">Drawer Top</h5>
          </div>
          <div class="offcanvas-body">
            ...
          </div>
        </div>
      </Drawer>

      <Drawer
        @close="downDrawer"
        :align="'down'"
        :closeable="true"
        :maskClosable="true"
        :zIndex="1002"
      >
        <div v-if="isDownDrawer">
          <div class="offcanvas-header">
            <h5 id="offcanvasBottomLabel">Drawer Bottom</h5>
          </div>
          <div class="offcanvas-body">
            ...
          </div>
        </div>
      </Drawer>
    </Layout>
  </div>
</template>
