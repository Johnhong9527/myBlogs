<template>
    <main class="page">

        <Comments/>
        <slot name="top"/>

        <Content class="theme-default-content"/>

        <PageEdit/>
        <PageNav v-bind="{ sidebarItems }"/>
        <slot name="bottom"/>
        <Comments v-bind:is="viewComments"></Comments>

    </main>
</template>

<script>
    import PageEdit from '@theme/components/PageEdit.vue'
    import PageNav from '@theme/components/PageNav.vue'
    import Comments from './Comments.vue'

    export default {
        components: {PageEdit, PageNav, Comments},
        props: ['sidebarItems'],
        data (){
            return {
                viewComments: 'Comments',
            }
        },
    }
</script>

<style lang="stylus">
    @require '../styles/wrapper.styl'

    .page
        padding-bottom 2rem
        display block

</style>
