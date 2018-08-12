// 链表存储有序的元素集合，但不同于数组，链表中的元素在内存中并不是连续放置的。每个元素由一个存储元素本身的节点和一个指向下一个元素的引用(指针)组成

// 添加和删除元素的时候不需要移动其他元素 但是想要访问链表中间的一个元素，需要从起点(表头)开始迭代列表直到找到所需元素
// 创建链表

function LinkedList () {
  let Node = function (element) {
    this.element = element;
    this.next = null;
  }

  let length = 0;
  let head = null;

  // 向列表尾部追加元素，可能有两种情景：1.列表为空，添加的是第一个元素，或者列表不为空，想其追加元素
this.append = function (element) {
  let node = new Node(element),
  current;
  if (head === null) {
    head = node 
  }else {
    current = head;
    while (current.next) {
      current = current.next
    }
    length ++ 
  }
}
// 从链表中移除元素，第一种就是移除第一个元素，第二种是移除第一个元素以外的任意元素。我们要实现两种remove方法：第一种是从特定的位置移除元素，第二种是根据元素的值移除元素
this.removeAt = function (position) {
  if (position > -1 && position < length) {
    let current = head,
    previous,index = 0;
    // 移除第一项
    if (position === 0) {
      head = current.next
    }else {
      while (index++ < position) {
        previous = current;
        current = current.next
      }
      // 将previous与current
    }
  }
}
}
let list = new LinkedList()
list.append (15)
list.append(10)