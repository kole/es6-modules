export default function () {
    return new Promise((resolve) => {
        console.log('Dep 1');
        resolve();
    });
};
