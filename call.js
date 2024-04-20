const makeRequest = async (url) => {
    const response = await fetch(url, {
        method: "GET",
        headers: {
            Authorization: "Bearer 1|ryvySDg8kgXAtedtSIS9TdlGdMZlHsLrfKxAEHwt",
        },
    });
    const data = await response.json();
    return data;
};

const caller = async () => {
    const data = await makeRequest(
        "http://198.199.123.61:8000/api/v1/chat/10/start"
    );
    console.log(data);
};

caller();
