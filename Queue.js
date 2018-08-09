// 队列
function Queue() {
    var items = [];
    this.enqueue = function (element) {  //向队列尾部添加一个新的项
        items.push(element);
    }
    this.dequeue = function() {  // 移除队列的第一项，并返回被移除的元素
        return items.shift();
    }
    this.front = function() {   // 返回队列的第一个元素
        return items[0]
    }
    this.isEmpty = function() {  //检查队列中是否有元素，返回true或false
        return items.length == 0;
    }
    this.size = function() {
        return items.length;
    }
    this.print = function() {
        console.log(items.toString());
    }
}

// 使用Queue类
var queue = new Queue();
console.log(queue.isEmpty())
queue.enqueue('John');
queue.enqueue('Jack');
queue.enqueue('Camial');
queue.print();
queue.dequeue();
queue.print();

//优先队列

// 1.设置优先级，然后在正确的位置添加元素
// 2.用入列操作添加元素，然后按照优先级移除他们。

function priorityQueue() {
    var items = [];
    function QueueElement (element,priority) {
        this.element = element;
        this.priority = priority;
    }
    this.enqueue = function(element,priority){
        var queueElement = new QueueElement(element,priority);

        if(this.isEmpty()) {
            items.push(queueElement);
        }else {
            var added = false;
            for (var i= 0;i<items.length;i++){
                if(queueElement.priority<items[i].priority) {
                    items.splice(i,0,queueElement);
                    added = true ;
                    break;
                }
            }
            if(!added) {
                items.push(queueElement);
            }
        }
    }
}

var priorityQueue = new priorityQueue();
priorityQueue.enqueue('john',2);
priorityQueue.enqueue('jack',1);
priorityQueue.enqueue('camila',1);
priorityQueue.print();
