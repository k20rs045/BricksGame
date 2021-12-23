
var ncmb = new NCMB("5853cb26f8a155c90bb80a3e341f021f497ef77496311ab6ba01f38c561e50d3", "d1b81480fc74e86cc1bb2d28123e1107c23c9055afd935b396b264df60e42dba");

var saveScore = ncmb.DataStore("BricksGame");


function save_mb(score){
  var name = prompt("Please write your name.");
  if (name == null) {
      console.log("null");
      return;
  }
  if (name === "") {
      console.log("未入力");
      alert("Not entered.");
      save_mb(score);
      return;
  }
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

function get_mb() {
  saveScore.order("score",true).limit(5).fetchAll()
  .then(function(objects){
    var result = "RANKING";
    for (var i=0; i<objects.length; i++) {
        var name = objects[i].get("name");
        var score = objects[i].get("score");
        result = result + "\n " + (i+1) + "番: "+ name + "さん - " + score + "点";
    }
    alert(result);
  })
  .catch(function(err){
    console.log("Error: " + err);
  })
}

function setData(array) {
   var table = document.getElementById("rankingTable");
    for (i=0; i<array.length; i++) {
        // 名前の設定
        var name = table.rows[i].cells[1];
        name.innerHTML = array[i].name + "さん";
        // スコアの設定
        var score = table.rows[i].cells[2];
        score.innerHTML = array[i].score + "連打";
    }   
}