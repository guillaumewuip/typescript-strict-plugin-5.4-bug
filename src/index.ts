function test(params: { toto: string, tata: number }) {
  console.log(params);
}

// We expect TS error here:
//   Object literal may only specify known properties,
//   and 'titi' does not exist in type '{ toto: string; tata: number; }'.
test({ titi: 'yoooo' })
