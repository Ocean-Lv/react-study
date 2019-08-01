import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './style.css'

let songs =[
    {
        id: 0,
        title: "权御天下",
        singer: "墨韵随步摇/司鼓君",
        selected: true,
        like: false
    },
    {
        id: 1,
        title: "拜无忧",
        singer: "萧忆情Alex",
        selected: false,
        like: true
    },
    {
        id: 2,
        title: "侠客某",
        singer: "祝贺",
        selected: false,
        like: false
    },
    {
        id: 3,
        title: "明月天涯",
        singer: "五音Jw",
        selected: false,
        like: false
    },
    {
        id: 4,
        title: "扇子舞",
        singer: "李常超",
        selected: false,
        like: false
    }
]

export class Index extends Component {
    constructor(){
        super(...arguments);
        this.now = 5;
        this.state = {
            data: songs,
            listState: true
        }
        this.add = this.add.bind(this);
        this.setCheckAll = this.setCheckAll.bind(this);
        this.setCheck = this.setCheck.bind(this);
        this.setlike = this.setlike.bind(this);
        this.remove = this.remove.bind(this);
        this.removeSelected = this.removeSelected.bind(this);
        this.likeSelect = this.likeSelect.bind(this);
        this.canceLikeSelect = this.canceLikeSelect.bind(this);  
        this.showLikeList = this.showLikeList.bind(this);  
    }
    add(title, singer){
        let data = this.state.data;
        data.push({
            id: this.now,
            title: title,
            singer: singer,
            selected: false,
            like: false
        });
        this.now++;
        this.setState({
            data
        })
    }
    isCheckAll(){
        let data = this.state.data;
        for(var i=0; i<data.length; i++) {
            if(!data[i].selected){
                return false;
            }
        }
        return true;
    }
    setCheckAll(checked){
        let data = this.state.data.map((val, index)=>{
            val.selected = checked;
            return val;
        })
        this.setState({
            data
        })
    }
    setCheck(index, checked){
        let data = this.state.data;
        data.forEach((val)=>{
            if(val.id == index){
                val.selected = checked;
            }
        })
        // data[index].selected = checked;
        this.setState({
            data
        })
    }
    setlike(index, checked){
        let data = this.state.data;
        data.forEach((val)=>{
            if(val.id == index){
                val.like = checked;
            }
        })
        // data[index].like = checked;
        this.setState({
            data
        }) 
    }
    remove(index){
        let data = this.state.data.filter((val,i)=>val.id!=index);
        this.setState({
            data
        }) 
    }
    removeSelected(){
        let data = this.state.data.filter((val)=>!val.selected);
        this.setState({
            data
        }) 
    }
    likeSelect(){
        let data = this.state.data.map((val)=>{
            if(val.selected){
                val.like = true
            }
            return val;
        })
        this.setState({
            data
        }) 
    }
    canceLikeSelect(){
        let data = this.state.data.map((val)=>{
            if(val.selected){
                val.like = false
            }
            return val;
        })
        this.setState({
            data
        }) 
    }
    showLikeList(state){
        this.setState({
            listState: state
        }) 
    }
    shouldComponentUpdate(nextProps, nextState){
        if(!nextState.listState) {
            let likeData = nextState.data.filter((val)=>val.like);
            if(!likeData.length){
                this.setState({
                    listState:true
                })
                // return false;
            }
        }
        return true;
    }
    render() {
        let selectedData = this.state.data.filter((val)=>val.selected);
        let likeData = this.state.data.filter((val)=>val.like);

        return (
            <div id="musicApp">
                <Header 
                    add={this.add}>
                </Header>
                <Main data={this.state.listState?this.state.data:likeData}
                    checkAll={this.isCheckAll()} 
                    setCheckAll={this.setCheckAll} 
                    setCheck={this.setCheck} 
                    setlike={this.setlike} 
                    remove={this.remove}
                    >
                </Main>
                <Footer
                    length={this.state.data.length}
                    selectedLength={selectedData.length} 
                    listState={this.state.listState} 
                    likeData = {likeData.length} 
                    removeSelected = {this.removeSelected} 
                    likeSelect= {this.likeSelect} 
                    canceLikeSelect={this.canceLikeSelect} 
                    showLikeList = {this.showLikeList}
                    >
                </Footer>
            </div>
        )
    }
}

export default Index
