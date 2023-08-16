
export class ShowLoading {
    public static readonly type = '[App] ShowLoading';
    constructor(public loading: boolean) { }
}

// export class UpdateEmail {
//     public static readonly type = '[App] UpdateEmail';
//     constructor(public email: string) { }
// }

export class UpdateUser {
    public static readonly type = '[App] UpdateUser';
    constructor(public user: firebase.default.User) { }
}