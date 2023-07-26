function tinh(){
let a = document.getElementById("a").value;
let b = document.getElementById("b").value;
let Ketqua = "Phương trình: "+a+"x+ "+ b + "=0 ";
if (a == 0 && b == 0){
    Ketqua = "Vô số nghiệm"
}else if (a == 0 && b !=0){
    Ketqua = "Vô nghiệm"
}else if (a!=0){
    Ketqua = "Có nghiệm là: "+(-b/a)
}
document.getElementById("ketqua").innerHTML = Ketqua
}
