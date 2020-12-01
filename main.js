
const hotOrNot = (char) => {
    if (char.toLowerCase() == 'hot') {
        return true 
    }
    else {
        return 'not' 
    }
}

// console.log(hotOrNot('hot'))

module.exports = {
  hotOrNot
}