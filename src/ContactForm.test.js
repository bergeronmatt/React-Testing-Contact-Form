// import the necessary dependencies
import React from "react";
import { render, fireEvent, getByRole, getByTestId } from "@testing-library/react";

//import testing file
import ContactForm from "./components/ContactForm";

test('renders correctly', () => {
    render(<ContactForm />)
})


// test to see if forms add information

test ('test contact form to add new contact to contact list', () => {
    //get object from the render function
    const {getByLabelText, findByTestId} = render(<ContactForm/>)

    //query for the form inputs
    const firstNameInput = getByLabelText(/first name/i)
    const lastNameInput = getByLabelText(/last name/i)
    const emailInput = getByLabelText(/email/i)
    const messageInput = getByLabelText(/message/i)

    // fireEvent function from RTL (react testing library) to fill in the inputs\
    // make sure to importe {fireEvent} in the react import line
    fireEvent.change(firstNameInput, {
        target: { name: 'firstName', value: 'Matt'}
    });
    fireEvent.change(lastNameInput, {
        target: {name: 'lastName', value: 'Bergeron'}
    });
    fireEvent.change(emailInput, {
        target: {name: 'email', value: 'mjbergeron18@gmail.com'}
    });
    fireEvent.change(messageInput, {
        target: {name: 'message', value: 'fill in here'}
    });

    //to test the fire events and find them faster *they don't render in the window*
    console.log(firstNameInput.value)
    console.log(lastNameInput.value)
    console.log(emailInput.value)
    console.log(messageInput.value)

    findByTestId('submit').then((res) => {
        fireEvent.click(res);
    })

})