export function log(str: string) {
  console.log(str)
}

class A {
  greetings: string = 'hello world class'
}

log(new A().greetings)
