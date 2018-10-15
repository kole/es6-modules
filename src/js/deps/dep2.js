export default function () {
    return new Promise((resolve) => {
        console.log('Dep 2');
        resolve();
    });
}
