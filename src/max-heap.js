const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = []; 
	}

	push(data, priority) {
		//node = new Node(data, priority);
		//this.insertNode(node);
	}

	pop() {
		
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		

	}

	isEmpty() {
		return root == null;
	}

	clear() {
		this.root = null;
		this.parentNodes = []; 
	}

	insertNode(node) {
		if(!this.root){
			this.root = node;
		} 
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
