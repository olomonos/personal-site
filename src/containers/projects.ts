import { connect } from 'react-redux';
import { Store } from '../store';
import { Projects, Props } from '../components/projects';

export type StateProps = Pick<Props, 'projects'>;

export default connect<StateProps>(
    (state: Store) => ({
        projects: state.projects
    })
)(
    Projects
);
