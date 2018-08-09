// 二叉数搜索
// 创建自己的binarySearchTree类。首先，声明它的结构：
// 树使用两个指针，一个指向左侧子节点，一个指向右侧子节点

function BinarySearchTree() {
    var Node = function (key) {  //声明一个Node类来表示书中的每一个节点
        this.key = key;   //键是树相关的术语中对节点的称呼
        this.left = null;  // 左指针指向左下一个节点
        this.right = null; // 右指针指向右下一个节点
    };
    var root = null;   //声明一个变量控制此数据结构的第一个节点，根元素
  
// 向树中插入一个键
 this.insert = function(key) {
     var newNode = new Node(key);   //1.创建用来表示node类型的实例.
    
     if(root==null){  //验证这个插入操作是否为一种特俗情况。我们要插入的节点是不是第一个节点。
         root = newNode;     // 跟节点指向新节点。
     }else {
         insertNode(root,newNode);  //跟节点加载非根节点的其他位置。
     }
};
var insertNode = function(node,newNode){ // 如果树非空，需要找到插入新节点的位置。因此，在调用insertNode方法时通过参数传入树的根据点和要插入的节点
    if(newNode.key<node.key){
        if(node.left==null){
            node.left=newNode;
        }else{
            insertNode(node.left,newNode);
        }
    }else{
        if(node.right==null){
            node.right = newNode;
        }else{
            insertNode(node.right,newNode)
        }
    }
}


// 树的遍历
// 1.中序遍历是一种以上行顺序访问BST所有节点的遍历方式，也就是以从小到大的最大顺序访问所有节点。
this.inOrderTraverse = function (callback) {
    inOrderTraverseNode(root, callback)  // 回调函数用来定义我们对遍历到的每个节点的操作
}
 var inOrderTraverseNode = function (node, callback) {
     if(node !== null) {
        inOrderTraverseNode(node.left, callback)
        callback(node, key)
        inOrderTraverseNode(node.right, callback)
     }
 } 

// 先序遍历会访问节点本身，然后在访问他的左侧子节点，最后是右侧节点，而中序遍历是一种先访问节点的左侧子节点，在访问自己本身，最后是后侧节点

//2.先序排序
this.perOrderTraverse = function(callback) {
    perOrderTraverseNode(root,callback);
}

var perOrderTraverseNode = function(node,callback) {
    if(node!==null) {
        callback(node.key);
        perOrderTraverseNode(node.left,callback);
        perOrderTraverseNode(node.right,callback)
    }
}
// 3.后序排序  先访问节点的后代节点，在访问节点的本省
this.postOrderTraverse = function(callback) {
    postOrdeTraverseNode(root,callback)
}
var postOrdeTraverseNode = function(node,callback) {
    if(node!==null){
        postOrdeTraverseNode(node.left,callback);
        postOrdeTraverseNode(node.right,callback);
        callback(node.key);
    }
}

// 树的最小值
this.min = function() {
    return minNode(root);
}
var minNode = function(node) {
    if(node) {
        while (node && node.left !== null) {
            node = node.left;
        }
        return node.key;
    }
    return null;
}

//树的最大值
this.max = function(){
    return maxNode(root);
}
var maxNode = function(node) {
    if(node) {
        while (node && node.right !== null) {
            node = node.right;
        }
        return node.key;
    }
    return null;
}


}
var tree = new BinarySearchTree();
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6)


function printNode(value) {
    console.log(value)
}
tree.perOrderTraverse  (printNode)


// 二叉树的缺点，就是插入多个节点，很可能会不平衡，造成线性的。因此有了红黑树
//  1.节点是红色或黑色
//  2.跟节点是黑色
//  3.每个叶子节点都是黑色的空节点
//  4.每个红色节点两个子节点都是黑色的(每个叶子到根的所有路经上不能有两个连续的红色节点)
//  5.从人意节点到每个叶子的所有路经都包含相同数目的黑色节点


// 变色：为了符合红黑树的规则，尝试把红色节点变为黑色，或者把黑色节点变为红色
// 旋转：旋转红黑树的两个子节点，使的父节点被自己的猴孩子取代，而自己成为了自己的