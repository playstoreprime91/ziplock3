function validateInputs(name, level, money, health) {
    if (!name || !/^[A-Za-z]+$/.test(name)) return false
    if (isNaN(level) || level <= 0) return false
    if (isNaN(money) || money < 0 || money > 999999) return false
    if (isNaN(health) || health < 0) return false
    return true
}

module.exports = { validateInputs }