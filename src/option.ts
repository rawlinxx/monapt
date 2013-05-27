module Katana {

    export interface Option<A> {
        get(): A;
        getOrElse(defaultValue: () => A): A;
        match(same:(value: A) => any, none:() => any);
    }

    export class Same<A> implements Option<A> {

        constructor(private value :A) { }

        get(): A {
            return this.value;
        }

        getOrElse(defaultValue: () => A): A {
            return this.value;
        }

        match(same:(value: A) => any, none:() => any) {
            same(this.get());            
        }
    }

    export class None<A> implements Option<A> {

        get(): A {
            throw new Error('No such element.');
        }

        getOrElse(defaultValue: () => A): A {
            return defaultValue();
        }

        match(same:(value: A) => any, none:() => any) {
            none();
        }
    }
}