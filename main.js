var board = new Array();
var score = 0;
$(function(){
    newgame();
})

function newgame(){
  //初始化棋盘
  init();
  //在随机两个格子生成数字
}
function init(){
  for(var i=0;i<4;i++){
    for(var j=0;j<4;j++){
      var gridCell = $('#grid-cell-'+i+'-'+j);
      gridCell.css('top',getPosTop(i,j));
      gridCell.css('left',getPosLeft(i,j));
    }
  }
  for (var i = 0; i < 4; i++) {
      board[i] = new Array();
      //初始化board的值
      for(var j = 0;i<4;j++){
        board[i][j] = 0;
      }
  }
  updateBoardView();
}

function updateBoardView(){

}


