<template>
    <div class="pagination">
        
        <button :disabled="pageNo==1" @click="$emit('getpageNo',pageNo-1)">上一页</button>
        <button v-if="startNum.start>1" @click="$emit('getpageNo',1)" :class="{active:pageNo ==1}" >1</button>
        <button v-if="startNum.start >2">···</button>

        <button v-for="(page,index) in startNum.end" :key="index" v-if="page >= startNum.start"  @click="$emit('getpageNo',page)" :class="{active:pageNo==page}">{{page}}</button>

        <button v-if="startNum.end <= totalPage-1">···</button>
        <button v-if="startNum.end < totalPage" @click="$emit('getpageNo',totalPage)" :class="{active:pageNo==totalPage}">{{totalPage}}</button>
        <button :disabled="pageNo == totalPage" @click="$emit('getpageNo',pageNo+1)" >下一页</button>

        <button style="margin-left: 30px">共 {{total}} 条</button>
    </div>
</template>

<script>
    export default {
        name: "Pagination",
        props:['pageNo','pageSize','total','continues'],
        computed:{
            totalPage(){
                return Math.ceil(this.total/this.pageSize)
            },
            startNum(){
                 let start = 0, end = 0;
                 if(this.continues>this.totalPage){
                    start = 1;
                    end = this.totalPage
                 }else{
                    start = this.pageNo - Math.floor(this.continues/2);
                    end = this.pageNo + Math.floor(this.continues/2);
                    if(start<=0){
                        start = 1,
                        end = this.continues
                    }
                    if(end > this.totalPage){
                        start = this.totalPage - this.continues + 1
                        end = this.totalPage
                    }
                 }
                return { start,end }
            }
        }
    }
</script>

<style lang="less" scoped>
    .pagination {
        text-align: center;
        button {
            margin: 0 5px;
            background-color: #f4f4f5;
            color: #606266;
            outline: none;
            border-radius: 2px;
            padding: 0 4px;
            vertical-align: top;
            display: inline-block;
            font-size: 13px;
            min-width: 35.5px;
            height: 28px;
            line-height: 28px;
            cursor: pointer;
            box-sizing: border-box;
            text-align: center;
            border: 0;

            &[disabled] {
                color: #c0c4cc;
                cursor: not-allowed;
            }

            &.active {
                cursor: not-allowed;
                background-color: #409eff;
                color: #fff;
            }
        }
    }
</style>