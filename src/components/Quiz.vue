<template>
    <div class="quiz">
        <h1 class="title">{{ title }}</h1>
        <form class="quiz_content" @submit.prevent="Login">
            <h1 id="question" class="question"></h1>
            <div class="answers">
                <div class="answer">
                    <h1 class="ans_text" id="answer1"></h1>
                    <input class="check" type="radio" id="check1" @click="selectOnlyThis($event)"/>
                </div>
                <div class="answer">
                    <h1 class="ans_text" id="answer2"></h1>
                    <input class="check" type="radio" id="check2" @click="selectOnlyThis($event)"/>
                </div>
                <div class="answer">
                    <h1 class="ans_text" id="answer3"></h1>
                    <input class="check" type="radio" id="check3" @click="selectOnlyThis($event)"/>
                </div>
                <div class="answer">
                    <h1 class="ans_text" id="answer4"></h1>
                    <input class="check" type="radio" id="check4" @click="selectOnlyThis($event)"/>
                </div>
            </div>
            <div class="submit">
                <button class="submit_button" type="submit" @click="submit">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
const qa = require('../lib/quiz.json');

export default {
  name: 'Quiz',
  mounted() {
    const question = document.getElementById('question');
    const answer1 = document.getElementById('answer1');
    const answer2 = document.getElementById('answer2');
    const answer3 = document.getElementById('answer3');
    const answer4 = document.getElementById('answer4');
    console.log(qa.questions[this.count].question);
    console.log(answer1, answer2, answer3, answer4);
    question.innerHTML = qa.questions[this.count].question;
    answer1.innerHTML = qa.questions[this.count].answer1;
    answer2.innerHTML = qa.questions[this.count].answer2;
    answer3.innerHTML = qa.questions[this.count].answer3;
    answer4.innerHTML = qa.questions[this.count].answer4;
    this.correct = qa.questions[this.count].correct;
    console.log('Correct:', this.correct);
    //  question.innerHTML = 'test';
    this.total_questions = qa.length[this.count].questions;
    console.log(this.total_questions);
    this.count += 1;
  },
  data() {
    return {
      title: 'Quiz',
      count: 0,
      correct: 0,
      right: 0,
      selected: 0,
      total_questions: 0,
    };
  },
  computed: {
    isCorrect() {
      return ('test');
    },
  },
  methods: {
    submit() {
      console.log('submit');
      const question = document.getElementById('question');
      const answer1 = document.getElementById('answer1');
      const answer2 = document.getElementById('answer2');
      const answer3 = document.getElementById('answer3');
      const answer4 = document.getElementById('answer4');
      const ans1 = document.getElementById('check1').checked;
      const ans2 = document.getElementById('check2').checked;
      const ans3 = document.getElementById('check3').checked;
      const ans4 = document.getElementById('check4').checked;
      console.log(ans1, ans2, ans3, ans4);
      if (ans1 === true) {
        this.selected = 1;
      } else if (ans2 === true) {
        this.selected = 2;
      } else if (ans3 === true) {
        this.selected = 3;
      } else if (ans4 === true) {
        this.selected = 4;
      }
      console.log('Selected:', this.selected);
      console.log('correct:', this.correct);
      if (this.selected == this.correct) {
        this.right += 1;
        console.log('right answers:', this.right);
      } else if (this.selected != this.correct) {
        console.log('wrong answers:', this.right);
      }
      if (this.count == this.total_questions) {
        alert('Quiz completed: ' + this.right + ' out of ' + this.total_questions);
      } else {
        question.innerHTML = qa.questions[this.count].question;
        answer1.innerHTML = qa.questions[this.count].answer1;
        answer2.innerHTML = qa.questions[this.count].answer2;
        answer3.innerHTML = qa.questions[this.count].answer3;
        answer4.innerHTML = qa.questions[this.count].answer4;
        this.correct = qa.questions[this.count].correct;
        this.count += 1;
      }
    },
    selectOnlyThis(e) {
      console.log(e.target.id);
      for (let i = 1; i <= 4; i += 1) {
        document.getElementById(`check${i}`).checked = false;
        console.log(i);
        // console.log(`check${i}`);
      }
      document.getElementById(e.target.id).checked = true;
    },
  },
};
</script>

<style lang="less">
.quiz {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    > h1.title {
        font-size: 2rem;
        font-weight: bold;
        color: #4779d6;
    }
    > form.quiz_content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
        > h1.question {
            font-size: 2rem;
            font-weight: bold;
            color: #4779d6;
        }
        > div.answers {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
            align-items: center;
            > div.answer {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-content: center;
                align-items: center;
                > h1.ans_text {
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: #4779d6;
                }
                > input.check {
                    margin-top: 10px;
                    margin-bottom: 10px;
                    border: none;
                    border-radius: 30px;
                    outline: none;
                    background-color: #3f436e;
                    color: white;
                    transition: 0.5s all;
                }
            }
        }
        > div.submit {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
            align-items: center;
            > button.submit_button {
                height: 45px;
                border-radius: 30px;
                width: 15vw;
                text-transform: uppercase;
                color: white;
                border: none;
                outline: none;
                text-decoration: none;
                background-color: #3f436e;
                margin-top: 20px;
                transition: 0.5s all;
            }
        }
    }
}
</style>
