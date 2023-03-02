const strContains = (str, searchStr) => {
    const normalizedStr = str.toLowerCase();
    const normalizedSearchStr = searchStr.toLowerCase();
    return normalizedStr.includes(normalizedSearchStr);
};

export default strContains;
