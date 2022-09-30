const todoList = require('../todo');
const { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList } = todoList();

describe("Todo List Test suite",() => {
    beforeAll(() => {
        add({
            title: "Buy milk",
            dueDate: new Date().toLocaleDateString('en-CA'),
            completed: false
        });
    });
    test("Adding a new item",() => {
        const todoLength = all.length;
        add({
            title: "test item",
            dueDate: new Date().toLocaleDateString('en-CA'),
            completed: false
        });
        expect(all.length).toBe(todoLength + 1);
    })
    test("Marking an item as complete",() => {

    })
    test("Overdue items",() => {

    })
    test("Due today items",() => {

    })
    test("Due later items",() => {

    })
    test("Displayable list",() => {
    
    })
})