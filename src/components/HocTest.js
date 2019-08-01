import React from 'react'

//lesson 保证功能单一，不关心数据来源
function Lesson (props) {
    return(
        <div>
            {props.stage} - {props.title}
        </div>
    );
}

// 模拟数据
const lessons = [
    { stage: "React", title: "核心API" },
    { stage: "React", title: "组件化1" },
    { stage: "React", title: "组件化2" }
  ];

//定义高阶组件 WithContext
//包装后的组件换入参数，根据该参数显示数据
const withContent = comp => props => {
    const content = lessons[props.idx];
    return <Comp {...content} />
}

//包装
const LessonWithContent = withContent(Lesson);



export default function HocTest() {
    return (
        <div>
            
        </div>
    )
}
