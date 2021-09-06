// 1. 배열의 선언과 할당

let fruits = ["사과", "바나나", "파인애플"]

// 2. 배열의 기능

let name = "철수"

//  3. 객체의 선언과 할당

let students = {}
	students.name = "철수"

// 4. 객체의 키 & 값 추가

const student = {
	name: "철수",
	age: 8,
};

const school = {
	name: "다람쥐초등학교",
	teacher: "다람이",
}

	student.school = school

//5. 조건문 연습

function boolean(input1, input2) {

	if(input1===false && input2 ===false) {
		console.log(false)
	}else{console.log(true)}
}

//6. 홀짝

function evenodd(num){
	if (num===0){
		console.log(0);
	}else if(num%2===0){
		console.log("even");
	}else{console.log("odd")}
}

//7. 온도

function temperature(num){
	if(num >=24){
		console.log("조금 덥습니다");
	}else if(num>=19){
		console.log("날이 좋네요");
	}else{
		console.log("조금 춥습니다")
	}
}

//8.며칠

function days(month){
	if(month>12){
		console.log("error")
	}else if(month ===1 || month ===3 || month ===5
		|| month ===7|| month ===8|| month ===10
		|| month ===12){
	console.log("31")
	}else if(month ===2){
	console.log("28");
	}else{
	console.log("30")
	}
}

//9.반복문: 숫자 더하기

function sum(num) {

	let count = 0;
	for (i=0; i<=num; i++){
		count = count + i
	}
	console.log(count)
}


//10. 특정 문자열 세기

function countLetter(str){
	let count =0;
	for (0; i<str.length; i++){
		if(str[i] ==='a' || str[i] ==='A'){
			count = count + 1;
		}
		console.log(countLetter)
	}
}

//11. 문자열 삽입

function makeNumber(num){
	for( let i=1; i<=num; i++){
		str= str +1;

		if(i !== num){
			str = str + "-";
		}
	}
	console.log(makeNumber)
}

//12. 홀수 문자열
 function makeOdd(num){
	 let str =""
	 for (let i=0; i<=num; i++){
		 if (i % 2 ===1){
			 str = str + 1
		 }
	 }
	 console.log(str)
}



//13. 가장 큰 수 찾기

function bigNum(str) {
	let max = 0;
	for (let i = 0; i <= str.length; i++) {
		if (Number(str[i]) >= max) {
			max = Number(str[i])
		}
	}
	console.log(max)
	}

//14. 점수에 따른 등급

function grade(score) {
	if (score > 100 || score < 0) {
		console.log("잘못된 점수입니다.");
	} else if (score >= 90) {
		console.log("A");
	} else if (score >= 80) {
		console.log("B");
	} else if (score >= 70) {
		console.log("C");
	} else if (score >= 60) {
		console.log("D");
	} else if (score <= 59) {
		console.log("F");
	}
}

//15. 마이페이지

let count = 0;
let money = 0;
let grade = "";
for(let i=0; i<myShopping.length; i++){
	if (myShopping[i].category === "의류"){
		count= count++;
		money = money + myShopping[i].price;
	}

if (count>=5){
	grade = "gold";
}else if (count >=3){
	grade = "silver";
}else if (count>=0){
	grade = "bronze"
}
return("의류를 구매한 횟수는 총" + count + "회 금액은" + money + "등급은" + grade + "입니다.")
}