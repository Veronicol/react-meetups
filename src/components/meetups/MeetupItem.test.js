/* eslint-disable testing-library/no-debugging-utils */
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { favoriteListReducer } from "../../redux/reducers/favorite_list";
import Card from "../ui/Card";
import MeetupItem from "./MeetupItem";

const mockItem = {
  "id": "m1",
  "title": "This is a first meetup",
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
  "address": "Meetupstreet 5, 12345 Meetup City",
  "description": "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!"
};

const emptyInitialState = { favoriteList: []};
const createMockStore = (state) => configureStore({
  reducer: combineReducers({favoriteList: favoriteListReducer}),
  preloadedState: state
});

const mountWrapper = ({item = mockItem, store = createMockStore(emptyInitialState)}) => mount(
  <Provider store={store}>
    <MeetupItem item={item}/>
  </Provider>
);

describe('MeetupItem component', () => {
  test('<MeetupItem/> renders without crashing', () => {
    const wrapper = mountWrapper({});
    expect(wrapper.exists()).toBe(true);
  });

  describe('Component elements:', () => {
    let wrapper, cardComponent;
    beforeAll(() => {
      wrapper = mountWrapper({});
      cardComponent = wrapper.find(Card);
    });
    
    test('Should render a Card component', () => {
      expect(cardComponent.length).toBe(1);
    });

    test('Inside the Card component, should render an image according to the item image received by props', () => {
      const image = cardComponent.find("img");
      expect(image.length).toBe(1);
      expect(image.prop("src")).toEqual(mockItem.image);
    });
    
    test('Inside the Card component, should render a title according to the item title received by props', () => {
      const title = cardComponent.findWhere(node => node.type() === 'h3' && node.text() === mockItem.title);
      expect(title.length).toBe(1);
    });

    test('Inside the Card component, should render an address according to the item address received by props', () => {
      const address = cardComponent.findWhere(node => node.type() === 'address' && node.text() === mockItem.address);
      expect(address.length).toBe(1);
    });

    test('Inside the Card component, should render a description according to the item description received by props', () => {
      const description = cardComponent.findWhere(node => node.type() === 'p' && node.text() === mockItem.description);
      expect(description.length).toBe(1);
    });

    test('Inside the Card component, should render a button', () => {
      const button = cardComponent.find('button');
      expect(button.length).toBe(1);
    });
  });

describe('When item received from props is not in the favorite list', () => {
  let wrapper, addToFavoritesButton;
  const emptyFavoritesInitialStateStore =  createMockStore({ favoriteList: []});
  beforeAll(() => {
    wrapper = mountWrapper({store: emptyFavoritesInitialStateStore});
    addToFavoritesButton = wrapper.findWhere(
      node => node.type() === 'button' &&
      node.text() === "Add to favorites"
    );
  });
  
  test('Should render a button with the text "Add to favorites"', () => {
    expect(addToFavoritesButton.exists()).toBe(true);
    expect(addToFavoritesButton.length).toBe(1);
  });
  
  describe('When user clicks on "Add to favorites" button', () => {
    beforeAll(() => {
      addToFavoritesButton.simulate('click');
    });
    test('Should add the rendered item id to the favorites list', () => {
      const currentStateStore = emptyFavoritesInitialStateStore.getState();
      expect(currentStateStore.favoriteList.includes(mockItem.id)).toBe(true);
    });
    test('The button text should change to "Remove from favorites"', () => {
      const removeFromFavoritesButton = wrapper.findWhere(
        node => node.type() === 'button' &&
        node.text() === "Remove from favorites"
      );
      expect(removeFromFavoritesButton.exists()).toBe(true);
    });
  });
});

  describe('When item received from props is included in the favorite list', () => {
    let wrapper, removeFromFavoritesButton;
    const favoritesInitialStateStore =  createMockStore({ favoriteList: ['m1', 'foo']});
    beforeAll(() => {
      wrapper = mountWrapper({store: favoritesInitialStateStore});
      removeFromFavoritesButton = wrapper.findWhere(
        node => node.type() === 'button' &&
        node.text() === "Remove from favorites"
      );
    });
    
    test('Should render a button with the text "Remove from favorites"', () => {
      expect(removeFromFavoritesButton.exists()).toBe(true);
      expect(removeFromFavoritesButton.length).toBe(1);
    });
    
    describe('When user clicks on "Remove from favorites" button', () => {
      beforeAll(() => {
        removeFromFavoritesButton.simulate('click');
      });
      test('Should remove the rendered item id from the favorites list', () => {
        const currentStateStore = favoritesInitialStateStore.getState();
        expect(currentStateStore.favoriteList.includes(mockItem.id)).toBe(false);
      });
      test('The button text should change to "Add to favorites"', () => {
        const addToFavoritesButton = wrapper.findWhere(
          node => node.type() === 'button' &&
          node.text() === "Add to favorites"
        );
        expect(addToFavoritesButton.exists()).toBe(true);
      });
    });
  });
});
