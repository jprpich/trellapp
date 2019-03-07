# Trellapp

[Live Site](http://trellapp.herokuapp.com)


## Description

Trellapp, a Trello clone, is an app where users can create multiple boards where they will keep track of a single projects lists and cards.

## Technologies Used

* Ruby on Rails
* PostgreSQL
* React
* Redux
* JavaScript
* Webpack


## Features

### Lists & Cards

Boards contain lists which contain cards. Cards have a title and description. Cards can be moved from one list to another

![wireframes](https://github.com/jprpich/trellapp/blob/master/boards-index.png)


To move positions, trellapp integrates the react-bautiful-dnd library to the applications functionality.

![](https://github.com/jprpich/trellapp/blob/master/second.gif)



```js
onDragEnd(result) {
    const { destination, source, draggableId } = result;
    if(!destination){
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index 
    ) {
      return;
    }

    const start = this.state.lists[source.droppableId];
    const finish = this.state.lists[destination.droppableId];
    
    if (start === finish){
      const newCardIds = Array.from(start.cardIds);

      newCardIds.splice(source.index, 1);
      newCardIds.splice(destination.index, 0, draggableId);

      const newList = {
        ...start,
        cardIds: newCardIds
      };

      const newState = {
        ...this.state,
        lists: {
          ...this.state.lists,
          [newList.id]: newList
        }
      }

      this.props.updateCardOrds({
        id: draggableId,
        ord: destination.index
      })
      
      this.setState(newState)
      return;

    }
}
```

### New account creation, login, and guest/demo login

Users can sign up, sign in, log out. Users can use a demo login to try the site.

###  Boards

Boards are the main context of Trellapp.

### Sharing Boards 

Boards can be shared with other users. Boards can be edited by authors and users with whom the board is shared.

### Comments

Users can comment on cards. 