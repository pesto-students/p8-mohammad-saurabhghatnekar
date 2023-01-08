function createStack() {
    return {
        items: [], push(item) {
            this.items.push(item);
        }, pop() {
            return this.items.pop();
        }
    };
}

//fix the code above to make the items private

const stack = (function () {
    let items = [];
    function pushItem(item) {
        items.push(item);
    }

    function popItem() {
        return items.pop();
    }

    return {
        push(item) {
            pushItem(item);
        },

        pop() {
            popItem();
        },
        getStack() {
            return items;
        }
    };
})();

stack.push(10);
stack.push(5);
stack.pop();// => 5
stack.getStack();// => [10]
console.log(stack.items);// => undefined
stack.items = [1, 2, 3];
console.log(stack.getStack());// => [10]
console.log(stack.items === stack.getStack()); //=> false

