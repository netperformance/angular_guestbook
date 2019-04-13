export class Message {
    public nr: number;
    public name: string;
    public email: string;
    public message: string;
    public currentDate: string;
    public currentTime: string;

    constructor(nr: number, 
                name: string, 
                email: string, 
                message: string, 
                currentDate: string, 
                currentTime: string) {
        this.nr = nr;
        this.name = name;
        this.email = email;
        this.message = message;
        this.currentDate = currentDate;
        this.currentTime = currentTime;
    }
}