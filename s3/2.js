class Robot {
    constructor(name) {
        this.name = name

    }

    move() {
        console.log(`${this.name} is moving`)
    }

}

const r0 = new Robot('some robot')
r0.move()

class Weapon {
    constructor(description) {
        this.description = description
    }

    fire() {
        console.log(`${this.description} is firing`)
    }
}

const w0 = new Weapon('laser')
w0.fire()

class CombatRobot extends Robot {
    constructor(name) {
        super(name)
        this.weapons = []
    }

    addWeapons(w) {
        this.weapons.push(w)
    }

    fire() {
        console.log('firing all weapons')
        this.weapons.forEach(element => {
            element.fire()
        });
    }
}

const r1 = new CombatRobot('some combat robot')
r1.addWeapons(w0)
r1.move()
r1.fire()

Robot.prototype.fly = function () {
    console.log(`${this.name} is flying`)
}

r1.fly()