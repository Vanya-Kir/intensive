//класс Mailbox
class Mailbox {
    constructor() {
        this.mail = null;
        this.arrayB = [];       //массив для функций beforeSend
        this.arrayA = [];       //массив для функций afterSend
        this.flagBefor = true;  //флаг проверки для beforeSend
    }
    beforeSend(funB) {
        this.arrayB.push(funB);
    }

    afterSend(funA) {
        this.arrayA.push(funA);
    }

    sendMail(mail) {
        this.mail = mail;

        for (let i in this.arrayB) {
            this.flagBefor = this.arrayB[i](this.mail) && this.flagBefor;
        }
        if (this.flagBefor) {
            for (let i in this.arrayA) {
                this.arrayA[i](this.mail);
            }
        }
    }
}


// Проверка
const mailbox = new Mailbox()
mailbox.beforeSend(function (mail, send) {
    return mail !== 'spam';
})
mailbox.afterSend(function (mail) {
    console.log('Новое сообщение: ' + mail)
})
mailbox.sendMail('asdf') // в консоли ‘Новое сообщение: asdf’
mailbox.sendMail('spam') // ничего не выводит в консоль
