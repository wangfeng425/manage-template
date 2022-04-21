/**
 * 生成指定区间的随机整数
 * @param min
 * @param max
 * @returns {number}
 */
export function randomNum (min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

/**
 * 计算提示框的宽度
 * @param str
 * @returns {number}
 */
export function calculateWidth (arr: string) {
  return 30 + arr[0].length * 15
}

/*
  简单深度拷贝
  JSON.parse()和JSON.stringify()能正确处理的对象只有
  Number、String、Array等能够被json表示的数据结构，
  因此函数这种不能被json表示的类型将不能被正确处理。
  */
export function deepCopy (str: any) {
  if (!str) {
    return '';
  }
  return JSON.parse(JSON.stringify(str));
}
