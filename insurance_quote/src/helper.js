export function getYearDifference(year) {
    return new Date().getFullYear() - year
}

export function getIncrementByBrand(brand) {

    let increment

    switch (brand) {
        case 'asian':
            increment = 1.05
            break
        case 'american':
            increment = 1.15
            break
        case 'european':
            increment = 1.30
            break
        default:
            break
    }

    return increment
}

export function getPriceByCoverage(coverage) {
    return (coverage === 'basic') ? 1.2 : 1.5
}

export function capitalizeText(text) {
    return text.charAt(0).toUpperCase() + text.slice(1)
}