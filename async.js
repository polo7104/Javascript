function getData(){
  return new Promise(function (resolve, reject){
    $.get('url',function(data){
      resolve(data);
    })
  })
}

getData().then(function (data){
  console.log(data);
})