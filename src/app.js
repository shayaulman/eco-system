class Rabbit {

    constructor() {
        this.gender = Math.random() > 0.5 ? 'male' : 'female';
        this.timeOfBirth = Date.now();
        this.position = {
            x: Math.floor(Math.random() * window.innerWidth / 10) * 10,
            y: Math.floor(Math.random() * window.innerHeight / 10) * 10
        }
    }

    age() {
        return Date.now() - this.timeOfBirth;
    } 

    move() {
        let newPosition = {
            x: this.position.x - 10,
            y: this.position.y
        }

        this.position = {...newPosition}
    }
}


export default Rabbit
