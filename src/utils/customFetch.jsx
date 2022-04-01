let is_ok = true;

const customFetch = (time, task) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (is_ok) {
                resolve(task);
            } else {
                reject("Hubo un error con el customFetch");
            }
        }, time);
    });
}

export default customFetch;