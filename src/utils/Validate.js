
export const checkValidateData = (email,password) =>{
    //There is test() function for regex
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

     if(!isEmailValid) return "Email is not valid";
     if(!isPasswordValid) return "Password is not valid";

     //if there is no error return null.
     return null
};