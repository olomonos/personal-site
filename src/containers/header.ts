import { connect } from 'react-redux';
import { Store } from '../store';
import { Header, Props } from '../components/header';

export type StateProps = Pick<Props, 'contact'>;

export default connect<StateProps>(
    (state: Store) => ({
        contact: state.contact
    })
)(
    Header
);
