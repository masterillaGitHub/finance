import{a8 as a}from"./index-bTSU7rTX.js";class n extends a{getResource(){return"bank-accounts"}static updateTransactions(t){return new this().updateTransactions(t)}async updateTransactions(t){return await this.post(this.getPath()+"/update-transactions",{bankId:t})}}export{n as B};