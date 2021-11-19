<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      perPage: [
        [576, 2],
        [768, 3],
        [992, 4],
      ],
    };
  },
  methods: {
    nextSlide() {
      this.$refs.carousel.goToPage(this.$refs.carousel.getNextPage());
    },
    prevSlide() {
      this.$refs.carousel.goToPage(this.$refs.carousel.getPreviousPage());
    },
  },
};
</script>
<template>
  <div class="hori-timeline">
    <carousel
      ref="carousel"
      class="events navs-carousel owl-carousel"
      id="timeline-carousel"
      :perPageCustom="[[480, 2], [768, 4]]"
      :navigation-enabled="false"
      :pagination-enabled="false"
    >
      <slide>
        <div class="item event-list">
          <div>
            <div class="event-date">
              <div class="text-primary mb-1">December, 2019</div>
              <h5 class="mb-4">ICO Platform Idea</h5>
            </div>
            <div class="event-down-icon">
              <i class="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>
            </div>

            <div class="mt-3 px-3">
              <p class="text-muted">It will be as simple as occidental in fact it will be Cambridge</p>
            </div>
          </div>
        </div>
      </slide>
      <slide>
        <div class="item event-list">
          <div>
            <div class="event-date">
              <div class="text-primary mb-1">January, 2020</div>
              <h5 class="mb-4">Research on project</h5>
            </div>
            <div class="event-down-icon">
              <i class="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>
            </div>

            <div class="mt-3 px-3">
              <p
                class="text-muted"
              >To an English person, it will seem like simplified English existence.</p>
            </div>
          </div>
        </div>
      </slide>
      <slide>
        <div class="item event-list active">
          <div>
            <div class="event-date">
              <div class="text-primary mb-1">February, 2020</div>
              <h5 class="mb-4">ICO & Token Design</h5>
            </div>
            <div class="event-down-icon">
              <i class="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>
            </div>

            <div class="mt-3 px-3">
              <p class="text-muted">For science, music, sport, etc, Europe uses the same vocabulary.</p>
            </div>
          </div>
        </div>
      </slide>
      <slide>
        <div class="item event-list">
          <div>
            <div class="event-date">
              <div class="text-primary mb-1">March, 2020</div>
              <h5 class="mb-4">ICO Launch Platform</h5>
            </div>
            <div class="event-down-icon">
              <i class="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>
            </div>

            <div class="mt-3 px-3">
              <p class="text-muted">New common language will be more simple than existing.</p>
            </div>
          </div>
        </div>
      </slide>
      <slide>
        <div class="item event-list">
          <div>
            <div class="event-date">
              <div class="text-primary mb-1">April, 2020</div>
              <h5 class="mb-4">Token sale round 1</h5>
            </div>
            <div class="event-down-icon">
              <i class="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>
            </div>

            <div class="mt-3 px-3">
              <p class="text-muted">It will be as simple as occidental in fact it will be Cambridge</p>
            </div>
          </div>
        </div>
      </slide>
      <slide>
        <div class="item event-list">
          <div>
            <div class="event-date">
              <div class="text-primary mb-1">May, 2020</div>
              <h5 class="mb-4">Token sale round 2</h5>
            </div>
            <div class="event-down-icon">
              <i class="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>
            </div>

            <div class="mt-3 px-3">
              <p
                class="text-muted"
              >To an English person, it will seem like simplified English existence.</p>
            </div>
          </div>
        </div>
      </slide>
    </carousel>
    <div class="owl-nav">
      <button type="button" role="presentation" class="owl-prev" @click.prevent="prevSlide">
        <i class="mdi mdi-chevron-left"></i>
      </button>
      <button type="button" role="presentation" class="owl-next" @click.prevent="nextSlide">
        <i class="mdi mdi-chevron-right"></i>
      </button>
    </div>
  </div>
</template>
