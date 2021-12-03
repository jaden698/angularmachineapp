var mongoose = require('mongoose');

var MachineSchema = new mongoose.Schema({
    id: {type:Number},
    nom: {type:String},
    adresse: {type:String},
    etat: {type:Boolean},
});

module.exports = mongoose.model('Machine', MachineSchema);