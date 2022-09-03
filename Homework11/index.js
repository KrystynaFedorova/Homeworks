class HashMap {
    #data = {}

    constructor() {
        this.size = 0;
        this.#data = {}
    }

    add(key, value) {
        const newHash = this.hash(key)
        this.#data[newHash] = value
        this.size++
        return this.size
    }

    hash(key) {
        if (typeof key !== 'string') {
            throw new Error('Key is not string')
        }
        let finalHash = '';
        for (let index = 0; index < key.length; index++) {
            finalHash += key[index].charCodeAt();

        }
        return finalHash;
    }

    delete(key) {
        const newHash = this.hash(key)
        delete this.#data[newHash];
        this.size--
        return this.size
    }

    search(key) {
        const newHash = this.hash(key)
        return this.#data[newHash]
    }

    containKey(target, key) {
        const newHash = this.hash(key)
        return Object.prototype.hasOwnProperty.call(target, newHash)
    }

    containValue(target, value) {
        const newHash = this.hash(value)
        return Object.prototype.hasOwnProperty.call(target, newHash)
    }

}

let hashMap = new HashMap()


class Stack {
    #items;

    constructor(element) {
        this.size = 0
        this.#items = []

    }

    isEmpty() {
        return this.size;
    }

    push(item) {
        this.#items.push(item)
        this.size++
        return this.size
    }

    searchByIndex(elem) {
        return this.#items[elem]
    }

    pop() {
        delete this.#items[this.size];
        this.size--
        return this.size
    }

    top() {
        return this.#items[0]
    }
}

const stack = new Stack()
console.log(stack)




























