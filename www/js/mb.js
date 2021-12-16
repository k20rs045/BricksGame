
var ncmb = new NCMB("5853cb26f8a155c90bb80a3e341f021f497ef77496311ab6ba01f38c561e50d3", "d1b81480fc74e86cc1bb2d28123e1107c23c9055afd935b396b264df60e42dba");

function save_mb(score){
  let name = prompt("Please write your name: ","");
  let saveScore = ncmb.DataStore("BricksGame");
  let saveData = new saveScore();
  saveData.set("name",name).set("score",score)
    .save()
    .then (function(m){
      console.log("保存に成功しました。");
    })
    .catch(function(error){
      console.log("保存に失敗しました。");
    })   
}