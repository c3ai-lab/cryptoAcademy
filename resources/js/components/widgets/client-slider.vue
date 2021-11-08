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
<carousel :perPageCustom="perPage" :navigationEnabled="false" :autoplay="true" :scrollPerPage="false" :paginationEnabled="false">
    <slide>
        <div class="client-images">
            <img src="/images/clients/1.png" alt="client-img" class="mx-auto img-fluid d-block" />
        </div>
    </slide>
    <slide>
        <div class="client-images">
            <img src="/images/clients/2.png" alt="client-img" class="mx-auto img-fluid d-block" />
        </div>
    </slide>
    <slide>
        <div class="client-images">
            <img src="/images/clients/3.png" alt="client-img" class="mx-auto img-fluid d-block" />
        </div>
    </slide>
    <slide>
        <div class="client-images">
            <img src="/images/clients/4.png" alt="client-img" class="mx-auto img-fluid d-block" />
        </div>
    </slide>
    <slide>
        <div class="client-images">
            <img src="/images/clients/5.png" alt="client-img" class="mx-auto img-fluid d-block" />
        </div>
    </slide>
    <slide>
        <div class="client-images">
            <img src="/images/clients/6.png" alt="client-img" class="mx-auto img-fluid d-block" />
        </div>
    </slide>
</carousel>
</template>
