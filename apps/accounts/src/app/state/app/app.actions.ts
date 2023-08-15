export class ShowLoading {
    static readonly type = '[App] Show Loading';
    constructor(public loading: boolean) { }
}

export class UpdateEmail {
    static readonly type = '[App] Update Email';
    constructor(public email: string) { }
}