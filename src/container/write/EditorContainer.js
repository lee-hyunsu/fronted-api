import React, {useEffect, useCallback} from 'react';
import Editor from '../../components/write/Editor';
import {initialize, changeField} from '../../modules/write';
import {useDispatch, useSelector} from 'react-redux';

const EditorContainer = () => {
    const dispatch = useDispatch();
    const {title, body} = useSelector(({write}) => ({
        title: write.title,
        body: write.body,
    }));

    const onChangeField = useCallback(payload => 
        dispatch(changeField(payload)), [dispatch,]
    );

    useEffect(() => {
        return () => {
            dispatch(initialize());
        };
    }, [dispatch]);
    return <Editor onChangeField={onChangeField} title={title} body={body} />
    }

export default EditorContainer;

//사용자가 writePage를 벗어날 때는 데이터를 초기화해야 함.
//컴포넌트가 언마운트될 때 useEffect로 INITIALIZE액션을 발생시켜서
//리덕스의 write관련 상태를 초기화해준다.