/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './presentation/header';
import Image from './presentation/image';
import imgsrc from '../images/stereo.svg';
import Footer from './presentation/footer';
import { get } from '../helpers/api';
import { rolesUrl } from '../helpers/constants';
import { changeRole } from '../actions/index';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roles: [],
      search: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { token } = this.props;
    const getResult = get(rolesUrl, token);
    getResult.then(result => {
      if (!result.error) {
        this.setState(state => ({
          ...state, roles: result,
        }));
      }
    });
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(state => ({
      ...state, search: value,
    }));
  }

  render() {
    const { roles, search } = this.state;
    const { changeRole, history } = this.props;
    let searchRoles = roles;
    if (search) {
      searchRoles = roles.filter((role) => role.name.toLowerCase().includes(search.toLowerCase()));
    }
    return (
      <main>
        <div className="container">
          <Header name="Roles" search searchOnChange={this.handleChange} />
          <p className="space" />
          <Image src={imgsrc} />
          <div className="category-container">
            <h3>
              Search Doctors
            </h3>
            <p>
              Search by directly typing doctors name.
              Or clicking speciality.
            </p>
            <div className="category">
              {
                searchRoles.map((category) => (
                  <div role="presentation" className="category-unit" key={category.id} onClick={() => { changeRole(category); history.push('/doctors'); } }>
                    {category.name}
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <Footer />
      </main>
    );
  }
}

Dashboard.propTypes = {
  token: PropTypes.string.isRequired,
  changeRole: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  changeRole: (role) => dispatch(changeRole(role)),
});

const mapStateToProps = state => ({
  token: state.token,
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
