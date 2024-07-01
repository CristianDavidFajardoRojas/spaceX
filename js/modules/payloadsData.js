export const getPayloadData = async (page) => {
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

    let res = await fetch(`https://api.spacexdata.com/v4/Payloads/query`, config)
    return res.json();
}



export const getAllPayloadsData = async () => {
    let res = await fetch(`https://api.spacexdata.com/v4/Payloads`)
    return res.json();
}