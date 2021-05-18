import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate correct links', () => {
    const correctLink = '/trip/abc';
    const correctId = 'abc';
    const component = shallow(<TripSummary id={correctId} />);
    expect(component.find('.link').prop('to')).toEqual(correctLink);
  });

  it('should check if img has correct src and alt', () => {
    const correctSrc = 'photo.jpg';
    const correctAlt = 'photo';
    const component = shallow(<TripSummary image={correctSrc} name={correctAlt}/>);
    expect(component.find('img').prop('src')).toEqual(correctSrc);
    expect(component.find('img').prop('alt')).toEqual(correctAlt);
  });

  it('should render props name, cost and days, correctly', () => {
    const correctName = 'name';
    const correctCost = '44';
    const correctDays = 7;
    const component = shallow(<TripSummary name={correctName} cost={correctCost} days={correctDays} />);
    expect(component.find('h3').text()).toEqual(correctName);
    expect(component.find('span').at(1).text()).toEqual(`from ${correctCost}`);
    expect(component.find('span').at(0).text()).toEqual(`${correctDays} days`);
  });

  it('should render tags in correct order', () => {
    const correctTags = ['tagUno', 'tagDos', 'tagTres'];
    const component = shallow(<TripSummary  tags={correctTags} />);
    expect(component.find('.tag').at(0).text()).toEqual(correctTags[0]);
    expect(component.find('.tag').at(1).text()).toEqual(correctTags[1]);
    expect(component.find('.tag').at(2).text()).toEqual(correctTags[2]);
  });

  it('should not render div if array tags is false', () => {
    const component = shallow(<TripSummary />);
    expect(component.find('.tags').isEmpty()).toEqual(false);
  });

  it('should throw error without required props sans tags', () => {
    expect(() => shallow(<TripSummary tags={[]} />)).toThrow();
  });
});