export const initLocalStorage = (key) =>
{
    //take localStorage
    let valueStorage = localStorage.getItem(key);
    //init
    return valueStorage = localStorage.getItem(key) ? JSON.parse(valueStorage) : {};
}

export const printFormToConsole = (feedbackForm) =>
{
    //print to concole
    const formData = new FormData(feedbackForm);
    formData.forEach((key, value) =>
        console.log(`${value} => ${key}`));
}

export const  clearForm = (feedbackForm) => {
    //clear form
    if (feedbackForm)
    {
        feedbackForm.reset();
    }
}