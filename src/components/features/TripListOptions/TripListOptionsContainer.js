import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, changeDurationFrom, changeDurationTo, changeAddTag, changeRemoveTag} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODOS - add more dispatchers for other filters
  changeDurationFrom: value => dispatch(changeDurationFrom(value)),
  changeDurationTo: value => dispatch(changeDurationTo(value)),
  changeAddTag: tags => dispatch(changeAddTag(tags)),
  changeRemoveTag: tags => dispatch(changeRemoveTag(tags)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
