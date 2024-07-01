export const getLaunchpadData = async (page) => {
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

    let res = await fetch(`https://api.spacexdata.com/v4/launchpads/query`, config)
    return res.json();
}



export const getAlllaunchpadsData = async () => {
    let res = await fetch(`https://api.spacexdata.com/v4/launchpads`)
    return res.json();
}