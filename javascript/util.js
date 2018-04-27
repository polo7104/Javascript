
// Input: ['dog', 'dogs', 'doge']
// Output: 'dog'
function getCommonPrefix(arr){
    var r = arr.reduce( (a,b,i,arr) => {
        var common='';
        for(var x=0; x<a.length; x++){
            if(b[x]){
                if(a[x]==b[x]){
                    common += a[x];
                }
            }
        }
        return common
    })
    return r;
}