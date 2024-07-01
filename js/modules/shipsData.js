export const getShipData = async (page) => {
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

    let res = await fetch(`https://api.spacexdata.com/v4/ships/query`, config)
    return res.json();
}



export const getAllShipsData = async () => {
    let res = await fetch(`https://api.spacexdata.com/v4/ships`)
    return res.json();
}