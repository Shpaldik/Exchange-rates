<template>
    <section>
        <div class="bg-bgGray w-full h-auto rounded-lg py-4">
            <div class="flex justify-between items-center">
                <p class="text-textGray ml-5">Asset</p>
                <div class="flex gap-20 ml-96 mr-72">
                    <p class="text-textGray">Price</p>
                    <p class="text-textGray">Change</p>
                    <p class="text-textGray">Volume</p>
                </div>    
            </div>
            <div class="border border-gray-800 mt-3"></div>

            <div class="flex justify-between items-center m-5">
                <img src="/public//icon.png" alt="">
                <p>1inch</p>
                <div class="flex gap-20 ml-80 text-white">
                    <p>$30.000</p>
                    <p>15%</p>
                    <p>2.000.000m</p>
                </div>
                <button class="border border-cyan text-cyan rounded-lg py-1 px-4">Trade</button>
                
            </div>
        </div>
    </section>
</template>

<script>

export default {
    data() {
        return {
        }
    }
}

</script>