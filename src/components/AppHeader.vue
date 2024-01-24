<script>
export default {
    data() {
        return {

        };
    },
    methods: {

    }
}
</script>

<template>


    <header>

        <div class="container">
            <div>

                <h1>boolflix</h1>
                
            </div>

            <div class="cercaTesto">

                <form>
                    <input type="text"  style="width: 100px; height: 20px;">
                    <button style="width: 50px; height: 30px;">
                           search
                    </button>

                </form>
                
            </div>

        </div>



        
    </header>



</template>

<style lang="scss" scoped>
.container{
    display: flex;
    justify-content: space-around;
    border: 1px solid black;
    height: 100px;
    width: 100%;

    .cercaTesto{
        display: flex;
    }
}

</style>
