export const getCompanyData = async (page) => {
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

    let res = await fetch(`https://api.spacexdata.com/v4/company/query`, config)
    return res.json();
}

export const getAllCompanyData = async () => {
    let res = await fetch(`https://api.spacexdata.com/v4/company`)
    return res.json();
}