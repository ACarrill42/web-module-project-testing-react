import React from 'react';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';

const testEpisode = {
    id:1,
    name: "",
    image: "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
    season: 1,
    number: 1,
    summary: "test text",
    runtime: 1
}

const testEpisodeWithoutImage = {
    //Add in approprate test data structure here.
    image: null
}

test("renders without error", () => {
  render(<Episode episode = {testEpisode}/>);
});

test("renders the summury test passed as prop", ()=>{
  render(<Episode episode = {testEpisode}/>)

  const text = screen.queryByText(/test text/i);

  expect(text).toBeTruthy()
  expect(text).toBeInTheDocument()
  expect(text).not.toBeNull()

});

test("renders default image when image is not defined", ()=>{
  render(<Episode episode = {testEpisodeWithoutImage}/>);
  
  const image = screen.getByRole('img');
  const tag = screen.getByAltText('./stranger_things.png');

  expect(image).toBeInTheDocument()
  expect(tag).toBeInTheDocument()
})

//Tasks
//1. Complete a test that shows the Episode component renders. Pass in the provided example episode data as a test prop.
//2. Modify the test data to display a specific summary statement. Complete a test that shows that the summary value passed in to the Episode component displays as expected. Use no more then 3 different expect statements to test the the existance of the summary value.
//3. The episode component displays a default value ('./stranger_things.png') when a image url is not provided. Create a new piece of test data with the image property set to null. Test that the alt tag of the image displayed is set to './stranger_things.png'.