//Excercise 37

function make_shirt (size: string = 'large' ,text : string = 'i love typescript'): void{
    console.log (`you order a ${size}, shirt that says ${text}`)
}
make_shirt();
make_shirt(`medium`,'i love javascript')
make_shirt(`small`, 'I need a big shirt to wear')