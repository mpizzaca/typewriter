const typewriter = sentence => {
  let delay = 50;
  for (const char of sentence) {
    setTimeout(() => process.stdout.write(char), delay);
    delay += 50;
    // print newline after we're done
    if (delay === sentence.length * 50 + 50) {
      setTimeout(() => process.stdout.write('\n'), delay);
    }
  }
}

typewriter('hello there from lighthouse labs');