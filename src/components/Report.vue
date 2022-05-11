<template>
    <div id="report_container">
        <form class="form" @submit.prevent="Report">
            <div class="info_container">
              <h1 class="instruct"> Enter Issue Name: </h1>
              <input
                id="report-n"
                class="report_info"
                type="text"
                name="Issue name"
                placeholder="Issue Name"
                v-model="issue_name"
              />
            </div>
            <div class="info_container">
              <h1 class="instruct"> Please descript the issue: </h1>
              <input
                id="report-d"
                class="report_info"
                type="text"
                name="Issue Desc"
                placeholder="Issue Description"
                v-model="issue_desc"
              />
            </div>
            <div class="info_container">
              <h1 class="instruct"> Which page did the issue occur? </h1>
              <input
                id="report-p"
                class="report_info"
                type="text"
                name="Issue page"
                placeholder="Issue Page"
                v-model="issue_page"
              />
            </div>
            <button name="report" id="input-submit" type="submit">Report</button>
        </form>
    </div>
</template>

<script>
export default {
  name: 'bug-report',
  data() {
    return {
      issue_name: '',
      issue_desc: '',
      issue_page: '',
    };
  },
  methods: {
    Report() {
      console.log(this.issue_name, this.issue_desc, this.issue_page);
      return fetch(':3000/api/report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          reportdata: [{
            Report_Name: this.issue_name,
            Report_Description: this.issue_desc,
            Report_Type: this.issue_page,
          }],
        }),
      });
    },
  },
};
</script>

<style lang="less">
#report_container {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
  z-index: 10;
  > form {
    font-family: "Manjari", sans-serif;
    position: absolute;
    top: 30%;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    > input {
        width: 25vw;
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
    > #input-submit {
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
</style>
