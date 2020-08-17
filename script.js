var button = document.getElementById("create");
var input = document.getElementById("input");
var list = document.getElementById("list");

function delData(index){
  // 刪除資料
  todolist.splice(index,1);
  //更新顯示畫面
  render()
}

//印出來矩陣
function render(){
  localStorage.setItem("listItems", JSON.stringify(todolist))
  var content="";
  for(i=0; i<=todolist.length-1; i++){
    content=content+"<div><button class='buttonstyle' onclick='delData("+i+")'>"+"刪除"+"</button>"+todolist[i]+"</div>";
  }
  list.innerHTML=content
}

var todolist= JSON.parse(localStorage.getItem("listItems")) || [];
render()

function addData(){
  if(input.value != "" && input.value !=" "){
    todolist.push(input.value);
    input.value="";
    render()
  }else {
    alert("you didn't input anything, Please enter again")
  }

//  alert(input.value)
}