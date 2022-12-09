let Physics;
let Chemistry;
let Biology;
Physics=prompt("Nhập điểm Lý");
Chemistry=prompt("Nhập điểm Hóa");
Biology=prompt("Nhập điểm Sinh")
let Physics_score=parseInt(Physics);
let Chemistry_score=parseInt(Chemistry);
let Biology_score=parseInt(Biology);
let average_score=(Physics_score+Chemistry_score+Biology_score)/3;
document.write("Điểm trung bình là :"+ average_score);


