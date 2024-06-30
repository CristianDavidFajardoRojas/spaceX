export const getHistoryData = async (page) => {
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

    let res = await fetch(`https://api.spacexdata.com/v4/history/query`, config)
    return res.json();
}



export const getAllHistoryData = async () => {
    let res = await fetch(`https://api.spacexdata.com/v4/history`)
    return res.json();
}