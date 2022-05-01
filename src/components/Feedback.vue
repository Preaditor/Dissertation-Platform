<template>
  <div id="feedback">
    <form class="form" id="module_feedback" @submit.prevent="submit">
      <div id="interface_score">
        <input
          id="interface"
          class="feedback_info"
          type="range"
          name="interface"
          min="1"
          max="10"
          v-model="inter_value"
        />
        <h1 text-align="center">Score: {{ inter_value }}</h1>
      </div>
      <div id="content_score">
        <input
          id="content"
          class="feedback_info"
          type="range"
          name="content"
          min="1"
          max="10"
           v-model="content_value"
        />
        <h1 text-align="center">Score: {{ content_value }}</h1>
      </div>
      <div id="design_score">
        <input
          id="design"
          class="feedback_info"
          type="range"
          name="design"
          min="1"
          max="10"
          v-model="design_value"
        />
        <h1 text-align="center">Score: {{ design_value }}</h1>
      </div>
      <div id="usability_score">
        <input
          id="usability"
          class="feedback_info"
          type="range"
          name="usability"
          min="1"
          max="10"
          v-model="usability_value"
        />
        <h1 text-align="center">Score: {{ usability_value }}</h1>
      </div>
      <div id="overall_score">
        <input
          id="overall"
          class="feedback_info"
          type="range"
          name="overall"
          min="1"
          max="10"
          v-model="overall_value"
        />
        <h1 text-align="center">Score: {{ overall_value }}</h1>
      </div>
      <div id="add_comments">
        <textarea
          id="comments"
          class="feedback_info"
          type="text"
          name="comments"
          placeholder="Comments"
          v-model="comment"
        />
      </div>
      <div id="submit">
        <button id="submit" type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'feedback',
  data() {
    return {
      inter_value: 5,
      content_value: 5,
      design_value: 5,
      usability_value: 5,
      overall_value: 5,
      comment: '',
    };
  },
  methods: {
    submit() {
      return fetch('//cyber.happy-bucket.co.uk:3000/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          feedbackdata: [{
            Interface_Score: this.inter_value,
            Content_Score: this.content_value,
            Design_Score: this.design_value,
            Usability_Score: this.usability_value,
            Overall_Score: this.overall_value,
            Comments: this.comment,
          }],
        }),
      }).then((response) => {
        console.log(response);
        if (response.status === 200) {
          alert('Thank you for your feedback!');
          this.$state.setActiveComponent('profile');
        } else {
          alert('Something went wrong. Please try again.');
        }
      });
    },
  },
};
</script>

<style lang="less">
#feedback {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  > #module_feedback {
    top: 30%;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    width: 60%;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      > input {
        width: 60%;
        outline: none;
        border: none;
        border-radius: 30px;
        height: 45px;
        margin-left: 20px;
        margin-top: 20px;
        color: #3b3b3b;
        border-width: 5px;
        border-color: #3b3b3b;
        border-radius: 30px;
      }
      > h1 {
        font-size: 14px;
        margin-top: 20px;
        margin-left: 20px;
        color: #3b3b3b;
      }
      > #comments {
        width: 60%;
        height: 45px;
        margin-left: 20px;
        margin-top: 20px;
        color: #3b3b3b;
        border-style: solid;
        border-width: 2px;
        border-color: #3b3b3b;
      }
      > #submit {
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
