function pair <A,B> (a:A, b:B) : [A,B]{
    return [a,b]
}
pair ("masala", 20);


interface Box<T> {
    content: T}

const numberBox: Box <number> = {content:10}