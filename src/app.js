class Rabbit {

    constructor() {
        this.gender = Math.random() > 0.5 ? 'male' : 'female';
        this.timeOfBirth = Date.now();
    }



    age() {
        return Date.now() - this.timeOfBirth;
    } 

    position() {
        let position = {
            x: Math.floor(Math.random() * window.innerWidth / 10) * 10,
            y: Math.floor(Math.random() * window.innerHeight / 10) * 10
        } 
        return position;
    }
}


export default Rabbit
