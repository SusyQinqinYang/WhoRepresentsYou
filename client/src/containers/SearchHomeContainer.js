import SearchHome from '../Components/SearchHome.jsx';
import fetchUsersList from '../actions/fetchUsersList';
import { connect } from 'react-redux';

export default connect(null, { fetchUsersList })(SearchHome);