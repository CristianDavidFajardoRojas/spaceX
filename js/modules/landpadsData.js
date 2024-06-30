export const getLandpadData = async (page) => {
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

    let res = await fetch(`https://api.spacexdata.com/v4/landpads/query`, config)
    return res.json();
}



export const getAllLandpadsData = async () => {
    let res = await fetch(`https://api.spacexdata.com/v4/landpads`)
    return res.json();
}