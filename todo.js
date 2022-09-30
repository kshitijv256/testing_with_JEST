const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
  
    const overdue = () => {
      return all.filter((item) => {
        return item.dueDate <= yesterday && item.completed === false
      })
    }
  
    const dueToday = () => {
      return all.filter((item) => {
        return item.dueDate === today
      })
    }
  
    const dueLater = () => {
        return all.filter((item) => {
            return item.dueDate >= tomorrow
          })
    }
  
    const toDisplayableList = (list) => {
      let mylist = [];
        list.forEach((item) => {
            if (item.dueDate === today) {
                if (item.completed === true) {
                    mylist.push(`[x] ${item.title}`)
                } else {
                    mylist.push(`[ ] ${item.title}`)
                }
            } else {
                if (item.completed === true) {
                    mylist.push(`[x] ${item.title} ${item.dueDate}`)
                }else{
                    mylist.push(`[ ] ${item.title} ${item.dueDate}`)
                }
            }
        })
        return mylist.join("\n")
    }
  
    return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
  }

  module.exports = todoList;