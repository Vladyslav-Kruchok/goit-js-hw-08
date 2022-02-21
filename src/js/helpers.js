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
    let str = '';
    const formData = new FormData(feedbackForm);
    formData.forEach((key, value) =>
    {
        str += `"${value}":"${key}",`
    });
    console.log(JSON.parse(`{${str.slice(0,-1)}}`));
}

export const  clearForm = (feedbackForm) => {
    //clear form
    if (feedbackForm)
    {
        feedbackForm.reset();
    }
}

export const saveLocalStorage = (valueStorage, key,  event) => {
    //prepare storage-obj by name with value
    valueStorage[event.target.name] = event.target.value;
    
    //set data to localStorage
    localStorage.setItem(key, JSON.stringify(valueStorage));
}