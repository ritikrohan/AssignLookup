const lookupMap = new Map([
    ['btrees', 'https://www.dropbox.com/scl/fi/72tcmtj3w6h6gga1byizm/btrees-yk0f2j.zip?rlkey=dqpn1821o1d60fl0iohqnaneh&st=ofvt6sh8&dl=0'],
    ['wikiracer', 'https://www.dropbox.com/scl/fi/qiotrgph0331b9f4t5vjg/wikiracer-ArunaNet.zip?rlkey=imiy7janyvcyn2hwsfek7nrn2&st=ldbc6e1u&dl=0'],
    ['key3', 'btaenge'],
    // Add more key-value pairs as needed
]);

function getValueFromLookup(key) {
    return lookupMap.get(key) || null;
}

module.exports = {
    getValueFromLookup,
};