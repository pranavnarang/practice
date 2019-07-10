/**
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = (address) => {
    let defangIp = "";
    for (let i = 0; i < address.length; i++){
        let char = address.charAt(i);
        if(characterIsAPeriod(char)){
            defangIp += char;
        } else {
            defangIp += "[.]";
        }
    }
    return defangIp;
};

module.exports = defangIPaddr;

function characterIsAPeriod(char) {
    return char != ".";
}
