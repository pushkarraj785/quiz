//getting all required element
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box =document.querySelector(".quix_box");

//if start button clicked
start_btn.onclick = ()=>{
    info_box.classList.toggle("activeinfo");//show the info box
}

//if exit button clicked
exit_btn.onclick = ()=>{
    info_box.classList.toggle("activeinfo");//hide the info box
}

//if continue button clicked
continue_btn.onclick = ()=>{
    info_box.classList.toggle("activeinfo");//hide the info box
    quiz_box.classList.add("activequiz");//show the quiz box
    showQuestions(0);
    queCounter(1);
}

let que_count = 0;
let que_numb =1;

const next_btn = quiz_box.querySelector(".next_btn");



//if next button clicked
next_btn.onclick= ()=>{
    if (que_count < questions.length - 1) {
        que_count++;
        que_numb++;
        showQuestions(que_count);
        queCounter(que_numb);
    }else{
        console.log("question completed");
        showresultbox();
    }
    
}

function queCounter(index){
    const bottom_ques_counter = quiz_box.querySelector(".total_que")
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}

//getting questions and options from array
function showQuestions(index){
    const que_text = document.querySelector(".que_text");
    const option_list = document.querySelector(".option_list");
    let ques_tag = '<span>'+ questions[index].numb +"."+ questions[index].question +'</span>';
    let option_tag = '<form action="" method="post"><div class="option"><label><input type="radio" name="q1" value="1" id="choice11"><span>'+ questions[index].options[0] +'</span></label></div><div class="option"><label><input type="radio" name="q1" value="2" id="choice12"><span>'+ questions[index].options[1] +'</span> </label></div><div class="option"><label><input type="radio" name="q1" value="3" id="choice13"><span>'+ questions[index].options[2] +'</span>  </label></div><div class="option"><label><input type="radio" name="q1" value="4" id="choice14"><span>'+ questions[index].options[3] +'</span>  </label></div></form>'
    
    que_text.innerHTML = ques_tag;
    option_list.innerHTML = option_tag; 

}

// const label = option_list.querySelector('form .option label');

// label.onclick= ()=>{
//     next_btn.style.display ="block";
// }

const result_box = document.querySelector(".result_box")

function showresultbox() {
    info_box.classList.remove("activeinfo");//hide the info box
    quiz_box.classList.toggle("activequiz");//show the quiz box
    result_box.classList.toggle("activeresult");//show the result box
    
}