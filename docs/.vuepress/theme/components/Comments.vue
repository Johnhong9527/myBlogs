<template>
    <div class="vcomment" v-if="data.comments === 'true'">
        <div id="vcomments" key="this_key"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                this_key: ''
            }
        },
        created() {
            this.createValine()
        },
        computed: {
            data() {
                let arr_1 = this.$page.frontmatter;
                let str_1 = '';
                for (let i in arr_1) {
                    str_1 += arr_1[i];
                }
                let arr_2 = str_1.split(' ');
                let obj = {};
                for (let i in arr_2) {
                    let str_arr = str_1.split(' ')[i].split(':');
                    obj[str_arr[0]] = str_arr[1]
                }
                return obj
            },
        },
        mounted: function () {

        },

        methods: {
            createValine() {
                this.$nextTick(() => {
                    const Valine = require('valine');
                    // window.AV = require('leancloud-storage');
                    const valine = new Valine({
                        el: '#vcomments',
                        appId: 'O2bEd2bFE0R0IEE35j9sHGhd-gzGzoHsz',
                        appKey: 'fF4QkBG5GPghnvV7nqclEqty',
                        notify: false,
                        verify: false,
                        visitor: true,
                        avatar: 'vBPlRNwUOJlHqfmoSAmXz5Qk',
                        path: window.location.pathname,
                        placeholder: '欢迎留言与我分享您的想法...',
                    });
                    // this.valineRefresh = false
                })
            }
        },
        watch: {
            '$route'(to, from) {
                if (to.path !== from.path) {
                    setTimeout(() => {
                        //重新刷新valine
                        // this.createValine()
                        this.this_key = Date.parse(new Date()) / 1000
                    }, 180)
                }
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    #vcomments {
        max-width 740px
        padding 10px
        display block;
        margin-left auto;
        margin-right auto;
    }
</style>