function arrfilter(arr){
    arr.reduce(function(aggr,val){
        if(aggr!==val){
            return aggr
        }
    },val)
}console.log(arrfilter([1,1,5,5,88,91,22]));
