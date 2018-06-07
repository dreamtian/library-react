
import { Component } from 'react';
import { render, mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Button from '../index';
// import { wrap } from 'module';


describe('Button', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <Button></Button>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('two CN char join space', () => {
    const wrapper = render(
      <Button>嘻嘻</Button>
    );
    expect(wrapper.text()).toBe('嘻 嘻');
  })

  it('should response click event to change text', () => {
    class DefaultButton extends Component {
      state = {
        text: 'init'
      }
      enterDisable = () => {
        this.setState({
          text: 'changed'
        })
      }
      render() {
        return <Button onClick={this.enterDisable} disabled={this.state.disabled}>{this.state.text}</Button>
      }
    }
    const wrapper = mount(
      <DefaultButton />
    );
    expect(wrapper.find('button').text()).toBe('init');
    wrapper.simulate('click');
    expect(wrapper.find('button').text()).toBe('changed');
  })
});