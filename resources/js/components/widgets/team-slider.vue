<script>
import {
    Carousel,
    Slide
} from "vue-carousel";
export default {
    components: {
        Carousel,
        Slide
    },
    data() {
        return {
            perPage: [
                [576, 2],
                [768, 3],
                [992, 4]
            ]
        };
    },
}
</script>
<template>
<carousel :spacePadding="25" :perPageCustom="perPage" :navigationEnabled="false" :autoplay="true" :scrollPerPage="false" :paginationEnabled="false">
    <slide>
        <div class="card text-center team-box">
            <div class="card-body">
                <div>
                    <img src="/images/users/avatar-2.jpg" alt="" class="rounded" />
                </div>

                <div class="mt-3">
                    <h5>Mark Hurley</h5>
                    <P class="text-muted mb-0">CEO & Lead</P>
                </div>
            </div>
            <div class="card-footer bg-transparent border-top">
                <div class="d-flex mb-0 team-social-links">
                    <div class="flex-fill">
                        <a href="#" data-toggle="tooltip" title="Facebook">
                            <i class="mdi mdi-facebook"></i>
                        </a>
                    </div>
                    <div class="flex-fill">
                        <a href="#" data-toggle="tooltip" title="Linkedin">
                            <i class="mdi mdi-linkedin"></i>
                        </a>
                    </div>
                    <div class="flex-fill">
                        <a href="#" data-toggle="tooltip" title="Google">
                            <i class="mdi mdi-google"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </slide>
    <slide>
        <div class="card text-center team-box">
            <div class="card-body">
                <div>
                    <img src="/images/users/avatar-3.jpg" alt="" class="rounded" />
                </div>

                <div class="mt-3">
                    <h5>Calvin Smith</h5>
                    <P class="text-muted mb-0">Blockchain developer</P>
                </div>
            </div>
            <div class="card-footer bg-transparent border-top">
                <div class="d-flex mb-0 team-social-links">
                    <div class="flex-fill">
                        <a href="#" data-toggle="tooltip" title="Facebook">
                            <i class="mdi mdi-facebook"></i>
                        </a>
                    </div>
                    <div class="flex-fill">
                        <a href="#" data-toggle="tooltip" title="Linkedin">
                            <i class="mdi mdi-linkedin"></i>
                        </a>
                    </div>
                    <div class="flex-fill">
                        <a href="#" data-toggle="tooltip" title="Google">
                            <i class="mdi mdi-google"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </slide>
    <slide>
        <div class="card text-center team-box">
            <div class="card-body">
                <div>
                    <img src="/images/users/avatar-8.jpg" alt="" class="rounded" />
                </div>
                <div class="mt-3">
                    <h5>Vickie Sample</h5>
                    <P class="text-muted mb-0">Designer</P>
                </div>
            </div>
            <div class="card-footer bg-transparent border-top">
                <div class="d-flex mb-0 team-social-links">
                    <div class="flex-fill">
                        <a href="#" data-toggle="tooltip" title="Facebook">
                            <i class="mdi mdi-facebook"></i>
                        </a>
                    </div>
                    <div class="flex-fill">
                        <a href="#" data-toggle="tooltip" title="Linkedin">
                            <i class="mdi mdi-linkedin"></i>
                        </a>
                    </div>
                    <div class="flex-fill">
                        <a href="#" data-toggle="tooltip" title="Google">
                            <i class="mdi mdi-google"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </slide>
    <slide>
        <div class="card text-center team-box">
            <div class="card-body">
                <div>
                    <img src="/images/users/avatar-5.jpg" alt="" class="rounded" />
                </div>

                <div class="mt-3">
                    <h5>Alma Farley</h5>
                    <P class="text-muted mb-0">App developer</P>
                </div>
            </div>
            <div class="card-footer bg-transparent border-top">
                <div class="d-flex mb-0 team-social-links">
                    <div class="flex-fill">
                        <a href="#" data-toggle="tooltip" title="Facebook">
                            <i class="mdi mdi-facebook"></i>
                        </a>
                    </div>
                    <div class="flex-fill">
                        <a href="#" data-toggle="tooltip" title="Linkedin">
                            <i class="mdi mdi-linkedin"></i>
                        </a>
                    </div>
                    <div class="flex-fill">
                        <a href="#" data-toggle="tooltip" title="Google">
                            <i class="mdi mdi-google"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </slide>

    <slide>
        <div class="card text-center team-box">
            <div class="card-body">
                <div>
                    <img src="/images/users/avatar-1.jpg" alt="" class="rounded" />
                </div>

                <div class="mt-3">
                    <h5>Amy Hood</h5>
                    <P class="text-muted mb-0">Designer</P>
                </div>
            </div>
            <div class="card-footer bg-transparent border-top">
                <div class="d-flex mb-0 team-social-links">
                    <div class="flex-fill">
                        <a href="#" data-toggle="tooltip" title="Facebook">
                            <i class="mdi mdi-facebook"></i>
                        </a>
                    </div>
                    <div class="flex-fill">
                        <a href="#" data-toggle="tooltip" title="Linkedin">
                            <i class="mdi mdi-linkedin"></i>
                        </a>
                    </div>
                    <div class="flex-fill">
                        <a href="#" data-toggle="tooltip" title="Google">
                            <i class="mdi mdi-google"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </slide>
</carousel>
</template>

