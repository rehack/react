/**
 * 1.该文件的作用是用于创建一个为Count组件服务的reducer,reducer的本质是一个函数
 * 2.reducer函数接收2个参数：之前的状态（prevState）,动作对象（action）
 */

const initState = 0 // 初始状态值
export default function countReducer(prevState=initState, action){
    console.log(prevState,action);
    // 从action对象中获取type,data
    const {type, data} = action;

    // 根据type决定如何加工数据
    switch (type) {
        case 'increment':
            return prevState + data; //有return 可以不需要break
        case 'decrement':
            return prevState - data;
        default:
            return prevState
    }
} 