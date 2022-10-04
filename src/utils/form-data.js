const validteEmail = (email) => {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
export const isNotEmpty = value => value.trim() !== '';
export const isEmailValid = value => validteEmail(value.trim());
