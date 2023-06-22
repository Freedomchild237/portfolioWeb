// HTTP REQUEST FUNCTIONS
import { ref, readonly } from "vue";
import { api } from "../boot/axios";

let data = ref([]);
let formData = ref([]);
let SelectedData = ref([]);
let data3 = ref([]);
// table
const Fetch_Form_Data = (payload) => {
  return new Promise((resolve, reject) => {
    api
      .get("Index.php")
      .then((response) => {
        data.value = response.data.data;
        console.log(data.value);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
// insert
const Add_Form_Data = (payload) => {
  return new Promise((resolve, reject) => {
    api
      .post("Index.php", { FormData: payload })
      .then((response) => {
        data.value = response.data.data;
        console.log(data.value);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
// get selected data
const GetClientInfo = (payload) => {
  return new Promise((resolve, reject) => {
    api
      .post("Index.php", { GetClientInfo: payload })
      .then((response) => {
        SelectedData.value = response.data.data;
        console.log(SelectedData.value);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const UpdateInfo = (payload) => {
  return new Promise((resolve, reject) => {
    api
      .put("Index.php", { UpdateID: payload })
      .then((response) => {
        data3.value = response.data.data;
        data.value = data.value.map(
          (obj) => data3.value.find((o) => o.IDs === obj.IDs) || obj
        );
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export {
  Add_Form_Data,
  Fetch_Form_Data,
  data,
  formData,
  SelectedData,
  GetClientInfo,
  UpdateInfo,
};
