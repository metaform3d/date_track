/// <reference path="./phaser.d.ts" />
// @ts-check

/**
 * @param {any} condition 
 * @param {string} [message] 
 * @asserts condition
 */
function assert(condition, message = "assertion failed") {
    if (!condition) {
        throw new Error(message)
    }
}

/**
 * @template T
 * @param {T | null | undefined} object
 * @returns {T}
 */
function ensure(object, message = "onject invalid") {
    if (object === null || object === undefined) {
        throw new Error(message)
    }
    return object
}

class Random {
    /**
     * @returns {number}
     */
    static unit() {
        return Math.random()
    } 

    /**
     * @returns {number}
     */
    static centered() {
        return this.unit() * 2 - 1
    }

    /**
     * @param {number} lo
     * @param {number} hi
     * @returns {number}
     */
    static range(lo, hi) {
        return this.unit() * (hi - lo) + lo
    }

    /**
     * @param {number} lo
     * @param {number} hi
     * @returns {number}
     */
    static only(lo, hi) {
        return Math.trunc(this.unit() * (hi - lo + 1)) + lo
    }

    /**
     * @param {number} value
     * @param {number} range
     * @returns {number}
     */
    static spread(value, range) {
        return this.range(value - range, value + range)
    }

    /**
     * @param {number} trueFrac
     * @returns {boolean}
     */
    static boolean(trueFrac = 0.5) {
        return this.unit() < trueFrac
    }

    /**
     * @template T
     * @param {T[]} list
     * @returns {T}
     */
    static uniformElt(list) {
        return list[this.only(0, list.length - 1)]
    }

    /**
     * @template T
     * @param {T[]} list
     * @returns {T}
     */
    static biasedElt(list) {
        let a = Random.unit()
        let idx = Math.trunc(a * a * list.length)
        return list[idx]
    }
}

const config = {
    type: Phaser.AUTO,
    title: 'Phaser Game',
    scale: {
        parent: 'game-container',
        width: 1280,
        height: 720
    },
    backgroundColor: '#fdfbdaff',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};


const game = new Phaser.Game(config);

/**
 * @this {Phaser.Scene}
 */
function preload() {
//    this.load.image("bottom", "assets/bottom.png")
}

/**
 * @this {Phaser.Scene}
 */
function create() {
//    const keyboard = ensure(this.input.keyboard)
}

/**
 * @this {Phaser.Scene}
 * @param {number} time
 * @param {number} deltaMS
 */
function update(time, deltaMS) {
    let delta = deltaMS / 1000
}
