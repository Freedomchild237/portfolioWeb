<template>
  <q-page class="flex column justify-center ">
    CRIS NIEL BALOLOY
      <div class="card flex " v-for="cardDetails in productList" :key="cardDetails.IDs" style="width:100px">
      <div class="card q-pa-md flex " >
        <q-card class=" justify-center ">
         DS
         <div class="flex justify-evenly q-pa-md " style="width: 200px;">
         <div class="card"> {{ cardDetails.Name }}</div>
         <div v-if="cardDetails.Gender == '1'">
           Male
        </div>
         <div v-if="cardDetails.Gender == '2'">
        Female
        </div>
         <div class="card"> {{ cardDetails.Birthdate }}</div>
         </div>
           
         
        </q-card>
      </div>
      
      </div>

      <!-- add -->
<q-form @submit.prevent="add(form)" style="width:500px" class="q-pa-lg">
  
        <q-input label="ID" v-model="form.IDs"> </q-input>
        <q-input label="Name" v-model="form.Name"> </q-input>
        <q-radio v-model="form.Gender" val=1 label="Male" />
      <q-radio v-model="form.Gender" val=2 label="Female" />
        <q-input label="BirthDAte" v-model="form.Birthdate"> </q-input>
        <q-btn
        type="submit"
        label="Submit"
        ></q-btn>
</q-form>


  </q-page>
</template>

<script src="../pages/Scripts/IndexScripts.js"></script>
