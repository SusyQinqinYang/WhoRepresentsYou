import SearchHome from '../Components/SearchHome.jsx';
import fetchUsersList from '../actions/fetchUsersList'
import { connect } from 'react-redux';

// const mapStateToProps = (state) => {
//     return 
// }

export default connect(null, { fetchUsersList })(SearchHome);