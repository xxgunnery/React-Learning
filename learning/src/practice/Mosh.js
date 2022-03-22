export const moshES6 = {
    exports: function exports(pointer) {

        const description = "Mosh demonstrates!"

        //-------------------------------------------------------------------------//

        const person = {
            name: "Mosh",
            walk() {
                console.log(this)
            }
        }
        person.walk()

        const walk = person.walk()

        const code = `        const person = {
            name: "Mosh",
            walk() {
                console.log(this)
            }
        }
        person.walk()

        const walk = person.walk()`

    return (
        <div>
            <div className="description">
                {description}
            </div>
            <pre className="prettyprint">
                {code}
            </pre>
        </div>
    )

    }

}