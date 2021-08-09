//console.log(값) > 값을 확인하는 명령어 (ex 크롬창에서 개발자 콘솔에서 볼수있음 f12)


//변수 선언 방식
/*
let a = 100;
a = 200; // 변수값 재할당 가능
console.log(a)

const b = 200; //변수값 재할당 불가 (값이 바뀌면 안될때 사용)
console.log(a+b)
console.log(a*b)
console.log(a/b)
console.log(a-b)
*/

/*
let a = 100; 
let b = `문자`;
console.log(a+b)  //숫자와 문자도 합치기 가능
*/

// 배열과 객체
/*
//배열
let arr = [1,2,3,4,5] //리스트 자료형
console.log(arr)
arr.push(6) // 나열된 배열에 값을 추가 (변수뒤에 .을 누르고 함수를 선택)
console.log(arr)
console.log(arr[3]) //값을 꺼낼때 변수와 인덱싱 값을 넣기

let dic = {
    "key":"value"

}

//객체
console.log(dic)
dic.key2 = "value2"; //객체는 값 추가 방식 1 (변수뒤에 .을 누르고 기존의 값과 추가할 값 입력)
dic["key2"] = "value2"; // 값 추가 방식 2
console.log(dic)
console.log(dic.key2) // 값을 꺼낼때 변수와 키값을 넣기
*/

/*
//배열+객체 응용
let arr = [1,2,3,{
    "key":"value"
    "list":[1,2,3,4]
    }] //이렇게도 사용가능
*/

// 조건문
/*
// if() : 괄호 안에는 조건이 들어감
// else if() : if() 조건값이 틀리면 실행
// else : if, else if 조건값이 모두 틀리면 실행
if(10 < 5){

}else if(10 == 5){

}else{

}
*/

//for문
/*
//for(변수선언(let i=0), 조건문(i값이 10보다 작을떄까지), 반복문(i++ : 1씩 증가))
for(let i=0; i<10; i++){
    console.log(i)
}
*/

//함수
//function x() 괄호값을 인자(파라미터)로 표현
function x(num){
    //console.log("내용넣기")
    //return 100;
    //return num;
    alert(num) //팝업함수
}

let y = x(200) //변수값을 실행하면 변수값이 함수값이기 때문에 함수값이 실행
console.log(y)

//java script가 제공해주는 함수
let str = "웹개발자-사관학교"; //문자열!!
let str_arr = str.split("-") //스플릿이란 함수는 배열로 나누어주며 괄호안의 값으로 나눔(문자열앞에서만) //배열!!
console.log(str_arr)
let str_str = str_arr.join("*"); //조인이란 함수는 배열을 합쳐 문자열로 합쳐줌 괄호안의 값으로(배열 앞에서만)
console.log(str_str)


// 참고자료 : mdn javascript 공식문서에서 확인, 외울필요X
