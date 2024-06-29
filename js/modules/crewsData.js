export const getCrewData = async (page) => {
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

    let res = await fetch(`https://api.spacexdata.com/v4/crew/query`, config)
    return res.json();
}



export const getAllCrewsData = async () => {
    let res = await fetch(`https://api.spacexdata.com/v4/crew`)
    return res.json();
}