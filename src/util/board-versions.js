export const BoardVersion = {
    681: 'PCA10028',
    680: 'PCA10031',
    682: 'PCA10040',
    683: 'PCA10056',
    684: 'PCA10068',
    686: 'PCA10090',
};

export const getBoardVersion = serialNumber => {
    const sn = parseInt(serialNumber, 10).toString();
    const digits = sn.substring(0, 3);
    return BoardVersion[digits];
};
