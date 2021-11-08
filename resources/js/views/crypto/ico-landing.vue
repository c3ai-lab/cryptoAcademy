<script>
import VueCountdown from "@chenfengyuan/vue-countdown";
import TeamSlider from "../../components/widgets/team-slider";
import ClientSlider from "../../components/widgets/client-slider";
import TimelineSlider from "../../components/widgets/timeline-slider";
export default {
    components: {
        VueCountdown,
        TeamSlider,
        ClientSlider,
        TimelineSlider
    },
    data() {
        return {
            clientsPerPage: [
                [576, 2],
                [768, 3],
                [992, 4]
            ]
        };
    },
    created() {
        window.addEventListener("scroll", function () {
            var scroll = window.scrollY;

            if (scroll >= 50) {
                document.querySelector(".sticky").classList.add("nav-sticky");
            } else {
                document
                    .querySelector(".sticky")
                    .classList.remove("nav-sticky");
            }
        });
        document.querySelectorAll(".navbar-nav a").forEach(item => {
            item.addEventListener("click", function (event) {
                event.preventDefault();
                event.stopImmediatePropagation();
                var $anchor = event.target;
                document.querySelectorAll("html, body").scrollTo({
                    top: document.querySelector($anchor.href).offsetTop,
                    behaviour: "smooth"
                });
            });
        });
    },
    computed: {
        dateDiff() {
            var now = new Date();
            var date2 = new Date(2021, 12, 31, 0, 0, 0);
            return date2.getTime() - now.getTime();
        }
    },
    methods: {
        /**
     * Toggle menu
     */
    toggleMenu() {
      document.getElementById("topnav-menu-content").classList.toggle("show");
    },
    }
};
</script>
<template>
<div>
    <nav class="navbar navbar-expand-lg navigation fixed-top sticky" id="navbar">
        <div class="container">
            <a class="navbar-logo" href="/">
                <img src="/images/logo-dark.png" alt="" height="19" class="logo logo-dark" />
                <img src="/images/logo-light.png" alt="" height="19" class="logo logo-light" />
            </a>

            <button type="button" class="btn btn-sm px-3 font-size-16 d-lg-none header-item waves-effect waves-light" 
             @click="toggleMenu()"
            data-toggle="collapse" data-target="#topnav-menu-content">
                <i class="fa fa-fw fa-bars"></i>
            </button>

            <div class="collapse navbar-collapse" id="topnav-menu-content">
                <ul class="navbar-nav ms-auto" id="topnav-menu">
                    <li class="nav-item">
                        <a class="nav-link active" href="#home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#features">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#roadmap">Roadmap</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#team">Team</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#news">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#faqs">FAQs</a>
                    </li>
                </ul>

                <div class="ms-lg-2">
                    <a href="#" class="btn btn-outline-success w-xs">Sign in</a>
                </div>
            </div>
        </div>
    </nav>

    <!-- hero section start -->
    <section class="section hero-section bg-ico-hero" id="home">
        <div class="bg-overlay bg-primary"></div>
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-5">
                    <div class="text-white-50">
                        <h1 class="text-white fw-semibold mb-3 hero-title">
                            Skote - Ico Landing for a cryptocurrency
                            business
                        </h1>
                        <p class="font-size-14">
                            It will be as simple as occidental in fact to an
                            English person, it will seem like simplified as
                            a skeptical Cambridge
                        </p>

                        <div class="button-items mt-4">
                            <a href="#" class="btn btn-success">Get Whitepaper</a>
                            <a href="#" class="btn btn-light">How it work</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 col-md-8 col-sm-10 ms-lg-auto">
                    <div class="card overflow-hidden mb-0 mt-5 mt-lg-0">
                        <div class="card-header text-center">
                            <h5 class="mb-0">ICO Countdown time</h5>
                        </div>
                        <div class="card-body">
                            <div class="text-center">
                                <h5>Time left to Ico :</h5>
                                <div class="mt-4">
                                    <vue-countdown :time="dateDiff" tag="div" class="counter-number ico-countdown d-flex">
                                        <template slot-scope="counter">
                                            <div class="coming-box">
                                                {{ counter.days }}
                                                <span>Days</span>
                                            </div>
                                            <div class="coming-box">
                                                {{ counter.hours }}
                                                <span>Hours</span>
                                            </div>
                                            <div class="coming-box">
                                                {{ counter.minutes }}
                                                <span>Minutes</span>
                                            </div>
                                            <div class="coming-box">
                                                {{ counter.seconds }}
                                                <span>Seconds</span>
                                            </div>
                                        </template>
                                    </vue-countdown>
                                    <!-- </div> -->
                                </div>

                                <div class="mt-4">
                                    <button type="button" class="btn btn-success w-md">
                                        Get Token
                                    </button>
                                </div>

                                <div class="mt-5">
                                    <h4 class="fw-semibold">
                                        1 ETH = 2235 SKT
                                    </h4>
                                    <div class="clearfix mt-4">
                                        <h5 class="float-end font-size-14">
                                            5234.43
                                        </h5>
                                    </div>
                                    <div class="progress p-1 progress-xl softcap-progress">
                                        <div class="progress-bar bg-info" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">
                                            <div class="progress-label">
                                                15 %
                                            </div>
                                        </div>
                                        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
                                            <div class="progress-label">
                                                30 %
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
        </div>
        <!-- end container -->
    </section>
    <!-- hero section end -->

    <!-- currency price section start -->
    <section class="section bg-white p-0">
        <div class="container">
            <div class="currency-price">
                <div class="row">
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="media">
                                    <div class="avatar-xs me-3">
                                        <span class="avatar-title rounded-circle bg-soft bg-warning text-warning font-size-18">
                                            <i class="mdi mdi-bitcoin"></i>
                                        </span>
                                    </div>
                                    <div class="media-body">
                                        <p class="text-muted">Bitcoin</p>
                                        <h5>$ 9134.39</h5>
                                        <p class="text-muted text-truncate mb-0">
                                            + 0.0012.23 ( 0.2 % )
                                            <i class="mdi mdi-arrow-up ms-1 text-success"></i>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="media">
                                    <div class="avatar-xs me-3">
                                        <span class="avatar-title rounded-circle bg-soft bg-primary text-primary font-size-18">
                                            <i class="mdi mdi-ethereum"></i>
                                        </span>
                                    </div>
                                    <div class="media-body">
                                        <p class="text-muted">Ethereum</p>
                                        <h5>$ 245.44</h5>
                                        <p class="text-muted text-truncate mb-0">
                                            - 004.12 ( 0.1 % )
                                            <i class="mdi mdi-arrow-down ms-1 text-danger"></i>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="media">
                                    <div class="avatar-xs me-3">
                                        <span class="avatar-title rounded-circle bg-soft bg-info text-info font-size-18">
                                            <i class="mdi mdi-litecoin"></i>
                                        </span>
                                    </div>
                                    <div class="media-body">
                                        <p class="text-muted">Litecoin</p>
                                        <h5>$ 63.61</h5>
                                        <p class="text-muted text-truncate mb-0">
                                            + 0.0001.12 ( 0.1 % )
                                            <i class="mdi mdi-arrow-up ms-1 text-success"></i>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end row -->
            </div>
        </div>
        <!-- end container -->
    </section>
    <!-- currency price section end -->

    <!-- about section start -->
    <section class="section pt-4 bg-white" id="about">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="text-center mb-5">
                        <div class="small-title">About us</div>
                        <h4>What is ICO Token?</h4>
                    </div>
                </div>
            </div>
            <div class="row align-items-center">
                <div class="col-lg-5">
                    <div class="text-muted">
                        <h4>Best ICO for your cryptocurrency business</h4>
                        <p>
                            If several languages coalesce, the grammar of
                            the resulting that of the individual new common
                            language will be more simple and regular than
                            the existing.
                        </p>
                        <p class="mb-4">
                            It would be necessary to have uniform
                            pronunciation.
                        </p>

                        <div class="button-items">
                            <a href="#" class="btn btn-success">Read More</a>
                            <a href="#" class="btn btn-outline-primary">How It work</a>
                        </div>

                        <div class="row mt-4">
                            <div class="col-lg-4 col-6">
                                <div class="mt-4">
                                    <h4>$ 6.2 M</h4>
                                    <p>Invest amount</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-6">
                                <div class="mt-4">
                                    <h4>16245</h4>
                                    <p>Users</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 ms-auto">
                    <div class="mt-4 mt-lg-0">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="card border">
                                    <div class="card-body">
                                        <div class="mb-3">
                                            <i class="mdi mdi-bitcoin h2 text-success"></i>
                                        </div>
                                        <h5>Lending</h5>
                                        <p class="text-muted mb-0">
                                            At vero eos et accusamus et
                                            iusto blanditiis
                                        </p>
                                    </div>
                                    <div class="card-footer bg-transparent border-top text-center">
                                        <a href="#" class="text-primary">Learn more</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="card border mt-lg-5">
                                    <div class="card-body">
                                        <div class="mb-3">
                                            <i class="mdi mdi-wallet-outline h2 text-success"></i>
                                        </div>
                                        <h5>Wallet</h5>
                                        <p class="text-muted mb-0">
                                            Quis autem vel eum iure
                                            reprehenderit
                                        </p>
                                    </div>
                                    <div class="card-footer bg-transparent border-top text-center">
                                        <a href="#" class="text-primary">Learn more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end row -->

            <hr class="my-5" />

            <div class="row">
                <div class="col-lg-12">
                    <client-slider />
                </div>
            </div>
            <!-- end row -->
        </div>
        <!-- end container -->
    </section>
    <!-- about section end -->

    <!-- Features start -->
    <section class="section" id="features">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="text-center mb-5">
                        <div class="small-title">Features</div>
                        <h4>Key features of the product</h4>
                    </div>
                </div>
            </div>
            <!-- end row -->

            <div class="row align-items-center pt-4">
                <div class="col-md-6 col-sm-8">
                    <div>
                        <img src="/images/crypto/features-img/img-1.png" alt="" class="img-fluid mx-auto d-block" />
                    </div>
                </div>
                <div class="col-md-5 ms-auto">
                    <div class="mt-4 mt-md-auto">
                        <div class="d-flex align-items-center mb-2">
                            <div class="features-number font-weight-semibold display-4 me-3">
                                01
                            </div>
                            <h4 class="mb-0">Lending</h4>
                        </div>
                        <p class="text-muted">
                            If several languages coalesce, the grammar of
                            the resulting language is more simple and
                            regular than of the individual will be more
                            simple and regular than the existing.
                        </p>
                        <div class="text-muted mt-4">
                            <p class="mb-2">
                                <i class="mdi mdi-circle-medium text-success me-1"></i>Donec pede justo vel aliquet
                            </p>
                            <p>
                                <i class="mdi mdi-circle-medium text-success me-1"></i>Aenean et nisl sagittis
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end row -->

            <div class="row align-items-center mt-5 pt-md-5">
                <div class="col-md-5">
                    <div class="mt-4 mt-md-0">
                        <div class="d-flex align-items-center mb-2">
                            <div class="features-number font-weight-semibold display-4 me-3">
                                02
                            </div>
                            <h4 class="mb-0">Wallet</h4>
                        </div>
                        <p class="text-muted">
                            It will be as simple as Occidental; in fact, it
                            will be Occidental. To an English person, it
                            will seem like simplified English, as a
                            skeptical Cambridge friend.
                        </p>
                        <div class="text-muted mt-4">
                            <p class="mb-2">
                                <i class="mdi mdi-circle-medium text-success me-1"></i>Donec pede justo vel aliquet
                            </p>
                            <p>
                                <i class="mdi mdi-circle-medium text-success me-1"></i>Aenean et nisl sagittis
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6  col-sm-8 ms-md-auto">
                    <div class="mt-4 me-md-0">
                        <img src="/images/crypto/features-img/img-2.png" alt="" class="img-fluid mx-auto d-block" />
                    </div>
                </div>
            </div>
            <!-- end row -->
        </div>
        <!-- end container -->
    </section>
    <!-- Features end -->

    <!-- Roadmap start -->
    <section class="section bg-white" id="roadmap">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="text-center mb-5">
                        <div class="small-title">Timeline</div>
                        <h4>Our Roadmap</h4>
                    </div>
                </div>
            </div>
            <!-- end row -->

            <div class="row mt-4">
                <div class="col-lg-12">
                        <timeline-slider />
                </div>
            </div>
            <!-- end row -->
        </div>
        <!-- end container -->
    </section>
    <!-- Roadmap end -->

    <!-- Team start -->
    <section class="section" id="team">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="text-center mb-5">
                        <div class="small-title">Team</div>
                        <h4>Meet our team</h4>
                    </div>
                </div>
            </div>
            <!-- end row -->

            <div class="col-lg-12">
                <team-slider />
            </div>
            <!-- end row -->
        </div>
        <!-- end container -->
    </section>
    <!-- Team end -->

    <!-- Blog start -->
    <section class="section bg-white" id="news">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="text-center mb-5">
                        <div class="small-title">Blog</div>
                        <h4>Latest News</h4>
                    </div>
                </div>
            </div>
            <!-- end row -->

            <div class="row">
                <div class="col-xl-4 col-sm-6">
                    <div class="blog-box mb-4 mb-xl-0">
                        <div class="position-relative">
                            <img src="/images/crypto/blog/img-1.jpg" alt="" class="rounded img-fluid mx-auto d-block" />
                            <div class="badge bg-success blog-badge font-size-11">
                                Cryptocurrency
                            </div>
                        </div>

                        <div class="mt-4 text-muted">
                            <p class="mb-2">
                                <i class="bx bx-calendar me-1"></i> 04 Mar,
                                2020
                            </p>
                            <h5 class="mb-3">
                                Donec pede justo, fringilla vele
                            </h5>
                            <p>
                                If several languages coalesce, the grammar
                                of the resulting language
                            </p>

                            <div>
                                <a href="#">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-4 col-sm-6">
                    <div class="blog-box mb-4 mb-xl-0">
                        <div class="position-relative">
                            <img src="/images/crypto/blog/img-2.jpg" alt="" class="rounded img-fluid mx-auto d-block" />
                            <div class="badge bg-success blog-badge font-size-11">
                                Cryptocurrency
                            </div>
                        </div>

                        <div class="mt-4 text-muted">
                            <p class="mb-2">
                                <i class="bx bx-calendar me-1"></i> 12 Feb,
                                2020
                            </p>
                            <h5 class="mb-3">Aenean ut eros et nisl</h5>
                            <p>
                                Everyone realizes why a new common language
                                would be desirable
                            </p>

                            <div>
                                <a href="#">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-4 col-sm-6">
                    <div class="blog-box mb-4 mb-xl-0">
                        <div class="position-relative">
                            <img src="/images/crypto/blog/img-3.jpg" alt="" class="rounded img-fluid mx-auto d-block" />
                            <div class="badge bg-success blog-badge font-size-11">
                                Cryptocurrency
                            </div>
                        </div>

                        <div class="mt-4 text-muted">
                            <p class="mb-2">
                                <i class="bx bx-calendar me-1"></i> 06 Jan,
                                2020
                            </p>
                            <h5 class="mb-3">
                                In turpis, pellentesque posuere
                            </h5>
                            <p>
                                To an English person, it will seem like
                                simplified English, as a skeptical Cambridge
                            </p>

                            <div>
                                <a href="#">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end row -->
        </div>
        <!-- end container -->
    </section>
    <!-- Blog end -->

    <!-- Faqs start -->
    <section class="section" id="faqs">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="text-center mb-5">
                        <div class="small-title">FAQs</div>
                        <h4>Frequently asked questions</h4>
                    </div>
                </div>
            </div>
            <!-- end row -->

            <div class="row">
                <div class="col-lg-12">
                    <div class="vertical-nav">
                             <b-tabs pills vertical nav-wrapper-class="col-lg-2 col-sm-4">
                  <b-tab active>
                    <template v-slot:title>
                      <i class="bx bx-help-circle nav-icon d-block mb-2"></i>
                      <p class="fw-bold mb-0">General Questions</p>
                    </template>
                    <b-card-text>
                      <div class="card">
                        <div class="card-body">
                          <h4 class="card-title mb-4">General Questions</h4>
                          <div role="tablist">
                            <b-card no-body class="custom-accordion shadow-none mb-3">
                              <b-card-header header-tag="header" role="tab">
                                <a
                                  href="javascript: void(0);"
                                  class="accordion-list collapsed p-0"
                                  v-b-toggle.accordion-1
                                >
                                  <div>What is Lorem Ipsum ?</div>
                                  <i class="mdi mdi-minus accor-plus-icon"></i>
                                </a>
                              </b-card-header>
                              <b-collapse
                                id="accordion-1"
                                visible
                                accordion="my-accordion"
                                role="tabpanel"
                              >
                                <b-card-body>
                                  <p
                                    class="mb-0"
                                  >Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.</p>
                                </b-card-body>
                              </b-collapse>
                            </b-card>

                            <b-card no-body class="custom-accordion shadow-none mb-3">
                              <b-card-header header-tag="header" role="tab">
                                <a
                                  href="javascript: void(0);"
                                  class="accordion-list p-0"
                                  v-b-toggle.accordion-2
                                >
                                  <div>Why do we use it ?</div>
                                  <i class="mdi mdi-minus accor-plus-icon"></i>
                                </a>
                              </b-card-header>
                              <b-collapse
                                id="accordion-2"
                                visible
                                accordion="my-accordion"
                                role="tabpanel"
                              >
                                <b-card-body>
                                  <b-card-text>
                                    <p
                                      class="mb-0"
                                    >If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages.</p>
                                  </b-card-text>
                                </b-card-body>
                              </b-collapse>
                            </b-card>

                            <b-card no-body class="custom-accordion shadow-none mb-3">
                              <b-card-header header-tag="header" role="tab">
                                <a
                                  href="javascript: void(0);"
                                  class="accordion-list p-0"
                                  v-b-toggle.accordion-3
                                >
                                  <div>Where does it come from ?</div>
                                  <i class="mdi mdi-minus accor-plus-icon"></i>
                                </a>
                              </b-card-header>
                              <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                  <b-card-text>
                                    <p
                                      class="mb-0"
                                    >It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental.</p>
                                  </b-card-text>
                                </b-card-body>
                              </b-collapse>
                            </b-card>

                            <b-card no-body class="custom-accordion shadow-none mb-0">
                              <b-card-header header-tag="header" role="tab">
                                <a
                                  href="javascript: void(0);"
                                  class="accordion-list collapsed p-0"
                                  v-b-toggle.accordion-4
                                >
                                  <div>Where can I get some ?</div>
                                  <i class="mdi mdi-minus accor-plus-icon"></i>
                                </a>
                              </b-card-header>
                              <b-collapse
                                id="accordion-4"
                                visible
                                accordion="my-accordion"
                                role="tabpanel"
                              >
                                <b-card-body>
                                  <p
                                    class="mb-0"
                                  >To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth.</p>
                                </b-card-body>
                              </b-collapse>
                            </b-card>
                          </div>
                        </div>
                      </div>
                    </b-card-text>
                  </b-tab>
                  <b-tab>
                    <template v-slot:title>
                      <i class="bx bx-receipt nav-icon d-block mb-2"></i>
                      <p class="fw-bold mb-0">Token sale</p>
                    </template>
                    <b-card-text>
                      <div class="card">
                        <div class="card-body">
                          <h4 class="card-title mb-4">Token Sale</h4>
                          <div role="tablist">
                            <b-card no-body class="custom-accordion shadow-none mb-3">
                              <b-card-header header-tag="header" role="tab">
                                <a
                                  href="javascript: void(0);"
                                  class="accordion-list p-0"
                                  v-b-toggle.accordion-2
                                >
                                  <div>Why do we use it ?</div>
                                  <i class="mdi mdi-minus accor-plus-icon"></i>
                                </a>
                              </b-card-header>
                              <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                  <b-card-text>
                                    <p
                                      class="mb-0"
                                    >If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages.</p>
                                  </b-card-text>
                                </b-card-body>
                              </b-collapse>
                            </b-card>
                            <b-card no-body class="custom-accordion shadow-none mb-3">
                              <b-card-header header-tag="header" role="tab">
                                <a
                                  href="javascript: void(0);"
                                  class="accordion-list collapsed p-0"
                                  v-b-toggle.accordion-1
                                >
                                  <div>What is Lorem Ipsum ?</div>
                                  <i class="mdi mdi-minus accor-plus-icon"></i>
                                </a>
                              </b-card-header>
                              <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                  <p
                                    class="mb-0"
                                  >Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.</p>
                                </b-card-body>
                              </b-collapse>
                            </b-card>
                            <b-card no-body class="custom-accordion shadow-none mb-3">
                              <b-card-header header-tag="header" role="tab">
                                <a
                                  href="javascript: void(0);"
                                  class="accordion-list collapsed p-0"
                                  v-b-toggle.accordion-4
                                >
                                  <div>Where can I get some ?</div>
                                  <i class="mdi mdi-minus accor-plus-icon"></i>
                                </a>
                              </b-card-header>
                              <b-collapse
                                id="accordion-4"
                                visible
                                accordion="my-accordion"
                                role="tabpanel"
                              >
                                <b-card-body>
                                  <p
                                    class="mb-0"
                                  >To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth.</p>
                                </b-card-body>
                              </b-collapse>
                            </b-card>
                            <b-card no-body class="custom-accordion shadow-none mb-0">
                              <b-card-header header-tag="header" role="tab">
                                <a
                                  href="javascript: void(0);"
                                  class="accordion-list p-0"
                                  v-b-toggle.accordion-3
                                >
                                  <div>Where does it come from ?</div>
                                  <i class="mdi mdi-minus accor-plus-icon"></i>
                                </a>
                              </b-card-header>
                              <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                  <b-card-text>
                                    <p
                                      class="mb-0"
                                    >It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental.</p>
                                  </b-card-text>
                                </b-card-body>
                              </b-collapse>
                            </b-card>
                          </div>
                        </div>
                      </div>
                    </b-card-text>
                  </b-tab>
                  <b-tab>
                    <template v-slot:title>
                      <i class="bx bx-timer d-block nav-icon mb-2"></i>
                      <p class="fw-bold mb-0">Roadmap</p>
                    </template>
                    <b-card-text>
                      <div class="card">
                        <div class="card-body">
                          <h4 class="card-title mb-4">Roadmap</h4>
                          <b-card no-body class="custom-accordion shadow-none mb-3">
                            <b-card-header header-tag="header" role="tab">
                              <a
                                href="javascript: void(0);"
                                class="accordion-list collapsed p-0"
                                v-b-toggle.demoaccordion-1
                              >
                                <div>Where can I get some ?</div>
                                <i class="mdi mdi-minus accor-plus-icon"></i>
                              </a>
                            </b-card-header>
                            <b-collapse
                              id="demoaccordion-1"
                              visible
                              accordion="accordion-1"
                              role="tabpanel"
                            >
                              <b-card-body>
                                <p
                                  class="mb-0"
                                >To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth.</p>
                              </b-card-body>
                            </b-collapse>
                          </b-card>
                          <b-card no-body class="custom-accordion shadow-none mb-3">
                            <b-card-header header-tag="header" role="tab">
                              <a
                                href="javascript: void(0);"
                                class="accordion-list collapsed p-0"
                                v-b-toggle.demoaccordion-2
                              >
                                <div>What is Lorem Ipsum ?</div>
                                <i class="mdi mdi-minus accor-plus-icon"></i>
                              </a>
                            </b-card-header>
                            <b-collapse
                              id="demoaccordion-2"
                              accordion="accordion-1"
                              role="tabpanel"
                            >
                              <b-card-body>
                                <p
                                  class="mb-0"
                                >Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.</p>
                              </b-card-body>
                            </b-collapse>
                          </b-card>
                          <b-card no-body class="custom-accordion shadow-none mb-3">
                            <b-card-header header-tag="header" role="tab">
                              <a
                                href="javascript: void(0);"
                                class="accordion-list p-0"
                                v-b-toggle.demoaccordion-3
                              >
                                <div>Why do we use it ?</div>
                                <i class="mdi mdi-minus accor-plus-icon"></i>
                              </a>
                            </b-card-header>
                            <b-collapse
                              id="demoaccordion-3"
                              visible
                              accordion="accordion-1"
                              role="tabpanel"
                            >
                              <b-card-body>
                                <b-card-text>
                                  <p
                                    class="mb-0"
                                  >If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages.</p>
                                </b-card-text>
                              </b-card-body>
                            </b-collapse>
                          </b-card>
                          <b-card no-body class="custom-accordion shadow-none mb-0">
                            <b-card-header header-tag="header" role="tab">
                              <a
                                href="javascript: void(0);"
                                class="accordion-list p-0"
                                v-b-toggle.demoaccordion-4
                              >
                                <div>Where does it come from ?</div>
                                <i class="mdi mdi-minus accor-plus-icon"></i>
                              </a>
                            </b-card-header>
                            <b-collapse
                              id="demoaccordion-4"
                              accordion="accordion-1"
                              role="tabpanel"
                            >
                              <b-card-body>
                                <b-card-text>
                                  <p
                                    class="mb-0"
                                  >It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental.</p>
                                </b-card-text>
                              </b-card-body>
                            </b-collapse>
                          </b-card>
                        </div>
                      </div>
                    </b-card-text>
                  </b-tab>
                </b-tabs>
                    </div>
                    <!-- end vertical nav -->
                </div>
            </div>
            <!-- end row -->
        </div>
        <!-- end container -->
    </section>
    <!-- Faqs end -->

    <!-- Footer start -->
    <footer class="landing-footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-sm-6">
                    <div class="mb-4 mb-lg-0">
                        <h5 class="mb-3 footer-list-title">Company</h5>
                        <ul class="list-unstyled footer-list-menu">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">News</a></li>
                            <li><a href="#">FAQs</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="mb-4 mb-lg-0">
                        <h5 class="mb-3 footer-list-title">Resources</h5>
                        <ul class="list-unstyled footer-list-menu">
                            <li><a href="#">Whitepaper</a></li>
                            <li><a href="#">Token sales</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="mb-4 mb-lg-0">
                        <h5 class="mb-3 footer-list-title">Links</h5>
                        <ul class="list-unstyled footer-list-menu">
                            <li><a href="#">Tokens</a></li>
                            <li><a href="#">Roadmap</a></li>
                            <li><a href="#">FAQs</a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6">
                    <div class="mb-4 mb-lg-0">
                        <h5 class="mb-3 footer-list-title">Latest News</h5>
                        <div class="blog-post">
                            <a href="#" class="post">
                                <div class="badge badge-soft-success font-size-11 mb-3">
                                    Cryptocurrency
                                </div>
                                <h5 class="post-title">
                                    Donec pede justo aliquet nec
                                </h5>
                                <p class="mb-0">
                                    <i class="bx bx-calendar me-1"></i> 04
                                    Mar, 2020
                                </p>
                            </a>
                            <a href="#" class="post">
                                <div class="badge badge-soft-success font-size-11 mb-3">
                                    Cryptocurrency
                                </div>
                                <h5 class="post-title">
                                    In turpis, Pellentesque
                                </h5>
                                <p class="mb-0">
                                    <i class="bx bx-calendar me-1"></i> 12
                                    Mar, 2020
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end row -->

            <hr class="footer-border my-5" />

            <div class="row">
                <div class="col-lg-6">
                    <div class="mb-4">
                        <img src="/images/logo-light.png" alt="" height="20" />
                    </div>

                    <p class="mb-2">
                        2020 © Skote. Design & Develop by Themesbrand
                    </p>
                    <p>
                        It will be as simple as occidental in fact, it will
                        be to an english person, it will seem like
                        simplified English, as a skeptical
                    </p>
                </div>
            </div>
        </div>
        <!-- end container -->
    </footer>
</div>
</template>
