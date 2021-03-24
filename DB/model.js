// Fighting Games Matchups / This app allow you take personal notes about matchups

const monngose = require('mongoose');
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
    game: String,
    name: String,
    rival: {
        name: String,
        canPunish: String,
        notes: String
    },
    advantages: String,
    disadvantages: String,
    notes: String
});

const Character = mongoose.model('Character', CharacterSchema);

module.exports = Character;