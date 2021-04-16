<template>
  <frame>
    <form @submit.prevent="submitForm">
      <div class="flex-row max-w-max">
        <div class="flex justify-between">
          <div class="my-auto">Advantages:</div>
          <div class="my-1 mx-1">
            <input
              class="boxInput"
              type="text"
              name="Advantages"
              v-model="Advantages"
            />
          </div>
        </div>

        <div v-if="invalidPros" class="flex justify-start">
          <div class="errorText">Please enter Advantages!!</div>
        </div>

        <div class="flex justify-between">
          <div class="my-auto">Disadvantages:</div>
          <div class="my-1 mx-1">
            <input
              class="boxInput"
              type="text"
              name="Disadvantages"
              v-model="Disadvantages"
            />
          </div>
        </div>

        <div v-if="invalidCons" class="flex justify-start">
          <div class="errorText">Please enter Disadvantages!!</div>
        </div>

        <div class="flex justify-between">
          <div class="my-auto">Position:</div>
          <div class="my-1 mx-1">
            <input
              class="boxInput"
              type="text"
              name="Position"
              v-model="Position"
            />
          </div>
        </div>

        <div v-if="invalidPosition" class="flex justify-start">
          <div class="errorText">Please enter Position!!</div>
        </div>

        <div class="flex space-x-5">
          <div class="flex justify-start">
            <div class="my-1 mx-1">
              <label class="label" for="Utility">Utility: </label>
            </div>
          </div>
          <div class="flex justify-start">
            <div class="my-1 mx-1">
              <input
                type="radio"
                name="Utility"
                id="Good"
                value="Good"
                v-model="Utility"
              />
              <label class="label" for="Good">Good</label>
            </div>
          </div>

          <div class="flex justify-start">
            <div class="my-1 mx-1">
              <input
                type="radio"
                name="Utility"
                id="Bad"
                value="Bad"
                v-model="Utility"
              />
              <label class="label" for="Bad">Bad</label>
            </div>
          </div>
        </div>

        <div v-if="invalidUtility" class="flex justify-start">
          <div class="errorText">Please choose Utility!!</div>
        </div>
      </div>
      <button class="btn">Submit</button>
    </form>
  </frame>
</template>

<script>
export default {
  name: "formText",
  emits: ["new-form", "edit-form"],
  props: {
    editMode: Boolean,
    id: Number,
  },
  data() {
    return {
      url: "http://localhost:5000/formResults",
      Advantages: "",
      Disadvantages: "",
      Position: "",
      Utility: "",
      invalidPros: false,
      invalidCons: false,
      invalidPosition: false,
      invalidUtility: false,
    };
  },
  methods: {
    submitForm() {
      this.invalidPros = this.Advantages === "" ? true : false;
      this.invalidCons = this.Disadvantages === "" ? true : false;
      this.invalidPosition = this.Position === "" ? true : false;
      this.invalidUtility = this.Utility === "" ? true : false;

      console.log("-------------submit------------------------------");
      console.log(`model-pros: ${this.Advantages}`);
      console.log(`model-cons: ${this.Disadvantages}`);
      console.log(`model-Positon: ${this.Position}`);
      console.log(`model-Utility: ${this.Utility}`);
      console.log(`invalidPros: ${this.invalidPros}`);
      console.log(`invalidCons: ${this.invalidCons}`);
      console.log(`invalidPosition: ${this.invalidPosition}`);
      console.log(`invalidUtility: ${this.invalidUtility}`);
      console.log("-------------------------------------------");
      console.log(`oldid: ${this.id}`);
      console.log(`editMode: ${this.editMode}`);
      if (
        this.Advantages !== "" &&
        this.Disadvantages !== "" &&
        this.Position !== "" &&
        this.Utility !== ""
      ) {
        const newForm = {
          Advantages: this.Advantages,
          Disadvantages: this.Disadvantages,
          Position: this.Position,
          Utility: this.Utility,
        };
        if (this.editMode) {
          const editForm = {
            Advantages: this.Advantages,
            Disadvantages: this.Disadvantages,
            Position: this.Position,
            Utility: this.Utility,
            id: this.id,
          };
          //editForm
          this.$emit("edit-form", editForm);
        } else {
          //addForm
          this.$emit("new-form", newForm);
        }

        this.Advantages = "";
        this.Disadvantages = "";
        this.Position = "";
        this.Utility = "";
      }
    },
  },
};
</script>


