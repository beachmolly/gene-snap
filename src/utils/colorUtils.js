export const getColorForBase = (base) => {
    switch (base) {
        case "A":
            return "green";
        case "T":
            return "red";
        case "C":
            return "blue";
        case "G":
            return "yellow";
        default:
            return "gray";
    }
};
