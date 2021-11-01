// Tambahkan kode JavaScript kalian di file ini
//16
function getFormData() {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const city = document.getElementById("city").value;
    const zipCode = document.getElementById("zip-code").value;
    const check = document.getElementById("check").checked;

    return {
        firstName,
        lastName,
        city,
        zipCode,
        check,
    }
}

// 17
function isNumber(str) {
    return !isNaN(str);
}

// 18
function isLength(str, int) {
    return str.length === int;
}

// 19
function checkboxIsChecked() {
    return getFormData().check;
}

// 20
function validateFormData(obj) {
    return !!(obj != null && isNumber(obj.zipCode) && checkboxIsChecked());
}

// 21
function resetForm() {
    document.forms[0].reset();
}

// 22
function submit() {
    if(validateFormData(getFormData()) === false) {
        document.getElementById("warning").innerText = "Periksa form anda sekali lagi"
    } else {
        document.getElementById("warning").innerText = ""
    }
}