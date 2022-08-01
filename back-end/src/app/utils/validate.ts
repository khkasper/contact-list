const validate = (value: string): RegExpMatchArray | null => {
  return value.match(/^[0-9a-fA-F]{24}$/);
}

export default validate;