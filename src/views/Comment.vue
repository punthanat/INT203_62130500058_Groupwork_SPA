<template>
  <div
    id="app"
    class="h-auto max-w-7xl font-sans text-xl bg-gray-200 mx-auto px-5"
  >
    <div class="flex justify-center text-xl">
      <p class="border-black border-b-2 italic">Comment this operator</p>
    </div>
    <div class="max-w-6xl max-h-full my-6">
      <div class="flex justify-center my-1">
        <div class="flex-row justify-center max-w-max">
          <frame>
            <div class="flex justify-center">Lesion Speed: 2 Armor: 2</div>
            <div>
              <img
                class="h-56 w-72 my-4"
                alt="lesion"
                src="../assets/lesion.jpg"
              />
            </div>
          </frame>
        </div>
      </div>
      <div class="flex justify-between">
        <form-text
          :id="id"
          :edit-mode="editMode"
          @new-form="addForm"
          @edit-form="editForm"
          ref="formText"
        ></form-text>

        <div>
          <frame>
            <ul v-for="result in formResults" :key="result.id">
              <li>
                Pros:
                <span class="text-purple-600 italic">
                  {{ result.Advantages }}</span
                >
                Cons:
                <span class="text-green-600 italic">{{
                  result.Disadvantages
                }}</span>
                Position:
                <span class="text-red-600 italic">{{ result.Position }}</span>
                Utility:
                <span class="text-fuchsia-600 italic">{{
                  result.Utility
                }}</span>
                <button class="btn" @click="deleteForm(result.id)">
                  Delete
                </button>
                <button class="btnUp" @click="showData(result)">Edit</button>
                <label
                  v-if="result.id === this.id && editMode"
                  class="editLabel"
                  >editHere</label
                >
              </li>
            </ul>
          </frame>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import formText from "../components/formText.vue";

export default {
  name: "App",
  components: {
    formText,
  },
  data() {
    return {
      url: "http://localhost:5000/formResults",
      formResults: [],
      editMode: false,
      id: 0,
    };
  },
  methods: {
    showData(oldForm) {
      this.editMode = !this.editMode;
      console.log(oldForm);
      if (
        this.$refs.formText.Advantages !== "" &&
        this.$refs.formText.Disadvantages !== "" &&
        this.$refs.formText.Position !== "" &&
        this.$refs.formText.Utility !== ""
      ) {
        this.$refs.formText.Advantages = "";
        this.$refs.formText.Disadvantages = "";
        this.$refs.formText.Position = "";
        this.$refs.formText.Utility = "";
        console.log("formText value='' success");
      } else {
        this.$refs.formText.Advantages = oldForm.Advantages;
        this.$refs.formText.Disadvantages = oldForm.Disadvantages;
        this.$refs.formText.Position = oldForm.Position;
        this.$refs.formText.Utility = oldForm.Utility;
        this.id = oldForm.id;
        console.log("---test--app.vue");
        console.log(`editMode: ${this.editMode}`);
        console.log("---------app.vue");
      }
    },

    async editForm(editForm) {
      try {
        console.log(editForm);
        console.log(this.formResults);
        this.editMode = true;

        const res = await fetch(`${this.url}/${editForm.id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            Advantages: editForm.Advantages,
            Disadvantages: editForm.Disadvantages,
            Position: editForm.Position,
            Utility: editForm.Utility,
          }),
        });

        const data = await res.json();
        this.formResults = this.formResults.map((form) =>
          form.id === editForm.id
            ? {
                ...form,
                Advantages: data.Advantages,
                Disadvantages: data.Disadvantages,
                Position: data.Position,
                Utility: data.Utility,
              }
            : form
        );

        this.editMode = false;
        console.log("edittttt success");
      } catch (error) {
        console.log(`Could not edit! ${error}`);
      }
    },

    async deleteForm(id) {
      try {
        await fetch(`${this.url}/${id}`, {
          method: "DELETE",
        });
        this.formResults = this.formResults.filter((form) => form.id != id);
        console.log('delete success')
      } catch (error) {
        console.log(`Could not get! ${error}`);
      }
    },
    async addForm(newForm) {
      try {
        console.log(newForm);
        this.formResults.Advantages = newForm.Advantages;
        this.formResults.Disadvantages = newForm.Disadvantages;
        this.formResults.Position = newForm.Position;
        this.formResults.Utility = newForm.Utility;
        const res = await fetch(this.url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            Advantages: newForm.Advantages,
            Disadvantages: newForm.Disadvantages,
            Position: newForm.Position,
            Utility: newForm.Utility,
          }),
        });
        const data = await res.json();
        this.formResults = [...this.formResults, data];
      } catch (error) {
        console.log(`Could not save! ${error}`);
      }
    },

    async getFormResult() {
      try {
        const res = await fetch(this.url);
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(`Could not get! ${error}`);
      }
    },
  },
  async created() {
    this.formResults = await this.getFormResult();
    console.log("creatededdddddddddd");
  },
};
</script>


