import React from 'react';
import Header from './presentation/header';
import Doctor from './presentation/doctor';
import '../styles/style.scss';

const doctors = [{
  name: 'Frnk hugo',
  role: 'general physician',
  price: 200,
  years: 4,
  likes: 200,
}, {
  name: 'Gerrad hugo',
  role: 'General physician',
  price: 300,
  years: 33,
  likes: 1200,
}];

class DoctorsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterShow: false,
    };
    this.showFilter = this.showFilter.bind(this);
    this.closeFilter = this.closeFilter.bind(this);
  }

  showFilter() {
    this.setState({
      filterShow: true,
    });
  }

  closeFilter() {
    this.setState({
      filterShow: false,
    });
  }

  render() {
    const { filterShow } = this.state;
    const { showFilter, closeFilter } = this;
    return (
      <main>
        <Header name="Role" filter={!filterShow} filterOnClick={showFilter} />
        {
          filterShow
          && (
          <div className="filter">
            <span>Filter :</span>
            <input type="text" />
            <select>
              <option>yr Experience</option>
            </select>
            <select>
              <option>Likes</option>
            </select>
            <button className="close" onClick={closeFilter} type="button">
              X
            </button>
          </div>
          )
        }

        <div className="doctors-container">
          {doctors.map((doctor) => (
            <Doctor key={doctor} doc={doctor} />
          ))}
        </div>
      </main>
    );
  }
}

export default DoctorsList;
