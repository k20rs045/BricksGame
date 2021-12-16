// This is a JavaScript file
var ncmb = new NCMB("5853cb26f8a155c90bb80a3e341f021f497ef77496311ab6ba01f38c561e50d3","d1b81480fc74e86cc1bb2d28123e1107c23c9055afd935b396b264df60e42dba");

var save_mb = function(score){
  var name = prompt("Please write your name: ");
  var Score = new ncmb.DataStore("BricksGame");
  new Score().set("name",name).set("score",score).save();
}