const todoApp = Vue.createApp({
  data: () => ({
    newTask: '',
    todos: []
  }),
  methods: {
    addButton: function (event) {
      if (this.newTask === '') {
        alert('TODOを入力しましょう！');
        return;
      }
      let todoObj = {
        task: this.newTask,
        isChecked: false
      };
      this.todos.push(todoObj);
      this.newTask = '';
    },
    rmButton: function (event) {
      this.todos = this.todos.filter((todoObj) => !todoObj.isChecked);
    }
  }
});
todoApp.mount('#todoApp');
