export const getAllRoadsterData = async () => {
    let res = await fetch(`https://api.spacexdata.com/v4/roadster`)
    return res.json();
}