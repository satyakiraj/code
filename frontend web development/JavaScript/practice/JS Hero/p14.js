function list(words) {

    if (words.length === 0) {
      return '';
    }
  
    if (words.length === 1) {
      return words[0];
    }
  
    let wordsExLast = words.slice(0, words.length - 1);
    let lastWord = words[words.length - 1];
    return wordsExLast.join(', ') + ' and ' + lastWord;
  }