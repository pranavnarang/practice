class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}


// linkedlist class 
class LinkedList { 

    constructor() { 
        this.head = null; 
        this.size = 0; 
    } 
  
    // functions to be implemented 
    // add(element) 
    addNode = (data) => {
        let new_node = new Node(data);
        let current;

        if (this.head == null){
            this.head = new_node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = new_node;
        }
        this.size++;
    }
    // insertAt(element, location) 
    insertAt = (data, location) => {
        let new_node = Node(data);
        let index = 0;
        if (this.size < index){
            console.log('Index is greater than list size');
        }
    }
    // removeFrom(location) 
    // removeElement(element) 
  
    // Helper Methods 
    // isEmpty 
    // size_Of_List 
    // PrintList 
} 