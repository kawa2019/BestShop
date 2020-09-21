import { useState } from 'react';

export const useYourContactLogic = () => {
    const [controlIputs, setControlInputs] = useState({ name: '', email: "", gdpr: "" })
    const handleErrors = (name, error) => {
        setControlInputs(prevState => {
            const newState = { ...prevState };
            return { ...newState, [`error_${name}`]: error }
        })
    }
    const handleForm = (e) => {
        const regexEmail = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        e.preventDefault();
        handleErrors("name", "");
        handleErrors("email", "");
        handleErrors("gdpr", "");
        if (controlIputs.name.length < 3 || (/^[A-Za-z]$/.test(controlIputs.name))) {
            handleErrors("name", "error")
        }
        if (!regexEmail.test(controlIputs.email)) {
            handleErrors("email", "error")
        }
        if (!controlIputs.gdpr) {
            handleErrors("gdpr", "error")
        }
    }
    const handleInputs = (e) => {
        const value =
            e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setControlInputs({ ...controlIputs, [e.target.name]: value });
    }
    return { controlIputs, handleForm, handleInputs }
}