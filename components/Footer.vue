<template>
    <footer ref="footer">
        <v-list>
            <v-container>
                <v-list-navgation>
                    <div class="navigation">
                        <NuxtLink to="/" :class="{ 'active': isActive('/') }">Example</NuxtLink>
                    </div>
                </v-list-navgation>
            </v-container>
        </v-list>
        <SocialMedia />
    </footer>
</template>

<script>

export default {
    methods: {
        isActive(route) {
            return this.$route.path === route
        }
    }
}
</script>

<style lang="scss">
footer {
    box-shadow: 0 3px 6px #000;
    padding: 30px 0 0;

    .v-list-navgation {
        text-align: center;
    }

    .navigation {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: -20px;

        a {
            text-decoration: none;
            position: relative;
            font-size: 15px;

            &::before {
                content: '';
                position: absolute;
                width: 0;
                height: 2px;
                background-color: #000;
                transition: all .5s ease;
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
</style>