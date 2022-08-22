function solution(string) {
    const regex = /([a-z])([A-Z])/g;
    const spaces = string.replace(regex, '$1 $2');
  return spaces;
}
