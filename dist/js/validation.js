$(function(){
    $('.error_required').text("※入力必須項目です");
//姓（漢字）
$('input[name="lastName"]').on('blur' , function(){
    let error;
    let value = $(this).val();
var regexp = /([\u{3005}\u{3007}\u{303b}\u{3400}-\u{9FFF}\u{F900}-\u{FAFF}\u{20000}-\u{2FFFF}][\u{E0100}-\u{E01EF}\u{FE00}-\u{FE02}]?)/mu;
if(value==""){
    $('.error_required_lastName').text("※入力必須項目です");
}
if(value!=""&&regexp.test(value)==false){
    $('.error_required_lastName').text("漢字で入力してください");
}
if(regexp.test(value)==true){
    $('.error_required_lastName').text("");
}
});
//名（漢字）
$('input[name="firstName"]').on('blur' , function(){
    let value = $(this).val();
var regexp = /([\u{3005}\u{3007}\u{303b}\u{3400}-\u{9FFF}\u{F900}-\u{FAFF}\u{20000}-\u{2FFFF}][\u{E0100}-\u{E01EF}\u{FE00}-\u{FE02}]?)/mu;
if(value==""){
    $('.error_required_firstName').text("※入力必須項目です");
}
if(value!=""&&regexp.test(value)==false){
    $('.error_required_firstName').text("漢字で入力してください");
}
if(regexp.test(value)==true){
    $('.error_required_firstName').text("");
}
});
//住所（文字数）
let getClass = $('#tags').attr('class');
let classVal = getClass.split(' ');
let val= classVal[1];
var count = val.replace(/[^0-9]/g, '');
$('.max'+count).on('blur',function(){
    let value = $(this).val().length;
    if(value>count){
        $('.error_num').text("※"+count+"文字以内にしてください");

    }
});




});
