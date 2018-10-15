export default function () {
    return new Promise((resolve) => {
        setTimeout(() =>   {
            console.log('Dep 2');
            resolve();
        },  1500);
    });
}
