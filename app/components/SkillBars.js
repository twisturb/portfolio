import React from 'react';

class SkillBars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          name: 'HTML',
          width: 80
        },
        {
          name: 'CSS',
          width: 80
        },
        {
          name: 'JavaScript',
          width: 60
        },
        {
          name: 'React',
          width: 50
        }
      ]
    }
  }

  render() {
    return (
      <div className="skillbars">
        {this.state.list.map(item =>
          <div className="skillbar" key={item.name}>
            <div className="skillbar-tag" style={{ width: item.width + "%" }}>{item.name}</div>
            <span>{item.width} %</span>
          </div>
        )}
      </div>
    )
  }
}

export default SkillBars;