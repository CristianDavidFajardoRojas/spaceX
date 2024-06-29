export const getCoreData = async (page) => {
    let config = {
        method: "POST",
        headers: {"content-type":"application/json"},
        body: JSON.stringify({
            options: {
                limit:1,
                page: page
            }
        })
    };

    let res = await fetch(`https://api.spacexdata.com/v4/cores/query`, config)
    return res.json();
}



export const getAllCoresData = async () => {
    let res = await fetch(`https://api.spacexdata.com/v4/cores`)
    return res.json();
}