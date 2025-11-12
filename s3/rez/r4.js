// implementați metoda 'times' pe tipul Number, astfel încât 3.times(() => {}) să execute funcția de 3 ori.
Number.prototype.times = function(callback) {
  for (let i = 0; i < this; i++) {
    callback(i);
  }
};

// Exemplu de utilizare:
(3).times((i) => {
  console.log(`This is iteration number ${i + 1}`);
});