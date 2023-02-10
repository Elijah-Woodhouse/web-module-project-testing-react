import React from 'react';
import { render, fireEvent, screen, userEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Show from './../Show';

const showData = {
    name: "test show",
    summary: "ligma balls",
    seasons: [
        {
            id: 0,
            name: "season 1",
            episode: []
        },
        {
            id: 1,
            name: "season 2",
            episode: []
        }
    ]

}


test('renders testShow and no selected season without errors', () => {
    render(<Show show={showData} selectedSeason={"none"}/>)
});

test('renders Loading component when prop show is null', () => {
    render(<Show show={null}/>);
    const loading = screen.queryByTestId('loading-container');
    expect(loading).toBeInTheDocument();
});

test('renders same number of options seasons are passed in', () => {
    render(<Show show={showData} selectedSeason={"none"}/>);
    const seasonOptions = screen.queryAllByTestId("season-option");
    expect(seasonOptions).toHaveLength(2);
});

test('handleSelect is called when an season is selected', () => {
    render(<Show show={showData} selectedSeason={"none"}/>);
    const select = screen.getByLabelText(/Select A Season/i);
    fireEvent.click(select);
    const option = screen.getByText(/season 1/i);
    fireEvent.click(option);
});

test('component renders when no seasons are selected and when rerenders with a season passed in', () => {

});
