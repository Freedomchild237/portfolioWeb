// Functionalities of FrontEnd

import { useQuasar } from "quasar";
import { ref ,onMounted} from "vue";
import { db } from '../../firebase/index.js';
import { collection, getDocs,doc , setDoc ,onSnapshot} from "firebase/firestore";


export default {
  setup() {
    let productList = ref([]);
    let form =ref({
      IDs:null,
      Name:null,
      Gender:null,
      Birthdate:null,
    });
    onMounted(async()=>{
      // get
      onSnapshot(collection(db, "product_table"),(querySnapshot)=>{
        let productData =[];
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          productData.push(doc.data());
        });
        productList.value = productData;
      });
    
    }); 
    //insert Data
    let add =(payload)=>{
      console.log(payload);
      setDoc(doc(db, "product_table", payload.IDs), payload);
    }
  
   

    return {
      productList,
      form,
      add,
    };
  },
 
};
