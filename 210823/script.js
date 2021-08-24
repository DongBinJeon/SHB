$(document).ready(function (){
    let ov = $("select").val();

    $("button").on("click", function (){
        if($("select").val() == 0){
            alert("취미를 선택해주세요.");
        }else if($("select").val() == 1){
            alert("홍길동님의 취미는 프로그래밍이군요");
        }else if($("select").val() == 2){
            alert("홍길동님의 취미는 독서이군요");
        }else if($("select").val() == 3){
            alert("홍길동님의 취미는 운동이군요");
        }else if($("select").val() == 4){
            alert("홍길동님의 취미는 게임이군요");
        }
    });






});