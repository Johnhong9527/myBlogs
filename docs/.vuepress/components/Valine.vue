<template>
    <div id="vcomments"></div>
</template>

<script>
    export default {
        name: 'Valine',
        mounted: function(){
            // require window
            const Valine = require('valine');
            if (typeof window !== 'undefined') {
                this.window = window
                window.AV = require('leancloud-storage')

            }

            new Valine({
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
        },
    }
</script>