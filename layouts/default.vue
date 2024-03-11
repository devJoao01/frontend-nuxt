<template>
    <div id="app">
        <Header ref="header" />
        <wrapper ref="wrapper">
            <transition name="fade" mode="out-in">
                <nuxt />
            </transition>
        </wrapper>
        <Footer ref="footer" />
    </div>
</template>

<script>
export default {
    mounted() {
        setTimeout(() => {
            this.wrapperMinHeight();
            window.addEventListener("resize", this.wrapperMinHeight);
        }, 900);
    },
    methods: {
        wrapperMinHeight() {
            this.$nextTick(() => {
                let wrapper = this.$refs.wrapper,
                    headerHeight = this.$refs.header.$el.clientHeight,
                    footerHeight = this.$refs.footer.$el.clientHeight,
                    wrapperHeight = window.innerHeight - (headerHeight + footerHeight);
                wrapper.style.minHeight = `${wrapperHeight}px`;
                wrapper.style.display = 'block';
            });
        },
    },
    beforeUnmount() {
        window.removeEventListener("resize", this.wrapperMinHeight);
    },
}
</script>