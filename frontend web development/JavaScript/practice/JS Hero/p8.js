function secondIndexOf(s1, s2) {
  let firstIndex = s1.indexOf(s2);
  return s1.indexOf(s2, firstIndex + 1);
}
