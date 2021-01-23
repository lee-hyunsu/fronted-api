import React, {useEffect, useCallback} from 'react';
import Editor from '../../components/write/Editor';
import {initialize} from '../../modules/write';
import {useDispatch} from 'react-redux';

const EditorContainer = () => {
    const dispatch = useDispatch()

    return () => {
        dispatch(initialize());
    };
}

export default EditorContainer;