const initEnum = (obj) => {
    const reverseObj = Object.keys(obj).reduce((result, item) => {
        result[obj[item]] = item;
        return result;
    }, {})

    return Object.freeze(Object.assign(obj, reverseObj));
};

const ClientType = {
    PERSON: 1,
    LEGAL: 4,
}

export const ClientTypeEnum = initEnum(ClientType);