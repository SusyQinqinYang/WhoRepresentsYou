import SearchResults from '../Components/SearchResults.jsx';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        usersListAndCount: state.usersListAndCount
    }
}

export default connect(mapStateToProps, null )(SearchResults);