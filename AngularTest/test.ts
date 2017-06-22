class User {

    static PI: number = 3.14;
    public id: string;

    /**
     * Возвращает сумму
     * @param {number} x Первый аргумент
     * @param {string | number} y Второй аргумент
     * @returns
     */
    protected sum(x: number, y: string | number): number {
        return x + (y as number);
    }

    constructor(uid: string) {
        this.id = uid;
    }

    /**
     * 
     * @param {number} first
     * @param {string = "default"} second
     * @param {number[]} ...numbers
     */
    public test(first: number, second: string = "default", ...numbers: number[]): void {
        let name: string;

        type strNum = string | number;
        let b: strNum;

        let delegat: (x: number, y: string) => number;

        delegat = this.sum;
        delegat(1, "as");
    }
}

class SuperUser extends User {
    //private sum(x: number, y: string | number): number {
    //    return x - (y as number);
    //}
    test(): void {
        let user = new User("1");
        this.sum(1, 2)
    }
}