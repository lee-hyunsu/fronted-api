import React, {useEffect, useCallback} from 'react';
import Editor from '../../components/write/Editor';
import {initialize} from '../../modules/write';
import {useDispatch, useSelector} from 'react-redux';
import { changeField } from '../../modules/auth';


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