export default {
    getItems() {
        let items = localStorage.getItem('todo-items');
        if(items) {
            return JSON.parse(items);
        }
        else {
            return [];
        }
    },
    saveItems(items) {
        localStorage.setItem('todo-items',JSON.stringify(items));
    }
}