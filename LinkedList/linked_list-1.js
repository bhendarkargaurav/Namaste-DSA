


function get (index) {
    function Node(val) {
    this.val = val;
    this.next = null;
}

let MyLinkedList = function() {
    this.head = null;
    this.size = 0;
};

    if(index < 0 || index >= this.size) return -1;
    let curr = this.head;
    for(let i=0; i<index; i++) {
        curr = curr.next;
    }
    return curr.val;
    
};