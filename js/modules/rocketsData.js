export const getRocketData = async (page) => {
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

    let res = await fetch(`https://api.spacexdata.com/v4/rockets/query`, config)
    return res.json();
}



export const getAllRocketsData = async () => {
    let res = await fetch(`https://api.spacexdata.com/v4/rockets`)
    return res.json();
}