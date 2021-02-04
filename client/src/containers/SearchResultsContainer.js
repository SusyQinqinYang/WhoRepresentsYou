import SearchResults from '../Components/SearchResults.jsx';
import fetchUsersList from '../actions/fetchUsersList';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        usersQueryAndListAndCount: state.usersQueryAndListAndCount
    }
}

export default connect(mapStateToProps, { fetchUsersList } )(SearchResults);