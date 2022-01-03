import { cleanup, render, screen } from "@testing-library/react";
import { ChangeEvent } from "react";
import { Dropdown } from "..";
import SearchInput from "../SearchInput";

afterEach(() => {
    cleanup();
})

describe('Dropdown', () => {
    it('should render option with four selects', async () => {

        const values = ['option1', 'option2', 'option3']
        const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => { }

        render(<Dropdown values={values} onChange={handleOnChange} />)
        const element = await screen.getByTestId('option-test-1')

        expect(element).toBeInTheDocument()
        expect(element).toHaveTextContent('option1')
        expect(element).toHaveTextContent('option2')
        expect(element).not.toHaveTextContent('option33333')
    });
})

describe('SearchInput', () => {
    it('should render option with four selects', async () => {
        const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => { }

        render(<SearchInput handleOnChange={handleOnChange} />)
        const element = await screen.getByTestId('option-test-2')

        expect(element).toBeInTheDocument()
    });
})