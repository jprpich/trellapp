import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import BoardFormContainer from './boards/board_form_container';
import ProfileDropdownContainer from './boards/profile_dropdown_container';
import BoardsDropdownContainer from './boards/boards_dropdown_container';

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'create board':
      component = <BoardFormContainer />;
      return (
        <div className="modal-background" onClick={closeModal}>
          <div className="modal-child" onClick={e => e.stopPropagation()}>
            {component}
          </div>
        </div>
      );
    case 'profile dropdown':
      component = <ProfileDropdownContainer />;
      return (
        <div className="transparent-modal-background" onClick={closeModal}>
          <div className="profile-dropdown-modal-child" onClick={e => e.stopPropagation()}>
            {component}
          </div>
        </div>
      );
    case 'boards dropdown':
      component = <BoardsDropdownContainer />;
    return (
      <div className="transparent-modal-background" onClick={closeModal}>
        <div className="boards-modal-child" onClick={e => e.stopPropagation()}>
          {component}
        </div>
      </div>
    );
    default:
      return null;
  }

  
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);