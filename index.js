var num_question = 0;
var right_answer = 0;
var all_answer = ['rom', 'registradores', 'eprom', 'i7', 'data-bus', 'cpu', 'ula', 'flash', 'quad-core', 'memoria-de-massa', 'i5', 'address-bus', 'dma', 'dual-core', 'ram', 'cs'];
var positions = {
  question1: [1, 2, 3],
  question2: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  question3: [23, 24, 25, 26, 27],
  question4: [29, 30],
  question5: [35, 36, 37, 38, 39, 40, 41, 42],
  question6: [44, 45, 46],
  question7: [55, 56, 57],
  question8: [63, 64, 65, 66, 67],
  question9: [73, 74, 75, 76, 77, 78, 79, 80, 81], 
  question10: [3, 5, 17, 20, 22, 29, 33, 39, 47, 50, 54, 59, 65, 69, 71, 75],
  question11: [7, 18],
  question12: [11, 19, 21, 25, 31, 34, 43, 48, 51, 55, 60],
  question13: [28, 32, 36],
  question14: [35, 46, 49, 53, 58, 62, 68, 70, 72],
  question15: [52, 57, 61],
  question16: [78, 82]
}

function begin() {
  introduction.style.display = "none";
  start.style.display = "block";
  crossword.style.display = "block";
  title.classList.add('container');
  end.style.display = "none";

  for (let i = 1; i <= 82; i++) {
    var id_word_selection = document.querySelector(`#word_${i}`)
    id_word_selection.innerHTML = ''
  }
}

function get_question_html(question_params, num_question_params) {
  show_questions()
  p_question.innerHTML = `${num_question_params}. ${question_params}`;
  num_question = num_question_params;
}

function show_questions() {
  start.style.display = "none"
  crossword_questions.style.display = "block"
  result.innerHTML = ""

}

function validate_question() {
  var answer = (in_answer.value).replaceAll(' ', '-').toLowerCase();

  switch (num_question) {
    case 1:
      data_answer(answer, num_question, all_answer, positions.question1)  
      break;
    case 2:
      data_answer(answer, num_question, all_answer, positions.question2)
      break
    case 3:
      data_answer(answer, num_question, all_answer, positions.question3)
      break
    case 4:
      data_answer(answer, num_question, all_answer, positions.question4)
      break
    case 5:
      data_answer(answer, num_question, all_answer, positions.question5)
      break
    case 6:
      data_answer(answer, num_question, all_answer, positions.question6)
      break
    case 7:
      data_answer(answer, num_question, all_answer, positions.question7)
      break
    case 8:
      data_answer(answer, num_question, all_answer, positions.question8)
      break
    case 9:
      data_answer(answer, num_question, all_answer, positions.question9)
      break
    case 10:
      data_answer(answer, num_question, all_answer, positions.question10)
      break
    case 11:
      data_answer(answer, num_question, all_answer, positions.question11)
      break
    case 12:
      data_answer(answer, num_question, all_answer, positions.question12)
      break
    case 13:
      data_answer(answer, num_question, all_answer, positions.question13)
      break
    case 14:
      data_answer(answer, num_question, all_answer, positions.question14)
      break
    case 15:
      data_answer(answer, num_question, all_answer, positions.question15)
      break
    case 16:
      data_answer(answer, num_question, all_answer, positions.question16)
      break  
  }

  in_answer.value = ""

  if(right_answer == 16) {
    crossword_questions.style.display = "none"
    end.style.display = "inline"
  }
}

function data_answer(answer, num_question, all_answer, question_position) {
  if(answer == all_answer[num_question - 1]) {
    right_answer++
    result.innerHTML = "Resposta Correta"

    var answer_split_by_letter = answer.split("")
    var count_number_position = 0

    for (let i = 0; i < answer_split_by_letter.length; i++) {
      var id_word_selection = document.getElementById(`word_${question_position[count_number_position++]}`);
      id_word_selection.innerHTML = answer_split_by_letter[i].toUpperCase()
    }
  } else {
    result.innerHTML = "Resposta Incorreta, tente novamente!!"
  }
}