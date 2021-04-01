import React,{Component} from 'react';
import Title from './Title';
import List from './Lists'
class Main extends Component{
    render(){
        return(<div><Title title={'To Dos'}/> <List tasks={['mow lawn','walk the dog']}/><List tasks={['hose the driveway']}></List></div>)
    }
    }

    export default Main