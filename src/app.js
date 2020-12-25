import getData from "./lib/service";

const data = getData(1)
data.then((res) => console.log(res));