# GETTING CAUGHT UP ON WEB2...

This repository is meant to:
- Document my learning of React
- Get me used to using Yarn as a package manager
- Get me used to making Git commits
- Get me used to writing some markdown
- Create AND display live code examples for various functionality

## Uses some goofy spaghetti code to display code blocks of ES6 JavaScript

```
export const MoshES6 = {
    varReplacements(name) {
        const description = "Mosh demonstrates the new keywords for defining variables and constants!"

        const code = 
`                //when a variable is declared with let, it is only available within that block
                //var is scoped to the function (scope is too wide)
                //const is like let, however it is not reassignable. Use let only when you need to reassign variables.

                for(let i = 0; i < 5; i++) {
                    console.log(i)
                }
                //i is not accessible here

                const x = 5;`

        function example() {
            function sayHello() {
                //when a variable is declared with let, it is only available within that block
                //var is scoped to the function (scope is too wide)
                //const is like let, however it is not reassignable. Use let only when you need to reassign variables.

                for(let i = 0; i < 5; i++) {
                    console.log(i)
                }
                //i is not accessible here

                // const x = 5; (example)
            }
            sayHello()
        }

        let lesson = new Lesson(name, description, code, example)

        return (
            lesson.writeReturn()
        )
    }
}
```
## Learning resources:

- Rob Ziroll course from freeCodeCamp on YouTube [LINK](https://www.youtube.com/watch?v=bMknfKXIFA8)
- Mosh Hamedani course on YouTube [LINK](https://www.youtube.com/watch?v=NCwa_xi0Uuc)

## Using this app:

1. Clone the repository
2. `yarn start`
3. Happy coding
