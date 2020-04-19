export const getTarget = (e) => {
    if (e.currentTarget) {
        return e.currentTarget
    } else {
        return e.target
    }
};
