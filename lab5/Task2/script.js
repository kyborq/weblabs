var cashbox = {
  amount: 0,
  addPayment: function(payment) {
    if (payment.amount > 0) {
      this.amount = this.amount + payment.amount;
      console.log('--- Платеж: "' + payment.info + '" успешно завершен!');
      console.log('Текущий баланс: ' + this.amount + ' руб.');
    } else {
      console.log('--- ОШИБКА. Невозможно совершить платёж "' + payment.info + '"');
    }
  },
  refundPayment: function(refund) {
    if (this.amount > 0 && this.amount - refund.amount >= 0) {
      this.amount = this.amount - refund.amount;
      console.log('--- Снятие со счета: "' + refund.info + '" ' + refund.amount + ' руб.');
      console.log('Текущий баланс: ' + this.amount + ' руб.');
    } else {
      console.log('--- Недостаточно средств для списания со счёта ' + this.amount);
      console.log('Текущий баланс: ' + this.amount + ' руб.');
    }
  }
};

cashbox.addPayment({ amount: -10, info: 'Оплата штрафа' });
cashbox.addPayment({ amount: 10, info: 'Оплата ЖКХ' });

cashbox.refundPayment({ amount: 10, info: 'Возврат клиенту' });
cashbox.refundPayment({ amount: 10, info: 'Возврат клиенту' });
