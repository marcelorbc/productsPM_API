module.exports = async (req) => {

    if(req.params.name.length < 3){
        throw new Error("Data invalid error");
    }


    return {
        name: req.params.name
    }
}