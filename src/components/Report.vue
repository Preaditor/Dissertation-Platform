<template>
    <div id="report_container">
        <form id="report_form"  @submit.prevent="Report">
            <div>
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
            <div>
              <h1 class="instruct"> Please descript the issue: </h1>
              <input
                id="report-d"
                class="report_info"
                type="text"
                name="Issue Desc"
                placeholder="Issue Description"
                v-model="issue_name"
              />
            </div>
            <div>
              <h1 class="instruct"> Which page did the issue occur? </h1>
              <input
                id="report-p"
                class="report_info"
                type="text"
                name="Issue page"
                placeholder="Issue Page"
                v-model="issue_name"
              />
            </div>
        </form>
    </div>
</template>
