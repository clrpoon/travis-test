import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import EquipWindow from './EquipWindow'




test('testing html changes', () => {
    const Name = "Travis"
    const Description = "hello world"
    const {getByTestId} = render(<EquipWindow name={Name} description={Description}/>)
    fireEvent.click(getByTestId('testItemField'));

    const headerVal = getByTestId('testName');
    expect(headerVal.textContent).toBe("Travis");

    const descVal = getByTestId('testDescription');
    expect(descVal.textContent).toBe(Description);
});