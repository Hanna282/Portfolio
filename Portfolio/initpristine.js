window.onload = function () {

    //Creates the pristine instance
    let form = document.getElementById("form1");
    let pristine = new Pristine(form, {
        classTo: 'form-items',
        errorTextParent: 'form-items',
    });

    //Validation for name field
    let name = document.getElementById("name");
    pristine.addValidator(name, function (value, el) {

        if (value.length < 1) {
            return false;
        }
        if (value.length === 1) {
            return false;
        }
        if (value.length >= 40) {
            return false;
        }

        let pattern = /^[A-Za-z]{2,}(-[A-Za-z]+)?( [A-Za-z]+(-[A-Za-z]+)*)*$/;
        return pattern.test(value);

    }, function (value, el) {

        if (value.length < 1) {
            return "Ange ett namn";
        }
        if (value.length === 1) {
            return "Namnet måste innehålla mer än en bokstav";
        }
        if (value.length >= 40) {
            return "Ogiltigt, för många tecken angivet";
        }

        return "Felaktigt format angivet";
    }, 2, false);

    //Validation for tel/phone field
    let tel = document.getElementById("tel");
    pristine.addValidator(tel, function (value, el) {

        let containsDash = /-/.test(value);
        let pattern = /^(?:\+46|0|0046)[ ]?7\d{1}[ ]?(\d{3})[ ]?(\d{2})[ ]?(\d{2})$/;

        if (value.length < 1) {
            return false;
        }
        if (containsDash) {
            return false;
        }

        return pattern.test(value);
    },
        function (value, el) {

            if (value.length < 1) {
                return "Ange ett telefonnummer";
            }
            if (/-/.test(value)) {
                return "Får inte innehålla bindestreck.";
            }

            return "Ogiltigt telefonnummer";
        }, 2, false);


    //Submit form
    form.addEventListener('submit', function (e) {
        e.preventDefault(); //Prevents the form from submitting and the page from reloading

        let valid = pristine.validate();

        if (valid) {
            form.submit();
            form.reset();
            pristine.reset();
        }
    });

    //Reset input fields
    form.addEventListener('reset', function (e) {
        form.reset();
    });

    //Reset error messages
    form.addEventListener('reset', function (e) {
        pristine.reset();
    });
};