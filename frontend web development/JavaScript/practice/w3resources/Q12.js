function fetchUserData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`An Error Has Occurred While Fetching The Data. Server Responded With Status: ${response.status}.`);
                }
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error.message);
            });
    });
}

function takeURL(url) {
    fetchUserData(url)
        .then(data => {
            const userName = data.results[0];
            const firstName = userName.name.first;
            const lastName = userName.name.last;
            const email = userName.email;
            const gender = userName.gender;
            console.log(`${firstName} ${lastName}`);
            console.log(email);
            console.log(gender[0].toUpperCase() + gender.slice(1));
        })
        .catch(error => {
            console.error(error);
        });
}

takeURL("https://randomuser.me/api/");