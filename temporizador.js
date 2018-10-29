const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 01 * * 1', function () { // Execute de 5 em 5 minutos às 01h, ignoro dia do mês, ignoro o mês, executa na segunda-feira 
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!') // Cancela tarefa 1 pois passou dos 20 segundos
}, 20000) // Executar cancelamento depois de 20 segundos

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)] // Executa de segunda a sexta-feira
regra.hour = 01
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function() { 
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})