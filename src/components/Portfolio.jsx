import React from 'react'
import { Projects } from '../Img'
import { Toolbar } from './Toolbar';

export default class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      Projects: Projects ,
      selected: []
    };
  }

  componentDidMount() {
    this.setState({
      selected: this.state.Projects
    });
  }

  onSelectFilter = name => {
    let selected = [];
    if (name === "All") {
      selected = this.state.Projects;
    } else {
      selected = this.state.Projects.filter(
        Project => Project.category === name
      );
    }
    this.setState({ selected });
  };

  render() {
    const ProjectList = this.state.selected.map(Project => (
      <img key={Project.img} src={Project.img}></img> 
    ));
    return (
      <div>
        {Toolbar.map(({ name, value }) => (
          <button
            key={name}
            value={value}
            onClick={this.onSelectFilter.bind(this, name)}>
            {name}
          </button>
        ))}
        {ProjectList}
      </div>
    );
  }
}
