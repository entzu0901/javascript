/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next) }
 
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode() //這裡先創建首節點
    let curr = dummy //創一個變數代表新節點
    let carry = 0 //這裡先預設進位值為0,若需要進位carry值則為1
    while (l1 || l2) {
        const x = l1 ? l1.val : 0 //如果l1不為null時會返回l1的value值,若為null則返回0 此處為了防止列表可能為空的情形
        const y = l2 ? l2.val : 0 //如果l2不為null時會返回l2的value值,若為null則返回0

        const total = x + y + carry //總和的值為x值+y值+進位值
        curr.next = new ListNode(total % 10) //這邊檢測新節點是否需要進位
        curr = curr.next
        carry = Math.floor(total / 10) //因使用除法無法整除時會有小數點所以使用math.floor函數取出小數中裡的最大整數
        if (l1) l1 = l1.next //將節點往後移動,對l1下一個節點進行處理
        if (l2) l2 = l2.next//將節點往後移動,對l2下一個節點進行處理
    }
    if (carry) curr.next = new ListNode(carry)//如果carry不等於0則代表需要進位,設計一個listNode()函數來存放結果
    return dummy.next; //結果為返回dummy變數後方所有的節點
};