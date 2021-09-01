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