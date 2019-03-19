const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		this.maxSize = maxSize;
		this.left = 0;
		this.right = 0;
		this._heap = [];
		this.heap = new MaxHeap();
	}

	push(data, priority) {
		if(this.size() == this.maxSize) throw new Error('Error!');
		this._heap[this.right] = data;
		this.right++;
		this.heap.push(data, priority);		
	}

	shift() { 
		if(this.isEmpty()) throw new Error('Error!');
		var oldestIndex = this.left,
        deletedData = this._heap[oldestIndex]; 
		delete this._heap[oldestIndex];
		this.left++;
		this.heap.pop();
		return deletedData;				
	}

	size() { 
		return this.right - this.left;
	}

	isEmpty() { 
		return ((this.right - this.left) == 0);
	}
}

module.exports = PriorityQueue;
