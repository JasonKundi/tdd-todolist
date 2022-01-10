//Create a todo item that has an ID, text description, and starts off incomplete
//Get all todo items
//Set a todo completed by its ID
//Get only todo items that are incomplete
//Get only todo items that are complete 
//Search and return a todo item by its ID, or return a message saying it doesn’t exist
//Remove a todo item by its ID

class TodoList {
    constructor() {
        this.list = []
        this.counter = 1
    }
   
    create(listItem) {
       let listObject = {id:this.counter, text: listItem, status: "incomplete"}
        this.list.push(listObject)
        this.counter++
    }
   
    getAll() {
       return this.list
    }
   
   setComplete(listID) {
   for(let i = 0; i < this.list.length; i++) {
       if(this.list[i].id === listID) {
           this.list[i].status = "complete"
       }
   }
   }
   
   getIncomplete() {
       let incomplete = []
       for(let i = 0; i < this.list.length; i++) {
           if(this.list[i].status === "incomplete") {
               incomplete.push(this.list[i])
           }
       }
       return incomplete
   }
   
   getComplete() {
       let complete = []
       for(let i = 0; i < this.list.length; i++) {
           if(this.list[i].status === "complete") {
               complete.push(this.list[i])
           }
       }
       return complete
   }
   
   
   searchByID(listID) {
    for(let i = 0; i<this.list.length; i++) {
        if(this.list[i].id === listID) {
            return this.list[i]
        }
    }
    return "NOOOOOOOOOO"
   }
   
   removeByID(listID) {
       for(let i = 0; i<this.list.length; i++) {
           if(this.list[i].id === listID) {
              this.list.splice(i,1)
           }
       }
   }
   
   
   }
   
   module.exports = TodoList

