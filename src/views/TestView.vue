<template>
    <div> 
        <div class="count_con">
            {{ count }}
            <button v-on:click='add_count'>+</button>
            <button  @click='sub_count'>-</button>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: mapState([
        'count'
    ]),
    methods: {
        add_count () {
            this.$store.commit('addcount')
        },
         sub_count () {
            this.$store.commit('subcount')
        }
    }
}
</script>

<style>
.count_con{
    align-items: center;
    padding:6rem;
}

</style>
