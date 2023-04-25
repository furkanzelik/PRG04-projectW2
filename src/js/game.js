import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Game extends Engine {

    constructor() {
        super({ width: 800, height: 600 })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")
        const fish = new Actor()
        fish.graphics.use(Resources.Fish.toSprite())
        fish.pos = new Vector(0, 300)
        fish.vel = new Vector(-10,0)
        this.add(fish)

        const fish1 = new Actor()
        fish1.graphics.use(Resources.Fish.toSprite())
        fish1.pos = new Vector(400, 300)
        fish1.vel = new Vector(0,0)
        this.add(fish1)

        const fish2 = new Actor()
        fish2.graphics.use(Resources.Fish.toSprite())
        fish2.pos = new Vector(400, 300)
        fish2.vel = new Vector(10,0)
        this.add(fish2)
    }
}

new Game()
