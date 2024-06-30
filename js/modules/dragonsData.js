export const getDragonData = async (page) => {
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

    let res = await fetch(`https://api.spacexdata.com/v4/dragons/query`, config)
    return res.json();
}



export const getAllDragonsData = async () => {
    let res = await fetch(`https://api.spacexdata.com/v4/dragons`)
    return res.json();
}