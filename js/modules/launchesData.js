export const getLaunchData = async (page) => {
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

    let res = await fetch(`https://api.spacexdata.com/v4/launches/query`, config)
    return res.json();
}



export const getAllLaunchesData = async () => {
    let res = await fetch(`https://api.spacexdata.com/v4/launches`)
    return res.json();
}