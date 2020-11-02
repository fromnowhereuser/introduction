export class User {

    public isAdmin: boolean = false;
    constructor(
        public email: string,
        public organisation: string
    ) {
    }

    toggleAdmin() {
        this.isAdmin = !this.isAdmin;
    }
}
