type ClassValue = ClassArray | ClassDictioary | string | number | null | boolean | undefined;
type ClassDictioary = Record<string, unknown>;
type ClassArray = ClassValue[];

export default function cls(...args: ClassArray) {
  let i = 0, tmp, str = '';
  const len = args.length;
  for (; i < len; i++) {
    // eslint-disable-next-line no-cond-assign
    if (tmp = args[i]) {
      if (typeof tmp === 'string') {
        str += (str && ' ') + tmp;
      }
    }
  }
  return str;
}
