const geduArray = [
    {
        msg: "hey",
        status: "act",
    },
    {
        msg: "hello",
        status: "ina",
    },
    {
        msg: "bye",
        status: "act",
    },
];

ggeduArray.sort((a, b) =>
    a.status > b.status ? 1 : b.status > a.status ? -1 : 0
);

console.log(geduArray);
