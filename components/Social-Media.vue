<template>
    <v-container>
        <v-list>
            <v-list-item-icon>
                <a href="https://github.com/devJoao01" target="_blank">
                    <v-icon size="26">mdi-github</v-icon>
                </a>
            </v-list-item-icon>
            <v-list-item-icon>
                <a href="#" target="_blank">
                    <v-icon size="26">mdi-skype</v-icon>
                </a>
            </v-list-item-icon>
            <v-list-item-icon>
                <a href="mailto:jvlima0002020@gmail.com">
                    <v-icon size="26">mdi-gmail</v-icon>
                </a>
            </v-list-item-icon>
            <v-list-item-icon>
                <a href="#" target="_blank">
                    <v-icon size="26">mdi-linkedin</v-icon>
                </a>
            </v-list-item-icon>
        </v-list>
    </v-container>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.v-list {
    display: flex;
    justify-content: center;
    gap: 12px;
    overflow: hidden;
    a {
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all .10s ease;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        text-decoration: none;

        i {
            color: #000;
        }
    }
}
</style>