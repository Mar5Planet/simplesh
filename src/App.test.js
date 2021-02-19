import React from 'react';
import { shallow } from 'enzyme';
import Conversation from './components/Conversation';
import Message from './components/Message';

describe("Conversation", () => {
  it("should render a conversation", () => {
    const wrapper = shallow(<Conversation key={'samplekey'} convo={{'id':1, 'title':'sample', 'created_at':'sample-time'}}/>);
  });
});

describe("Message", () => {
  it("should render a message with it's comments", () => {
    const wrapper = shallow(<Message 
      createThoughts={() => {'test'}} 
      thoughts={[]}
      key={'samplekey'}
      message={{'id':1, 'conversation_id':1,'text':'sample', 'created_at':'2021-02-19T01:54:22.290Z'}}/>);
  });
});
