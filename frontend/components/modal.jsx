import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import BoardFormContainer from './boards/board_form_container';
import ProfileDropdownContainer from './boards/profile_dropdown_container';
import BoardsDropdownContainer from './boards/boards_dropdown_container';
import EditBoardFormContainer from './boards/edit_board_form_container';
import CardShowContainer from './cards/card_show_container';
import ShowShareContainer from './boards/show_share_container';
import ListFormContainer from './lists/list_form_container';
import CardFormContainer from './cards/card_form_container';

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal.message) {
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
    case 'edit board':
      component = <EditBoardFormContainer id={modal.id} />;
      return (
        <div className="modal-background" onClick={closeModal}>
          <div className="modal-child" onClick={e => e.stopPropagation()}>
            {component}
          </div>
        </div>
      );
    case 'show card':
      component = <CardShowContainer id={modal.id}/>;
      return (
        <div className="modal-background" onClick={closeModal}>
          <div className="card-show-modal-child" onClick={e => e.stopPropagation()}>
            {component}
          </div>
        </div>
      )
    case 'show share':
      component = <ShowShareContainer/>;
      return (
        <div className="modal-background" onClick={closeModal}>
          <div className="card-show-modal-child" onClick={e => e.stopPropagation()}>
            {component}
          </div>
        </div>
      )
    case 'show list form':
      component = <ListFormContainer boardId={modal.id}/>;
      return (
        <div className="modal-background" onClick={closeModal}>
          <div className="modal-child" onClick={e => e.stopPropagation()}>
            {component}
          </div>
        </div>
      )
    case 'show card form':
      component = <CardFormContainer listId={modal.id}/>;
      return (
        <div className="modal-background" onClick={closeModal}>
          <div className="modal-child" onClick={e => e.stopPropagation()}>
            {component}
          </div>
        </div>
      )
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