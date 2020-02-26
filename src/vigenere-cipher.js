class VigenereCipheringMachine {
  constructor(direct = true) {
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    this.direct = direct;
  }

  createLongKey(message, key) {
    let longKey = key;
    while (longKey.length < message.length) {
      longKey = `${longKey}${key}`;
    }
    return longKey.slice(0, message.length).toUpperCase();
  }

  encrypt(message, key) {
    if (message && key) {
      const longKey = this.createLongKey(message, key);
      let encryptArr = [];
      let indexKey = 0;
      message
        .toUpperCase()
        .split("")
        .forEach(item => {
          if (this.alphabet.indexOf(item) !== -1) {
            const encryptSymbol = this.alphabet[
              (this.alphabet.indexOf(item) +
                this.alphabet.indexOf(longKey[indexKey])) %
                this.alphabet.length
            ];
            indexKey++;
            encryptArr.push(encryptSymbol);
          } else {
            encryptArr.push(item);
          }
        });
      return this.direct ? encryptArr.join("") : encryptArr.reverse().join("");
    }
    throw new Error();
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage && key) {
      const longKey = this.createLongKey(encryptedMessage, key);
      let encryptArr = [];
      let indexKey = 0;
      encryptedMessage
        .toUpperCase()
        .split("")
        .forEach(item => {
          if (this.alphabet.indexOf(item) !== -1) {
            const encryptSymbol = this.alphabet[
              (this.alphabet.indexOf(item) +
                this.alphabet.length -
                this.alphabet.indexOf(longKey[indexKey])) %
                this.alphabet.length
            ];
            indexKey++;
            encryptArr.push(encryptSymbol);
          } else {
            encryptArr.push(item);
          }
        });
      return this.direct ? encryptArr.join("") : encryptArr.reverse().join("");
    }
    throw new Error();
  }
}

module.exports = VigenereCipheringMachine;
