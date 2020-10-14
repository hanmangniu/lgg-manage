<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <table border="1">
      <tr v-for="(item, index) in resData" :key="index">
        <td>{{ Object.keys(item)[0] }}</td>
        <td>{{ item[Object.keys(item)[0]] }}</td>
      </tr>
    </table>

    <a-divider />
    <div class="form">
      <a-form-model :model="form" v-bind="layout">
        <template v-for="(item, index) in selectList">
          <a-form-model-item :key="index" :label="item">
            <a-select>
              <a-select-option v-for="(items, ind) in resData" :key="ind" :value="Object.keys(items)[0]">
                {{ Object.keys(items)[0] }}
              </a-select-option>
            </a-select>
          </a-form-model-item>
        </template>
        <a-form-model-item>
          <a-button type="primary">
            Submit
          </a-button>
        </a-form-model-item>
      </a-form-model>
    </div>
    <a-divider />
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    resData: Array,
  },
  data() {
    return {
      form: {
        fieldA: "",
        fieldB: "",
      },
      layout: {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
      },
      selectList: ["续重费", "附加费", "超重派送费", "均重件数", "平均重量", "超均重费"],
    };
  },
  updated() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
table {
  margin: 0 auto;
}
.form {
  width: 400px;
  margin: 0 auto;
}
</style>
