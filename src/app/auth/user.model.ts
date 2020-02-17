export class User {
    constructor(public email: string, public id: string, private _token: string, private _tokenExpirationDate: Date) { }

    get token() { // only a getter
        if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
            return null; // token expired
        }
        return this._token;
    }
}