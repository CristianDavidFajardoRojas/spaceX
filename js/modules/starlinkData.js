export const getStarlinkData = async (page) => {
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

    let res = await fetch(`https://api.spacexdata.com/v4/starlink/query`, config)
    return res.json();
}

export const getAllStarlinkData = async () => {
    let res = await fetch(`https://api.spacexdata.com/v4/starlink`)
    return res.json();
}