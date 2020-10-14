<template>
  <div>
    <a-upload name="file" :multiple="true" action="/api/uploader" :headers="headers" @change="handleChange">
      <a-button> <a-icon type="upload" /> 点这里上传猪仔 </a-button>
    </a-upload>
    <a-divider />
    <table border="1">
      <tr v-for="(item, index) in resData" :key="index">
        <td>{{ Object.keys(item)[0] }}</td>
        <td>{{ item[Object.keys(item)[0]] }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: {
        authorization: "authorization-text",
      },
      resData: [],
    };
  },
  methods: {
    handleChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file.response, info.fileList);
        let resData=[]
        Object.keys(info.file.response).map(item=>{
          resData.push({[item]:info.file.response[item]})
        })
        this.resData = resData
      }
      if (info.file.status === "done") {
        this.$message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },
  },
};
</script>

<style></style>
