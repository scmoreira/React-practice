export const ReviewBudget = (budget, rest) => {
    let className

    if ((budget / 4) > rest) {
        className='alert alert-danger'
    } else if ((budget / 2) > rest) {
        className='alert alert-warning'
    } else {
        className='alert alert-success'
    }

    return className
    
}