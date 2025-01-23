const postdb =  require("./schema");


const getAllQuery = async() => {
    const data = await postdb.find().exec();
    return data;
}

const saveQuery = async(input) => {
    const res = await postdb.insertMany({
        ...input
    });

    return res;
}

module.exports = {
    getAllQuery,
    saveQuery
}