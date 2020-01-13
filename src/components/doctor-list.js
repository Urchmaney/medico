/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './presentation/header';
import Doctor from './presentation/doctor';
import { get } from '../helpers/api';
import { roleUrl } from '../helpers/constants';
import '../styles/style.scss';

const likesCategory = ['0-50', '50-100', '100-200', '200-400', '400 - above'];
const yrCategory = ['0-3', '4-7', '7-10', '10-13', '14-above'];
const getCategory = (category) => {
  const values = category.split('-');
  return values.map(element => (
    Number.isNaN(element) ? Infinity : Number(element)
  ));
};

class DoctorsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterShow: false,
      doctors: [],
      like: '',
      search: '',
      yr: '',
    };
    this.showFilter = this.showFilter.bind(this);
    this.closeFilter = this.closeFilter.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { role, token } = this.props;
    const getResult = get(roleUrl(role.id), token);
    getResult.then((result) => {
      this.setState(state => ({
        ...state, doctors: [...result],
      }));
    });
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

  handleChange(event) {
    const { value, name } = event.target;
    this.setState(state => ({
      ...state, [name]: value,
    }));
  }

  render() {
    const {
      filterShow, doctors, search, like, yr,
    } = this.state;
    const { showFilter, closeFilter, handleChange } = this;
    const { role, history, loggedIn } = this.props;
    let filterDoctors = doctors;
    if (!loggedIn) {
      return (<Redirect to="/login" />);
    }
    if (like) {
      const category = getCategory(like);
      filterDoctors = doctors.filter(doctor => doctor.likes_count >= category[0]
      && doctor.likes_count <= category[1]);
    }
    if (yr) {
      const category = getCategory(yr);
      filterDoctors = filterDoctors.filter(doctor => doctor.years_experience >= category[0]
      && doctor.years_experience <= category[1]);
    }
    if (search) {
      filterDoctors = filterDoctors.filter(doctor => doctor.first_name
        .toLowerCase().includes(search.toLowerCase())
      || doctor.last_name.toLowerCase().includes(search.toLowerCase()));
    }

    return (
      <main>
        <Header name="Doctors" iconOnClick={() => history.goBack()} filter={!filterShow} filterOnClick={showFilter} />
        {
          filterShow
          && (
          <div className="filter">
            <span className="filter-text">Filter :</span>
            <input type="text" name="search" value={search} onChange={handleChange} placeholder="search name" />
            <select name="yr" onChange={handleChange}>
              <option value="">yr Experience</option>
              {yrCategory.map(category => (
                <option value={category} key={category}>
                  {category}
                </option>
              ))}
            </select>
            <select name="like" onChange={handleChange}>
              <option value="">Likes</option>
              {likesCategory.map(category => (
                <option value={category} key={category}>
                  {category}
                </option>
              ))}
            </select>
            <button className="close" onClick={closeFilter} type="button">
              X
            </button>
          </div>
          )
        }

        <div className="doctors-container">
          {filterDoctors.map(doctor => (
            <Doctor key={doctor.id} doc={doctor} role={role.name} history={history} />
          ))}
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  role: state.role,
  token: state.token,
  loggedIn: state.loggedIn,
});

DoctorsList.propTypes = {
  role: PropTypes.object.isRequired,
  token: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(DoctorsList);
