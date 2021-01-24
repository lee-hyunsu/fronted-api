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

//언마운트...useEffect