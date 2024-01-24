export type TypeWithKey<T> = { [key: string]: T }

export const persona: TypeWithKey<string> = {
  name: 'John',
}

