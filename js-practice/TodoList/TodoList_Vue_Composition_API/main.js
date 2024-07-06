const { createApp, ref } = Vue

createApp({
  setup() {
    const newTask = ref('')
    const todos = ref([])
    const todoObj = ref(null)

    function addButton() {
      if (newTask.value === '') {
        alert('TODOを入力しましょう！');
        return
      }
      todoObj.value = {
        task: newTask.value,
        isChecked: false
      }
      todos.value.push(todoObj.value)
      newTask.value = ''
    }

    function rmButton() {
      if (todoObj.value) {
        todos.value = todos.value.filter(todoObj => !todoObj.isChecked)
      }
    }

    return {
      newTask,
      todos,
      addButton,
      rmButton
    }
  }
}).mount('#todoApp')