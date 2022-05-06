<template>
    <div class="quiz">
        <h1 class="title">{{ title }}</h1>
        <form class="quiz_content">
            <h1 id="question" class="question"></h1>
            <div class="answers">
                <div class="answer">
                    <h1 id="answer1"></h1>
                    <input type="checkbox" id="1"/>
                </div>
                <div class="answer">
                    <h1 class="ans_text" id="answer2"></h1>
                    <input class="check" type="checkbox" id="2"/>
                </div>
                <div class="answer">
                    <h1 class="ans_text" id="answer3"></h1>
                    <input class="check" type="checkbox" id="3"/>
                </div>
                <div class="answer">
                    <h1 class="ans_text" id="answer4"></h1>
                    <input class="check" type="checkbox" id="4"/>
                </div>
            </div>
            <div class="submit">
                <button class="submit_button" type="submit">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
const qa = require('../lib/quiz.json');

console.log(qa);
</script>
