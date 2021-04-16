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

</script>


