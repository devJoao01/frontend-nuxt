<template>
    <header ref="header">
        <v-container>
            <div class="content">
                <div class="logo">
                    <NuxtLink to="/"><v-img src="@/assets/logo.png" alt="Descrição da imagem" width="60"
                            height="60" />
                    </NuxtLink>
                </div>
                <nav>
                    <NuxtLink to="/" exact :class="{ active: isActive('/') }">Example</NuxtLink>
                </nav>
            </div>
        </v-container>
    </header>
</template>

<script>
export default {
    methods: {
        isActive(route) {
            return this.$route.path === route;
        },
    },
};
</script>

<style scoped lang="scss">
header {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 8%);
    position: relative;

    .content {
        display: flex;
        justify-content: space-between;
        align-items: center;

        >nav {
            display: none;
            align-items: center;
            gap: 15px;

            @media (min-width: 992px) {
                display: flex;
            }

            >a {
                text-decoration: none;
                position: relative;
                font-size: 15px;

                &::before {
                    content: "";
                    position: absolute;
                    width: 0;
                    height: 2px;
                    background-color: #000;
                    transition: all 0.4s ease;
                    bottom: -2px;
                }

                &:hover,
                &.active {
                    &:before {
                        width: 100%;
                    }
                }
            }
        }
    }
}
</style>