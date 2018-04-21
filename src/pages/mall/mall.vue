<template>
    <header>
        <ul class="header_list">
            <li class="active">商城</li>
            <li>家具</li>
            <li>桌子</li>
            <li>桌子</li>
            <li>桌子</li>
            <li>桌子</li>
            <li>桌子</li>
            <li>桌子</li>
            <li>桌子</li>
        </ul>
    </header>

</template>

<script>
import { onShare } from "../../utils/share"

export default {
    onShareAppMessage(res) {
        return onShare(res, this.userInfo.nickName, "fromID")
    }
}
</script>

<style>
.header_list{
    width: 100%;
    white-space: nowrap;
}
.header_list .active {
    color: gold;
    border-bottom: 1px solid gold;
}
.header_list li {
    display: inline-block;
    font-size: 16px;
    padding: 5px 6px;
}

</style>
