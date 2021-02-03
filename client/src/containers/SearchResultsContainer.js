import SearchResults from '../Components/SearchResults.jsx';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        usersList: state.usersList,
        totalCount: state.totalCount
    }
}

export default connect(mapStateToProps, null )(SearchResults);